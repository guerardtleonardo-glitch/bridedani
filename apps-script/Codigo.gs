/**
 * Chá da Noiva — back-end gratuito em Google Planilhas + Apps Script.
 * Guarda presenças (RSVP), reservas de presentes e recados,
 * e envia para a noiva, na véspera, os lembretes de WhatsApp prontos para disparar.
 *
 * Como instalar: veja o arquivo LEIA-ME.md (passo 2).
 */

// ====== AJUSTE AQUI ======
const DATA_EVENTO = '2026-12-13';          // mesma data do config.js (ano-mês-dia)
const HORA_EVENTO = '14h';
const LOCAL_EVENTO = 'Salão de festas do Flex 2 — Via Transversal Sul, 200, Osasco';
const NOME_NOIVA = 'Dani';
const LINK_SITE = 'https://guerardtleonardo-glitch.github.io/bridedani/';
// =========================

const ABAS = {
  presencas: ['Data', 'Nome', 'WhatsApp', 'Vai?', 'Quer lembrete?', 'Observação', 'Token'],
  reservas:  ['Data', 'Código', 'Presente', 'Nome', 'Token'],
  recados:   ['Data', 'Nome', 'Mensagem', 'Mostrar no site', 'Token']
};

/** Rode UMA vez pelo editor: cria as abas e agenda o lembrete diário. */
function configurar() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.entries(ABAS).forEach(([nome, cab]) => {
    let sh = ss.getSheetByName(nome);
    if (!sh) sh = ss.insertSheet(nome);
    if (sh.getLastRow() === 0) {
      sh.appendRow(cab);
      sh.getRange(1, 1, 1, cab.length).setFontWeight('bold').setBackground('#e3e9df');
      sh.setFrozenRows(1);
    }
  });
  const padrao = ss.getSheetByName('Página1') || ss.getSheetByName('Sheet1');
  if (padrao && ss.getSheets().length > 1) ss.deleteSheet(padrao);

  ScriptApp.getProjectTriggers().forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('lembreteVespera').timeBased().everyDays(1).atHour(9).create();
  Logger.log('Pronto! Agora vá em Implantar > Nova implantação > App da Web.');
}

// ---------- leitura (site carrega a lista) ----------
function doGet(e) {
  const acao = (e && e.parameter && e.parameter.acao) || 'estado';
  if (acao !== 'estado') return json({ ok: false, erro: 'acao' });
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const reservas = linhas(ss, 'reservas').map(r => ({ id: String(r[1]), nome: String(r[3]) }));
  const recados = linhas(ss, 'recados')
    .filter(r => r[3] !== false && String(r[3]).toUpperCase() !== 'NÃO' && String(r[3]).toUpperCase() !== 'NAO')
    .map(r => ({ em: r[0], nome: String(r[1]), texto: String(r[2]) }))
    .reverse();
  return json({ ok: true, reservas, recados });
}

// ---------- escrita (presença, reserva, recado) ----------
function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return json({ ok: false, erro: 'formato' }); }
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const tk = limpa(d.token, 40);
    if (!tk) return json({ ok: false, erro: 'token' });

    if (d.acao === 'reservar') {
      const sh = ss.getSheetByName('reservas');
      const id = limpa(d.itemId, 10);
      if (linhas(ss, 'reservas').some(r => String(r[1]) === id)) return json({ ok: false, erro: 'reservado' });
      sh.appendRow([new Date(), id, limpa(d.presente || '', 80), limpa(d.nome, 60), tk]);
      return json({ ok: true });
    }

    if (d.acao === 'cancelar') {
      const sh = ss.getSheetByName('reservas');
      const id = limpa(d.itemId, 10);
      const dados = sh.getDataRange().getValues();
      for (let i = dados.length - 1; i >= 1; i--) {
        if (String(dados[i][1]) === id && String(dados[i][4]) === tk) { sh.deleteRow(i + 1); return json({ ok: true }); }
      }
      return json({ ok: false, erro: 'nao_encontrado' });
    }

    if (d.acao === 'rsvp') {
      const sh = ss.getSheetByName('presencas');
      const linha = [new Date(), limpa(d.nome, 80), "'" + limpa(d.whatsapp, 15).replace(/\D/g, ''),
        d.vai === 'sim' ? 'Sim' : 'Não', d.lembrete ? 'Sim' : 'Não', limpa(d.obs, 140), tk];
      const dados = sh.getDataRange().getValues();
      for (let i = 1; i < dados.length; i++) {
        if (String(dados[i][6]) === tk) { sh.getRange(i + 1, 1, 1, linha.length).setValues([linha]); return json({ ok: true }); }
      }
      sh.appendRow(linha);
      return json({ ok: true });
    }

    if (d.acao === 'recado') {
      const sh = ss.getSheetByName('recados');
      const meus = linhas(ss, 'recados').filter(r => String(r[4]) === tk).length;
      if (meus >= 5) return json({ ok: false, erro: 'limite' });
      const nome = limpa(d.nome, 60), texto = limpa(d.texto, 600);
      if (!nome || !texto) return json({ ok: false, erro: 'vazio' });
      sh.appendRow([new Date(), nome, texto, true, tk]);
      return json({ ok: true });
    }

    return json({ ok: false, erro: 'acao' });
  } finally {
    lock.releaseLock();
  }
}

// ---------- lembrete da véspera ----------
/**
 * Roda todo dia às 9h. Na véspera do chá, manda para o seu e-mail
 * a lista de convidadas confirmadas com um botão de WhatsApp para cada uma,
 * já com a mensagem escrita. Você só toca e envia.
 */
function lembreteVespera() {
  const tz = 'America/Sao_Paulo';
  const amanha = Utilities.formatDate(new Date(Date.now() + 864e5), tz, 'yyyy-MM-dd');
  if (amanha !== DATA_EVENTO) return;
  const props = PropertiesService.getScriptProperties();
  if (props.getProperty('lembrete_enviado') === DATA_EVENTO) return;
  enviarLembretes_();
  props.setProperty('lembrete_enviado', DATA_EVENTO);
}

/** Pode rodar manualmente para testar o e-mail a qualquer momento. */
function testarLembrete() { enviarLembretes_(); }

function enviarLembretes_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const lista = linhas(ss, 'presencas').filter(r => r[3] === 'Sim' && r[4] === 'Sim' && String(r[2]).replace(/\D/g, '').length >= 10);
  const linhasHtml = lista.map(r => {
    const nome = String(r[1]), primeiro = nome.split(' ')[0];
    let tel = String(r[2]).replace(/\D/g, '');
    if (tel.length <= 11) tel = '55' + tel;
    const msg = `Oi, ${primeiro}! 💜 Passando para lembrar que amanhã é o meu Chá de Cozinha & Lingerie, às ${HORA_EVENTO}, em ${LOCAL_EVENTO}. Lista de presentes e detalhes: ${LINK_SITE} — Te espero! ${NOME_NOIVA}`;
    const url = 'https://wa.me/' + tel + '?text=' + encodeURIComponent(msg);
    return `<tr><td style="padding:8px 12px">${html(nome)}</td><td style="padding:8px 12px"><a href="${url}" style="background:#25D366;color:#fff;padding:6px 14px;border-radius:16px;text-decoration:none">Enviar no WhatsApp</a></td></tr>`;
  }).join('');
  const corpo = `<p>Amanhã é o seu chá! 🎉 Toque em cada botão para mandar o lembrete já escrito para as convidadas confirmadas (${lista.length}).</p>
    <table style="border-collapse:collapse;font-family:Arial">${linhasHtml || '<tr><td>Nenhuma convidada pediu lembrete ainda.</td></tr>'}</table>`;
  MailApp.sendEmail({ to: Session.getEffectiveUser().getEmail(), subject: 'Lembretes do Chá da Noiva — enviar hoje', htmlBody: corpo });
}

// ---------- utilitários ----------
function linhas(ss, aba) {
  const sh = ss.getSheetByName(aba);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
}
function limpa(v, max) { return String(v == null ? '' : v).replace(/[\u0000-\u0009\u000b-\u001f]/g, ' ').replace(/^[=+\-@]/, "'$&").trim().slice(0, max); }
function html(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
function json(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
