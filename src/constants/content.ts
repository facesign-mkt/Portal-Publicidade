export const WHATSAPP_LINK = "https://wa.me/5517981313671?text=Gostaria%20de%20um%20or%C3%A7amento%20dos%20pain%C3%A9is%20de%20publicidade!";

export const CONTENT = {
  hero: {
    overline: "Outdoor Digital em Votuporanga",
    title: "Coloque a sua marca onde Votuporanga não para de olhar.",
    subtitle: "Dois painéis digitais nos cruzamentos mais movimentados da cidade. Atenção total para o seu negócio no trânsito, sem competir com a tela do celular.",
    cta: "Falar no WhatsApp",
    whatsappMessage: "Vim do site - quero saber mais sobre os painéis",
  },
  stats: {
    items: [
      { value: 1, suffix: "MM+", label: "Visualizações por mês" },
      { value: 18, suffix: "h", label: "Horas de tela por dia" },
      { value: 2, suffix: "", label: "Pontos estratégicos" },
      { value: 144, suffix: "x", label: "Exibições diárias da marca" }
    ]
  },
  problem: {
    title: "Quanto custa não ser visto?",
    text: "O anúncio no celular é ignorado rapidamente. O rádio perde a atenção. O panfleto vai para o lixo. Mas o seu cliente, agora, está parado no semáforo. Olhando para a frente. Por até 60 segundos. Sua marca pode estar lá."
  },
  howItWorks: {
    title: "Como funciona",
    steps: [
      {
        icon: "MessageCircle",
        title: "Você manda mensagem no WhatsApp",
        description: "Conversa rápida com nossa equipe para entender seu momento."
      },
      {
        icon: "Wand2",
        title: "Nós criamos o seu vídeo — ou recebemos o seu",
        description: "Se não tiver o material pronto, nosso time produz para você."
      },
      {
        icon: "MonitorPlay",
        title: "Sua marca no ar, todo dia, no centro da cidade",
        description: "Sua empresa rodando com altíssima frequência nos pontos mais nobres."
      }
    ],
    whatsappMessage: "Vim do site - quero saber como começar"
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Posso entregar minha arte/vídeo já pronto?", a: "Sim. Se você ou sua agência já têm o material, basta enviar no formato indicado e nós colocamos no ar." },
      { q: "Vocês produzem o vídeo se eu não tiver?", a: "Sim! Produzimos a sua vinheta de 15 segundos inclusa no pacote." },
      { q: "Quantas vezes minha marca aparece por dia?", a: "Sua marca é exibida 144 vezes por dia em cada painel. É uma repetição que faz a sua marca ser lembrada." },
      { q: "Posso anunciar em só um dos painéis?", a: "Sim. Você pode escolher focar em apenas uma das rotas ou dominar a cidade com os dois." },
      { q: "Em quanto tempo minha marca entra no ar?", a: "Tendo a vinheta pronta e aprovada, sua marca pode estar no ar no mesmo dia." },
      { q: "E se eu quiser trocar a vinheta no meio do mês?", a: "Sem problemas. A agilidade da tela digital permite que você troque de oferta ou campanha sempre que precisar." },
      { q: "Funciona pra negócio pequeno ou só pra marca grande?", a: "Temos desde lojistas de bairro e profissionais liberais até franquias nacionais. Se você quer vender em Votuporanga, o painel é para você." }
    ]
  },
  calculator: {
    title: "Calcule o tamanho do seu impacto",
    cta: "Enviar simulação para o WhatsApp",
    getWhatsappMessage: (months: number, diffContext: string, impressions: number) => 
      `Vim do site - simulei ${months} meses, ${diffContext}, resultou em ${impressions.toLocaleString('pt-BR')} visualizações. Quero saber mais.`
  },
  finalCta: {
    title: "Pronto para entrar na rota da cidade?",
    subtitle: "Conversa rápida no WhatsApp. Sem compromisso, sem pressão.",
    cta: "Quero destacar minha marca",
    alert: "Vagas limitadas - Poucas unidades disponíveis",
    whatsappMessage: "Vim do site - quero colocar minha marca na rota da cidade"
  },
  footer: {
    tagline: "Outdoor digital em Votuporanga",
    address: "Av. Nasser Marão x Av. Dep. Aureo Ferreira | Av. José Marão Filho x Av. Brasil",
    email: "contato@portalpublicidade.com",
    phone: "(17) 98131-3671"
  },
  floatWhatsapp: {
    tooltip: "Falar agora",
    whatsappMessage: "Vim do site - WhatsApp flutuante"
  }
};
