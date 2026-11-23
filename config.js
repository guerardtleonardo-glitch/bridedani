/* =========================================================
   PERSONALIZE AQUI — é o único arquivo que você precisa editar
   ========================================================= */
window.CONFIG = {
  noiva: "Danielle",
  noivo: "Leonardo",

  // ⚠️ AJUSTE: data e hora do CHÁ (ano-mês-diaThora:minuto, horário de Brasília)
  dataISO: "2026-12-13T14:00:00-03:00",
  duracaoHoras: 4,
  local: "Salão de festas · Flex 2",
  endereco: "Via Transversal Sul, 200 · Flex 2 · Osasco, SP",
  cidade: "Osasco · SP",

  // Casamento (aparece no rodapé)
  casamento: "20 · 03 · 2027 · Villa Castanieri",
  casamentoISO: "2027-03-20T15:30:00-03:00", // data e hora do casamento (contagem no final do site)
  casamentoLocal: "Villa Castanieri · Mogi das Cruzes",

  // Faixa que passa rolando no topo
  faixa: ["A Dani vai casar!", "Chá de Cozinha & Lingerie", "The Bride Club", "Madrinhas de vermelho", "Convidadas de rosa"],

  // Até quando confirmar presença
  confirmarAte: "6 de dezembro",

  // Dress code
  dressCode: {
    madrinhas: "Madrinhas vão de vermelho",
    convidadas: "Convidadas vão de rosa",
    obs: "Qualquer tom vale: do rosinha bebê ao pink, do cereja ao vinho. A noiva vai de branco, claro!"
  },

  // Carta de boas-vindas (cada item vira um parágrafo)
  carta: [
    "Estou tão feliz em reunir as mulheres mais especiais da minha vida para celebrar esta nova fase. Cada uma de vocês fez parte da minha história e do caminho até aqui.",
    "Preparei este cantinho com muito carinho: aqui você confirma presença, escolhe um presente para a nossa casa ou para a lua de mel e deixa um recadinho para mim."
  ],

  // Cartões de detalhes (ícones: bule, vestido, presente, lingerie, carro, tacas)
  detalhes: [
    ["laco", "O chá", "Recepção a partir das 14h. Chegue um pouquinho antes para aproveitarmos cada momento juntas."],
    ["vestido", "O que vestir", "Madrinhas de vermelho, convidadas de rosa. Pode abusar dos laços!"],
    ["presente", "Chá de cozinha", "Para todas as convidadas: itens para a nossa casa nova. Reserve o seu na lista para ninguém repetir."],
    ["lingerie", "Chá de lingerie", "Só para as madrinhas: um mimo para a lua de mel. Meus tamanhos estão na lista."],
    ["carro", "Estacionamento", "Há vagas na rua, ao redor do local."],
    ["tacas", "Brincadeiras", "Teremos brincadeiras, brindes e muitas risadas. Venha preparada!"]
  ],

  programacao: [
    ["14:00", "Chegada das convidadas"],
    ["14:30", "Chá da tarde"],
    ["15:30", "Brincadeiras"],
    ["16:30", "Abertura dos presentes"],
    ["17:30", "Brinde final"]
  ],

  notaPresentes: "Sua presença é o meu presente mais especial. Mas, se quiser me mimar, montei duas listinhas: uma de cozinha, para a nossa casa nova, e outra de lingerie, para a lua de mel.",

  // Apelidos (aparecem na seção "Nós dois" e no carimbo)
  apelidoNoiva: "Dani",
  apelidoNoivo: "Léo",

  // Fotos: coloque os arquivos na pasta "fotos" com estes nomes. Cada foto tem uma legenda escrita à mão.
  // Fotos que ainda não existem mostram um espaço "sua foto aqui".
  fotos: {
    capa: "fotos/local-aquarela.jpg",
    capaHero: "fotos/capa-noiva-larga.jpg",   // foto da capa no computador (horizontal)
    capaHeroCelular: "fotos/capa-noiva.jpg",  // foto da capa no celular (vertical)
    capaPolaroides: [["fotos/noiva1.jpg", "a noiva!"], ["fotos/casal1.jpg", "Dani & Léo"]],
    carta: [["fotos/casal-quadrado.jpg", "nós, em aquarela"], ["fotos/amigas1.jpg", "minhas meninas"]],
    noiva: [
      ["fotos/noiva1.jpg", "essa sou eu"],
      ["fotos/noiva2.jpg", "versão mini"],
      ["fotos/noiva3.jpg", "rindo de tudo"],
      ["fotos/noiva4.jpg", "minha melhor fase"],
      ["fotos/noiva5.jpg", "com as amigas"],
      ["fotos/noiva6.jpg", "quase noiva"]
    ],
    casalLateral: "fotos/casal-lateral.jpg", // foto grande ao lado de "nós dois"
    casalGrande: ["fotos/casal1.jpg", "o dia do pedido!"],
    casal: [["fotos/casal2.jpg", "o começo de tudo"], ["fotos/casal3.jpg", "nossa primeira viagem"], ["fotos/casal4.jpg", "dupla imbatível"]],
    filme: ["fotos/casal5.jpg", "fotos/casal6.jpg", "fotos/casal7.jpg", "fotos/casal8.jpg", "fotos/casal9.jpg", "fotos/casal10.jpg", "fotos/casal-aquarela.jpg"],
    tira: ["fotos/foto2.jpg", "fotos/foto3.jpg", "fotos/foto4.jpg", "fotos/foto5.jpg"],
    programacao: [["fotos/foto6.jpg", "chá da tarde"], ["fotos/foto7.jpg", "brincadeiras"], ["fotos/foto8.jpg", "brinde!"]],
    local: "fotos/casal-aquarela.jpg"
  },

  // Recadinhos escritos à mão espalhados pelo site
  rabiscos: {
    capa: "save the date!",
    noiva: "essa sou eu!",
    casal: "a gente!",
    presentes: "psiu… a lingerie é surpresa pro Léo!",
    presenca: "não me deixa esperando!",
    recados: "pode caprichar!"
  },
  textoNoiva: "Um pouquinho de mim antes do grande dia: as fases, as risadas e as pessoas que me trouxeram até aqui.",
  textoCasal: "Do primeiro encontro até o pedido, cada capítulo nos trouxe até aqui. Agora falta pouquinho para o sim, debaixo da árvore onde vamos nos casar!",
  fotosPretoEBranco: true, // fotos reais em preto e branco, como no modelo (aquarelas ficam coloridas)

  medidas: { "Sutiã": "44 ou 45", "Calcinha": "P", "Camisola / pijama": "P" },

  whatsappContato: "", // só números com DDD, ex.: "11999998888"

  // Endereço do app da Web do Google Apps Script (LEIA-ME, passo 2). Vazio = modo demonstração.
  apiUrl: "",

  // Lista de presentes: [código, lista, nome, faixa de preço, observação]
  itens: [
    ["c01","cozinha","Jogo de panelas antiaderente","R$ 200–400","5 peças, de preferência para fogão de indução."],
    ["c02","cozinha","Air fryer","R$ 300–500","A partir de 4 litros."],
    ["c03","cozinha","Liquidificador","R$ 120–250",""],
    ["c04","cozinha","Batedeira","R$ 150–300","Planetária ou portátil."],
    ["c05","cozinha","Jogo de facas com cepo","R$ 100–200",""],
    ["c06","cozinha","Tábuas de corte (kit)","R$ 50–100","Bambu ou polietileno."],
    ["c07","cozinha","Aparelho de jantar","R$ 200–400","Para 6 pessoas, tons neutros."],
    ["c08","cozinha","Jogo de copos","R$ 50–100","6 unidades."],
    ["c09","cozinha","Taças de vinho","R$ 60–120","6 unidades."],
    ["c10","cozinha","Faqueiro","R$ 100–250","Para 6 pessoas."],
    ["c11","cozinha","Potes herméticos de vidro","R$ 80–150","Kit com tamanhos variados."],
    ["c12","cozinha","Assadeiras de vidro","R$ 70–140","Kit com 3."],
    ["c13","cozinha","Formas de bolo","R$ 50–100","Redonda e com furo."],
    ["c14","cozinha","Escorredor de louça","R$ 60–150",""],
    ["c15","cozinha","Panos de prato","R$ 30–60","Kit com 5 ou mais."],
    ["c16","cozinha","Jogo americano","R$ 40–90","4 ou 6 unidades."],
    ["c17","cozinha","Garrafa térmica","R$ 50–120","1 litro."],
    ["c18","cozinha","Sanduicheira / grill","R$ 80–150",""],
    ["c19","cozinha","Utensílios de silicone","R$ 50–100","Espátula, concha e pegador."],
    ["c20","cozinha","Ralador e espremedor","R$ 30–70",""],
    ["c21","cozinha","Porta-temperos giratório","R$ 50–100",""],
    ["c22","cozinha","Chaleira elétrica","R$ 80–150",""],
    ["c23","cozinha","Mixer de mão","R$ 100–200",""],
    ["c24","cozinha","Toalha de mesa","R$ 50–120","Para mesa de 6 lugares."],
    ["l01","lingerie","Camisola de cetim","R$ 60–150","Veja meus tamanhos acima."],
    ["l02","lingerie","Robe de cetim","R$ 70–160",""],
    ["l03","lingerie","Conjunto de renda","R$ 60–150",""],
    ["l04","lingerie","Body rendado","R$ 60–140",""],
    ["l05","lingerie","Baby-doll","R$ 40–100",""],
    ["l06","lingerie","Pijama de cetim","R$ 70–150","Calça ou short."],
    ["l07","lingerie","Meia 7/8 com cinta-liga","R$ 40–90",""],
    ["l08","lingerie","Kit de calcinhas","R$ 40–90","Algodão ou microfibra."],
    ["l09","lingerie","Conjunto branco para a lua de mel","R$ 80–180",""],
    ["l11","lingerie","Kit spa / óleo de massagem","R$ 50–120",""],
    ["l12","lingerie","Necessaire de viagem","R$ 40–90","Para a lua de mel."]
  ]
};
