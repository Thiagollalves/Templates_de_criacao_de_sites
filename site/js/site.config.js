const SITE_TEMPLATE_CONFIG = {
  theme: "magalu",
  seo: {
    siteName: "Magalu",
    defaultTitle: "Magalu | Pra voce e Magalu!",
    defaultDescription:
      "Conheca categorias em destaque, beneficios e canais oficiais. Este site e um template institucional inspirado no ecossistema Magalu.",
    baseUrl: "https://www.magazineluiza.com.br",
    favicon: "/assets/favicon-magalu.svg",
    ogImage: "/assets/og-magalu.svg",
    pages: {
      home: {
        title: "Magalu | Pra voce e Magalu!",
        description: "Ofertas, categorias em destaque e atalhos para os canais oficiais.",
        path: "/",
      },
      landing: {
        title: "App Magalu | Baixe o app",
        description: "Acesse ofertas e acompanhe pedidos pelo app oficial.",
        path: "/landing.html",
      },
      company: {
        title: "Sobre o Magalu",
        description: "Resumo institucional e pilares do ecossistema Magalu.",
        path: "/pages/company.html",
      },
      showcase: {
        title: "Departamentos | Magalu",
        description: "Lista de departamentos e atalhos para categorias principais.",
        path: "/pages/showcase.html",
      },
      docs: {
        title: "Seguranca e informacoes | Magalu",
        description: "Canais oficiais e referencias de seguranca (anti-fraude).",
        path: "/pages/docs.html",
      },
    },
  },
  brand: {
    name: "Magalu",
    shortName: "Magalu",
    eyebrow: "Marketplace e varejo",
    tagline: "Tem no Magalu",
    summary:
      "Um ecossistema de varejo e marketplace com categorias para casa e dia a dia, alem de servicos e canais digitais.",
    location: "Brasil",
    legalName: "Magazine Luiza S/A - CNPJ: 47.960.950/1088-36",
    foundedLabel: "Franca/SP",
    footerNote:
      "Este e um template institucional para fins de criacao/briefing. Para compras, acesse o site oficial.",
  },
  navigation: {
    items: [
      { label: "Inicio", href: "/", page: "home", enabled: true },
      { label: "Departamentos", href: "/pages/showcase.html", page: "showcase", enabled: true },
      { label: "App Magalu", href: "/landing.html", page: "landing", enabled: true },
      { label: "Sobre", href: "/pages/company.html", page: "company", enabled: true },
      { label: "Seguranca", href: "/pages/docs.html", page: "docs", enabled: true },
    ],
    footerGroups: [
      {
        title: "Departamentos",
        items: [
          { label: "Celulares e Smartphones", href: "/pages/showcase.html#celulares" },
          { label: "TV e Video", href: "/pages/showcase.html#tv" },
          { label: "Eletrodomesticos", href: "/pages/showcase.html#eletro" },
          { label: "Moveis", href: "/pages/showcase.html#moveis" },
        ],
      },
      {
        title: "Ajuda",
        items: [
          { label: "Atendimento", href: "https://atendimento.magazineluiza.com.br/" },
          { label: "Sites oficiais", href: "https://especiais.magazineluiza.com.br/seguranca/sites-oficiais/" },
          { label: "Seguranca da informacao", href: "https://especiais.magazineluiza.com.br/seguranca/" },
        ],
      },
      {
        title: "Institucional",
        items: [
          { label: "Site oficial", href: "https://www.magazineluiza.com.br/" },
          { label: "Baixar app", href: "https://www.magazineluiza.com.br/" },
          { label: "Lojas", href: "https://www.magazineluiza.com.br/" },
        ],
      },
    ],
    cta: {
      label: "Ir para o site oficial",
      href: "https://www.magazineluiza.com.br/",
    },
  },
  home: {
    hero: {
      eyebrow: "Pra voce e Magalu",
      title: "Ofertas e variedade",
      highlight: "para casa e dia a dia.",
      description:
        "Uma home institucional com atalhos para categorias, beneficios e canais oficiais. Para comprar, acesse o site oficial.",
      primaryCta: {
        label: "Ver ofertas",
        href: "https://www.magazineluiza.com.br/",
      },
      secondaryCta: {
        label: "Ver departamentos",
        href: "/pages/showcase.html",
      },
      imageAlt: "Banner institucional Magalu",
      signals: [
        { title: "Atendimento", detail: "0800 773 3838 (seg a dom, 8h-20h, exceto feriados)" },
        { title: "Seguranca", detail: "Como evitar fraudes e confirmar canais oficiais" },
        { title: "App Magalu", detail: "Ofertas, pedidos e recursos do ecossistema no app" },
      ],
    },
    statsIntro: {
      eyebrow: "Categorias",
      title: "Departamentos em destaque.",
      description: "Atalhos para categorias populares do site oficial.",
    },
    stats: [
      { value: "TE", label: "Celulares", detail: "Celulares e Smartphones" },
      { value: "ET", label: "TV e Video", detail: "TVs, streaming e acessorios" },
      { value: "ED", label: "Eletro", detail: "Geladeiras, lavadoras, cozinha" },
      { value: "MO", label: "Moveis", detail: "Sofas, armarios e cozinhas" },
    ],
    services: {
      eyebrow: "Departamentos",
      title: "Principais categorias para navegar.",
      description: "Escolha uma categoria para abrir no site oficial.",
      items: [
        {
          title: "Celulares e Smartphones",
          description: "iPhone, Samsung, Xiaomi e mais.",
          cta: { label: "Abrir", href: "https://www.magazineluiza.com.br/celulares-e-smartphones/l/te/" },
        },
        {
          title: "TV e Video",
          description: "TVs e acessorios.",
          cta: { label: "Abrir", href: "https://www.magazineluiza.com.br/tv-e-video/l/et/" },
        },
        {
          title: "Eletrodomesticos",
          description: "Cozinha, lavanderia e refrigeracao.",
          cta: { label: "Abrir", href: "https://www.magazineluiza.com.br/eletrodomesticos/l/ed/" },
        },
        {
          title: "Moveis",
          description: "Casa completa: sala, quarto e cozinha.",
          cta: { label: "Abrir", href: "https://www.magazineluiza.com.br/moveis/l/mo/" },
        },
      ],
    },
    portfolio: {
      eyebrow: "Beneficios",
      title: "Servicos e beneficios do ecossistema.",
      description: "Itens comuns na navegacao do site oficial (atalhos institucionais).",
      items: [
        {
          eyebrow: "Programa",
          title: "Cliente Ouro",
          description: "Beneficios e vantagens para clientes.",
          metric: "Atalho institucional",
          image: "/assets/gallery-signal.svg",
          alt: "Ilustracao de beneficios",
          cta: { label: "Saiba mais", href: "https://www.magazineluiza.com.br/" },
        },
        {
          eyebrow: "Cartao",
          title: "Cartao Luiza",
          description: "Opcoes de pagamento e condicoes.",
          metric: "Atalho institucional",
          image: "/assets/gallery-grid.svg",
          alt: "Ilustracao de cartao",
          cta: { label: "Saiba mais", href: "https://www.magazineluiza.com.br/" },
        },
        {
          eyebrow: "Seguranca",
          title: "Como evitar fraudes",
          description: "Conferir canais oficiais e boas praticas de seguranca.",
          metric: "Sites oficiais",
          image: "/assets/gallery-structure.svg",
          alt: "Ilustracao de seguranca",
          cta: {
            label: "Abrir seguranca",
            href: "https://especiais.magazineluiza.com.br/seguranca/sites-oficiais/",
          },
        },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: "Um fluxo simples para comprar online.",
      description: "Passos gerais (podem variar por categoria e vendedor).",
      steps: [
        { step: "1", title: "Buscar", description: "Encontre o produto e compare opcoes." },
        { step: "2", title: "Sacola", description: "Adicione e confira detalhes do item." },
        { step: "3", title: "Entrega/retirada", description: "Escolha a melhor opcao para voce." },
        { step: "4", title: "Pagamento", description: "Selecione a forma de pagamento disponivel." },
      ],
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "O que clientes dizem",
      description: "Nao exibimos depoimentos neste template.",
      items: [],
    },
    faq: {
      eyebrow: "Duvidas comuns",
      title: "Perguntas frequentes (alto nivel).",
      description: "Consulte o atendimento oficial para regras atuais.",
      items: [
        {
          question: "Como confirmar se um canal e oficial?",
          answer:
            "Use a pagina de sites oficiais e boas praticas de seguranca para evitar golpes.",
        },
        {
          question: "Qual o canal de atendimento?",
          answer: "Acesse o portal de atendimento ou ligue para o 0800 divulgado no site.",
        },
        {
          question: "Onde encontro categorias principais?",
          answer: "Use a pagina de departamentos deste template ou o menu do site oficial.",
        },
      ],
    },
    cta: {
      eyebrow: "Atalho",
      title: "Quer comprar agora?",
      description: "Abra o site oficial do Magalu para ver ofertas e produtos.",
      primaryCta: { label: "Abrir site oficial", href: "https://www.magazineluiza.com.br/" },
      secondaryCta: { label: "Ver seguranca", href: "/pages/docs.html" },
    },
    contact: {
      eyebrow: "Atendimento",
      title: "Fale com o atendimento oficial.",
      description:
        "Este template abre o portal de atendimento em uma nova aba. Para suporte, use o canal oficial.",
      asideTitle: "Dicas rapidas",
      asidePoints: [
        "Nao compartilhe senhas ou codigos de verificacao.",
        "Confirme o dominio do site antes de finalizar pagamentos.",
        "Em duvida, use a pagina de sites oficiais.",
      ],
    },
  },
  landing: {
    hero: {
      eyebrow: "App oficial",
      title: "Baixe o app",
      highlight: "e acompanhe seus pedidos.",
      description: "Atalhos para o site oficial e referencia de canais.",
      primaryCta: { label: "Abrir site oficial", href: "https://www.magazineluiza.com.br/" },
      secondaryCta: { label: "Ver seguranca", href: "/pages/docs.html" },
      imageAlt: "Banner do app Magalu",
      signals: [
        { title: "Ofertas", detail: "Promocoes e cupons (quando disponiveis)" },
        { title: "Pedidos", detail: "Acompanhe status e entregas" },
        { title: "Conta", detail: "Acesse compras e dados da conta" },
      ],
    },
    proof: {
      eyebrow: "O que voce resolve",
      title: "Atalhos essenciais em um lugar.",
      description: "Conteudo de apoio para briefing e criacao do site.",
      items: [
        { value: "Canais", label: "oficiais", detail: "Links e redes oficiais centralizados" },
        { value: "Categorias", label: "em destaque", detail: "Departamentos mais populares" },
        { value: "Seguranca", label: "anti-fraude", detail: "Boas praticas e orientacoes" },
      ],
    },
    offer: {
      eyebrow: "Recursos",
      title: "Pontos de entrada do ecossistema.",
      description: "Sem promessas de condicoes comerciais (evitar inventar).",
      items: [
        { title: "Departamentos", description: "Atalhos para as principais categorias." },
        { title: "Atendimento", description: "Portal de ajuda e telefone 0800 do site." },
        { title: "Seguranca", description: "Como evitar golpes e validar canais." },
      ],
    },
    outcomes: {
      eyebrow: "Resultado",
      title: "Um template mais alinhado ao cliente.",
      description: "Visual limpo (branco + azul) e linguagem institucional.",
      items: [
        { title: "Branding", description: "Cores, tipografia e logo coerentes." },
        { title: "Navegacao", description: "Itens e links alinhados ao ecossistema." },
        { title: "Conteudo", description: "Textos curtos e verificaveis." },
      ],
    },
    faq: {
      eyebrow: "Duvidas",
      title: "Perguntas frequentes",
      description: "Conteudo geral para o template.",
      items: [
        { question: "Isso e o site oficial?", answer: "Nao. E um template institucional para briefing." },
        {
          question: "Para onde vai o formulario?",
          answer: "Ele abre o portal de atendimento oficial em outra aba.",
        },
      ],
    },
    cta: {
      eyebrow: "Proximo passo",
      title: "Abra o atendimento oficial.",
      description: "Use os canais oficiais para suporte e informacoes atualizadas.",
      primaryCta: { label: "Abrir atendimento", href: "https://atendimento.magazineluiza.com.br/" },
      secondaryCta: { label: "Ver sites oficiais", href: "https://especiais.magazineluiza.com.br/seguranca/sites-oficiais/" },
    },
    contact: {
      eyebrow: "Contato",
      title: "Form de atalho",
      description: "Preencha e o template abre o atendimento oficial.",
    },
  },
  pages: {
    company: {
      hero: {
        eyebrow: "Institucional",
        title: "Sobre o Magalu",
        description: "Resumo para uso no template (conteudo de alto nivel).",
        primaryCta: { label: "Site oficial", href: "https://www.magazineluiza.com.br/" },
        secondaryCta: { label: "Seguranca", href: "/pages/docs.html" },
      },
      intro: {
        eyebrow: "Ecossistema",
        title: "Varejo, marketplace e canais digitais.",
        description:
          "Este texto e um resumo para o template; para informacoes oficiais e completas, consulte os canais institucionais do grupo.",
      },
      highlights: [
        { title: "E-commerce", description: "Categorias para diferentes necessidades do dia a dia." },
        { title: "Marketplace", description: "Opcoes de vendedores e produtos (varia por item)." },
        { title: "Canais oficiais", description: "Links de seguranca para evitar golpes." },
      ],
      valuesIntro: {
        eyebrow: "Pilares",
        title: "Foco em experiencia e confianca.",
        description: "Pontos gerais para orientar o layout do site.",
      },
      values: [
        { title: "Confianca", description: "Orientacoes de seguranca e canais oficiais." },
        { title: "Variedade", description: "Departamentos amplos e navegacao por categoria." },
        { title: "Atendimento", description: "Central de ajuda e contato via 0800." },
      ],
      timelineIntro: {
        eyebrow: "Marcos",
        title: "Historico (alto nivel).",
        description: "Nao incluir datas/numeros sem fonte verificavel no site.",
      },
      timeline: [
        { title: "Digital", detail: "Canais e servicos evoluem com o app e o e-commerce." },
        { title: "Seguranca", detail: "Recomendacoes para evitar golpes e fraudes." },
      ],
      closing: {
        eyebrow: "Atalhos",
        title: "Ir para o site oficial",
        description: "Para compras e informacoes atuais, use o dominio oficial.",
        primaryCta: { label: "Abrir site", href: "https://www.magazineluiza.com.br/" },
        secondaryCta: { label: "Abrir atendimento", href: "https://atendimento.magazineluiza.com.br/" },
      },
    },
    showcase: {
      hero: {
        eyebrow: "Departamentos",
        title: "Categorias principais",
        description: "Atalhos para categorias do site oficial.",
        primaryCta: { label: "Ver ofertas", href: "https://www.magazineluiza.com.br/" },
        secondaryCta: { label: "Seguranca", href: "/pages/docs.html" },
      },
      intro: {
        eyebrow: "Selecione",
        title: "Escolha um departamento",
        description: "Use os filtros para navegar por tipo de produto (exemplo).",
      },
      filters: [
        { label: "Celulares", target: "celulares" },
        { label: "TV e Video", target: "tv" },
        { label: "Eletro", target: "eletro" },
        { label: "Moveis", target: "moveis" },
      ],
      items: [
        {
          id: "celulares",
          eyebrow: "TE",
          title: "Celulares e Smartphones",
          description: "iPhone, Samsung, Xiaomi e mais.",
          cta: { label: "Abrir no site oficial", href: "https://www.magazineluiza.com.br/celulares-e-smartphones/l/te/" },
        },
        {
          id: "tv",
          eyebrow: "ET",
          title: "TV e Video",
          description: "TVs, streaming e acessorios.",
          cta: { label: "Abrir no site oficial", href: "https://www.magazineluiza.com.br/tv-e-video/l/et/" },
        },
        {
          id: "eletro",
          eyebrow: "ED",
          title: "Eletrodomesticos",
          description: "Geladeiras, fogoes, lavadoras.",
          cta: { label: "Abrir no site oficial", href: "https://www.magazineluiza.com.br/eletrodomesticos/l/ed/" },
        },
        {
          id: "moveis",
          eyebrow: "MO",
          title: "Moveis",
          description: "Sala, quarto e cozinha.",
          cta: { label: "Abrir no site oficial", href: "https://www.magazineluiza.com.br/moveis/l/mo/" },
        },
      ],
      closing: {
        eyebrow: "Atalhos",
        title: "Quer ir direto para o site?",
        description: "Abra o site oficial para explorar mais categorias.",
        primaryCta: { label: "Abrir site oficial", href: "https://www.magazineluiza.com.br/" },
        secondaryCta: { label: "Atendimento", href: "https://atendimento.magazineluiza.com.br/" },
      },
    },
  },
  docs: {
    hero: {
      eyebrow: "Seguranca",
      title: "Canais oficiais e anti-fraude",
      description: "Referencias publicas do ecossistema Magalu (snapshot).",
      primaryCta: {
        label: "Ver sites oficiais",
        href: "https://especiais.magazineluiza.com.br/seguranca/sites-oficiais/",
      },
      secondaryCta: { label: "Atendimento", href: "https://atendimento.magazineluiza.com.br/" },
    },
    documents: [
      {
        label: "Infos do cliente (Magalu)",
        path: "/content/client/Infos do cliente - Magazine Luiza.md",
      },
      {
        label: "Politica de mensagens (WhatsApp)",
        path: "/content/policies/politica-mensagens-whatsapp.md",
      },
    ],
  },
  contact: {
    whatsapp: {
      phone: "",
      defaultMessage: "",
    },
    channels: [
      { label: "Telefone", value: "0800 773 3838", href: "tel:08007733838" },
      { label: "Atendimento", value: "Portal oficial", href: "https://atendimento.magazineluiza.com.br/" },
      { label: "Seguranca", value: "Sites oficiais", href: "https://especiais.magazineluiza.com.br/seguranca/sites-oficiais/" },
      { label: "Site", value: "magazineluiza.com.br", href: "https://www.magazineluiza.com.br/" },
    ],
    footerItems: [
      { label: "Telefone", value: "0800 773 3838", href: "tel:08007733838" },
      { label: "Endereco", value: "Rua Arnulfo de Lima, 2385 - Franca/SP - CEP 14.403-471" },
      { label: "Seguranca", value: "Sites oficiais", href: "https://especiais.magazineluiza.com.br/seguranca/sites-oficiais/" },
    ],
    form: {
      mode: "link",
      href: "https://atendimento.magazineluiza.com.br/",
      endpoint: "",
      method: "POST",
      introMessage: "Ola! Preciso de ajuda com um pedido/conta/compra.",
      successMessage: "Abrindo o atendimento oficial em uma nova aba...",
      errorMessage: "Nao foi possivel abrir o atendimento agora. Tente novamente.",
      submitLabel: "Abrir atendimento",
      fields: {
        name: { label: "Nome", placeholder: "Seu nome" },
        email: { label: "E-mail", placeholder: "voce@email.com" },
        company: { label: "Assunto", placeholder: "Ex.: pedido, entrega, pagamento" },
        message: { label: "Mensagem", placeholder: "Descreva rapidamente o que voce precisa." },
        consent: { label: "Entendo que este formulario apenas abre o atendimento oficial em outra aba." },
      },
    },
  },
  social: {
    links: [
      { label: "Sites oficiais", href: "https://especiais.magazineluiza.com.br/seguranca/sites-oficiais/" },
      { label: "Seguranca", href: "https://especiais.magazineluiza.com.br/seguranca/" },
      { label: "Atendimento", href: "https://atendimento.magazineluiza.com.br/" },
    ],
  },
  assets: {
    logos: {
      mark: "/assets/logo-magalu.svg",
    },
    heroPrimary: "/assets/hero-magalu.svg",
    heroSecondary: "/assets/hero-magalu.svg",
    gallery: [
      "/assets/gallery-narrative.svg",
      "/assets/gallery-grid.svg",
      "/assets/gallery-conversion.svg",
      "/assets/gallery-signal.svg",
      "/assets/gallery-structure.svg",
      "/assets/gallery-launch.svg",
    ],
  },
  sections: {
    home: {
      stats: true,
      services: true,
      portfolio: true,
      process: true,
      testimonials: false,
      faq: true,
      contact: true,
    },
    landing: {
      proof: true,
      offer: true,
      outcomes: true,
      faq: true,
      contact: true,
    },
  },
};

if (typeof window !== "undefined") {
  window.SITE_TEMPLATE_CONFIG = SITE_TEMPLATE_CONFIG;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_TEMPLATE_CONFIG;
}

