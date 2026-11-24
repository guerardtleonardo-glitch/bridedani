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
    ["lingerie", "Chá de lingerie", "Só para as madrinhas: me surpreendam com uma lingerie fina e sexy. Meus tamanhos estão na lista de presentes."],
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

  notaPresentes: "Sua presença é o meu presente mais especial. Mas, se quiser me mimar, montei uma listinha de cozinha para a nossa casa nova. E as madrinhas ficam com a lingerie da lua de mel, escolhida por elas!",

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
  // Música do site: cole o link do YouTube da música OU o caminho de um arquivo .mp3 na pasta "fotos"
  musica: { youtube: "", arquivo: "", titulo: "" },

  apiUrl: "https://script.google.com/macros/s/AKfycbw7wvfJCNbIUeQWw3ZkYM3oLAAct5c6ZdO-AK1gi-Wd0hp--Tqy4mA3-8JQfDYPXRx3uw/exec",

  // Lista de presentes: [código, lista, nome, preço, observação, link de referência (opcional)]
  itens: [
    ["k01", "cozinha", "Kit 5 panos de copa", "", "Jacquard 100% algodão, 40x65cm.", "https://shopee.com.br/Kit-5-Panos-de-Copa-Jacquard100-Algod%C3%A3o-40x65cm-Alta-Absor%C3%A7%C3%A3o-com-Barra-Xadrez-Decorativa-para-Cozinha-i.1864224393.58221681720"],
    ["k02", "cozinha", "Potes de vidro herméticos (kit com 4)", "", "Quadrados, 520ml, com 4 travas.", "https://shopee.com.br/4-Potes-de-Vidro-520ml-Quadrados-Herm%C3%A9ticos-Marmita-4-Travas-BPA-Free-Cozinha-Organizacao-Jogo-i.997658824.58269904096"],
    ["k03", "cozinha", "Aparelho de jantar 12 peças", "", "Opalino branco martelado: pratos raso, fundo e sobremesa.", "https://shopee.com.br/Aparelho-Jogo-Kit-De-Jantar-12-Pe%C3%A7as-Opalino-Branco-Pratos-Raso-Fundo-Sobremesa-Martelado-i.1693346830.56018808128"],
    ["k04", "cozinha", "Jogo de copos Aruba Nadir (6 peças)", "", "Vidro, 465ml.", "https://shopee.com.br/Jogo-De-Copos-De-Vidro-Com-6-pe%C3%A7as-465ml-Aruba-Nadir-i.1651126398.46621321906"],
    ["k05", "cozinha", "Jogo de xícaras com pires (12 peças)", "", "Roma transparente, 215ml.", "https://shopee.com.br/Jogo-de-X%C3%ADcaras-COM-PIRES-12-Pe%C3%A7as-215ML-ROMA-TRANSPARENTE-Cafe-Cha-Conjunto-de-Mesa-Vidro-i.1040358773.22099690624"],
    ["k06", "cozinha", "Kit 3 assadeiras antiaderentes", "", "Retangulares: 32, 37 e 42cm.", "https://shopee.com.br/Kit-Conjunto-3-Formas-Assadeiras-32-37-e-42cm-Retangular-Antiaderente-Grande-A%C3%A7o-Carbono-Bolo-Assado-i.561341313.58270630320"],
    ["k07", "cozinha", "Escorredor de louças", "", "Com alça de bambu e bandeja coletora.", "https://shopee.com.br/Escorredor-de-Pratos-Loucas-Lou%C3%A7a-Pratos-na-Pia-Cozinha-pratos-com-Al%C3%A7a-de-Bambu-e-Bandeja-Coletora-i.368482733.18999721236"],
    ["k08", "cozinha", "Kit utensílios de silicone (19 peças)", "", "Cabo de madeira, com facas e tábua.", "https://shopee.com.br/KIT-19-Pe%C3%A7as-Conjunto-de-Utens%C3%ADlios-de-Silicone-com-Cabo-de-Madeira-e-Kit-de-Facas-com-T%C3%A1bua-i.1553175352.22098857963"],
    ["k09", "cozinha", "Faqueiro Tramontina Búzios (24 peças)", "", "Aço inox.", "https://shopee.com.br/Faqueiro-Jogo-de-Talheres-B%C3%BAzios-24-pe%C3%A7as-Faqueiro-Tramontina-A%C3%A7o-Inox-Tramontina-utens%C3%ADlios-cozinha-i.868121044.23094652764"],
    ["k10", "cozinha", "Coador de café inox", "", "Não precisa de filtro de papel.", "https://shopee.com.br/Filtro-De-Caf%C3%A9-Inox-Passador-Coador-Ecol%C3%B3gico-N%C3%A3o-Precisa-De-Filtro-De-Papel-i.349256943.18699210271"],
    ["k11", "cozinha", "Kit 6 porta-temperos de vidro", "", "150ml, com suporte e colher de bambu.", "https://shopee.com.br/Kit-6-Porta-Tempero-150ML-Herm%C3%A9ticos-De-Vidro-Com-Suporte-e-Colher-De-Bambu-i.359221633.58260482684"],
    ["k12", "cozinha", "Jogo de facas Tramontina Plenus (6 peças)", "", "Com suporte e cabo preto.", "https://shopee.com.br/Jogo-De-Facas-6-Pe%C3%A7as-Tramontina-Plenus-Com-Suporte-e-Cabo-Preto-i.1191889467.23897365888"],
    ["k13", "cozinha", "Cafeteira elétrica Electrolux ECM10", "", "Inox, 127V.", "https://shopee.com.br/Cafeteira-El%C3%A9trica-Electrolux-ECM10-Efficient-Inox-127V-Cinza-i.1097151802.58201471623"],
    ["k14", "cozinha", "Ferro de passar Electrolux", "", "A vapor e a seco.", "https://shopee.com.br/Ferro-de-Passar-Roupa-a-Vapor-e-a-Seco-Electrolux-i.1929663743.58219289583"],
    ["k15", "cozinha", "Descascador de legumes Tramontina", "", "Aço inox.", "https://shopee.com.br/Descascador-de-Legumes-Tramontina-A%C3%A7o-Inox-Profissional-Resistente-Manual-Ideal-para-Cozinha-i.637480448.43415754695"],
    ["k16", "cozinha", "Mixer Britânia BMX40A", "", "400W.", "https://shopee.com.br/Mixer-Brit%C3%A2nia-BMX40A-400W-Turbo-Pro-Max-i.564780452.47610043309"],
    ["k17", "cozinha", "Espremedor de alho", "", "Aço inox.", "https://shopee.com.br/Espremedor-De-Alho-Amassador-A%C3%A7o-Inox-Triturador-Manual-Cozinha-Cabo-Pl%C3%A1stico-Mor-i.442506479.20998185008"],
    ["k18", "cozinha", "Balde retrátil de silicone", "", "10 litros, dobrável.", "https://shopee.com.br/Balde-Nobre-Retr%C3%A1til-Magico-dobr%C3%A1vel-Flex%C3%ADvel-Silicone-10L-i.408653169.23793711238"],
    ["k19", "cozinha", "Kit 3 porta-retratos", "", "10x15cm, frente em vidro.", "https://shopee.com.br/Kit-3-Porta-Retratos-Com-Molduras-10x15cm-Frente-em-Vidro-e-Fundo-com-Suporte-Para-Fotos-Sala-Quarto-Casamentos-i.1165360419.18198317392"],
    ["k20", "cozinha", "Kit 11 potes de vidro com tampa de bambu", "", "Herméticos, redondos.", "https://shopee.com.br/Kit-11-potes-de-vidro-com-tampa-de-bambu-herm%C3%A9ticos-redondos-T%C3%BCd-i.752849300.22292953138"],
    ["k21", "cozinha", "Lixeira inox com pedal", "", "5 litros, inox escovado.", "https://shopee.com.br/Lixo-Lixeira-5-Litros-Agrantt-Inox-Escovado-Pedal-Balde-Remov%C3%ADvel-Lavabo-Banheiro-Casa-Escrit%C3%B3rio-i.442506479.23598932030"],
    ["k22", "cozinha", "Kit banheiro completo", "", "Com lixeira e detalhes em bambu.", "https://shopee.com.br/Kit-Banheiro-Completo-Lixeira-C-Tampa-Detalhes-Em-Bambu-Luxo-i.511410160.23498052271"],
    ["k23", "cozinha", "Frigideira funda antiaderente Tramontina", "", "24cm.", "https://shopee.com.br/Frigideira-Funda-Antiaderente-Tramontina-24Cm-i.333246733.20111903242"],
    ["k24", "cozinha", "Assadeiras de vidro Marinex com tampa (6 peças)", "", "Tampa vermelha.", "https://shopee.com.br/Conjunto-de-Assadeiras-de-Vidro-Marinex-com-Tampa-Vermelha-6-Pe%C3%A7as-i.822103155.19099257146"],
    ["k25", "cozinha", "Jogo de copos canelados Cameratta", "", "Vidro, 420ml.", "https://shopee.com.br/Jogo-de-Copos-De-Vidro-Canelado-Cameratta-Agua-Suco-420ml-i.958447403.22794310334"],
  ]
};
