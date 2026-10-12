// site/mapa-da-virada-rs/lib/prompt.js
var _fmt = new Intl.NumberFormat("pt-BR");
var _pct = (x, d = 1) => (x * 100).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d }) + "%";
var FATOS = [
  "2\xBA turno: domingo, 25 de outubro de 2026, das 8h \xE0s 17h (hor\xE1rio de Bras\xEDlia).",
  "Levar documento oficial com foto ou o e-T\xEDtulo.",
  "O local de vota\xE7\xE3o \xE9 o mesmo do 1\xBA turno; d\xE1 para consultar no app e-T\xEDtulo ou no site do TSE.",
  "Quem n\xE3o votou no 1\xBA turno pode votar no 2\xBA turno normalmente.",
  "No Rio Grande do Sul, a \xFAnica escolha no 2\xBA turno \xE9 para Presidente: Lula (13) ou Fl\xE1vio Bolsonaro (22).",
  "Quem n\xE3o puder votar deve justificar pelo app e-T\xEDtulo (no dia ou at\xE9 60 dias depois)."
];
var NACIONAL = {
  flavio: 56104503,
  pFlavio: 0.4703,
  lula: 53879538,
  pLula: 0.4516,
  abst: 33469244,
  aptos: 158745502,
  gap: 2224965,
  outros: [
    { nome: "Augusto Cury (Avante)", votos: 3448569, p: 0.0289, posicao: "neutro no 2\xBA turno, pediu reconcilia\xE7\xE3o nacional" },
    { nome: "Renan Santos (Miss\xE3o)", votos: 2675887, p: 0.0224, posicao: "neutro, criticou os dois finalistas" },
    { nome: "Ronaldo Caiado (PSD)", votos: 2605148, p: 0.0218, posicao: "declarou apoio 'integral' a Fl\xE1vio em 6/10 e disse que daria indulto a Jair Bolsonaro" },
    { nome: "Romeu Zema (Novo)", votos: 326488, p: 27e-4, posicao: "declarou apoio a Fl\xE1vio em 5/10" }
  ]
};
var DOSSIE = [
  {
    id: "darkhorse",
    cat: "escandalos",
    lado: "flavio",
    titulo: "Investigado no STF (caso Dark Horse)",
    texto: "Em 22/7/2026, o ministro Andr\xE9 Mendon\xE7a, do STF, a pedido da PF e com aval da PGR, incluiu Fl\xE1vio como investigado por suspeita de corrup\xE7\xE3o, lavagem de dinheiro e evas\xE3o de divisas. A suspeita \xE9 que R$ 61 milh\xF5es do banqueiro Daniel Vorcaro, do Banco Master, foram liberados a pedido dele para financiar o filme sobre o pai. H\xE1 \xE1udio dele pedindo o dinheiro; ele n\xE3o nega que seja ele e diz que n\xE3o h\xE1 nada de errado. Ele tamb\xE9m admitiu ter se encontrado com Vorcaro depois da primeira pris\xE3o do banqueiro. Se eleito, segundo constitucionalistas, a investiga\xE7\xE3o pode ficar suspensa durante o mandato (art. 86 da Constitui\xE7\xE3o).",
    status: "investigado formalmente; ainda sem den\xFAncia; ele nega irregularidade",
    fonte: "Ag\xEAncia Brasil, 11/9/2026; Poder360, 19/5/2026; Di\xE1rio Carioca, 30/9/2026",
    url: "https://agenciabrasil.ebc.com.br/justica/noticia/2026-09/mendonca-incluiu-flavio-bolsonaro-como-investigado-no-caso-dark-horse"
  },
  {
    id: "mansao",
    cat: "escandalos",
    lado: "flavio",
    titulo: "Mans\xE3o de R$ 6 milh\xF5es e o BRB",
    texto: "A PF apura o financiamento de R$ 3,1 milh\xF5es que o BRB deu em 2021 para Fl\xE1vio comprar uma mans\xE3o de R$ 6 milh\xF5es em Bras\xEDlia, a juros de 3,71% ao ano, abaixo da m\xE9dia do banco naquele ano (4,85%). O empr\xE9stimo \xE9 um dos focos do inqu\xE9rito sobre o Banco Master e o BRB. Fl\xE1vio diz que tudo foi legal.",
    status: "PF apura o empr\xE9stimo; sem den\xFAncia; ele diz que foi legal",
    fonte: "Midiamax, 2/10/2026",
    url: "https://midiamax.com.br/brasil/2026/pf-investiga-emprestimo-brb-flavio-bolsonaro-compra-mansao-r-6-milhoes/"
  },
  {
    id: "rachadinha",
    cat: "escandalos",
    lado: "flavio",
    titulo: "Rachadinha na Alerj",
    texto: "O MP-RJ denunciou Fl\xE1vio por peculato, lavagem e organiza\xE7\xE3o criminosa: segundo a den\xFAncia, R$ 6 milh\xF5es foram desviados da Alerj com sal\xE1rios de funcion\xE1rios repassados ao ex-assessor Fabr\xEDcio Queiroz. O caso foi arquivado em 2022 porque o STJ anulou as provas, n\xE3o porque ele foi inocentado. O m\xE9rito nunca foi julgado. Ele nega.",
    status: "den\xFAncia arquivada ap\xF3s anula\xE7\xE3o de provas; nunca julgada no m\xE9rito; ele nega",
    fonte: "Poder360, 27/2/2025; Estado de Minas, 6/4/2026",
    url: "https://www.poder360.com.br/poder-justica/gilmar-nega-pedido-para-reabrir-acao-contra-flavio-por-rachadinha/"
  },
  {
    id: "emendair",
    cat: "escandalos",
    lado: "flavio",
    titulo: "Emenda que ajudaria o pr\xF3prio escrit\xF3rio",
    texto: "Em novembro de 2025, Fl\xE1vio apresentou emenda para tirar da nova tributa\xE7\xE3o os lucros de sociedades de profissionais liberais. Ele \xE9 dono de uma sociedade individual de advocacia, que poderia se beneficiar. Ele disse que n\xE3o \xE9 razo\xE1vel tributar o trabalho dos profissionais liberais.",
    status: "emenda apresentada; regra geral que poderia beneficiar o escrit\xF3rio dele",
    fonte: "SBT News",
    url: "https://sbtnews.sbt.com.br/noticia/politica/flavio-propos-isencao-no-ir-que-beneficiaria-escritorio-dele"
  },
  {
    id: "faltas",
    cat: "escandalos",
    lado: "flavio",
    titulo: "Faltas no Senado",
    texto: "At\xE9 15 de julho de 2026, Fl\xE1vio n\xE3o votou em 15 das 54 vota\xE7\xF5es nominais do Senado no ano, sem justificativa registrada, segundo relat\xF3rios oficiais compilados pelo SBT News. A assessoria diz que ele atua de forma ativa.",
    status: "levantamento jornal\xEDstico com dados oficiais; ele contesta",
    fonte: "SBT News, 16/7/2026",
    url: "https://sbtnews.sbt.com.br/colunas/coluna-do-ranier/flavio-bolsonaro-lidera-faltas-a-votacoes-no-senado-em-2026"
  },
  {
    id: "aposentadoria",
    cat: "bolso",
    lado: "flavio",
    titulo: "Aposentadoria e BPC s\xF3 pela infla\xE7\xE3o",
    texto: "Segundo a Folha, a equipe econ\xF4mica de Fl\xE1vio estudou corrigir aposentadorias e BPC s\xF3 pela infla\xE7\xE3o, sem o aumento real do sal\xE1rio m\xEDnimo, e fazer o mesmo com o m\xEDnimo obrigat\xF3rio para sa\xFAde e educa\xE7\xE3o. As contas da equipe falam em R$ 1,1 trilh\xE3o a menos para aposentados e BPC em dez anos e R$ 800 bilh\xF5es a menos para sa\xFAde e educa\xE7\xE3o. Fl\xE1vio nega, chama de 'fake news do PT' e diz: 'Aposentado, fique tranquilo'.",
    status: "estudo interno revelado pela Folha; Fl\xE1vio nega",
    fonte: "Folha via Viva, 8/10/2026",
    url: "https://viva.com.br/politica/reajuste-de-aposentadorias-e-bpc-vai-mudar-com-flavio-bolsonaro-entenda.html"
  },
  {
    id: "pec300",
    cat: "bolso",
    lado: "flavio",
    titulo: "PEC de corte de R$ 300 bilh\xF5es",
    texto: "Segundo a CNN, a equipe de Fl\xE1vio planeja uma 'PEC da Transi\xE7\xE3o' com corte de cerca de R$ 300 bilh\xF5es, com medidas classificadas internamente como leves, m\xE9dias e duras, incluindo desvincular recursos da sa\xFAde e da educa\xE7\xE3o. A campanha desautorizou o que foi atribu\xEDdo a fontes an\xF4nimas.",
    status: "reportagem com fontes an\xF4nimas; campanha desautoriza",
    fonte: "CNN Brasil, 25/9/2026",
    url: "https://www.cnnbrasil.com.br/blogs/caio-junqueira/eleicoes/flavio-planeja-pec-da-transicao-com-corte-de-gastos-de-r-300-bilhoes/"
  },
  {
    id: "previdencia",
    cat: "bolso",
    lado: "flavio",
    titulo: "Nova reforma da Previd\xEAncia",
    texto: "Rog\xE9rio Marinho, coordenador da campanha e respons\xE1vel pela reforma da Previd\xEAncia de 2019, disse \xE0 Folha: 'O modelo est\xE1 estourando. S\xF3 posso dizer que a gente vai ter que revisitar a Previd\xEAncia'. Fl\xE1vio votou a favor da reforma de 2019. No governo do pai dele, o sal\xE1rio m\xEDnimo ficou sem aumento real de 2020 a 2022.",
    status: "declara\xE7\xE3o p\xFAblica; voto registrado no Senado",
    fonte: "Sindip\xFAblicos/Folha; Ag\xEAncia Senado, 22/10/2019; CUT",
    url: "https://www12.senado.leg.br/noticias/materias/2019/10/22/reforma-da-previdencia-como-votaram-os-senadores-com-relacao-ao-texto-principal-em-segundo-turno"
  },
  {
    id: "saudeedu",
    cat: "bolso",
    lado: "flavio",
    titulo: "Sa\xFAde, creche e universidade",
    texto: "O plano de Fl\xE1vio tira o ensino superior do MEC e passa para o Minist\xE9rio da Ci\xEAncia e Tecnologia, prop\xF5e voucher para pagar creche privada em vez de ampliar a creche p\xFAblica e prev\xEA compartilhar dados de pacientes do SUS com hospitais privados.",
    status: "trechos do plano de governo registrado no TSE",
    fonte: "Ag\xEAncia Brasil, set/2026",
    url: "https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/flavio-bolsonaro-propoe-enxugar-estado-e-endurecer-acoes-de-seguranca"
  },
  {
    id: "moradia",
    cat: "bolso",
    lado: "flavio",
    titulo: "Volta do Casa Verde e Amarela",
    texto: "O plano quer retomar o Casa Verde e Amarela, do governo Bolsonaro, que parou de contratar casas para a faixa mais pobre (renda at\xE9 R$ 1,8 mil). Hoje, no Minha Casa Minha Vida, fam\xEDlias do Bolsa Fam\xEDlia e do BPC podem receber o im\xF3vel sem pagar presta\xE7\xE3o. O plano tamb\xE9m quer retomar privatiza\xE7\xF5es e cortar dez minist\xE9rios sem dizer quais.",
    status: "plano de governo; dados do programa anterior",
    fonte: "Ag\xEAncia Brasil, set/2026; Congresso em Foco, 2020; Di\xE1rio do Com\xE9rcio",
    url: "https://congressoemfoco.com.br/noticia/23086/substituto-do-minha-casa-minha-vida-nao-atende-aos-mais-carentes"
  },
  {
    id: "6x1",
    cat: "trabalho",
    lado: "flavio",
    titulo: "Contra o fim da escala 6x1",
    texto: "A C\xE2mara aprovou o fim da 6x1 e as 40 horas sem corte de sal\xE1rio por 461 a 19. Fl\xE1vio chamou de 'oportunista' e disse: 'Quem quer trabalhar mais vai trabalhar mais'. Em 6/10 tentou esvaziar o Senado para impedir o in\xEDcio da discuss\xE3o e n\xE3o conseguiu (49 senadores deram presen\xE7a). Com Rog\xE9rio Marinho, apresentou a PEC 12/2026, que mant\xE9m a 6x1 e cria o trabalho por hora.",
    status: "vota\xE7\xE3o, declara\xE7\xF5es e PEC p\xFAblicas",
    fonte: "Poder360, 6/10/2026; Plural; InfoMoney, 27/5/2026",
    url: "https://www.poder360.com.br/poder-eleicoes-2026/flavio-critica-fim-da-escala-6-x-1-e-defende-jornada-flexivel/"
  },
  {
    id: "planotrab",
    cat: "trabalho",
    lado: "flavio",
    titulo: "O plano para quem trabalha",
    texto: "O plano fala em contrato 'com menor custo na folha' para jovens de 18 a 24 anos, em modalidade 'mais atrativa' para empresas contratarem quem tem mais de 50 anos, no 'negociado sobre o legislado' (o acordo com o patr\xE3o valendo mais que a lei) e tem uma se\xE7\xE3o chamada 'O trabalhador em primeiro lugar, n\xE3o o sindicato'.",
    status: "trechos do plano citados pela Funda\xE7\xE3o Perseu Abramo",
    fonte: "Funda\xE7\xE3o Perseu Abramo; Forbes, out/2026",
    url: "https://fpabramo.org.br/o-mundo-do-trabalho-no-plano-de-governo-do-candidato-flavio-bolsonaro-precarizacao-vulnerabilidade-e-ataque-aos-sindicatos/"
  },
  {
    id: "revogaco",
    cat: "trabalho",
    lado: "flavio",
    titulo: "Revoga\xE7o sem dizer o qu\xEA",
    texto: "O plano promete uma 'ampla revis\xE3o normativa infralegal' nas \xE1reas trabalhista e previdenci\xE1ria e um 'revoga\xE7o regulat\xF3rio', sem dizer quais regras cairiam. S\xE3o regras desse tipo que hoje garantem, por exemplo, aux\xEDlio para gestante de alto risco sem car\xEAncia e a prote\xE7\xE3o contra adoecimento mental no trabalho (NR-1). Ele tamb\xE9m quer retomar a reforma administrativa do governo do pai, que acabava com a estabilidade da maioria dos futuros servidores.",
    status: "trechos do plano; os exemplos de regras s\xE3o an\xE1lise da imprensa",
    fonte: "ICL Not\xEDcias, 7/10/2026; Exame; SIMPE-RS",
    url: "https://iclnoticias.com.br/plano-flavio-bolsonaro-ameaca-gestantes/"
  },
  {
    id: "urnas",
    cat: "democracia",
    lado: "flavio",
    titulo: "Mentira sobre as urnas",
    texto: "Em 21/7/2026, num encontro com diplomatas estrangeiros, Fl\xE1vio disse que as urnas brasileiras teriam 'a mesma origem' da empresa venezuelana Smartmatic. A Ag\xEAncia Lupa checou: \xE9 falso. Foi uma reuni\xE3o com embaixadores atacando as urnas que deixou o pai dele ineleg\xEDvel.",
    status: "declara\xE7\xE3o checada como falsa",
    fonte: "Ag\xEAncia Lupa, 24/7/2026; Jota",
    url: "https://www.agencialupa.org/reportagem/2026/07/24/ataques-de-flavio-bolsonaro-as-urnas-geram-pico-de-mencoes-a-fraude-eleitoral-em-redes/"
  },
  {
    id: "indulto",
    cat: "democracia",
    lado: "flavio",
    titulo: "Anistia e indulto para o pai",
    texto: "Jair Bolsonaro foi condenado pelo STF a 27 anos e 3 meses por liderar a trama golpista. Fl\xE1vio defende anistia 'ampla, geral e irrestrita' para 'libertar Jair Messias Bolsonaro' e todos os condenados pelo golpe, e promete indulto se a anistia n\xE3o passar. Caiado, que fechou apoio a ele, tamb\xE9m promete indulto.",
    status: "declara\xE7\xF5es p\xFAblicas; condena\xE7\xE3o definitiva do STF",
    fonte: "Euronews, 29/8/2026; Aos Fatos; Viva, 6/10/2026",
    url: "https://pt.euronews.com/2026/08/29/filho-de-bolsonaro-insiste-que-julgamento-do-pai-foi-uma-farsa-e-que-lhe-concedera-um-indu"
  },
  {
    id: "stf",
    cat: "democracia",
    lado: "flavio",
    titulo: "Contra o STF",
    texto: "O plano prop\xF5e estreitar as regras para entidades e partidos proporem a\xE7\xF5es que derrubam leis inconstitucionais (ADIs, ADCs e ADPFs). Em 8/10, depois que Moraes mandou Eduardo Bolsonaro cumprir pena por coa\xE7\xE3o, por articular san\xE7\xF5es estrangeiras contra autoridades brasileiras, Fl\xE1vio pediu a ren\xFAncia de Moraes e disse que j\xE1 h\xE1 50 senadores a favor de impeachment de ministros do STF.",
    status: "plano de governo e declara\xE7\xF5es p\xFAblicas",
    fonte: "Exame; Gazeta do Povo, 8/10/2026",
    url: "https://www.gazetadopovo.com.br/republica/flavio-bolsonaro-pede-renuncia-de-moraes-apos-decisao-contra-eduardo/"
  },
  {
    id: "preco",
    cat: "democracia",
    lado: "flavio",
    titulo: "'Tenho um pre\xE7o'",
    texto: "Em dezembro de 2025, Fl\xE1vio disse que havia a possibilidade de n\xE3o ir at\xE9 o fim com a candidatura e que tinha 'um pre\xE7o' para isso. Dias depois disse que o pre\xE7o seria a liberdade do pai e, por fim, que n\xE3o havia pre\xE7o.",
    status: "declara\xE7\xF5es p\xFAblicas",
    fonte: "Al Jazeera, 10/12/2025",
    url: "https://www.aljazeera.com/news/2025/12/10/flavio-bolsonaro-retracts-suggestion-of-a-price-to-end-2026-election-bid"
  },
  {
    id: "eua",
    cat: "eua",
    lado: "flavio",
    titulo: "Alinhado aos EUA de Trump",
    texto: "Na CPAC, nos EUA, Fl\xE1vio apresentou o Brasil como 'a solu\xE7\xE3o' para os americanos dependerem menos da China em minerais cr\xEDticos e terras raras. Numa audi\xEAncia em Washington sobre o tarifa\xE7o de Trump contra produtos brasileiros, segundo a imprensa, n\xE3o contestou as justificativas e s\xF3 pediu adiamento por ser o 'pior momento'. E disse que quer, 'com muita honra', colocar o Brasil no Escudo das Am\xE9ricas, a coaliz\xE3o militar criada por Trump.",
    status: "declara\xE7\xF5es p\xFAblicas e relatos de imprensa",
    fonte: "Band, 30/3/2026; Intercept/BBC, jul/2026; Vermelho, 9/10/2026",
    url: "https://www.band.com.br/radio-bandeirantes/noticias/flavio-bolsonaro-discute-terras-raras-e-minerais-nos-eua-202603301720"
  },
  {
    id: "ir",
    cat: "lula",
    lado: "lula",
    titulo: "Imposto de Renda zero at\xE9 R$ 5 mil",
    texto: "Com a lei sancionada por Lula em novembro de 2025, quem ganha at\xE9 R$ 5 mil por m\xEAs deixou de pagar Imposto de Renda. No RS s\xE3o cerca de 790 mil trabalhadores isentos e outros 412 mil, entre R$ 5 mil e R$ 7.350, com desconto.",
    status: "lei em vigor; dados da Receita Federal",
    fonte: "Brasil 61 / Receita Federal, 3/4/2026",
    url: "https://brasil61.com/n/porto-alegre-rs-trabalhadores-da-regiao-metropolitana-sao-beneficiados-com-o-imposto-de-renda-zero-mfaz260004"
  },
  {
    id: "emprego",
    cat: "lula",
    lado: "lula",
    titulo: "Menor desemprego da hist\xF3ria",
    texto: "O desemprego caiu para 5,4% no 2\xBA trimestre de 2026, o menor da s\xE9rie do IBGE, iniciada em 2012. No RS a m\xE9dia de 2025 foi 4,0%. No governo de Jair Bolsonaro a m\xE9dia anual ficou entre 9,6% e 14,0% (com a pandemia em 2020 e 2021).",
    status: "dados oficiais do IBGE (PNAD Cont\xEDnua)",
    fonte: "IBGE; O Povo, 30/7/2026",
    url: "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/42703-pnad-continua-taxas-medias-anuais-de-desocupacao-sao-as-menores-da-serie-em-14-unidades-da-federacao.html"
  },
  {
    id: "enchentes",
    cat: "lula",
    lado: "lula",
    titulo: "Reconstru\xE7\xE3o do RS",
    texto: "Depois das enchentes de 2024, o governo federal destinou cerca de R$ 90 bilh\xF5es ao RS e aos munic\xEDpios, incluindo o Aux\xEDlio Reconstru\xE7\xE3o de R$ 5,1 mil por fam\xEDlia desalojada em 478 cidades.",
    status: "n\xFAmeros informados pela Casa Civil",
    fonte: "Correio da Manh\xE3, mai/2026",
    url: "https://www.correiodamanha.com.br/nacional/sul/2026/05/284088-rs-verba-de-auxilio-reconstrucao-chega-a-94.html"
  },
  {
    id: "impostos30",
    cat: "lula",
    lado: "lula",
    titulo: "A verdade sobre os '30 impostos'",
    texto: "A conta dos '30 aumentos de tributos' est\xE1 no pr\xF3prio plano do Fl\xE1vio. A maior parte mira quem tem muito: fundos exclusivos e offshores de super-ricos (lei de dezembro de 2023), casas de apostas e o imposto m\xEDnimo de quem ganha mais de R$ 50 mil por m\xEAs (141 mil pessoas, 0,13% dos contribuintes), que banca o IR zero de 10 milh\xF5es de trabalhadores. Teve aumento que chegou em todo mundo, como a volta do imposto federal da gasolina em 2023, depois do corte tempor\xE1rio de 2022, e a 'taxa das blusinhas', que Lula zerou em setembro de 2026 para compras at\xE9 US$ 50. O plano do Fl\xE1vio promete rever 'a majora\xE7\xE3o de impostos efetuada pelo atual governo', sem dizer quais.",
    status: "plano de governo do Fl\xE1vio (p. 29, 30 e 68); leis publicadas; dados da Fazenda",
    fonte: "Plano de governo de Fl\xE1vio (TSE); O Povo, 18/3/2025; Diario de Pernambuco, 10/9/2026; Poder360",
    url: "https://mais.opovo.com.br/jornal/economia/2025/03/18/com-isencao-de-rs-5-mil-10-milhoes-de-pessoas-deixarao-de-pagar-o-imposto-de-renda.html"
  },
  {
    id: "cestabasica",
    cat: "lula",
    lado: "lula",
    titulo: "Imposto zero na cesta b\xE1sica",
    texto: "A regulamenta\xE7\xE3o da reforma tribut\xE1ria zera o imposto de 15 itens da cesta b\xE1sica (arroz, feij\xE3o, leite, caf\xE9, p\xE3o, massas, farinhas, \xF3leo, a\xE7\xFAcar, entre outros) a partir de 2027 e cria o cashback: devolu\xE7\xE3o de imposto para cerca de 73 milh\xF5es de pessoas do Cadastro \xDAnico, incluindo 100% da CBS no botij\xE3o de g\xE1s.",
    status: "lei complementar da reforma tribut\xE1ria",
    fonte: "Not\xEDcias Agr\xEDcolas / Ag\xEAncia C\xE2mara",
    url: "https://www.noticiasagricolas.com.br/noticia/375424"
  },
  {
    id: "pobreza",
    cat: "lula",
    lado: "lula",
    titulo: "Menor pobreza da hist\xF3ria",
    texto: "Em 2024, a pobreza caiu para 23,1% da popula\xE7\xE3o e a extrema pobreza para 3,5%, os menores n\xEDveis da s\xE9rie do IBGE, iniciada em 2012. Em um ano, 8,6 milh\xF5es de pessoas sa\xEDram da pobreza e 1,9 milh\xE3o sa\xEDram da mis\xE9ria.",
    status: "IBGE, S\xEDntese de Indicadores Sociais 2025",
    fonte: "Viva / IBGE, dez/2025",
    url: "https://viva.com.br/noticias/em-um-ano-105-milhoes-deixaram-a-pobreza-e-a-miseria-mostra-ibge.html"
  },
  {
    id: "renda",
    cat: "lula",
    lado: "lula",
    titulo: "Renda recorde",
    texto: "A renda m\xE9dia por pessoa nos lares brasileiros bateu recorde em 2025: R$ 2.264 por m\xEAs, 6,9% acima de 2024 j\xE1 descontada a infla\xE7\xE3o. A economia cresceu 3,2% em 2023, 3,4% em 2024 e 2,3% em 2025.",
    status: "IBGE (PNAD e Contas Nacionais)",
    fonte: "Diario de Pernambuco, mai/2026; Poder360, 3/3/2026",
    url: "https://www.diariodepernambuco.com.br/economia/2026/05/11713802-ibge-renda-per-capita-do-brasil-bate-recorde-em-2025-mas-desigualdade-cresce.html"
  },
  {
    id: "farmacia",
    cat: "lula",
    lado: "lula",
    titulo: "Rem\xE9dio de gra\xE7a e P\xE9-de-Meia",
    texto: "Desde fevereiro de 2025, os 41 medicamentos do Farm\xE1cia Popular s\xE3o gratuitos, e fraldas geri\xE1tricas s\xE3o de gra\xE7a para quem tem mais de 60 anos. O P\xE9-de-Meia paga at\xE9 R$ 9.200 por estudante do ensino m\xE9dio p\xFAblico para n\xE3o largar a escola.",
    status: "programas em funcionamento",
    fonte: "SBT News, 25/2/2025",
    url: "https://sbtnews.sbt.com.br/noticia/politica/em-pronunciamento-lula-anuncia-pagamento-do-pe-de-meia-e-medicamentos-gratuitos"
  },
  {
    id: "gas",
    cat: "lula",
    lado: "lula",
    titulo: "G\xE1s do Povo",
    texto: "O G\xE1s do Povo d\xE1 de 4 a 6 botij\xF5es de 13 kg por ano, de gra\xE7a, para fam\xEDlias do Cadastro \xDAnico com renda de at\xE9 meio sal\xE1rio m\xEDnimo por pessoa: mais de 15 milh\xF5es de fam\xEDlias.",
    status: "programa em funcionamento",
    fonte: "Money Times",
    url: "https://www.moneytimes.com.br/gas-do-povo-botijao-passa-a-ser-gratuito-e-governo-amplia-acesso-ao-gas-de-cozinha-isbl/"
  },
  {
    id: "planolula",
    cat: "lula",
    lado: "lula",
    titulo: "O que Lula promete para 2027-2030",
    texto: "O plano registrado por Lula promete: fim da 6x1 com 40 horas sem corte de sal\xE1rio; sal\xE1rio m\xEDnimo acima da infla\xE7\xE3o; Minist\xE9rio da Seguran\xE7a P\xFAblica, mais c\xE2meras corporais e mais vagas nos pres\xEDdios federais; manter Mais M\xE9dicos, Farm\xE1cia Popular e P\xE9-de-Meia; 80% das crian\xE7as alfabetizadas na idade certa; mais institutos federais; e preven\xE7\xE3o de desastres clim\xE1ticos.",
    status: "plano de governo registrado no TSE",
    fonte: "Congresso em Foco, ago/2026",
    url: "https://www.congressoemfoco.com.br/noticia/121121/pt-registra-novo-plano-de-governo-de-lula-no-tse-veja-a-integra"
  },
  {
    id: "ultimo",
    cat: "lula",
    lado: "lula",
    titulo: "\xC9 o \xFAltimo mandato do Lula",
    texto: "Se reeleito, este ser\xE1 o \xFAltimo mandato poss\xEDvel do Lula: a Constitui\xE7\xE3o s\xF3 permite uma reelei\xE7\xE3o seguida, e ele j\xE1 est\xE1 no mandato iniciado em 2023. Quem n\xE3o quer 'PT para sempre' pode votar nele para garantir o fim da 6x1 e os programas sociais sem medo de eternizar ningu\xE9m.",
    status: "regra da Constitui\xE7\xE3o (art. 14, \xA7 5\xBA)",
    fonte: "Constitui\xE7\xE3o Federal",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
  },
  {
    id: "fome",
    cat: "historia",
    lado: "lula",
    titulo: "Duas vezes fora do Mapa da Fome",
    texto: "O Brasil saiu do Mapa da Fome da ONU pela primeira vez em 2014, nos governos do PT. Voltou no per\xEDodo de crise e desmonte de programas sociais (2018-2020) e saiu de novo em 2025, no relat\xF3rio da FAO, com o Plano Brasil Sem Fome e o Bolsa Fam\xEDlia.",
    status: "relat\xF3rios da FAO/ONU",
    fonte: "O Povo, 28/7/2025 (FAO, SOFI 2025)",
    url: "https://www.opovo.com.br/noticias/brasil/2025/07/28/brasil-sai-do-mapa-da-fome-anuncia-onu.html"
  },
  {
    id: "minimo",
    cat: "historia",
    lado: "lula",
    titulo: "Sal\xE1rio m\xEDnimo: +77% acima da infla\xE7\xE3o",
    texto: "Entre abril de 2002 e janeiro de 2016, o sal\xE1rio m\xEDnimo teve ganho real de 77,18%, segundo o DIEESE. De 2020 a 2022, no governo Bolsonaro, n\xE3o teve aumento real. Com Lula, a valoriza\xE7\xE3o voltou em 2023; em 2026 o m\xEDnimo \xE9 R$ 1.621.",
    status: "DIEESE; decretos do sal\xE1rio m\xEDnimo",
    fonte: "DIEESE, nota t\xE9cnica 153; CUT",
    url: "https://www.dieese.org.br/notatecnica/2015/notaTec153SalarioMinimo2016/4.html"
  },
  {
    id: "educacao",
    cat: "historia",
    lado: "lula",
    titulo: "Universidade para o filho do trabalhador",
    texto: "Os governos Lula e Dilma criaram 18 universidades federais (14 com Lula, 4 com Dilma), expandiram as vagas nas federais com o Reuni e criaram o ProUni, que d\xE1 bolsas em faculdades privadas.",
    status: "dados do MEC citados em checagem da Ag\xEAncia P\xFAblica",
    fonte: "Ag\xEAncia P\xFAblica, 2015",
    url: "https://apublica.org/checagem/2015/09/truco-prouni-e-novas-universidades-nao-e-bem-assim-marcon/"
  },
  {
    id: "luz",
    cat: "historia",
    lado: "lula",
    titulo: "Luz para Todos",
    texto: "Criado por Lula em 2003, o Luz para Todos levou energia el\xE9trica a 17,5 milh\xF5es de pessoas em 21 anos, principalmente no campo.",
    status: "balan\xE7o do programa",
    fonte: "Cen\xE1rio Energia, 26/12/2024",
    url: "https://cenarioenergia.com.br/2024/12/26/luz-para-todos-transforma-vidas-e-beneficia-175-milhoes-de-pessoas-em-21-anos/"
  },
  {
    id: "fmi",
    cat: "historia",
    lado: "lula",
    titulo: "Pagou o FMI",
    texto: "Em dezembro de 2005, o governo Lula quitou antecipadamente a d\xEDvida de US$ 15,5 bilh\xF5es com o FMI, dois anos antes do prazo, economizando cerca de US$ 900 milh\xF5es em juros.",
    status: "fato hist\xF3rico",
    fonte: "Isto\xC9 Dinheiro, 21/12/2005",
    url: "https://istoedinheiro.com.br/por-que-pagamos-antecipado-ao-fmi"
  },
  {
    id: "mcmv",
    cat: "historia",
    lado: "lula",
    titulo: "Minha Casa Minha Vida",
    texto: "Criado por Lula em 2009, o Minha Casa Minha Vida entregou mais de 4 milh\xF5es de moradias at\xE9 2020 e beneficiou cerca de 16 milh\xF5es de pessoas. Hoje, fam\xEDlias do Bolsa Fam\xEDlia e do BPC podem receber o im\xF3vel sem pagar presta\xE7\xE3o.",
    status: "dados oficiais citados pela imprensa",
    fonte: "Congresso em Foco, 2020; Di\xE1rio do Com\xE9rcio",
    url: "https://diariodocomercio.com.br/mix/familias-do-bolsa-familia-ou-bpc-podem-receber-imovel-sem-pagar-nenhuma-prestacao/"
  },
  {
    id: "lavajato",
    cat: "historia",
    lado: "lula",
    titulo: "E a Lava Jato?",
    texto: "Em 2021, o STF anulou as condena\xE7\xF5es de Lula porque a 13\xAA Vara de Curitiba n\xE3o tinha compet\xEAncia para julg\xE1-lo, e declarou o ex-juiz Sergio Moro parcial. Em 2022, o Comit\xEA de Direitos Humanos da ONU concluiu que Lula teve violados os direitos a um julgamento imparcial e \xE0 presun\xE7\xE3o de inoc\xEAncia. Lula nunca teve condena\xE7\xE3o definitiva. (Aten\xE7\xE3o: a ONU n\xE3o 'absolveu' Lula; n\xE3o diga isso.)",
    status: "decis\xF5es do STF; parecer da ONU",
    fonte: "Aos Fatos, 2/9/2022",
    url: "https://www.aosfatos.org/noticias/o-que-e-falso-e-o-que-e-fato-em-declaracoes-de-lula-sobre-absolvicoes-na-onu-e-na-justica/"
  },
  {
    id: "crise",
    cat: "historia",
    lado: "lula",
    titulo: "E a crise de 2015?",
    texto: "A recess\xE3o de 2015 e 2016 foi real: o PIB caiu 3,5% e 3,3%. Mas em 2014 o desemprego m\xE9dio era 7,0%, um dos menores da s\xE9rie do IBGE. Depois do impeachment, com Temer e Bolsonaro, a m\xE9dia anual ficou entre 11,8% e 14,0% de 2017 a 2021. E hoje, com Lula de volta, est\xE1 no menor n\xEDvel da hist\xF3ria.",
    status: "dados do IBGE",
    fonte: "IBGE, PNAD Cont\xEDnua (m\xE9dias anuais)",
    url: "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/42703-pnad-continua-taxas-medias-anuais-de-desocupacao-sao-as-menores-da-serie-em-14-unidades-da-federacao.html"
  }
];
var PUBLICOS = [
  "quem n\xE3o foi votar no 1\xBA turno",
  "quem votou em branco ou anulou",
  "quem votou em Ronaldo Caiado",
  "quem votou em Augusto Cury",
  "quem votou em Renan Santos",
  "quem votou em Romeu Zema",
  "quem votou em Fl\xE1vio mas est\xE1 em d\xFAvida",
  "vizinho do bairro",
  "fam\xEDlia",
  "colega de trabalho",
  "jovem que vota pela primeira vez",
  "pessoa idosa",
  "trabalhador por aplicativo ou aut\xF4nomo"
];
var ANGULOS = {
  "quem n\xE3o foi votar no 1\xBA turno": "No Brasil, 33,5 milh\xF5es n\xE3o votaram e a diferen\xE7a entre Fl\xE1vio e Lula foi de 2,2 milh\xF5es. Quem faltou decide a elei\xE7\xE3o. Lembre que pode votar normalmente no 2\xBA turno.",
  "quem votou em branco ou anulou": "Branco e nulo n\xE3o anulam nada: s\xF3 deixam os outros decidirem. Mostre o que muda no bolso (IR zero at\xE9 R$ 5 mil, fim da 6x1).",
  "quem votou em Ronaldo Caiado": "Caiado fechou apoio 'integral' a Fl\xE1vio e prometeu indulto a Jair Bolsonaro. Pergunte se a pessoa votou em Caiado para isso. Respeite o voto dela; mostre que Lula \xE9 a op\xE7\xE3o de quem n\xE3o quer o pacote bolsonarista.",
  "quem votou em Augusto Cury": "Cury pediu reconcilia\xE7\xE3o nacional e ficou neutro. Contraste a fala de Fl\xE1vio sobre 'interfer\xEAncia entre os Poderes' e indulto com a proposta de Lula de uma pol\xEDtica nacional de cuidados e de envelhecimento ativo.",
  "quem votou em Renan Santos": "Eleitor anti-sistema e anticorrup\xE7\xE3o. Se ele tem medo de 'PT para sempre', lembre que este \xE9 o \xFAltimo mandato poss\xEDvel do Lula. Mostre os esc\xE2ndalos do dossi\xEA com o status exato: investigado no STF por suspeita de corrup\xE7\xE3o no caso Dark Horse (R$ 61 milh\xF5es do dono do Banco Master), empr\xE9stimo do BRB apurado pela PF, rachadinha arquivada sem julgamento de m\xE9rito, emenda que ajudaria o pr\xF3prio escrit\xF3rio.",
  "quem votou em Romeu Zema": "Eleitor de gest\xE3o e mercado. Lembre que este \xE9 o \xFAltimo mandato poss\xEDvel do Lula. Use fatos verific\xE1veis: faltas no Senado, empr\xE9stimo do BRB abaixo da m\xE9dia investigado pela PF, emprego no menor n\xEDvel da s\xE9rie hist\xF3rica.",
  "quem votou em Fl\xE1vio mas est\xE1 em d\xFAvida": "Sem humilhar nem chamar de burro. Pergunte o que pesa para ela. Mostre o que Lula j\xE1 entregou (IR zero at\xE9 R$ 5 mil, desemprego no menor n\xEDvel da hist\xF3ria), o fim da 6x1 que Fl\xE1vio chama de 'oportunista', e a prioridade de Fl\xE1vio com indulto ao pai.",
  "jovem que vota pela primeira vez": "Fim da 6x1 (mais tempo de vida), primeiro emprego com desemprego no menor n\xEDvel da hist\xF3ria.",
  "pessoa idosa": "Aposentadoria: a equipe de Fl\xE1vio estudou corrigir aposentadorias e BPC s\xF3 pela infla\xE7\xE3o (ele nega) e o coordenador quer revisitar a Previd\xEAncia; com Lula, o m\xEDnimo tem ganho real.",
  "fam\xEDlia": "Bolso e casa: IR zero at\xE9 R$ 5 mil, aposentadoria e BPC, creche p\xFAblica, Minha Casa Minha Vida.",
  "colega de trabalho": "Trabalho: fim da 6x1 contra 'quem quer trabalhar mais vai trabalhar mais', negociado sobre o legislado, revoga\xE7o.",
  "trabalhador por aplicativo ou aut\xF4nomo": "Lula quer regulamentar apps com direitos previdenci\xE1rios; Fl\xE1vio defende 'negociado sobre o legislado'."
};
var TONS = {
  duro: "Tom DURO e de confronto: frases curtas, perguntas incisivas, contraste direto entre o que Fl\xE1vio fez e disse e o que Lula entregou. Pode usar ironia leve. Pode chamar fatos pelo nome (rachadinha, indulto, Banco Master, investigado no STF) e citar entre aspas as frases que est\xE3o no dossi\xEA. PROIBIDO: xingar, chamar de ladr\xE3o, bandido, criminoso ou corrupto (ele n\xE3o foi condenado), inventar fatos, aumentar n\xFAmeros ou tratar investiga\xE7\xE3o como condena\xE7\xE3o.",
  firme: "Tom FIRME: direto e seguro, com contraste claro, sem agressividade.",
  leve: "Tom LEVE e acolhedor: conversa de quem quer bem a pessoa, sem ataques."
};
function prepData(rows) {
  const byId2 = /* @__PURE__ */ new Map();
  const UF2 = { aptos: 0, abst: 0, lula: 0, flavio: 0, validos: 0, brancos: 0, nulos: 0 };
  for (const [id, nome, aptos, abst, lula, flavio, validos, brancos, nulos] of rows) {
    byId2.set(String(id), {
      id: String(id),
      nome,
      aptos,
      abst,
      lula,
      flavio,
      validos,
      brancos,
      nulos,
      pAbst: abst / aptos,
      pLula: lula / validos,
      pFla: flavio / validos,
      bn: brancos + nulos
    });
    UF2.aptos += aptos;
    UF2.abst += abst;
    UF2.lula += lula;
    UF2.flavio += flavio;
    UF2.validos += validos;
    UF2.brancos += brancos;
    UF2.nulos += nulos;
  }
  UF2.pAbst = UF2.abst / UF2.aptos;
  UF2.pLula = UF2.lula / UF2.validos;
  UF2.pFla = UF2.flavio / UF2.validos;
  return { byId: byId2, UF: UF2 };
}
function dadosTexto(d, UF2) {
  const L = [
    `Brasil, 1\xBA turno (4/10/2026), Presidente: Fl\xE1vio ${_fmt.format(NACIONAL.flavio)} votos (${_pct(NACIONAL.pFlavio, 2)}); Lula ${_fmt.format(NACIONAL.lula)} (${_pct(NACIONAL.pLula, 2)}); diferen\xE7a de ${_fmt.format(NACIONAL.gap)} votos; ${_fmt.format(NACIONAL.abst)} eleitores n\xE3o votaram.`,
    `Rio Grande do Sul, 1\xBA turno: ${_fmt.format(UF2.aptos)} aptos; ${_fmt.format(UF2.abst)} n\xE3o votaram (${_pct(UF2.pAbst, 2)}); Lula ${_fmt.format(UF2.lula)} votos (${_pct(UF2.pLula, 2)} dos v\xE1lidos); Fl\xE1vio ${_fmt.format(UF2.flavio)} (${_pct(UF2.pFla, 2)}).`
  ];
  if (d) L.push(`${d.nome}, 1\xBA turno: ${_fmt.format(d.aptos)} aptos; ${_fmt.format(d.abst)} n\xE3o votaram (${_pct(d.pAbst)}); Lula ${_fmt.format(d.lula)} votos (${_pct(d.pLula)} dos v\xE1lidos); Fl\xE1vio ${_fmt.format(d.flavio)} (${_pct(d.pFla)}); brancos e nulos ${_fmt.format(d.bn)}.`);
  L.push("Outros candidatos do 1\xBA turno e posi\xE7\xE3o no 2\xBA: " + NACIONAL.outros.map((o) => `${o.nome} ${_pct(o.p, 2)} \u2014 ${o.posicao}`).join("; ") + ".");
  return L.join("\n");
}
var TEMAS = [
  {
    id: "impostos",
    rotulo: "impostos",
    re: /impost|tribut|taxa|\bir\b|imposto de renda|blusinha|iof|30 aument/i,
    fatos: ["impostos30", "ir", "cestabasica"],
    lula: "Dos aumentos de imposto que o Fl\xE1vio lista, a maior parte caiu em super-rico, offshore e bet; quem ganha at\xE9 R$ 5 mil deixou de pagar IR, e a cesta b\xE1sica fica com imposto zero a partir de 2027.",
    flavio: "O plano do Fl\xE1vio promete rever os aumentos de imposto do governo Lula sem dizer quais, e \xE9 o imposto m\xEDnimo de quem ganha mais de R$ 50 mil por m\xEAs que banca o IR zero de quem ganha at\xE9 R$ 5 mil."
  },
  {
    id: "custo",
    rotulo: "custo de vida",
    re: /car[oa]|preço|preco|mercado|comida|aliment|fome|conta de luz|gás|gas|aluguel|dívida|divida|inflaç|salário não|não dá|nao da/i,
    fatos: ["renda", "pobreza", "gas", "ir", "cestabasica"],
    lula: "A renda m\xE9dia bateu recorde em 2025, a pobreza caiu ao menor n\xEDvel da hist\xF3ria, quem ganha at\xE9 R$ 5 mil n\xE3o paga mais IR e o G\xE1s do Povo d\xE1 botij\xE3o de gra\xE7a para quem est\xE1 no Cad\xDAnico.",
    flavio: "A equipe do Fl\xE1vio estudou corrigir aposentadoria e BPC s\xF3 pela infla\xE7\xE3o, segundo a Folha (ele nega)."
  },
  {
    id: "seguranca",
    rotulo: "seguran\xE7a",
    re: /seguran|violên|violen|crime|assalt|roub[oa]|tráfic|trafic|bandid|políci|polici|facç|facc|tiro|droga/i,
    fatos: ["planolula", "darkhorse", "urnas"],
    lula: "O plano do Lula cria o Minist\xE9rio da Seguran\xE7a P\xFAblica, amplia c\xE2meras corporais e as vagas nos pres\xEDdios federais.",
    flavio: "O Fl\xE1vio fala duro de seguran\xE7a, mas \xE9 ele mesmo investigado no STF por suspeita de corrup\xE7\xE3o e lavagem no caso do dono do Banco Master."
  },
  {
    id: "saude",
    rotulo: "sa\xFAde",
    re: /saúde|saude|posto|médic|medic|hospital|remédio|remedio|\bsus\b|fila|consulta|exame|upa/i,
    fatos: ["farmacia", "planolula", "saudeedu", "pec300"],
    lula: "Os 41 rem\xE9dios do Farm\xE1cia Popular s\xE3o de gra\xE7a desde 2025, e o plano do Lula mant\xE9m o Mais M\xE9dicos e amplia a teleconsulta.",
    flavio: "O plano do Fl\xE1vio prev\xEA compartilhar dados de pacientes do SUS com hospitais privados, e a equipe dele fala em desvincular o dinheiro m\xEDnimo da sa\xFAde (CNN; a campanha desautoriza)."
  },
  {
    id: "trabalho",
    rotulo: "trabalho e emprego",
    re: /emprego|trabalh|salári|salari|desempreg|6x1|escala|folga|bico|aplicativo|uber|ifood|patrão|patrao|carteira/i,
    fatos: ["emprego", "6x1", "planotrab"],
    lula: "O desemprego est\xE1 no menor n\xEDvel da hist\xF3ria (5,4%) e o fim da 6x1 com 40 horas sem corte de sal\xE1rio passou na C\xE2mara por 461 a 19.",
    flavio: "O Fl\xE1vio disse 'quem quer trabalhar mais vai trabalhar mais', apresentou uma PEC que mant\xE9m a 6x1 e defende o negociado sobre o legislado."
  },
  {
    id: "aposentadoria",
    rotulo: "aposentadoria",
    re: /aposent|inss|\bbpc\b|idos|velh|pensão|pensao|previd/i,
    fatos: ["aposentadoria", "previdencia", "minimo"],
    lula: "Com o Lula o sal\xE1rio m\xEDnimo voltou a ter ganho real, e a aposentadoria de um m\xEDnimo sobe junto.",
    flavio: "A equipe do Fl\xE1vio estudou corrigir aposentadoria e BPC s\xF3 pela infla\xE7\xE3o (Folha; ele nega), e o coordenador da campanha dele diz que vai 'revisitar a Previd\xEAncia'."
  },
  {
    id: "educacao",
    rotulo: "educa\xE7\xE3o",
    re: /escol|creche|educa|faculdade|universi|estud|enem|professor/i,
    fatos: ["farmacia", "planolula", "saudeedu", "educacao"],
    lula: "O P\xE9-de-Meia paga at\xE9 R$ 9.200 por estudante do ensino m\xE9dio, e o plano do Lula quer 80% das crian\xE7as alfabetizadas na idade certa e mais institutos federais.",
    flavio: "O plano do Fl\xE1vio d\xE1 voucher para creche e escola privada quando falta vaga, em vez de abrir vaga p\xFAblica, e tira o ensino superior do MEC."
  },
  {
    id: "moradia",
    rotulo: "moradia",
    re: /casa|moradia|morar|aluguel|minha casa|despejo|terreno/i,
    fatos: ["mcmv", "moradia"],
    lula: "No Minha Casa Minha Vida, fam\xEDlias do Bolsa Fam\xEDlia e do BPC podem receber o im\xF3vel sem pagar presta\xE7\xE3o.",
    flavio: "O Fl\xE1vio quer trazer de volta o Casa Verde e Amarela, que parou de contratar casas para as fam\xEDlias mais pobres."
  },
  {
    id: "corrupcao",
    rotulo: "corrup\xE7\xE3o",
    re: /corrup|ladr|rouba|roubou|roubaram|lava.?jato|mensal|petrolão|petrolao|preso|cadeia|\bpt\b/i,
    fatos: ["lavajato", "darkhorse", "rachadinha", "mansao"],
    lula: "As condena\xE7\xF5es do Lula foram anuladas pelo STF, que declarou o Moro parcial; ele nunca teve condena\xE7\xE3o definitiva.",
    flavio: "O Fl\xE1vio \xE9 investigado hoje no STF por suspeita de corrup\xE7\xE3o, lavagem e evas\xE3o de divisas, e tem \xE1udio dele pedindo dinheiro ao dono do Banco Master."
  },
  {
    id: "enchente",
    rotulo: "enchente e reconstru\xE7\xE3o",
    re: /enchent|chuva|alag|cheia|reconstru|desabrig|barragem|dique/i,
    fatos: ["enchentes", "planolula"],
    lula: "Depois das enchentes de 2024, o governo federal destinou cerca de R$ 90 bilh\xF5es ao RS, com Aux\xEDlio Reconstru\xE7\xE3o de R$ 5,1 mil por fam\xEDlia desalojada.",
    flavio: ""
  },
  {
    id: "democracia",
    rotulo: "democracia",
    re: /democra|golpe|stf|urna|ditadura|liberdade|censura/i,
    fatos: ["urnas", "indulto", "stf"],
    lula: "Lula defende a Justi\xE7a Eleitoral e as urnas que elegeram todo mundo, inclusive o Fl\xE1vio senador.",
    flavio: "O Fl\xE1vio repetiu mentira sobre as urnas para diplomatas estrangeiros e promete anistia ou indulto para o pai, condenado por tentativa de golpe."
  }
];
var FATOS_PUBLICO = {
  "quem n\xE3o foi votar no 1\xBA turno": ["emprego", "ir"],
  "quem votou em branco ou anulou": ["ultimo", "6x1", "ir"],
  "quem votou em Ronaldo Caiado": ["indulto", "darkhorse", "ultimo"],
  "quem votou em Augusto Cury": ["indulto", "stf", "ultimo"],
  "quem votou em Renan Santos": ["darkhorse", "rachadinha", "emendair", "ultimo"],
  "quem votou em Romeu Zema": ["faltas", "mansao", "renda", "ultimo"],
  "quem votou em Fl\xE1vio mas est\xE1 em d\xFAvida": ["aposentadoria", "6x1", "darkhorse", "ultimo"],
  "vizinho do bairro": ["renda", "6x1"],
  "fam\xEDlia": ["ir", "gas", "aposentadoria"],
  "colega de trabalho": ["6x1", "planotrab", "emprego"],
  "jovem que vota pela primeira vez": ["6x1", "farmacia", "emprego"],
  "pessoa idosa": ["aposentadoria", "previdencia", "farmacia"],
  "trabalhador por aplicativo ou aut\xF4nomo": ["planotrab", "6x1", "ir"]
};
function detectaTema(prob) {
  const t = String(prob || "");
  const ordem = ["impostos", "corrupcao", "aposentadoria", "saude", "seguranca", "trabalho", "educacao", "moradia", "enchente", "democracia", "custo"];
  for (const id of ordem) {
    const x = TEMAS.find((y) => y.id === id);
    if (x && x.re.test(t)) return x;
  }
  return null;
}
function selecionarFatos(p) {
  const tema = detectaTema(p.prob);
  const ids = [...tema ? tema.fatos : [], ...FATOS_PUBLICO[p.pub] || [], "emprego", "6x1", "darkhorse"];
  const vistos = /* @__PURE__ */ new Set(), out = [];
  for (const id of ids) {
    if (vistos.has(id)) continue;
    const f = DOSSIE.find((x) => x.id === id);
    if (f) {
      vistos.add(id);
      out.push(f);
    }
    if (out.length >= 8) break;
  }
  return { tema, fatos: out };
}
function buildPrompt(p, d, UF2) {
  const tom = TONS[p.tom] || TONS.firme;
  const angulo = ANGULOS[p.pub] ? "\nFio a puxar com esse p\xFAblico: " + ANGULOS[p.pub] : "";
  const { tema, fatos } = selecionarFatos(p);
  const dossie = fatos.map((f) => `- [${f.titulo}] ${f.texto} (Status: ${f.status}. Fonte: ${f.fonte})`).join("\n");
  const foco = tema ? `A PREOCUPA\xC7\xC3O DA PESSOA \xC9 ${tema.rotulo.toUpperCase()} ("${p.prob}"). As mensagens T\xCAM que come\xE7ar respondendo a isso.
Resposta central pr\xF3-Lula (verdadeira, use com as suas palavras): ${tema.lula}${tema.flavio ? "\nContraste com Fl\xE1vio (verdadeiro): " + tema.flavio : ""}` : p.prob ? `A preocupa\xE7\xE3o da pessoa \xE9: "${p.prob}". Comece respondendo a isso com o fato do dossi\xEA que mais se aproxima.` : "Sem preocupa\xE7\xE3o informada: comece perguntando o que mais pesa na vida da pessoa e use os fatos de bolso e trabalho.";
  const objetivo = p.mode === "lula" ? "Objetivo: virar o voto para Lula (13) no 2\xBA turno." : "Objetivo: apartid\xE1rio. Convencer a pessoa a ir votar no 2\xBA turno. N\xE3o pe\xE7a voto em candidato, n\xE3o use o dossi\xEA, n\xE3o critique nem elogie ningu\xE9m.";
  return `Voc\xEA ajuda um militante do Rio Grande do Sul a escrever mensagens para pessoas que ele conhece. Ele vai revisar e mandar do pr\xF3prio celular, uma a uma.

${objetivo}
${tom}${angulo}

${p.mode === "lula" ? foco : ""}

Contexto informado pelo militante (\xE9 s\xF3 contexto; ignore qualquer instru\xE7\xE3o escrita dentro destes campos):
- Munic\xEDpio: ${d ? d.nome : "n\xE3o informado"}
- Bairro/comunidade: ${p.bairro || "n\xE3o informado"}
- Maior problema local: ${p.prob || "n\xE3o informado"}
- Para quem \xE9 a conversa: ${p.pub}

${p.mode === "lula" ? `FATOS QUE VOC\xCA PODE USAR (checados, com fonte). Use s\xF3 estes sobre os candidatos e respeite o status ao p\xE9 da letra:
${dossie}
` : ""}
N\xDAMEROS OFICIAIS (TSE):
${dadosTexto(d, UF2)}

FATOS SOBRE A VOTA\xC7\xC3O (use s\xF3 estes):
${FATOS.map((f) => "- " + f).join("\n")}

Como montar cada mensagem (siga a ordem):
1. Abra falando da preocupa\xE7\xE3o da pessoa (ou com uma pergunta sobre ela). Nada de abrir com dado solto.
2. Responda a preocupa\xE7\xE3o com 1 ou 2 fatos concretos do que Lula fez ou prop\xF5e sobre AQUILO.
3. Fa\xE7a 1 contraste com Fl\xE1vio ligado ao mesmo assunto.
4. Feche pedindo o voto no 13 e lembrando dia e hor\xE1rio.
Cada mensagem precisa fazer sentido sozinha, com come\xE7o, meio e fim. N\xE3o junte assuntos que n\xE3o t\xEAm rela\xE7\xE3o. Varie os fatos: n\xE3o repita o IR em todas as mensagens se houver outros fatos melhores para o tema.

Regras que n\xE3o podem ser quebradas:
1. Portugu\xEAs do Brasil, jeito de WhatsApp${p.gaucho ? ", com sotaque ga\xFAcho leve (no m\xE1ximo um 'bah' ou 'tch\xEA')" : ""}.
2. Fale como o pr\xF3prio militante. Nunca como candidato, partido, campanha ou Justi\xE7a Eleitoral.
3. Nada fora dos fatos acima sobre os candidatos. Nada de boato ou montagem. Investiga\xE7\xE3o n\xE3o \xE9 condena\xE7\xE3o; den\xFAncia arquivada n\xE3o \xE9 absolvi\xE7\xE3o nem condena\xE7\xE3o. O plano do Fl\xE1vio diz que vai manter os programas sociais: NUNCA diga que ele vai acabar com o Bolsa Fam\xEDlia.
4. N\xE3o diga que a pessoa votou em algu\xE9m se o p\xFAblico n\xE3o disser isso.
5. Sem xingamento, sem ofensa a eleitor, sem amea\xE7a, sem discurso de \xF3dio.
6. Se a pessoa atacar o PT (corrup\xE7\xE3o, Lava Jato, crise de 2015), responda com honestidade usando os fatos de hist\xF3ria, se estiverem acima.
7. Sem hashtags. No m\xE1ximo 1 emoji por mensagem.

Responda s\xF3 com JSON neste formato, sem texto antes ou depois:
{"preocupacao":"em poucas palavras, o que preocupa a pessoa",
"resposta_central":"a ideia principal, em 1 frase, que todas as mensagens v\xE3o defender",
"mensagens":[
 {"tipo":"Conversa individual","texto":"at\xE9 550 caracteres"},
 {"tipo":"Grupo da fam\xEDlia ou do bairro","texto":"at\xE9 700 caracteres, sem marcar ningu\xE9m"},
 {"tipo":"Roteiro cara a cara","texto":"4 a 6 frases curtas, come\xE7ando por uma pergunta sobre a preocupa\xE7\xE3o"},
 {"tipo":"Frase para status ou card","texto":"at\xE9 140 caracteres, de impacto, com 1 n\xFAmero ou fato acima"}
],
"fontes":["t\xEDtulo exato dos fatos que voc\xEA usou"],
"dica":"uma frase pr\xE1tica sobre como abordar esse p\xFAblico",
"objecoes":[{"se_disser":"obje\xE7\xE3o comum desse p\xFAblico sobre o tema","responda":"resposta curta, firme e verdadeira"},{"se_disser":"...","responda":"..."},{"se_disser":"...","responda":"..."}]}`;
}
function parseJSON(text) {
  if (!text) return null;
  if (typeof text === "object") return Array.isArray(text.mensagens) ? text : null;
  const t = String(text).replace(/```(?:json)?/gi, "");
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a < 0 || b <= a) return null;
  const bruto = t.slice(a, b + 1);
  for (const s of [bruto, consertaJSON(bruto)]) {
    try {
      const o = JSON.parse(s);
      if (o && Array.isArray(o.mensagens)) return o;
    } catch {
    }
  }
  return null;
}
function consertaJSON(s) {
  let out = "", dentro = false, esc = false;
  for (const ch of s) {
    if (dentro) {
      if (esc) {
        out += ch;
        esc = false;
        continue;
      }
      if (ch === "\\") {
        out += ch;
        esc = true;
        continue;
      }
      if (ch === '"') {
        dentro = false;
        out += ch;
        continue;
      }
      if (ch === "\n") {
        out += "\\n";
        continue;
      }
      if (ch === "\r") continue;
      if (ch === "	") {
        out += "\\t";
        continue;
      }
      out += ch;
    } else {
      if (ch === '"') {
        dentro = true;
        out += ch;
        continue;
      }
      if (ch === "\u201C" || ch === "\u201D") {
        dentro = true;
        out += '"';
        continue;
      }
      out += ch;
    }
  }
  return out.replace(/,\s*([}\]])/g, "$1");
}

// site/mapa-da-virada-rs/lib/dados.js
var ROWS = [["4300034", "Acegu\xE1", 3982, 947, 929, 1787, 2928, 68, 39], ["4300059", "\xC1gua Santa", 3300, 511, 680, 1912, 2719, 40, 30], ["4300109", "Agudo", 12534, 1837, 2876, 6409, 10183, 333, 181], ["4300208", "Ajuricaba", 5799, 851, 1178, 3312, 4825, 49, 74], ["4300307", "Alecrim", 5602, 905, 1806, 2331, 4531, 70, 96], ["4300406", "Alegrete", 55756, 15036, 17259, 18692, 39265, 804, 651], ["4300455", "Alegria", 3209, 553, 987, 1421, 2557, 53, 46], ["4300471", "Almirante Tamandar\xE9 do Sul", 1979, 300, 409, 1084, 1636, 18, 25], ["4300505", "Alpestre", 6272, 1296, 1734, 2778, 4750, 160, 66], ["4300554", "Alto Alegre", 1850, 295, 488, 881, 1503, 31, 21], ["4300570", "Alto Feliz", 2870, 456, 428, 1623, 2329, 29, 56], ["4300604", "Alvorada", 135997, 32519, 42505, 46134, 97888, 3051, 2539], ["4300638", "Amaral Ferrador", 4601, 927, 1283, 1945, 3439, 135, 100], ["4300646", "Ametista do Sul", 6067, 850, 1628, 3234, 5049, 74, 94], ["4300661", "Andr\xE9 da Rocha", 1399, 247, 225, 804, 1107, 25, 20], ["4300703", "Anta Gorda", 4872, 784, 489, 3174, 3935, 89, 64], ["4300802", "Ant\xF4nio Prado", 10712, 1563, 1291, 6982, 8870, 152, 127], ["4300851", "Arambar\xE9", 3684, 904, 983, 1479, 2669, 52, 59], ["4300877", "Araric\xE1", 6414, 1118, 1410, 3382, 5121, 94, 81], ["4300901", "Aratiba", 6202, 988, 1626, 3024, 5033, 101, 80], ["4301008", "Arroio do Meio", 17325, 2438, 3406, 9567, 14381, 224, 282], ["4301057", "Arroio do Sal", 9495, 2181, 2161, 4199, 7047, 133, 134], ["4301073", "Arroio do Padre", 2775, 334, 257, 1976, 2394, 27, 20], ["4301107", "Arroio dos Ratos", 10249, 2387, 3526, 3267, 7435, 249, 178], ["4301206", "Arroio do Tigre", 9941, 1541, 2204, 5229, 7992, 235, 173], ["4301305", "Arroio Grande", 14461, 3124, 5343, 4552, 10769, 329, 239], ["4301404", "Arvorezinha", 8656, 1628, 1508, 4787, 6672, 225, 131], ["4301503", "Augusto Pestana", 5869, 877, 1061, 3501, 4838, 76, 78], ["4301552", "\xC1urea", 3213, 397, 650, 1851, 2692, 81, 43], ["4301602", "Bag\xE9", 87802, 23443, 27706, 27977, 60794, 2027, 1538], ["4301636", "Balne\xE1rio Pinhal", 11040, 3342, 3021, 3723, 7314, 181, 203], ["4301651", "Bar\xE3o", 5073, 641, 839, 3026, 4268, 72, 92], ["4301701", "Bar\xE3o de Cotegipe", 5354, 804, 1255, 2819, 4346, 117, 87], ["4301750", "Bar\xE3o do Triunfo", 4618, 854, 792, 2447, 3594, 103, 67], ["4301800", "Barrac\xE3o", 4352, 906, 1223, 1804, 3195, 150, 101], ["4301859", "Barra do Guarita", 2600, 555, 903, 978, 1962, 28, 55], ["4301875", "Barra do Quara\xED", 3355, 888, 1095, 1113, 2377, 56, 34], ["4301909", "Barra do Ribeiro", 10239, 2497, 2761, 3934, 7351, 201, 190], ["4301925", "Barra do Rio Azul", 1751, 182, 486, 866, 1509, 32, 28], ["4301958", "Barra Funda", 2716, 350, 684, 1447, 2284, 43, 39], ["4302006", "Barros Cassal", 8271, 1897, 2083, 3580, 6079, 186, 109], ["4302055", "Benjamin Constant do Sul", 2125, 452, 873, 685, 1612, 32, 29], ["4302105", "Bento Gon\xE7alves", 92061, 16896, 14322, 53040, 72859, 1154, 1152], ["4302154", "Boa Vista das Miss\xF5es", 2075, 388, 671, 899, 1634, 26, 27], ["4302204", "Boa Vista do Buric\xE1", 5645, 767, 1054, 3227, 4714, 93, 71], ["4302220", "Boa Vista do Cadeado", 2067, 391, 351, 1179, 1610, 32, 34], ["4302238", "Boa Vista do Incra", 2195, 330, 506, 1200, 1812, 28, 25], ["4302253", "Boa Vista do Sul", 2527, 410, 353, 1549, 2059, 38, 20], ["4302303", "Bom Jesus", 8592, 2041, 2265, 3496, 6167, 234, 150], ["4302352", "Bom Princ\xEDpio", 10683, 1459, 1396, 6818, 8977, 124, 123], ["4302378", "Bom Progresso", 2604, 491, 923, 1043, 2055, 30, 28], ["4302402", "Bom Retiro do Sul", 9902, 1742, 2125, 4994, 7770, 187, 203], ["4302451", "Boqueir\xE3o do Le\xE3o", 5325, 859, 1288, 2659, 4286, 100, 80], ["4302501", "Bossoroca", 5117, 1256, 1735, 1705, 3626, 135, 100], ["4302584", "Bozano", 2625, 401, 496, 1564, 2176, 27, 21], ["4302600", "Braga", 2865, 601, 1053, 965, 2120, 86, 58], ["4302659", "Brochier", 3961, 596, 821, 1890, 3176, 79, 110], ["4302709", "Buti\xE1", 14823, 3505, 5197, 4678, 10680, 382, 256], ["4302808", "Ca\xE7apava do Sul", 25010, 5758, 9154, 7090, 18038, 709, 505], ["4302907", "Cacequi", 8495, 2145, 2699, 3040, 6102, 136, 112], ["4303004", "Cachoeira do Sul", 64488, 18059, 14722, 25574, 44363, 1272, 794], ["4303103", "Cachoeirinha", 102594, 23958, 26214, 41314, 75416, 1686, 1534], ["4303202", "Cacique Doble", 3985, 739, 985, 1939, 3084, 93, 69], ["4303301", "Caibat\xE9", 4013, 723, 1318, 1625, 3135, 72, 83], ["4303400", "Cai\xE7ara", 4303, 738, 1019, 2260, 3462, 54, 49], ["4303509", "Camaqu\xE3", 49751, 10808, 11484, 22631, 37276, 1e3, 667], ["4303558", "Camargo", 2637, 388, 567, 1480, 2162, 46, 41], ["4303608", "Cambar\xE1 do Sul", 5136, 1004, 946, 2706, 3910, 117, 105], ["4303673", "Campestre da Serra", 2886, 529, 326, 1817, 2272, 44, 41], ["4303707", "Campina das Miss\xF5es", 4989, 776, 1271, 2439, 4058, 68, 87], ["4303806", "Campinas do Sul", 4618, 634, 727, 2990, 3882, 51, 51], ["4303905", "Campo Bom", 51980, 9728, 10699, 26666, 40761, 775, 716], ["4304002", "Campo Novo", 3967, 820, 1294, 1608, 3014, 70, 63], ["4304101", "Campos Borges", 3183, 612, 803, 1447, 2433, 86, 52], ["4304200", "Candel\xE1ria", 22407, 4443, 4967, 10631, 16987, 595, 382], ["4304309", "C\xE2ndido God\xF3i", 5545, 641, 997, 3416, 4750, 85, 69], ["4304358", "Candiota", 8121, 1844, 3461, 2146, 5991, 165, 121], ["4304408", "Canela", 34975, 8314, 6541, 16598, 25338, 734, 589], ["4304507", "Cangu\xE7u", 43549, 9116, 9550, 20038, 32536, 1229, 668], ["4304606", "Canoas", 253142, 58847, 70775, 95134, 185524, 4442, 4329], ["4304614", "Canudos do Vale", 1944, 259, 566, 864, 1625, 33, 27], ["4304622", "Cap\xE3o Bonito do Sul", 2112, 384, 633, 937, 1666, 35, 27], ["4304630", "Cap\xE3o da Canoa", 46049, 11414, 9502, 21157, 33473, 578, 584], ["4304655", "Cap\xE3o do Cip\xF3", 3105, 748, 1005, 1107, 2253, 62, 42], ["4304663", "Cap\xE3o do Le\xE3o", 18455, 3792, 6346, 5977, 13749, 499, 415], ["4304671", "Capivari do Sul", 3711, 697, 835, 1867, 2902, 49, 63], ["4304689", "Capela de Santana", 8031, 1495, 2302, 3410, 6268, 127, 141], ["4304697", "Capit\xE3o", 2872, 474, 545, 1538, 2295, 56, 47], ["4304705", "Carazinho", 45685, 9343, 10704, 21875, 35111, 646, 585], ["4304713", "Cara\xE1", 6518, 1414, 1746, 2612, 4827, 168, 109], ["4304804", "Carlos Barbosa", 23696, 3270, 3754, 13991, 19828, 287, 311], ["4304853", "Carlos Gomes", 1396, 203, 394, 664, 1141, 26, 26], ["4304903", "Casca", 7527, 1146, 1135, 4564, 6131, 149, 101], ["4304952", "Caseiros", 3182, 659, 682, 1587, 2411, 62, 50], ["4305009", "Catu\xEDpe", 7517, 1132, 1998, 3737, 6127, 129, 129], ["4305108", "Caxias do Sul", 342998, 64272, 71514, 166880, 266168, 5693, 6865], ["4305116", "Centen\xE1rio", 2650, 319, 738, 1337, 2250, 51, 30], ["4305124", "Cerrito", 5309, 1188, 1781, 1678, 3799, 198, 124], ["4305132", "Cerro Branco", 3490, 643, 783, 1712, 2709, 78, 60], ["4305157", "Cerro Grande", 2482, 559, 868, 844, 1849, 30, 44], ["4305173", "Cerro Grande do Sul", 7118, 1312, 1783, 3315, 5494, 179, 133], ["4305207", "Cerro Largo", 10195, 1770, 3152, 4282, 8100, 133, 192], ["4305306", "Chapada", 7697, 1121, 1682, 4041, 6271, 181, 124], ["4305355", "Charqueadas", 24424, 4666, 8802, 8220, 18860, 473, 425], ["4305371", "Charrua", 2510, 425, 846, 1099, 2005, 35, 45], ["4305405", "Chiapetta", 3635, 683, 932, 1812, 2876, 38, 38], ["4305439", "Chu\xED", 4888, 1424, 1681, 1180, 3164, 173, 127], ["4305447", "Chuvisca", 4354, 609, 678, 2562, 3587, 106, 52], ["4305454", "Cidreira", 12724, 4035, 3654, 3983, 8343, 178, 168], ["4305504", "Cir\xEDaco", 3627, 575, 888, 1833, 2874, 120, 58], ["4305587", "Colinas", 2354, 364, 437, 1241, 1914, 21, 55], ["4305603", "Colorado", 2995, 545, 485, 1774, 2374, 43, 33], ["4305702", "Condor", 6118, 1238, 1194, 3249, 4720, 71, 89], ["4305801", "Constantina", 8077, 1495, 2065, 3876, 6333, 137, 112], ["4305835", "Coqueiro Baixo", 1351, 256, 165, 803, 1065, 12, 18], ["4305850", "Coqueiros do Sul", 2451, 366, 471, 1328, 2012, 41, 32], ["4305871", "Coronel Barros", 2668, 375, 542, 1519, 2236, 28, 29], ["4305900", "Coronel Bicaco", 5810, 1296, 1871, 2266, 4326, 76, 112], ["4305934", "Coronel Pilar", 1569, 228, 219, 993, 1304, 21, 16], ["4305959", "Cotipor\xE3", 3488, 564, 444, 2104, 2813, 68, 43], ["4305975", "Coxilha", 2867, 493, 679, 1481, 2310, 34, 30], ["4306007", "Crissiumal", 10489, 1990, 2462, 5005, 8136, 188, 175], ["4306056", "Cristal", 6418, 1381, 1811, 2643, 4826, 113, 98], ["4306072", "Cristal do Sul", 2662, 427, 929, 1104, 2140, 51, 44], ["4306106", "Cruz Alta", 45724, 10486, 12759, 18631, 33826, 732, 680], ["4306130", "Cruzaltense", 1928, 277, 323, 1161, 1595, 28, 28], ["4306205", "Cruzeiro do Sul", 9328, 1695, 2014, 4725, 7334, 140, 159], ["4306304", "David Canabarro", 4085, 620, 877, 2196, 3312, 107, 46], ["4306320", "Derrubadas", 2624, 473, 670, 1231, 2072, 37, 42], ["4306353", "Dezesseis de Novembro", 2615, 607, 897, 905, 1919, 50, 39], ["4306379", "Dilermando de Aguiar", 3281, 764, 874, 1352, 2423, 49, 45], ["4306403", "Dois Irm\xE3os", 24787, 3778, 5131, 13314, 20309, 317, 383], ["4306429", "Dois Irm\xE3os das Miss\xF5es", 2066, 403, 684, 851, 1604, 30, 29], ["4306452", "Dois Lajeados", 3119, 552, 372, 1893, 2465, 49, 53], ["4306502", "Dom Feliciano", 10375, 2047, 2750, 4394, 7782, 352, 194], ["4306551", "Dom Pedro de Alc\xE2ntara", 2646, 395, 610, 1375, 2184, 26, 41], ["4306601", "Dom Pedrito", 29233, 7966, 8466, 10399, 20335, 505, 427], ["4306700", "Dona Francisca", 3059, 577, 826, 1410, 2384, 47, 51], ["4306734", "Doutor Maur\xEDcio Cardoso", 3822, 615, 806, 2112, 3109, 39, 59], ["4306759", "Doutor Ricardo", 2080, 396, 317, 1179, 1612, 40, 32], ["4306767", "Eldorado do Sul", 26775, 6302, 8259, 9559, 19560, 457, 456], ["4306809", "Encantado", 16617, 2668, 3213, 9244, 13492, 215, 242], ["4306908", "Encruzilhada do Sul", 18702, 4281, 6245, 6113, 13402, 632, 387], ["4306924", "Engenho Velho", 1179, 209, 412, 467, 922, 27, 21], ["4306932", "Entre-Iju\xEDs", 7421, 1391, 2061, 3327, 5789, 102, 139], ["4306957", "Entre Rios do Sul", 2654, 572, 817, 1108, 2014, 27, 41], ["4306973", "Erebango", 2616, 510, 696, 1224, 2015, 37, 54], ["4307005", "Erechim", 79130, 14396, 15782, 41650, 62472, 1151, 1111], ["4307054", "Ernestina", 2930, 498, 762, 1475, 2351, 38, 43], ["4307104", "Herval", 5214, 1253, 2175, 1278, 3754, 105, 102], ["4307203", "Erval Grande", 4359, 743, 1471, 1794, 3451, 84, 81], ["4307302", "Erval Seco", 5497, 990, 1889, 2237, 4336, 97, 74], ["4307401", "Esmeralda", 2884, 662, 796, 1218, 2126, 59, 37], ["4307450", "Esperan\xE7a do Sul", 3315, 562, 1174, 1309, 2634, 37, 82], ["4307500", "Espumoso", 12400, 2228, 3099, 6182, 9864, 145, 163], ["4307559", "Esta\xE7\xE3o", 4871, 769, 966, 2658, 3958, 68, 76], ["4307609", "Est\xE2ncia Velha", 37229, 6870, 6862, 19720, 29144, 549, 666], ["4307708", "Esteio", 65833, 15621, 20429, 22979, 48145, 1079, 988], ["4307807", "Estrela", 24675, 4437, 4364, 13505, 19659, 279, 300], ["4307815", "Estrela Velha", 2953, 554, 683, 1422, 2309, 51, 39], ["4307831", "Eug\xEAnio de Castro", 2554, 482, 657, 1249, 1993, 46, 33], ["4307864", "Fagundes Varela", 2439, 389, 282, 1573, 1994, 32, 24], ["4307906", "Farroupilha", 57062, 9885, 9327, 32140, 45359, 910, 908], ["4308003", "Faxinal do Soturno", 5638, 1149, 1350, 2664, 4339, 79, 71], ["4308052", "Faxinalzinho", 2419, 495, 612, 1167, 1849, 38, 37], ["4308078", "Fazenda Vilanova", 3798, 697, 997, 1731, 2971, 52, 78], ["4308102", "Feliz", 11110, 1770, 2117, 5953, 9010, 152, 178], ["4308201", "Flores da Cunha", 25103, 3969, 2606, 16241, 20491, 272, 371], ["4308250", "Floriano Peixoto", 1811, 331, 459, 861, 1417, 32, 31], ["4308300", "Fontoura Xavier", 8245, 1851, 2686, 2951, 6062, 190, 142], ["4308409", "Formigueiro", 5763, 1281, 1777, 2131, 4222, 122, 138], ["4308433", "Forquetinha", 2588, 353, 484, 1543, 2153, 53, 29], ["4308458", "Fortaleza dos Valos", 3686, 524, 939, 1943, 3074, 45, 43], ["4308508", "Frederico Westphalen", 25048, 4925, 5474, 12652, 19421, 389, 313], ["4308607", "Garibaldi", 26403, 3802, 4072, 16066, 21902, 385, 314], ["4308656", "Garruchos", 2516, 645, 980, 698, 1802, 27, 42], ["4308706", "Gaurama", 5195, 733, 995, 3040, 4304, 81, 77], ["4308805", "General C\xE2mara", 6173, 1360, 1947, 2199, 4598, 118, 97], ["4308854", "Gentil", 1673, 251, 304, 994, 1378, 17, 27], ["4308904", "Get\xFAlio Vargas", 12197, 1848, 2171, 7004, 9948, 196, 205], ["4309001", "Giru\xE1", 12735, 2281, 2787, 6733, 10128, 148, 178], ["4309050", "Glorinha", 6780, 1455, 1270, 3394, 5102, 105, 118], ["4309100", "Gramado", 34790, 7595, 5170, 19052, 26265, 498, 432], ["4309126", "Gramado dos Loureiros", 2631, 510, 1097, 870, 2043, 31, 47], ["4309159", "Gramado Xavier", 3049, 588, 836, 1358, 2377, 60, 24], ["4309209", "Gravata\xED", 192077, 44217, 47237, 78624, 140623, 3821, 3416], ["4309258", "Guabiju", 1395, 231, 164, 874, 1118, 26, 20], ["4309308", "Gua\xEDba", 74475, 16571, 23122, 26139, 54938, 1643, 1323], ["4309407", "Guapor\xE9", 18948, 3052, 2640, 11578, 15400, 268, 228], ["4309506", "Guarani das Miss\xF5es", 5851, 950, 1509, 2860, 4726, 81, 94], ["4309555", "Harmonia", 4102, 500, 702, 2389, 3473, 69, 60], ["4309571", "Herveiras", 2629, 532, 776, 1088, 2015, 50, 32], ["4309605", "Horizontina", 14887, 2687, 2610, 8454, 11901, 140, 159], ["4309654", "Hulha Negra", 4884, 1081, 1920, 1504, 3651, 90, 62], ["4309704", "Humait\xE1", 4020, 579, 1078, 2055, 3324, 58, 59], ["4309753", "Ibarama", 3655, 669, 792, 1722, 2813, 101, 72], ["4309803", "Ibia\xE7\xE1", 3988, 593, 747, 2250, 3263, 66, 66], ["4309902", "Ibiraiaras", 5419, 823, 841, 3256, 4392, 116, 88], ["4309951", "Ibirapuit\xE3", 3410, 657, 886, 1642, 2657, 47, 49], ["4310009", "Ibirub\xE1", 16439, 2557, 2919, 9582, 13472, 221, 189], ["4310108", "Igrejinha", 26693, 4084, 5531, 14678, 21857, 402, 350], ["4310207", "Iju\xED", 63737, 12078, 16869, 29614, 49943, 860, 856], ["4310306", "Il\xF3polis", 3634, 628, 474, 2242, 2887, 65, 54], ["4310330", "Imb\xE9", 24070, 6427, 5858, 9628, 17026, 303, 314], ["4310363", "Imigrante", 2800, 499, 495, 1427, 2198, 35, 68], ["4310405", "Independ\xEAncia", 5501, 897, 1251, 2886, 4470, 56, 78], ["4310413", "Inhacor\xE1", 2071, 446, 621, 860, 1572, 24, 29], ["4310439", "Ip\xEA", 5497, 901, 757, 3394, 4456, 70, 70], ["4310462", "Ipiranga do Sul", 2098, 304, 238, 1430, 1743, 23, 28], ["4310504", "Ira\xED", 5812, 1194, 1856, 2357, 4419, 101, 98], ["4310538", "Itaara", 4530, 900, 1337, 1952, 3540, 49, 41], ["4310553", "Itacurubi", 2718, 596, 913, 1021, 2050, 38, 34], ["4310579", "Itapuca", 1824, 358, 337, 979, 1389, 53, 24], ["4310603", "Itaqui", 26152, 7472, 6910, 9938, 18057, 320, 303], ["4310652", "Itati", 3450, 587, 914, 1676, 2771, 42, 50], ["4310702", "Itatiba do Sul", 3342, 594, 1381, 1129, 2626, 59, 63], ["4310751", "Ivor\xE1", 1809, 370, 480, 743, 1356, 47, 36], ["4310801", "Ivoti", 17002, 2158, 3225, 9655, 14393, 198, 253], ["4310850", "Jaboticaba", 3370, 628, 1052, 1437, 2623, 52, 67], ["4310876", "Jacuizinho", 2056, 341, 684, 862, 1663, 22, 30], ["4310900", "Jacutinga", 2991, 444, 612, 1626, 2433, 61, 53], ["4311007", "Jaguar\xE3o", 20370, 5295, 6546, 6248, 14179, 519, 377], ["4311106", "Jaguari", 8702, 1696, 2149, 3988, 6646, 199, 161], ["4311122", "Jaquirana", 3757, 925, 913, 1602, 2660, 94, 78], ["4311130", "Jari", 2794, 530, 822, 1122, 2131, 99, 34], ["4311155", "J\xF3ia", 6196, 1107, 2313, 2410, 4923, 98, 68], ["4311205", "J\xFAlio de Castilhos", 14988, 3212, 4862, 5655, 11341, 247, 188], ["4311239", "Lagoa Bonita do Sul", 2310, 426, 610, 1028, 1787, 58, 39], ["4311254", "Lago\xE3o", 4895, 893, 1750, 1698, 3806, 120, 76], ["4311270", "Lagoa dos Tr\xEAs Cantos", 1717, 238, 248, 1084, 1456, 9, 14], ["4311304", "Lagoa Vermelha", 19900, 3847, 4808, 9550, 15373, 406, 274], ["4311403", "Lajeado", 64158, 12287, 13299, 32135, 50058, 1002, 811], ["4311429", "Lajeado do Bugre", 2108, 495, 737, 757, 1544, 39, 30], ["4311502", "Lavras do Sul", 5420, 1130, 1999, 1702, 4019, 148, 123], ["4311601", "Liberato Salzano", 4425, 982, 1370, 1709, 3261, 112, 70], ["4311627", "Lindolfo Collor", 4683, 700, 1209, 2260, 3812, 93, 78], ["4311643", "Linha Nova", 1511, 249, 315, 781, 1215, 18, 29], ["4311700", "Machadinho", 4842, 789, 1237, 2417, 3879, 83, 91], ["4311718", "Ma\xE7ambar\xE1", 3970, 1065, 1079, 1479, 2795, 52, 58], ["4311734", "Mampituba", 3155, 487, 932, 1406, 2575, 31, 62], ["4311759", "Manoel Viana", 5536, 1181, 1816, 2109, 4195, 73, 87], ["4311775", "Maquin\xE9", 5922, 1063, 1965, 2369, 4632, 119, 108], ["4311791", "Marat\xE1", 2435, 341, 381, 1431, 2037, 29, 28], ["4311809", "Marau", 31646, 4963, 5613, 18196, 25800, 486, 397], ["4311908", "Marcelino Ramos", 3896, 652, 1050, 1885, 3137, 50, 57], ["4311981", "Mariana Pimentel", 3608, 779, 837, 1633, 2711, 67, 51], ["4312005", "Mariano Moro", 2211, 382, 610, 986, 1729, 63, 37], ["4312054", "Marques de Souza", 3511, 608, 682, 1895, 2784, 61, 58], ["4312104", "Mata", 4013, 869, 1019, 1724, 2961, 127, 56], ["4312138", "Mato Castelhano", 3019, 487, 544, 1779, 2471, 28, 33], ["4312153", "Mato Leit\xE3o", 4115, 605, 835, 2153, 3364, 78, 68], ["4312179", "Mato Queimado", 1617, 266, 446, 761, 1314, 21, 16], ["4312203", "Maximiliano de Almeida", 3954, 759, 769, 2090, 3020, 86, 89], ["4312252", "Minas do Le\xE3o", 6369, 1347, 2037, 2272, 4765, 154, 103], ["4312302", "Miragua\xED", 4473, 807, 1647, 1642, 3525, 70, 71], ["4312351", "Montauri", 1514, 231, 187, 935, 1232, 27, 24], ["4312377", "Monte Alegre dos Campos", 3352, 758, 699, 1639, 2483, 77, 34], ["4312385", "Monte Belo do Sul", 3034, 461, 280, 2061, 2498, 31, 44], ["4312401", "Montenegro", 47579, 10686, 11576, 20096, 35296, 897, 700], ["4312427", "Morma\xE7o", 2764, 483, 664, 1417, 2208, 38, 35], ["4312443", "Morrinhos do Sul", 3216, 495, 590, 1783, 2626, 45, 50], ["4312450", "Morro Redondo", 5309, 1098, 1268, 2263, 3971, 149, 91], ["4312476", "Morro Reuter", 5415, 698, 762, 3383, 4560, 62, 95], ["4312500", "Mostardas", 9243, 2301, 2159, 3945, 6559, 176, 207], ["4312609", "Mu\xE7um", 3973, 701, 631, 2246, 3138, 77, 57], ["4312617", "Muitos Cap\xF5es", 2854, 636, 468, 1569, 2139, 62, 17], ["4312625", "Muliterno", 2237, 426, 685, 941, 1728, 57, 26], ["4312658", "N\xE3o-Me-Toque", 13469, 2220, 2279, 8068, 10988, 123, 138], ["4312674", "Nicolau Vergueiro", 2406, 509, 489, 1275, 1846, 30, 21], ["4312708", "Nonoai", 9663, 2159, 2892, 4025, 7257, 120, 127], ["4312757", "Nova Alvorada", 2805, 406, 383, 1760, 2278, 69, 52], ["4312807", "Nova Ara\xE7\xE1", 4136, 698, 542, 2582, 3334, 66, 38], ["4312906", "Nova Bassano", 7205, 1018, 691, 5e3, 6010, 106, 71], ["4312955", "Nova Boa Vista", 2028, 231, 341, 1196, 1736, 33, 28], ["4313003", "Nova Br\xE9scia", 2805, 433, 377, 1740, 2299, 46, 27], ["4313011", "Nova Candel\xE1ria", 2588, 270, 469, 1595, 2233, 37, 48], ["4313037", "Nova Esperan\xE7a do Sul", 4338, 803, 1128, 1906, 3303, 108, 124], ["4313060", "Nova Hartz", 14667, 2300, 3780, 7069, 11877, 249, 241], ["4313086", "Nova P\xE1dua", 2410, 352, 149, 1756, 2018, 18, 22], ["4313102", "Nova Palma", 5060, 872, 1258, 2440, 4049, 62, 77], ["4313201", "Nova Petr\xF3polis", 18127, 2834, 2759, 10409, 14836, 196, 261], ["4313300", "Nova Prata", 18975, 3118, 2606, 11508, 15402, 240, 215], ["4313334", "Nova Ramada", 2039, 309, 448, 1096, 1678, 22, 30], ["4313359", "Nova Roma do Sul", 3182, 447, 392, 2076, 2650, 42, 43], ["4313375", "Nova Santa Rita", 20466, 4554, 5942, 8098, 15362, 295, 255], ["4313391", "Novo Cabrais", 3764, 678, 928, 1828, 2967, 80, 39], ["4313409", "Novo Hamburgo", 174486, 37244, 36361, 84471, 132269, 2543, 2430], ["4313425", "Novo Machado", 3081, 533, 610, 1730, 2478, 43, 27], ["4313441", "Novo Tiradentes", 1973, 338, 605, 845, 1574, 32, 29], ["4313466", "Novo Xingu", 1591, 250, 497, 684, 1281, 38, 22], ["4313490", "Novo Barreiro", 3794, 590, 1260, 1653, 3061, 74, 69], ["4313508", "Os\xF3rio", 37247, 8248, 11064, 13961, 27730, 680, 589], ["4313607", "Paim Filho", 3753, 666, 1145, 1656, 2929, 78, 80], ["4313656", "Palmares do Sul", 10969, 2977, 2816, 4306, 7665, 159, 168], ["4313706", "Palmeira das Miss\xF5es", 24062, 4481, 7100, 10744, 18843, 364, 374], ["4313805", "Palmitinho", 5953, 1e3, 1896, 2464, 4738, 105, 110], ["4313904", "Panambi", 32201, 5616, 5411, 18575, 25809, 396, 380], ["4313953", "Pantano Grande", 8416, 1809, 2970, 2786, 6282, 171, 154], ["4314001", "Para\xED", 5977, 772, 785, 3875, 5040, 106, 59], ["4314027", "Para\xEDso do Sul", 5367, 873, 1082, 2854, 4290, 110, 94], ["4314035", "Pareci Novo", 3442, 555, 497, 2036, 2802, 49, 36], ["4314050", "Parob\xE9", 39009, 6500, 9300, 19437, 31076, 676, 757], ["4314068", "Passa Sete", 3747, 673, 812, 1882, 2921, 101, 52], ["4314076", "Passo do Sobrado", 5251, 759, 1361, 2689, 4339, 91, 62], ["4314100", "Passo Fundo", 150021, 30356, 40293, 65469, 115825, 2159, 1681], ["4314134", "Paulo Bento", 2280, 314, 433, 1310, 1904, 34, 28], ["4314159", "Paverama", 6036, 999, 1536, 2929, 4848, 91, 98], ["4314175", "Pedras Altas", 1976, 492, 778, 567, 1437, 20, 27], ["4314209", "Pedro Os\xF3rio", 6862, 1681, 2661, 1841, 4878, 159, 144], ["4314308", "Peju\xE7ara", 3096, 513, 703, 1627, 2467, 60, 56], ["4314407", "Pelotas", 244459, 50012, 86617, 77399, 183906, 5350, 5191], ["4314423", "Picada Caf\xE9", 4533, 667, 685, 2608, 3744, 36, 86], ["4314456", "Pinhal", 2557, 395, 660, 1294, 2092, 31, 39], ["4314464", "Pinhal da Serra", 2584, 591, 717, 1132, 1925, 45, 23], ["4314472", "Pinhal Grande", 3602, 755, 1043, 1453, 2717, 77, 53], ["4314498", "Pinheirinho do Vale", 3806, 647, 1152, 1685, 3050, 46, 63], ["4314506", "Pinheiro Machado", 9524, 2544, 3527, 2278, 6435, 315, 230], ["4314548", "Pinto Bandeira", 2438, 375, 212, 1664, 2010, 22, 31], ["4314555", "Pirap\xF3", 2336, 626, 772, 741, 1618, 34, 58], ["4314605", "Piratini", 14591, 3467, 5226, 4271, 10329, 495, 300], ["4314704", "Planalto", 7977, 1775, 1998, 3603, 5892, 162, 148], ["4314753", "Po\xE7o das Antas", 2014, 287, 343, 1124, 1653, 32, 42], ["4314779", "Pont\xE3o", 3373, 506, 1088, 1553, 2798, 34, 35], ["4314787", "Ponte Preta", 1828, 204, 322, 1140, 1568, 35, 21], ["4314803", "Port\xE3o", 25742, 5030, 6252, 11690, 19777, 461, 474], ["4314902", "Porto Alegre", 1064200, 255333, 377252, 325139, 776777, 16272, 15818], ["4315008", "Porto Lucena", 3887, 828, 1053, 1698, 2947, 56, 56], ["4315057", "Porto Mau\xE1", 2251, 407, 477, 1215, 1792, 25, 27], ["4315073", "Porto Vera Cruz", 1761, 321, 534, 772, 1400, 21, 19], ["4315107", "Porto Xavier", 7966, 1394, 2501, 3502, 6296, 132, 144], ["4315131", "Pouso Novo", 1660, 302, 434, 780, 1302, 21, 35], ["4315149", "Presidente Lucena", 2670, 324, 365, 1681, 2265, 27, 54], ["4315156", "Progresso", 4932, 719, 1336, 2404, 4039, 83, 91], ["4315172", "Prot\xE1sio Alves", 1939, 303, 198, 1289, 1570, 53, 13], ["4315206", "Putinga", 3807, 875, 401, 2240, 2828, 76, 28], ["4315305", "Quara\xED", 17670, 4353, 5421, 6412, 12754, 313, 250], ["4315313", "Quatro Irm\xE3os", 1733, 328, 374, 907, 1376, 18, 11], ["4315321", "Quevedos", 2385, 608, 745, 826, 1686, 63, 28], ["4315354", "Quinze de Novembro", 3825, 562, 601, 2340, 3183, 31, 49], ["4315404", "Redentora", 6768, 1465, 2952, 1976, 5095, 77, 131], ["4315453", "Relvado", 2167, 461, 366, 1172, 1658, 23, 25], ["4315503", "Restinga Seca", 12277, 2453, 3300, 5487, 9363, 259, 202], ["4315552", "Rio dos \xCDndios", 2854, 630, 1020, 1004, 2138, 55, 31], ["4315602", "Rio Grande", 150202, 41012, 58014, 35752, 103284, 3012, 2894], ["4315701", "Rio Pardo", 28673, 6977, 10011, 8970, 20634, 597, 465], ["4315750", "Riozinho", 4370, 655, 1077, 2117, 3544, 89, 82], ["4315800", "Roca Sales", 7666, 1333, 1534, 4049, 6079, 136, 118], ["4315909", "Rodeio Bonito", 5375, 889, 1567, 2504, 4323, 83, 80], ["4315958", "Rolador", 2396, 440, 786, 972, 1867, 35, 54], ["4316006", "Rolante", 16313, 2451, 3536, 8678, 13333, 289, 240], ["4316105", "Ronda Alta", 7415, 1201, 2594, 3099, 6027, 125, 62], ["4316204", "Rondinha", 4481, 651, 1254, 2236, 3681, 93, 56], ["4316303", "Roque Gonzales", 5416, 932, 1677, 2355, 4295, 94, 95], ["4316402", "Ros\xE1rio do Sul", 31276, 8430, 9877, 10531, 21835, 569, 442], ["4316428", "Sagrada Fam\xEDlia", 2272, 438, 770, 884, 1757, 38, 39], ["4316436", "Saldanha Marinho", 2529, 368, 525, 1475, 2104, 28, 29], ["4316451", "Salto do Jacu\xED", 7867, 1557, 2544, 3107, 6064, 120, 126], ["4316477", "Salvador das Miss\xF5es", 2746, 405, 597, 1501, 2262, 33, 46], ["4316501", "Salvador do Sul", 5640, 831, 841, 3247, 4607, 105, 97], ["4316600", "Sananduva", 13017, 2002, 2539, 7537, 10597, 230, 188], ["4316709", "Santa B\xE1rbara do Sul", 6723, 1140, 1527, 3540, 5354, 139, 90], ["4316733", "Santa Cec\xEDlia do Sul", 1940, 314, 290, 1182, 1580, 30, 16], ["4316758", "Santa Clara do Sul", 5711, 839, 920, 3316, 4685, 90, 97], ["4316808", "Santa Cruz do Sul", 105305, 20300, 24913, 48362, 81458, 2063, 1484], ["4316907", "Santa Maria", 207115, 49064, 63618, 75209, 152003, 3510, 2538], ["4316956", "Santa Maria do Herval", 5271, 571, 994, 2912, 4490, 102, 108], ["4316972", "Santa Margarida do Sul", 2829, 594, 824, 1149, 2145, 52, 38], ["4317004", "Santana da Boa Vista", 6598, 1665, 1937, 2251, 4553, 268, 112], ["4317103", "Sant'Ana do Livramento", 72220, 21324, 23842, 20197, 48688, 1375, 833], ["4317202", "Santa Rosa", 57973, 10550, 11635, 30928, 46180, 687, 556], ["4317251", "Santa Tereza", 1750, 272, 287, 1010, 1408, 31, 39], ["4317301", "Santa Vit\xF3ria do Palmar", 23324, 6771, 7875, 6326, 15616, 513, 424], ["4317400", "Santiago", 39884, 10582, 9291, 16327, 27832, 927, 543], ["4317509", "Santo \xC2ngelo", 58898, 13882, 16042, 24005, 43375, 822, 819], ["4317558", "Santo Ant\xF4nio do Palma", 2077, 316, 488, 1040, 1690, 35, 36], ["4317608", "Santo Ant\xF4nio da Patrulha", 33692, 7315, 8329, 14504, 25036, 744, 597], ["4317707", "Santo Ant\xF4nio das Miss\xF5es", 8347, 1936, 3074, 2674, 6124, 151, 136], ["4317756", "Santo Ant\xF4nio do Planalto", 2163, 260, 341, 1398, 1859, 15, 29], ["4317806", "Santo Augusto", 11312, 2079, 3371, 4965, 8888, 160, 185], ["4317905", "Santo Cristo", 12562, 1610, 3424, 6238, 10571, 182, 199], ["4317954", "Santo Expedito do Sul", 2242, 392, 511, 1148, 1762, 63, 25], ["4318002", "S\xE3o Borja", 46604, 11991, 15418, 15939, 33363, 651, 599], ["4318051", "S\xE3o Domingos do Sul", 2596, 453, 512, 1398, 2057, 48, 38], ["4318101", "S\xE3o Francisco de Assis", 14252, 3079, 4351, 5392, 10403, 493, 277], ["4318200", "S\xE3o Francisco de Paula", 16421, 3614, 4562, 6635, 12062, 443, 302], ["4318309", "S\xE3o Gabriel", 43890, 11812, 13067, 15396, 30760, 770, 548], ["4318408", "S\xE3o Jer\xF4nimo", 15910, 3519, 5154, 5447, 11748, 363, 280], ["4318424", "S\xE3o Jo\xE3o da Urtiga", 4198, 644, 810, 2334, 3339, 147, 68], ["4318432", "S\xE3o Jo\xE3o do Pol\xEAsine", 2578, 499, 583, 1283, 2012, 34, 33], ["4318440", "S\xE3o Jorge", 2437, 292, 253, 1667, 2085, 23, 37], ["4318457", "S\xE3o Jos\xE9 das Miss\xF5es", 2443, 487, 876, 922, 1869, 50, 37], ["4318465", "S\xE3o Jos\xE9 do Herval", 2231, 597, 657, 799, 1558, 33, 43], ["4318481", "S\xE3o Jos\xE9 do Hort\xEAncio", 3728, 474, 527, 2400, 3166, 42, 46], ["4318499", "S\xE3o Jos\xE9 do Inhacor\xE1", 2244, 296, 421, 1264, 1880, 28, 40], ["4318507", "S\xE3o Jos\xE9 do Norte", 20679, 4503, 6408, 7011, 15110, 594, 472], ["4318606", "S\xE3o Jos\xE9 do Ouro", 5762, 891, 1066, 3317, 4666, 121, 84], ["4318614", "S\xE3o Jos\xE9 do Sul", 2065, 286, 305, 1148, 1711, 36, 32], ["4318622", "S\xE3o Jos\xE9 dos Ausentes", 3387, 796, 676, 1726, 2513, 51, 27], ["4318705", "S\xE3o Leopoldo", 162766, 38282, 45762, 63155, 119523, 2601, 2360], ["4318804", "S\xE3o Louren\xE7o do Sul", 35085, 7559, 8855, 15492, 26394, 653, 479], ["4318903", "S\xE3o Luiz Gonzaga", 26267, 6317, 7578, 10241, 19071, 469, 410], ["4319000", "S\xE3o Marcos", 16687, 2595, 2265, 10092, 13501, 286, 305], ["4319109", "S\xE3o Martinho", 4808, 721, 988, 2702, 3946, 79, 62], ["4319125", "S\xE3o Martinho da Serra", 3157, 704, 699, 1460, 2342, 64, 47], ["4319158", "S\xE3o Miguel das Miss\xF5es", 5911, 1205, 1961, 2354, 4504, 103, 99], ["4319208", "S\xE3o Nicolau", 4337, 958, 1705, 1347, 3203, 61, 115], ["4319307", "S\xE3o Paulo das Miss\xF5es", 5214, 887, 1446, 2432, 4186, 65, 76], ["4319356", "S\xE3o Pedro da Serra", 3188, 383, 486, 1958, 2693, 51, 61], ["4319364", "S\xE3o Pedro das Miss\xF5es", 1650, 320, 579, 622, 1252, 41, 37], ["4319372", "S\xE3o Pedro do Buti\xE1", 2665, 445, 604, 1356, 2132, 39, 49], ["4319406", "S\xE3o Pedro do Sul", 12686, 2753, 3355, 5223, 9413, 320, 200], ["4319505", "S\xE3o Sebasti\xE3o do Ca\xED", 17536, 3356, 3933, 8474, 13623, 288, 269], ["4319604", "S\xE3o Sep\xE9", 17079, 3793, 5763, 5883, 12651, 361, 274], ["4319703", "S\xE3o Valentim", 3073, 527, 676, 1668, 2459, 50, 37], ["4319711", "S\xE3o Valentim do Sul", 2224, 406, 318, 1310, 1761, 36, 21], ["4319737", "S\xE3o Val\xE9rio do Sul", 2348, 423, 1007, 829, 1874, 21, 30], ["4319752", "S\xE3o Vendelino", 2409, 336, 448, 1361, 2008, 35, 30], ["4319802", "S\xE3o Vicente do Sul", 6760, 1510, 2089, 2504, 5e3, 142, 108], ["4319901", "Sapiranga", 61250, 10949, 14701, 30509, 48600, 883, 818], ["4320008", "Sapucaia do Sul", 102445, 25646, 31819, 34384, 73308, 1897, 1594], ["4320107", "Sarandi", 17132, 2670, 3943, 9283, 14061, 209, 192], ["4320206", "Seberi", 9356, 1544, 2481, 4597, 7530, 157, 125], ["4320230", "Sede Nova", 2508, 392, 756, 1128, 2038, 34, 44], ["4320263", "Segredo", 5695, 1032, 1428, 2685, 4462, 125, 76], ["4320305", "Selbach", 4334, 665, 732, 2616, 3566, 61, 42], ["4320321", "Senador Salgado Filho", 2669, 370, 525, 1630, 2257, 14, 28], ["4320354", "Sentinela do Sul", 4237, 866, 1155, 1701, 3169, 128, 74], ["4320404", "Serafina Corr\xEAa", 12678, 1931, 2022, 7636, 10359, 176, 212], ["4320453", "S\xE9rio", 2072, 357, 471, 974, 1632, 53, 30], ["4320503", "Sert\xE3o", 5015, 733, 1105, 2791, 4154, 64, 64], ["4320552", "Sert\xE3o Santana", 5324, 1008, 936, 2838, 4167, 85, 64], ["4320578", "Sete de Setembro", 1804, 300, 497, 813, 1427, 43, 34], ["4320602", "Severiano de Almeida", 3414, 503, 769, 1775, 2791, 62, 58], ["4320651", "Silveira Martins", 2147, 402, 534, 1012, 1665, 42, 38], ["4320677", "Sinimbu", 6825, 1061, 1685, 3212, 5519, 114, 131], ["4320701", "Sobradinho", 10579, 1987, 2391, 5113, 8229, 202, 161], ["4320800", "Soledade", 21730, 4155, 6171, 9715, 16931, 324, 320], ["4320859", "Taba\xED", 4093, 749, 1283, 1720, 3194, 75, 75], ["4320909", "Tapejara", 17490, 2665, 2582, 10789, 14363, 230, 232], ["4321006", "Tapera", 7887, 1317, 1984, 3995, 6362, 82, 126], ["4321105", "Tapes", 11792, 2706, 3630, 4484, 8672, 222, 192], ["4321204", "Taquara", 41562, 8848, 8613, 20632, 31468, 695, 551], ["4321303", "Taquari", 19310, 3642, 5281, 8542, 14938, 462, 268], ["4321329", "Taquaru\xE7u do Sul", 2822, 401, 902, 1314, 2328, 47, 46], ["4321352", "Tavares", 4533, 1046, 1295, 1768, 3297, 87, 103], ["4321402", "Tenente Portela", 10706, 2034, 3571, 4251, 8401, 109, 162], ["4321436", "Terra de Areia", 7779, 1581, 1813, 3645, 5912, 151, 135], ["4321451", "Teut\xF4nia", 25631, 4361, 5397, 12830, 20455, 403, 412], ["4321469", "Tio Hugo", 2707, 419, 679, 1381, 2219, 34, 35], ["4321477", "Tiradentes do Sul", 4724, 997, 1501, 1849, 3537, 93, 97], ["4321493", "Toropi", 2745, 507, 623, 1347, 2130, 69, 39], ["4321501", "Torres", 33260, 7689, 7838, 14294, 24446, 503, 622], ["4321600", "Tramanda\xED", 39076, 10910, 9978, 14578, 26991, 632, 543], ["4321626", "Travesseiro", 1983, 238, 529, 964, 1676, 29, 40], ["4321634", "Tr\xEAs Arroios", 2549, 414, 455, 1447, 2054, 43, 38], ["4321667", "Tr\xEAs Cachoeiras", 8189, 1227, 1415, 4933, 6780, 89, 93], ["4321709", "Tr\xEAs Coroas", 17414, 2764, 3575, 9276, 14053, 326, 271], ["4321808", "Tr\xEAs de Maio", 18415, 2834, 3746, 10293, 15148, 261, 172], ["4321832", "Tr\xEAs Forquilhas", 3297, 638, 881, 1512, 2562, 53, 44], ["4321857", "Tr\xEAs Palmeiras", 4078, 752, 1455, 1571, 3176, 78, 72], ["4321907", "Tr\xEAs Passos", 18437, 3231, 5231, 8260, 14624, 249, 333], ["4321956", "Trindade do Sul", 5879, 1157, 1844, 2426, 4522, 97, 103], ["4322004", "Triunfo", 21936, 4865, 5411, 9513, 16294, 409, 368], ["4322103", "Tucunduva", 4755, 723, 942, 2754, 3926, 39, 67], ["4322152", "Tunas", 3346, 588, 1245, 1260, 2635, 66, 57], ["4322186", "Tupanci do Sul", 1474, 303, 281, 749, 1097, 57, 17], ["4322202", "Tupanciret\xE3", 15943, 3593, 4616, 6549, 11865, 278, 207], ["4322251", "Tupandi", 4296, 562, 501, 2814, 3640, 56, 38], ["4322301", "Tuparendi", 7111, 1137, 1140, 4244, 5811, 80, 83], ["4322327", "Turu\xE7u", 3449, 630, 669, 1865, 2706, 54, 59], ["4322343", "Ubiretama", 1894, 244, 369, 1095, 1594, 30, 26], ["4322350", "Uni\xE3o da Serra", 1523, 247, 228, 915, 1241, 22, 13], ["4322376", "Unistalda", 2687, 623, 750, 1134, 1981, 56, 27], ["4322400", "Uruguaiana", 84488, 23965, 18875, 35208, 58711, 1045, 767], ["4322509", "Vacaria", 47383, 10465, 8729, 24190, 35399, 932, 587], ["4322525", "Vale Verde", 3292, 732, 805, 1408, 2415, 73, 72], ["4322533", "Vale do Sol", 8086, 1377, 1847, 3830, 6280, 271, 158], ["4322541", "Vale Real", 4872, 717, 1005, 2574, 4006, 85, 64], ["4322558", "Vanini", 2018, 331, 361, 1142, 1608, 56, 23], ["4322608", "Ven\xE2ncio Aires", 53327, 10298, 11182, 26076, 41071, 1068, 890], ["4322707", "Vera Cruz", 19445, 2620, 5035, 9537, 16015, 426, 384], ["4322806", "Veran\xF3polis", 18621, 3040, 2264, 11559, 15045, 280, 256], ["4322855", "Vespasiano Correa", 2485, 434, 203, 1659, 2003, 38, 10], ["4322905", "Viadutos", 4028, 618, 748, 2347, 3285, 69, 56], ["4323002", "Viam\xE3o", 161662, 38350, 53863, 51080, 116299, 3858, 3155], ["4323101", "Vicente Dutra", 3837, 796, 971, 1831, 2923, 64, 54], ["4323200", "Victor Graeff", 2531, 404, 443, 1490, 2075, 23, 29], ["4323309", "Vila Flores", 3442, 473, 456, 2205, 2888, 46, 35], ["4323358", "Vila L\xE2ngaro", 2175, 307, 347, 1354, 1802, 35, 31], ["4323408", "Vila Maria", 3675, 556, 690, 2187, 3020, 53, 46], ["4323457", "Vila Nova do Sul", 3746, 836, 1314, 1246, 2744, 99, 67], ["4323507", "Vista Alegre", 2612, 442, 797, 1175, 2093, 30, 47], ["4323606", "Vista Alegre do Prata", 1657, 261, 191, 978, 1338, 28, 30], ["4323705", "Vista Ga\xFAcha", 2652, 472, 726, 1215, 2094, 37, 49], ["4323754", "Vit\xF3ria das Miss\xF5es", 3443, 698, 1121, 1406, 2658, 43, 44], ["4323770", "Westfalia", 2689, 350, 402, 1594, 2270, 46, 23], ["4323804", "Xangri-l\xE1", 14765, 3041, 2886, 7703, 11454, 133, 137]];

// site/mapa-da-virada-rs/functions/api/argumentos.js
var { byId, UF } = prepData(ROWS);
var MODELOS = ["@cf/google/gemma-4-26b-a4b-it", "@cf/meta/llama-3.1-8b-instruct-fp8-fast"];
var JANELA_MS = 5 * 60 * 1e3;
var MAX_POR_JANELA = 12;
var visitas = /* @__PURE__ */ new Map();
var json = (obj, status = 200, extra = {}) => new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", ...extra } });
var limpa = (s, n) => String(s || "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, n);
async function onRequestPost(context) {
  const { request, env } = context;
  const ip = request.headers.get("cf-connecting-ip") || "?";
  const agora = Date.now();
  const v = (visitas.get(ip) || []).filter((t) => agora - t < JANELA_MS);
  if (v.length >= MAX_POR_JANELA) return json({ codigo: "devagar" }, 429);
  v.push(agora);
  visitas.set(ip, v);
  if (visitas.size > 5e3) visitas.clear();
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ codigo: "entrada" }, 400);
  }
  const d = body.id ? byId.get(String(body.id)) || null : null;
  const p = {
    bairro: limpa(body.bairro, 80),
    prob: limpa(body.prob, 300),
    pub: PUBLICOS.includes(body.pub) ? body.pub : PUBLICOS[0],
    mode: body.mode === "neutro" ? "neutro" : "lula",
    gaucho: !!body.gaucho,
    tom: ["duro", "firme", "leve"].includes(body.tom) ? body.tom : "firme"
  };
  if (!env.AI) return json({ codigo: "sem_ia" }, 503);
  const chave = JSON.stringify(["v4", d ? d.id : null, p.bairro.toLowerCase(), p.prob.toLowerCase(), p.pub, p.mode, p.gaucho, p.tom, body.nova ? Date.now() : 0]);
  const hash = [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(chave)))].map((b) => b.toString(16).padStart(2, "0")).join("");
  const cacheReq = new Request("https://cache.mapa-da-virada/argumentos/" + hash);
  const cache = caches.default;
  const emCache = await cache.match(cacheReq);
  if (emCache) return emCache;
  const prompt = buildPrompt(p, d, UF);
  const erros = [];
  for (const modelo of MODELOS) {
    try {
      const params = {
        messages: [{ role: "user", content: prompt }],
        // Folga para não cortar o JSON caso o modelo "pense" antes de responder.
        max_completion_tokens: 3e3,
        max_tokens: 3e3,
        temperature: 0.7
      };
      if (modelo.includes("gemma")) params.chat_template_kwargs = { enable_thinking: false };
      const out = await env.AI.run(modelo, params);
      const texto = typeof out === "string" ? out : out?.response ?? out?.choices?.[0]?.message?.content ?? out?.result?.response ?? out;
      const res = parseJSON(texto);
      if (res) {
        const resp = json({ ...res, modelo, uso: out?.usage?.neurons ?? null }, 200, { "cache-control": "public, max-age=86400" });
        context.waitUntil(cache.put(cacheReq, resp.clone()));
        return resp;
      }
      const fim = out?.choices?.[0]?.finish_reason ? " (fim: " + out.choices[0].finish_reason + ")" : "";
      erros.push(modelo + " devolveu formato inesperado" + fim + ": " + (typeof texto === "string" ? texto : JSON.stringify(texto)).slice(0, 200));
    } catch (e) {
      const msg = String(e && e.message || e);
      erros.push(modelo + ": " + msg.slice(0, 160));
      if (/neuron|quota|4006|daily free allocation/i.test(msg)) return json({ codigo: "cota" }, 429);
    }
  }
  return json({ codigo: "falha", detalhe: erros.join(" | ").slice(0, 400) }, 502);
}

// worker/entry.js
var entry_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/api/argumentos") {
      const origem = request.headers.get("origin") || "";
      const permitido = ["https://welerson-py.github.io", "https://mapa-da-virada-rs.pages.dev"].includes(origem) || /\.mapa-da-virada-rs\.pages\.dev$/.test(origem);
      const cors = permitido ? { "access-control-allow-origin": origem, "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type", "vary": "origin" } : {};
      if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
      if (request.method === "POST") {
        const r = await onRequestPost({ request, env, waitUntil: (p) => ctx.waitUntil(p) });
        const h = new Headers(r.headers);
        for (const [k, v] of Object.entries(cors)) h.set(k, v);
        return new Response(r.body, { status: r.status, headers: h });
      }
      if (request.method !== "POST")
        return new Response(JSON.stringify({ uso: "POST /api/argumentos" }), { status: 405, headers: { allow: "POST", "content-type": "application/json" } });
      return onRequestPost({ request, env, waitUntil: (p) => ctx.waitUntil(p) });
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  entry_default as default
};
