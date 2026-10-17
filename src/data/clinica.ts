/**
 * DADOS DA CLÍNICA — ARQUIVO PRINCIPAL DE EDIÇÃO
 * Para trocar textos, telefone, WhatsApp, CRO, serviços e perguntas,
 * edite apenas este arquivo. Os componentes leem tudo daqui.
 *
 * Atenção (normas CFO/CRO): não prometer resultados, não usar "antes e depois",
 * não divulgar preços/promoções e não usar superlativos ("o melhor", "100% garantido").
 */

export const clinica = {
  nome: "Clínica Sorriso Saudável", // TROCAR
  slogan: "Cuidado odontológico com atenção a cada detalhe",
  descricao:
    "Clínica odontológica com atendimento humanizado, tecnologia e avaliação individual para cada paciente.",
  // WhatsApp somente números, com DDI + DDD (ex.: 5551999999999)
  whatsapp: "5551999999999", // TROCAR
  whatsappExibicao: "(51) 99999-9999", // TROCAR
  telefoneExibicao: "(51) 3000-0000", // TROCAR
  telefoneLink: "+555130000000", // TROCAR
  email: "contato@suaclinica.com.br", // TROCAR
  endereco: "Rua Exemplo, 123 - Centro, Torres - RS", // TROCAR
  horario: "Segunda a sexta, das 8h às 18h", // TROCAR
  croClinica: "CRO-RS 00000", // TROCAR (registro da clínica/responsável técnico)
  responsavelTecnico: "Dra. Nome Sobrenome", // TROCAR
  croResponsavel: "CRO-RS 00000", // TROCAR
  instagram: "https://instagram.com/suaclinica", // TROCAR
  facebook: "https://facebook.com/suaclinica", // TROCAR
  // Link "Incorporar mapa" do Google Maps (copie o src do iframe)
  mapsEmbed:
    "https://www.google.com/maps?q=Torres+RS&output=embed", // TROCAR
  mensagemWhatsapp:
    "Olá! Vim pelo site e gostaria de agendar uma avaliação.",
};

export const tratamentos = [
  {
    titulo: "Implantes dentários",
    texto: "Reposição de dentes ausentes com planejamento individualizado após avaliação clínica.",
    icone: "🦷",
  },
  {
    titulo: "Clareamento dental",
    texto: "Indicação e acompanhamento profissional para o clareamento adequado a cada caso.",
    icone: "✨",
  },
  {
    titulo: "Ortodontia",
    texto: "Avaliação do alinhamento dos dentes e da mordida, com o tratamento indicado pelo profissional.",
    icone: "😁",
  },
  {
    titulo: "Facetas e lentes",
    texto: "Procedimentos estéticos indicados conforme a análise clínica e a necessidade do paciente.",
    icone: "💎",
  },
  {
    titulo: "Limpeza e prevenção",
    texto: "Consultas de rotina, profilaxia e orientações para a saúde bucal no dia a dia.",
    icone: "🪥",
  },
  {
    titulo: "Tratamento de canal",
    texto: "Atendimento endodôntico com avaliação, diagnóstico e acompanhamento.",
    icone: "🩺",
  },
];

export const sobre = {
  titulo: "Conheça a clínica",
  textos: [
    "Nossa clínica foi pensada para que você se sinta acolhido desde a chegada. Contamos com ambiente confortável, equipamentos atualizados e uma equipe que explica cada etapa do tratamento.",
    "Cada atendimento começa com uma avaliação clínica, que orienta o plano de cuidado indicado para o seu caso.",
  ],
  // Equipe — TROCAR nomes e CROs reais
  equipe: [
    { nome: "Dra. Nome Sobrenome", funcao: "Responsável técnica • Implantodontia", cro: "CRO-RS 00000" },
    { nome: "Dr. Nome Sobrenome", funcao: "Ortodontia", cro: "CRO-RS 00000" },
    { nome: "Dra. Nome Sobrenome", funcao: "Clínica geral e prevenção", cro: "CRO-RS 00000" },
  ],
};

export const diferenciais = [
  { titulo: "Atendimento humanizado", texto: "Escuta atenta, linguagem simples e respeito ao seu tempo.", icone: "🤝" },
  { titulo: "Tecnologia", texto: "Equipamentos modernos que auxiliam no diagnóstico e no planejamento.", icone: "🔬" },
  { titulo: "Conforto", texto: "Ambiente acolhedor para tornar a consulta mais tranquila.", icone: "🛋️" },
  { titulo: "Qualidade e biossegurança", texto: "Protocolos de esterilização e higiene seguidos em todos os atendimentos.", icone: "🛡️" },
];

export const etapas = [
  { titulo: "Primeiro contato", texto: "Você nos chama pelo WhatsApp ou preenche o formulário." },
  { titulo: "Agendamento", texto: "Combinamos o melhor dia e horário para a sua avaliação." },
  { titulo: "Avaliação", texto: "O profissional examina, conversa com você e explica as opções." },
  { titulo: "Plano de cuidado", texto: "Se indicado, você recebe orientações sobre as próximas etapas." },
];

export const faqs = [
  {
    pergunta: "Como agendo uma consulta?",
    resposta: "Clique no botão de WhatsApp, envie uma mensagem e nossa equipe confirma o melhor horário. Também é possível usar o formulário ou ligar.",
  },
  {
    pergunta: "A primeira consulta serve para quê?",
    resposta: "É uma avaliação clínica para conhecer sua saúde bucal e orientar qual tratamento, se necessário, é indicado para você.",
  },
  {
    pergunta: "Quanto tempo dura um tratamento?",
    resposta: "O tempo varia conforme cada caso. Somente após a avaliação o profissional consegue orientar sobre prazos.",
  },
  {
    pergunta: "O tratamento é indicado para todos?",
    resposta: "Cada procedimento tem indicações e limitações. Por isso, a avaliação individual é sempre necessária.",
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta: "As condições são informadas pela equipe durante o atendimento. Fale conosco pelo WhatsApp para saber mais.",
  },
  {
    pergunta: "Como meus dados são tratados?",
    resposta: "Seguimos a Lei Geral de Proteção de Dados (LGPD). Veja os detalhes na nossa Política de Privacidade.",
  },
];
