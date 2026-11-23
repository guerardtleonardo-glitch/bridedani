# Chá da Noiva: como colocar o site no ar

O site tem cinco partes: **capa com foto e contagem regressiva**, **detalhes com mapa**, **confirmação de presença**, **lista de presentes** (cozinha e lingerie, sem repetição) e **mural de recados**.

Tudo é gratuito:
- **GitHub Pages** hospeda o site.
- **Google Planilhas + Apps Script** guarda as respostas. A planilha é o seu painel: lá você vê quem confirmou, quem reservou o quê e todos os recados.

---

## 1. Personalizar

Edite só o arquivo `config.js`: nomes, data, local, traje, textos, tamanhos e lista de presentes.

**Fotos:** coloque na pasta `fotos/` com estes nomes:
- `capa.jpg`: foto vertical do casal (aparece no arco da capa)
- `foto1.jpg` até `foto6.jpg`: galeria "Nossa história"

Dica: use fotos de até 1500 px no lado maior para o site carregar rápido no celular.

## 2. Ligar a planilha (presenças, reservas e recados)

1. Crie uma planilha nova em sheets.google.com com o nome "Chá da Noiva".
2. Menu **Extensões > Apps Script**.
3. Apague o conteúdo e cole todo o arquivo `apps-script/Codigo.gs`. Ajuste as linhas do topo (data, hora, local, link do site).
4. Clique em **Salvar**. No seletor de funções escolha `configurar` e clique em **Executar**. Autorize com sua conta Google. Talvez apareça "app não verificado": clique em *Avançado > Acessar* (o app é seu).
5. **Implantar > Nova implantação**, tipo **App da Web**:
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
6. Copie o endereço que termina em `/exec` e cole em `apiUrl` no `config.js`.

Enquanto `apiUrl` estiver vazio, o site funciona em **modo demonstração**: as respostas ficam salvas só no navegador de quem testa.

**No dia a dia:**
- Para apagar um recado do mural, troque a coluna "Mostrar no site" para `FALSE`.
- Para liberar um presente, apague a linha na aba `reservas`.
- Se alterar o script depois, use **Implantar > Gerenciar implantações > Editar > Nova versão** (o link continua o mesmo).

## 3. Lembrete no WhatsApp (véspera)

Na véspera do chá, às 9h, você recebe **um e-mail com um botão de WhatsApp para cada convidada confirmada**, com a mensagem já escrita. Você só toca em cada botão e envia. Para testar agora, rode a função `testarLembrete` no Apps Script.

Além disso, quem confirma presença pode tocar em **Adicionar à agenda**, e o celular dela lembra sozinho.

> **Envio 100% automático:** o WhatsApp não permite envio automático gratuito para várias pessoas. Para isso é preciso a API oficial do WhatsApp Business (via Meta, Twilio ou Z-API), que é paga e exige cadastro da empresa. Se quiser seguir por esse caminho, dá para adaptar a função `enviarLembretes_`.

## 4. Publicar no GitHub Pages

1. Envie todos os arquivos desta pasta para um repositório **público** (ex.: `noivadani`).
2. No repositório: **Settings > Pages > Build and deployment**, Source: **Deploy from a branch**, Branch: **main** / **(root)** e salve.
3. Em 1 ou 2 minutos o site fica em `https://guerardtleonardo-glitch.github.io/noivadani/`.

Atenção: o site e as fotos ficam públicos para quem tiver o link.
