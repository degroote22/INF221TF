import * as fs from "fs";

const Obrigatorias = [
  { cod: "INF499", name: "Seminário II" },
  { cod: "INF421", name: "Sistemas de Informação" },
  { cod: "INF498", name: "Seminário I" },
  { cod: "INF496", name: "Projeto Final de Curso" },
  { cod: "INF452", name: "Redes de Computadores" },
  { cod: "INF322", name: "Banco de Dados II" },
  { cod: "INF451", name: "Sistemas Operacionais" },
  { cod: "INF441", name: "Construção de Compiladores" },
  { cod: "INF390", name: "Computação Gráfica" },
  { cod: "INF323", name: "Engenharia de Software II" },
  { cod: "INF310", name: "Programação Concorrente e Distribuída" },
  { cod: "INF450", name: "Organização de Computadores II" },
  { cod: "INF420", name: "Inteligência Artificial I" },
  { cod: "INF340", name: "Linguagens de Programação" },
  { cod: "INF331", name: "Linguagens Formais e Autômatos" },
  { cod: "INF221", name: "Engenharia de Software I" },
  { cod: "INF332", name: "Projeto e Análise de Algoritmos" },
  { cod: "INF330", name: "Teoria e Modelos de Grafos" },
  { cod: "INF251", name: "Organização de Computadores I" },
  { cod: "INF220", name: "Banco de Dados I" },
  { cod: "FIS225", name: "Laboratório de Física B" },
  { cod: "FIS203", name: "Física III" },
  { cod: "MAT271", name: "Cálculo Numérico" },
  { cod: "MAT241", name: "Cálculo III" },
  { cod: "INF280", name: "Pesquisa Operacional I" },
  { cod: "INF213", name: "Estrutura de Dados" },
  { cod: "FIS224", name: "Laboratório de Física A" },
  { cod: "FIS201", name: "Física I" },
  { cod: "MAT147", name: "Cálculo II" },
  { cod: "MAT135", name: "Geometria Analítica e Álgebra Linear" },
  { cod: "INF130", name: "Teoria da Computação" },
  { cod: "INF112", name: "Programação II" },
  { cod: "EST105", name: "Iniciação à Estatística" },
  { cod: "MAT140", name: "Cálculo I" },
  { cod: "MAT131", name: "Introdução à Álgebra" },
  { cod: "LET215", name: "Inglês I" },
  { cod: "INF191", name: "Introdução à Ciência da Computação" },
  { cod: "INF110", name: "Programação I" }
];

const Optativas = [
  { cod: "MAT336", name: "Álgebra Linear I" },
  { cod: "MAT152", name: "Geometria Analítica" },
  { cod: "LET290", name: "LIBRAS Língua Brasileira de Sinais" },
  { cod: "INF495", name: "Informática e Sociedade" },
  { cod: "INF494", name: "Tópicos Especiais IV" },
  { cod: "INF493", name: "Tópicos Especiais III" },
  { cod: "INF492", name: "Tópicos Especiais II" },
  { cod: "INF491", name: "Tópicos Especiais I" },
  {
    cod: "INF490",
    name: "Empreendimentos em Tecnologia da Informação"
  },
  { cod: "INF485", name: "Simulação" },
  { cod: "INF455", name: "Computação Móvel" },
  {
    cod: "INF442",
    name: "Padrões de Projeto e Programação Orientada a Aspectos"
  },
  { cod: "INF430", name: "Gerência de Projetos de Software I" },
  { cod: "INF423", name: "Inteligência Artificial II" },
  { cod: "INF394", name: "Processamento Digital de Imagens" },
  { cod: "INF350", name: "Circuitos Digitais" },
  { cod: "INF321", name: "Projeto de Sistemas para a Web" },
  { cod: "INF294", name: "Atividades Complementares V" },
  { cod: "INF293", name: "Atividades Complementares IV" },
  { cod: "INF292", name: "Atividades Complementares III" },
  { cod: "INF291", name: "Atividades Complementares II" },
  { cod: "INF290", name: "Atividades Complementares I" },
  { cod: "INF282", name: "Pesquisa Operacional III" },
  { cod: "INF281", name: "Pesquisa Operacional II" },
  {
    cod: "INF216",
    name: "Projeto e Implementação de Jogos Digitais"
  },
  { cod: "INF115", name: "Programação Funcional" },
  { cod: "FIS391", name: "Eletrônica Instrumental" },
  { cod: "FIS202", name: "Física II" },
  { cod: "EST411", name: "Inferência" },
  { cod: "EST410", name: "Probabilidade" },
  { cod: "EST220", name: "Estatística Experimental" },
  { cod: "ERU324", name: "Metodologia de Pesquisa" },
  { cod: "ELT460", name: "Inteligência Computacional" },
  { cod: "ELT434", name: "Robótica" },
  { cod: "EDU315", name: "Psicologia e Administração" },
  { cod: "EDU314", name: "Dinâmica de Grupo" },
  { cod: "EDU127", name: "Filosofia da Ciência" },
  { cod: "EDU110", name: "Psicologia" },
  { cod: "ECO448", name: "Economia Brasileira" },
  { cod: "ECO270", name: "Introdução à Economia" },
  { cod: "EAM451", name: "Sistema de Informação Geográfica" },
  {
    cod: "EAM432",
    name: "Organização de Materiais Cartográficos"
  },
  { cod: "DIR130", name: "Instituições de Direito" },
  { cod: "CCO100", name: "Contabilidade Geral" },
  { cod: "BIO131", name: "Ecologia Básica" },
  { cod: "ARQ301", name: "Sistemas CAD na Arquitetura" },
  {
    cod: "ADM392",
    name: "Identificação e Viabilização de Oportunidades de Negócios"
  },
  { cod: "ADM345", name: "Sistemas de Informação Gerencial" },
  { cod: "ADM328", name: "Administração da Produção e Materiais" },
  { cod: "ADM309", name: "Organização Sistemas e Métodos" },
  { cod: "ADM308", name: "Administração Municipal" },
  { cod: "ADM305", name: "Gestão de Pessoas" },
  { cod: "ADM250", name: "Matemática Financeira" },
  { cod: "ADM101", name: "Teoria Geral da Administração II" },
  { cod: "ADM100", name: "Teoria Geral da Administração I" }
];

const _optativas = Optativas.map((x, index) => {
  return `
ccpopt${index}: createUfvClass(
    data: {
    cod: "${x.cod}"
    name: "${x.name}"
    optional: true
    useful: 0
    easy: 0
    recommended: 0
    reviews: {}
    }
) {
    id
}
`;
}).join("\n");

const _obrigatorias = Obrigatorias.map((x, index) => {
  return `
ccpobr${index}: createUfvClass(
    data: {
    cod: "${x.cod}"
    name: "${x.name}"
    optional: false
    useful: 0
    easy: 0
    recommended: 0
    reviews: {}
    }
) {
    id
}
`;
}).join("\n");
const finalize = (x: string) => {
  return `
mutation CreateClasses {
    ${x}
}
`;
};
fs.writeFileSync(
  "seed2.graphql",
  finalize([_optativas, _obrigatorias].join("\n"))
);
