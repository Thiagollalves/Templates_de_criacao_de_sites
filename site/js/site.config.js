const SITE_TEMPLATE_CONFIG = {
  theme: "retail",
  policy: {
    // Hard requirement for this site instance: never navigate to external URLs.
    disallowExternalLinks: true,
  },
  seo: {
    siteName: "Loja Azul",
    defaultTitle: "Loja Azul | Catalogo e categorias",
    defaultDescription:
      "Um template retail (hibrido) com categorias, beneficios e paginas institucionais. Sem redirecionamento para links externos.",
    baseUrl: "",
    favicon: "/assets/favicon-retail.svg",
    ogImage: "/assets/og-retail.svg",
    pages: {
      home: {
        title: "Loja Azul | Catalogo e categorias",
        description: "Categorias em destaque, beneficios e atalhos internos.",
        path: "/",
      },
      landing: {
        title: "App Loja Azul | Baixar e acessar",
        description: "Pagina de conversao interna (sem links externos).",
        path: "/landing.html",
      },
      company: {
        title: "Sobre a Loja Azul",
        description: "Resumo institucional e pilares do template retail.",
        path: "/pages/company.html",
      },
      showcase: {
        title: "Categorias | Loja Azul",
        description: "Explore os principais departamentos e colecoes.",
        path: "/pages/showcase.html",
      },
      docs: {
        title: "Documentos e politicas | Loja Azul",
        description: "Documentos internos usados no projeto (briefing e politicas).",
        path: "/pages/docs.html",
      },
      support: {
        title: "Atendimento | Loja Azul",
        description: "Como falar com a equipe e abrir solicitacoes.",
        path: "/pages/atendimento.html",
      },
      security: {
        title: "Seguranca | Loja Azul",
        description: "Boas praticas para evitar golpes e proteger sua conta.",
        path: "/pages/seguranca.html",
      },
    },
  },
  brand: {
    name: "Loja Azul",
    shortName: "Loja Azul",
    eyebrow: "Retail template",
    tagline: "Tudo em um lugar. Simples de comprar.",
    summary:
      "Template retail (hibrido) para home, categorias e paginas institucionais, com foco em clareza, confianca e navegacao.",
    location: "Brasil",
    legalName: "Loja Azul LTDA (exemplo para template)",
    foundedLabel: "E-commerce",
    footerNote:
      "Este e um template demonstrativo para criacao de site. Nenhuma compra real e feita aqui.",
  },
  navigation: {
    items: [
      { label: "Inicio", href: "/", page: "home", enabled: true },
      { label: "Categorias", href: "/pages/showcase.html", page: "showcase", enabled: true },
      { label: "Atendimento", href: "/pages/atendimento.html", page: "support", enabled: true },
      { label: "Seguranca", href: "/pages/seguranca.html", page: "security", enabled: true },
      { label: "Sobre", href: "/pages/company.html", page: "company", enabled: true },
      { label: "Docs", href: "/pages/docs.html", page: "docs", enabled: true },
    ],
    footerGroups: [
      {
        title: "Departamentos",
        items: [
          { label: "Celulares", href: "/pages/showcase.html#celulares" },
          { label: "TV e Video", href: "/pages/showcase.html#tv" },
          { label: "Eletro", href: "/pages/showcase.html#eletro" },
          { label: "Moveis", href: "/pages/showcase.html#moveis" },
        ],
      },
      {
        title: "Ajuda",
        items: [
          { label: "Atendimento", href: "/pages/atendimento.html" },
          { label: "Seguranca", href: "/pages/seguranca.html" },
          { label: "Documentos", href: "/pages/docs.html" },
        ],
      },
      {
        title: "Empresa",
        items: [
          { label: "Sobre", href: "/pages/company.html" },
          { label: "Categorias", href: "/pages/showcase.html" },
          { label: "Landing", href: "/landing.html" },
        ],
      },
    ],
    cta: {
      label: "Ver categorias",
      href: "/pages/showcase.html",
    },
  },
  home: {
    hero: {
      eyebrow: "Retail clean",
      title: "Categorias e ofertas",
      highlight: "com navegacao simples.",
      description:
        "Primeira dobra como poster: uma visao clara do catalogo e dos beneficios. Tudo interno, sem links externos.",
      primaryCta: {
        label: "Explorar categorias",
        href: "/pages/showcase.html",
      },
      secondaryCta: {
        label: "Ver seguranca",
        href: "/pages/seguranca.html",
      },
      imageAlt: "Hero do template Loja Azul",
      signals: [
        { title: "Entrega e retirada", detail: "Exemplo: opcoes variam por categoria e regiao." },
        { title: "Pagamento", detail: "Exemplo: metodos variam conforme o checkout real (nao implementado)." },
        { title: "Atendimento", detail: "Central interna para orientacoes e contato." },
      ],
    },
    categoryRail: [
      { label: "Celulares", href: "/pages/showcase.html#celulares" },
      { label: "TV e Video", href: "/pages/showcase.html#tv" },
      { label: "Eletro", href: "/pages/showcase.html#eletro" },
      { label: "Moveis", href: "/pages/showcase.html#moveis" },
      { label: "Mais", href: "/pages/showcase.html" },
    ],
    statsIntro: {
      eyebrow: "Em destaque",
      title: "Departamentos principais.",
      description: "Uma grade enxuta para orientar navegacao.",
    },
    stats: [
      { value: "TE", label: "Celulares", detail: "Smartphones e acessorios" },
      { value: "ET", label: "TV e Video", detail: "TVs e audio" },
      { value: "ED", label: "Eletro", detail: "Cozinha e lavanderia" },
      { value: "MO", label: "Moveis", detail: "Sala, quarto e cozinha" },
    ],
    services: {
      eyebrow: "Beneficios",
      title: "O que este template entrega",
      description: "Secoes pensadas para e-commerce (sem poluir com card-mosaico).",
      items: [
        { title: "Home poster", description: "Hierarquia forte + visual anchor no primeiro viewport." },
        { title: "Categorias", description: "Vitrine com cards consistentes e ancoras internas." },
        { title: "Seguranca", description: "Pagina dedicada com boas praticas e orientacoes." },
        { title: "Atendimento", description: "Fluxo interno para contato (sem redirecionar)." },
      ],
    },
    portfolio: {
      eyebrow: "Destaques",
      title: "Colecoes e campanhas",
      description: "Blocos editoriais para campanhas (exemplo).",
      items: [
        {
          eyebrow: "Campanha",
          title: "Semana do Azul",
          description: "Um bloco editorial com foco em 1 narrativa.",
          metric: "Colecao interna",
          image: "/assets/gallery-launch.svg",
          alt: "Ilustracao de campanha",
          link: { label: "Ver colecao", href: "/pages/showcase.html#celulares" },
        },
        {
          eyebrow: "Beneficio",
          title: "Frete e prazos",
          description: "Explique como funciona de forma curta e verificavel.",
          metric: "Politica interna",
          image: "/assets/gallery-structure.svg",
          alt: "Ilustracao de entrega",
          link: { label: "Ver atendimento", href: "/pages/atendimento.html" },
        },
        {
          eyebrow: "Confianca",
          title: "Anti-fraude",
          description: "Pagina interna com dicas para evitar golpes.",
          metric: "Seguranca",
          image: "/assets/gallery-signal.svg",
          alt: "Ilustracao de seguranca",
          link: { label: "Ver seguranca", href: "/pages/seguranca.html" },
        },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: "Da navegacao ao pedido (exemplo).",
      description: "Sem checkout real neste template; apenas orientacao.",
      steps: [
        { step: "1", title: "Explorar", description: "Escolha um departamento e compare opcoes." },
        { step: "2", title: "Detalhes", description: "Veja informacoes, variacoes e condicoes." },
        { step: "3", title: "Contato", description: "Em duvida, use a central de atendimento interna." },
        { step: "4", title: "Seguranca", description: "Siga boas praticas antes de finalizar pagamentos." },
      ],
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "O que clientes dizem",
      description: "Desativado por padrao (evitar inventar).",
      items: [],
    },
    faq: {
      eyebrow: "Duvidas comuns",
      title: "Perguntas frequentes",
      description: "Respostas curtas e praticas (template).",
      items: [
        {
          question: "Este site faz compras reais?",
          answer: "Nao. E um template para criacao e validacao de layout e conteudo.",
        },
        {
          question: "Como evitar golpes?",
          answer: "Use a pagina de seguranca para ver boas praticas e sinais de alerta.",
        },
        {
          question: "Como falar com atendimento?",
          answer: "Acesse a pagina de atendimento para canais internos e orientacoes.",
        },
      ],
    },
    cta: {
      eyebrow: "Pronto para navegar?",
      title: "Va direto para as categorias.",
      description: "Atalho interno para a vitrine.",
      primaryCta: { label: "Abrir categorias", href: "/pages/showcase.html" },
      secondaryCta: { label: "Abrir atendimento", href: "/pages/atendimento.html" },
    },
    contact: {
      eyebrow: "Atendimento",
      title: "Precisa de ajuda?",
      description: "Use o formulario (interno) ou veja as orientacoes na pagina de atendimento.",
      asideTitle: "Dicas rapidas",
      asidePoints: [
        "Nao compartilhe codigos de verificacao.",
        "Desconfie de links encurtados e promessas irreais.",
        "Use a pagina de seguranca antes de qualquer pagamento.",
      ],
    },
  },
  landing: {
    hero: {
      eyebrow: "Loja Azul",
      title: "Baixe o app",
      highlight: "e acompanhe tudo.",
      description: "Landing interna para conversao (sem links externos).",
      primaryCta: { label: "Ver categorias", href: "/pages/showcase.html" },
      secondaryCta: { label: "Atendimento", href: "/pages/atendimento.html" },
      imageAlt: "Hero landing",
      signals: [
        { title: "Ofertas", detail: "Exemplo: campanhas e colecoes internas." },
        { title: "Pedidos", detail: "Exemplo: status e informacoes (nao implementado)." },
        { title: "Conta", detail: "Exemplo: dados e historico (nao implementado)." },
      ],
    },
    proof: {
      eyebrow: "Por que usar",
      title: "Rapido, claro e consistente.",
      description: "Tres pontos para reforcar o valor do template.",
      items: [
        { value: "UX", label: "limpo", detail: "menos ruido, mais conversao" },
        { value: "Nav", label: "simples", detail: "categorias em 1 clique" },
        { value: "Trust", label: "seguro", detail: "pagina de seguranca dedicada" },
      ],
    },
    offer: {
      eyebrow: "Recursos",
      title: "O que voce encontra",
      description: "Sem inventar regras comerciais.",
      items: [
        { badge: "01", title: "Categorias", description: "Vitrine com ancoras internas." },
        { badge: "02", title: "Seguranca", description: "Boas praticas e sinais de alerta." },
        { badge: "03", title: "Atendimento", description: "Contato interno sem redirecionar." },
      ],
    },
    outcomes: {
      eyebrow: "Resultado",
      title: "Um site pronto para evoluir.",
      description: "Estrutura para adaptar ao conteudo real do cliente.",
      items: [
        {
          image: "/assets/gallery-grid.svg",
          alt: "Ilustracao",
          title: "Conteudo modular",
          description: "Config centralizada e secoes ativaveis.",
        },
        {
          image: "/assets/gallery-narrative.svg",
          alt: "Ilustracao",
          title: "Hierarquia forte",
          description: "Primeira dobra como poster, sem poluicao.",
        },
        {
          image: "/assets/gallery-conversion.svg",
          alt: "Ilustracao",
          title: "Conversao",
          description: "CTA claro e fluxo de contato interno.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas",
      description: "Respostas curtas para a landing.",
      items: [
        {
          question: "Tem links externos?",
          answer: "Nao. Este template bloqueia navegacao externa por politica.",
        },
        {
          question: "O formulario envia para onde?",
          answer: "Ele registra localmente (mensagem de sucesso) neste template.",
        },
      ],
    },
    cta: {
      eyebrow: "Comecar",
      title: "Explore agora.",
      description: "Siga para categorias e depois veja seguranca.",
      primaryCta: { label: "Categorias", href: "/pages/showcase.html" },
      secondaryCta: { label: "Seguranca", href: "/pages/seguranca.html" },
    },
    contact: {
      eyebrow: "Contato",
      title: "Fale com a gente",
      description: "Use o formulario interno para simular um contato.",
    },
  },
  pages: {
    company: {
      hero: {
        eyebrow: "Institucional",
        title: "Sobre a Loja Azul",
        description: "Um template retail moderno para adaptar ao seu cliente.",
        primaryCta: { label: "Ver categorias", href: "/pages/showcase.html" },
        secondaryCta: { label: "Seguranca", href: "/pages/seguranca.html" },
      },
      intro: {
        eyebrow: "Proposta",
        title: "Uma base clara para evoluir rapido.",
        description:
          "Foco em hierarquia, navegacao e paginas de confianca (seguranca/atendimento) para reduzir friccao.",
      },
      highlights: [
        { title: "Design", description: "Retail clean com tipografia e espacamento fortes." },
        { title: "Conteudo", description: "Config central + documentos sincronizados para /content." },
        { title: "Politica", description: "Sem redirecionamento externo por padrao." },
      ],
      valuesIntro: {
        eyebrow: "Pilares",
        title: "Clareza, confianca e velocidade.",
        description: "Um conjunto pequeno de escolhas que elevam o resultado.",
      },
      values: [
        { title: "Clareza", description: "Copys curtas e navegação previsivel." },
        { title: "Confianca", description: "Seguranca explicita, sem promessas vagas." },
        { title: "Velocidade", description: "Sem frameworks; HTML/CSS/JS diretos." },
      ],
      timelineIntro: {
        eyebrow: "Evolucao",
        title: "Como expandir",
        description: "Roadmap simples para o time evoluir com seguranca.",
      },
      timeline: [
        { title: "Conteudo real", detail: "Trocar textos e imagens pelo briefing validado." },
        { title: "Catalogo", detail: "Integrar catalogo real (backend) quando existir." },
        { title: "Checkout", detail: "Adicionar funil real com regras e politicas." },
      ],
      closing: {
        eyebrow: "Proximo passo",
        title: "Veja categorias e paginas de confianca.",
        description: "O essencial para um retail bom: vitrine + seguranca + atendimento.",
        primaryCta: { label: "Categorias", href: "/pages/showcase.html" },
        secondaryCta: { label: "Atendimento", href: "/pages/atendimento.html" },
      },
    },
    showcase: {
      hero: {
        eyebrow: "Departamentos",
        title: "Categorias principais",
        description: "Cards com ancoras internas e narrativa simples.",
        primaryCta: { label: "Seguranca", href: "/pages/seguranca.html" },
        secondaryCta: { label: "Atendimento", href: "/pages/atendimento.html" },
      },
      intro: {
        eyebrow: "Explorar",
        title: "Escolha um departamento",
        description: "Exemplo de vitrine para adaptar a um catalogo real.",
      },
      filters: ["Celulares", "TV e Video", "Eletro", "Moveis"],
      items: [
        {
          id: "celulares",
          category: "TE",
          metric: "Destaque",
          title: "Celulares",
          description: "Smartphones, capas, carregadores e acessorios.",
          image: "/assets/gallery-grid.svg",
          alt: "Ilustracao de celulares",
          cta: { label: "Ver mais", href: "/pages/showcase.html#celulares" },
        },
        {
          id: "tv",
          category: "ET",
          metric: "Destaque",
          title: "TV e Video",
          description: "TVs, soundbars, streaming e conexoes.",
          image: "/assets/gallery-narrative.svg",
          alt: "Ilustracao de tv",
          cta: { label: "Ver mais", href: "/pages/showcase.html#tv" },
        },
        {
          id: "eletro",
          category: "ED",
          metric: "Destaque",
          title: "Eletro",
          description: "Cozinha, lavanderia e refrigeracao.",
          image: "/assets/gallery-structure.svg",
          alt: "Ilustracao de eletro",
          cta: { label: "Ver mais", href: "/pages/showcase.html#eletro" },
        },
        {
          id: "moveis",
          category: "MO",
          metric: "Destaque",
          title: "Moveis",
          description: "Sala, quarto, cozinha e organizacao.",
          image: "/assets/gallery-launch.svg",
          alt: "Ilustracao de moveis",
          cta: { label: "Ver mais", href: "/pages/showcase.html#moveis" },
        },
      ],
      closing: {
        eyebrow: "Confianca",
        title: "Antes de finalizar pagamentos",
        description: "Veja as dicas de seguranca (interna) e fale com atendimento.",
        primaryCta: { label: "Seguranca", href: "/pages/seguranca.html" },
        secondaryCta: { label: "Atendimento", href: "/pages/atendimento.html" },
      },
    },
    support: {
      hero: {
        eyebrow: "Atendimento",
        title: "Como podemos ajudar",
        description: "Canais internos e orientacoes para resolver mais rapido.",
        primaryCta: { label: "Abrir chamado", href: "#form" },
        secondaryCta: { label: "Ver seguranca", href: "/pages/seguranca.html" },
      },
      intro: {
        eyebrow: "Orientacao",
        title: "Antes de abrir um chamado",
        description: "Checklist curto para reduzir troca de mensagens.",
      },
      highlights: [
        { title: "Pedido", description: "Tenha o numero do pedido e item em maos (quando existir)." },
        { title: "Entrega", description: "Confirme endereco e janela de entrega." },
        { title: "Pagamento", description: "Nao envie comprovantes com dados sensiveis." },
      ],
      closing: {
        eyebrow: "Contato",
        title: "Use o formulario interno",
        description: "Ele nao envia para fora; apenas simula o fluxo.",
        primaryCta: { label: "Ir para o formulario", href: "#form" },
        secondaryCta: { label: "Voltar para categorias", href: "/pages/showcase.html" },
      },
    },
    security: {
      hero: {
        eyebrow: "Seguranca",
        title: "Boas praticas anti-golpe",
        description: "Dicas diretas para proteger sua conta e seus pagamentos.",
        primaryCta: { label: "Ver checklist", href: "#checklist" },
        secondaryCta: { label: "Atendimento", href: "/pages/atendimento.html" },
      },
      intro: {
        eyebrow: "Checklist",
        title: "Sinais de alerta",
        description: "Se algo parecer estranho, pare e valide antes de pagar.",
      },
      highlights: [
        { title: "Links", description: "Evite links encurtados e domínios parecidos." },
        { title: "Pagamentos", description: "Desconfie de pedidos de pix fora do fluxo padrão." },
        { title: "Conta", description: "Nao compartilhe codigos de verificacao." },
      ],
      closing: {
        eyebrow: "Apoio",
        title: "Em duvida, fale com atendimento",
        description: "Use o canal interno e descreva o que ocorreu.",
        primaryCta: { label: "Abrir atendimento", href: "/pages/atendimento.html" },
        secondaryCta: { label: "Categorias", href: "/pages/showcase.html" },
      },
    },
  },
  docs: {
    hero: {
      eyebrow: "Documentos",
      title: "Briefing e politicas",
      description: "Conteudo interno do projeto (sem links externos).",
      primaryCta: { label: "Ver atendimento", href: "/pages/atendimento.html" },
      secondaryCta: { label: "Ver seguranca", href: "/pages/seguranca.html" },
    },
    documents: [
      {
        id: "cliente",
        eyebrow: "Cliente",
        title: "Infos do cliente (Loja Azul)",
        description: "Briefing generico usado como base do site.",
        src: "/content/client/Infos do cliente - Loja Azul.md",
      },
      {
        id: "whatsapp",
        eyebrow: "Politica",
        title: "Politica de mensagens (WhatsApp)",
        description: "Referencia interna para consentimento e opt-out.",
        src: "/content/policies/politica-mensagens-whatsapp.md",
      },
    ],
  },
  contact: {
    whatsapp: {
      phone: "",
      defaultMessage: "",
    },
    channels: [
      { label: "Atendimento", value: "Abrir atendimento", href: "/pages/atendimento.html" },
      { label: "Seguranca", value: "Boas praticas", href: "/pages/seguranca.html" },
      { label: "Documentos", value: "Politicas", href: "/pages/docs.html" },
    ],
    footerItems: [
      { label: "Atendimento", value: "Central interna", href: "/pages/atendimento.html" },
      { label: "Seguranca", value: "Checklist", href: "/pages/seguranca.html" },
      { label: "Local", value: "Brasil (exemplo)" },
    ],
    form: {
      mode: "internal",
      endpoint: "",
      method: "POST",
      introMessage: "Ola! Quero ajuda com uma compra/pedido/entrega.",
      successMessage: "Recebido. Em um site real, isso abriria um chamado.",
      errorMessage: "Nao foi possivel processar agora. Tente novamente.",
      submitLabel: "Enviar",
      fields: {
        name: { label: "Nome", placeholder: "Seu nome" },
        email: { label: "E-mail", placeholder: "voce@email.com" },
        company: { label: "Assunto", placeholder: "Ex.: entrega, pagamento, troca" },
        message: { label: "Mensagem", placeholder: "Descreva o que aconteceu (sem dados sensiveis)." },
        consent: { label: "Concordo em nao compartilhar senhas/codigos e entendo que este e um template." },
      },
    },
  },
  social: {
    links: [
      { label: "Categorias", href: "/pages/showcase.html" },
      { label: "Atendimento", href: "/pages/atendimento.html" },
      { label: "Seguranca", href: "/pages/seguranca.html" },
    ],
  },
  assets: {
    logos: {
      mark: "/assets/logo-retail.svg",
    },
    heroPrimary: "/assets/hero-retail.svg",
    heroSecondary: "/assets/hero-retail.svg",
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
