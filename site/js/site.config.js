const SITE_TEMPLATE_CONFIG = {
  theme: "studio",
  seo: {
    siteName: "Atlas Frame",
    defaultTitle: "Atlas Frame | Front para criar sites e landing pages",
    defaultDescription:
      "Base estatica com front forte, home, landing, paginas internas e configuracao central para sites comerciais.",
    baseUrl: "https://example.com",
    favicon: "/assets/favicon.svg",
    ogImage: "/assets/og-template.svg",
    pages: {
      home: {
        title: "Atlas Frame | Crie sites com cara de produto",
        description:
          "Front para apresentar, captar e publicar sites comerciais com tema, CTA e estrutura prontos.",
        path: "/",
      },
      landing: {
        title: "Captacao focada | Atlas Frame",
        description:
          "Landing curta e clara para validar oferta, captar leads e conduzir o usuario ate o proximo clique.",
        path: "/landing.html",
      },
      company: {
        title: "Plataforma | Atlas Frame",
        description:
          "Pagina interna para explicar metodo, sistema visual e operacao sem pesar a home principal.",
        path: "/pages/company.html",
      },
      showcase: {
        title: "Modelos | Atlas Frame",
        description:
          "Vitrine de rotas e modelos para adaptar a mesma base em home, landing e paginas de apoio.",
        path: "/pages/showcase.html",
      },
    },
  },
  brand: {
    name: "Atlas Frame",
    shortName: "Atlas",
    eyebrow: "App para criar sites comerciais",
    tagline: "Marca, paginas e CTA prontos em um fluxo visual unico.",
    summary:
      "Uma frente clara para montar home, landing e paginas internas sem cair em layouts genericos nem depender de CMS.",
    location: "Operacao remota com entrega estatica.",
    legalName: "Atlas Frame App",
    foundedLabel: "Fluxo pronto",
    footerNote:
      "Troque textos, ativos e contatos no config central para adaptar o front ao seu produto.",
  },
  navigation: {
    items: [
      { label: "Inicio", href: "/", page: "home", enabled: true },
      { label: "Plataforma", href: "/pages/company.html", page: "company", enabled: true },
      { label: "Modelos", href: "/pages/showcase.html", page: "showcase", enabled: true },
      { label: "Captacao", href: "/landing.html", page: "landing", enabled: true },
    ],
    footerGroups: [
      {
        title: "Produto",
        items: [
          { label: "Inicio", href: "/" },
          { label: "Plataforma", href: "/pages/company.html" },
          { label: "Modelos", href: "/pages/showcase.html" },
        ],
      },
      {
        title: "Fluxo",
        items: [
          { label: "Narrativa principal", href: "/" },
          { label: "Rota de captacao", href: "/landing.html" },
          { label: "Paginas de apoio", href: "/pages/company.html" },
        ],
      },
      {
        title: "Operacao",
        items: [
          { label: "CTA central", href: "/landing.html" },
          { label: "Conteudo modular", href: "/pages/showcase.html" },
          { label: "Config unico", href: "/pages/company.html" },
        ],
      },
    ],
    cta: {
      label: "Pedir uma primeira versao",
      kind: "whatsapp",
      message: "Ola, quero adaptar o Atlas Frame para o meu app ou site.",
    },
  },
  home: {
    hero: {
      eyebrow: "Front para montar, apresentar e publicar sites",
      title: "Transforme briefing em um site com cara de produto.",
      highlight: "Sem recomecar a interface.",
      description:
        "Atlas Frame organiza home, landing e paginas internas em uma linguagem unica. O conteudo continua editavel, mas o front ja nasce com hierarquia, CTA e ritmo visual.",
      primaryCta: {
        label: "Explorar a plataforma",
        href: "/pages/company.html",
      },
      secondaryCta: {
        label: "Ver pagina de captacao",
        href: "/landing.html",
      },
      imageAlt: "Mockup abstrato representando o front do aplicativo Atlas Frame",
      asideTitle: "Do arquivo de config para a publicacao",
      asideText:
        "Troque marca, narrativa, ativos e contato em um so fluxo. O sistema visual cuida da consistencia entre as rotas.",
    },
    statsIntro: {
      eyebrow: "Sistema de operacao",
      title: "Tudo que precisa existir na frente do app ja esta desenhado.",
      description:
        "A base foi organizada para apresentar o produto, aprofundar contexto e conduzir o clique sem desmontar a experiencia.",
    },
    stats: [
      {
        value: "01",
        label: "config central",
        detail: "marca, SEO, CTA e secoes no mesmo arquivo",
      },
      {
        value: "03",
        label: "rotas chave",
        detail: "home, captacao e paginas internas de apoio",
      },
      {
        value: "02",
        label: "modos de contato",
        detail: "WhatsApp ou endpoint HTTP",
      },
      {
        value: "100%",
        label: "entrega estatica",
        detail: "leve para publicar e simples para manter",
      },
    ],
    services: {
      eyebrow: "O que o front resolve",
      title: "A experiencia foi desenhada para vender, orientar e capturar.",
      description:
        "Cada faixa da pagina tem uma funcao: apresentar, aprofundar, provar ou converter, sem virar um mosaico de cards genericos.",
      items: [
        {
          title: "Primeira dobra forte",
          description:
            "A home abre com marca, argumento e CTA em uma composicao dominante, com visual de produto em vez de layout de vitrine comum.",
        },
        {
          title: "Navegacao curta",
          description:
            "As rotas principais ficam claras desde o topo, mantendo o usuario orientado entre apresentacao, modelos e captacao.",
        },
        {
          title: "Paginas internas coerentes",
          description:
            "A plataforma e a vitrine de modelos aprofundam contexto sem quebrar o tom, a tipografia ou a hierarquia do conjunto.",
        },
        {
          title: "Contato reutilizavel",
          description:
            "CTAs e formulario reaproveitam a mesma logica de envio para manter o fluxo comercial consistente em qualquer rota.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Rotas em uso",
      title: "Um pequeno ecossistema de paginas para o mesmo produto.",
      description:
        "Cada rota cumpre um papel especifico, mas todas compartilham o mesmo sistema visual, o mesmo CTA e o mesmo contrato de conteudo.",
      items: [
        {
          eyebrow: "Entrada",
          title: "Pagina inicial do app",
          description:
            "Apresenta a proposta, organiza o discurso comercial e puxa o usuario para a rota certa sem excesso de contexto.",
          image: "/assets/gallery-narrative.svg",
          alt: "Ilustracao abstrata da pagina inicial do Atlas Frame",
          link: {
            label: "Rever a home",
            href: "/",
          },
        },
        {
          eyebrow: "Captacao",
          title: "Landing de oferta",
          description:
            "Condensa prova, escopo e contato em uma pagina curta, ideal para campanha, lead gen ou pagina de apoio comercial.",
          image: "/assets/gallery-conversion.svg",
          alt: "Ilustracao abstrata de uma landing page focada em captacao",
          link: {
            label: "Abrir captacao",
            href: "/landing.html",
          },
        },
        {
          eyebrow: "Biblioteca",
          title: "Modelos e paginas internas",
          description:
            "Mostra como a mesma base pode virar pagina institucional, grade de servicos, portfolio ou biblioteca de blocos.",
          image: "/assets/gallery-grid.svg",
          alt: "Ilustracao abstrata da vitrine de modelos do aplicativo",
          link: {
            label: "Ver modelos",
            href: "/pages/showcase.html",
          },
        },
      ],
    },
    process: {
      eyebrow: "Fluxo",
      title: "Quatro etapas para colocar a frente do seu app no ar.",
      description:
        "A proposta do Atlas Frame nao e esconder o HTML, e reduzir a repeticao de decisoes estruturais antes da publicacao.",
      steps: [
        {
          step: "01",
          title: "Defina marca e tema",
          description:
            "Atualize nome, resumo, favicon, contatos e escolha a direcao visual que mais combina com o produto.",
        },
        {
          step: "02",
          title: "Ajuste a narrativa",
          description:
            "Troque os textos da home, da captacao e das paginas internas para alinhar promessa, prova e proximo passo.",
        },
        {
          step: "03",
          title: "Substitua ativos e CTA",
          description:
            "Aponte imagens reais, revise links e escolha se o contato principal segue por WhatsApp ou por endpoint.",
        },
        {
          step: "04",
          title: "Valide e publique",
          description:
            "Revise responsividade, formularios, titulos, descriptions e envie a base estatica para a hospedagem.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Leitura rapida",
      title: "Quem entra no projeto precisa entender a estrutura em segundos.",
      description:
        "As frases abaixo funcionam como prova operacional e ajudam a explicar por que a base foi organizada dessa forma.",
      items: [
        {
          quote: "A home explica o produto sem virar mural de cards nem esconder a acao principal.",
          author: "Marketing",
          role: "Entrada de campanha",
        },
        {
          quote: "A landing reaproveita CTA, contato e prova sem desmontar o sistema visual.",
          author: "Comercial",
          role: "Captacao de leads",
        },
        {
          quote: "As paginas internas seguram contexto e portfolio quando a dobra precisa ficar limpa.",
          author: "Produto",
          role: "Operacao de conteudo",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ do front",
      title: "Perguntas comuns antes de adaptar a base.",
      description:
        "Use este bloco para responder duvidas sobre o produto, a implantacao ou o funcionamento da experiencia.",
      items: [
        {
          question: "Preciso usar todas as secoes da home?",
          answer:
            "Nao. O grupo sections.home controla quais blocos aparecem. O HTML continua disponivel para ajustes finos.",
        },
        {
          question: "Posso usar so a landing de captacao?",
          answer:
            "Sim. A landing funciona sozinha e compartilha o mesmo tema, o mesmo header, o mesmo footer e a mesma logica de formulario.",
        },
        {
          question: "A base depende de framework?",
          answer:
            "Nao. Ela usa HTML, CSS e JavaScript vanilla para manter a hospedagem estatica e a manutencao simples.",
        },
        {
          question: "Como eu crio novas rotas para o app?",
          answer:
            "Duplique um dos modelos em site/pages, ajuste o data-page, registre a rota na navegacao e crie o conteudo correspondente no config.",
        },
      ],
    },
    cta: {
      eyebrow: "Pronto para adaptar",
      title: "O trabalho pesado do front fica resolvido antes do ajuste fino.",
      description:
        "Quando a estrutura ja nasce forte, a energia do time pode ir para copy, prova, assets e validacao do produto.",
      primaryCta: {
        label: "Abrir modelos",
        href: "/pages/showcase.html",
      },
      secondaryCta: {
        label: "Conversar sobre a adaptacao",
        kind: "whatsapp",
        message: "Ola, quero adaptar o Atlas Frame para o meu produto.",
      },
    },
    contact: {
      eyebrow: "Contato central",
      title: "Use o mesmo bloco para briefing, venda ou suporte.",
      description:
        "A secao combina canais diretos e formulario com envio configuravel. O mesmo componente pode aparecer na home e na captacao.",
      asideTitle: "O que normalmente muda",
      asidePoints: [
        "Branding, favicon e tema visual",
        "Mensagem principal da dobra e CTA inicial",
        "Lista de provas, modelos e perguntas frequentes",
        "Destino do formulario e numero do WhatsApp",
      ],
    },
  },
  landing: {
    hero: {
      eyebrow: "Captacao direta",
      title: "Conduza a oferta com uma pagina curta, clara e pronta para clique.",
      highlight: "Pensada para conversao.",
      description:
        "Quando voce precisa validar uma oferta, captar leads ou apoiar um lancamento, esta rota concentra argumento, prova e contato sem distrair o usuario.",
      primaryCta: {
        label: "Solicitar uma primeira versao",
        kind: "whatsapp",
        message: "Ola, quero uma landing baseada no Atlas Frame.",
      },
      secondaryCta: {
        label: "Voltar para a home",
        href: "/",
      },
      imageAlt: "Mockup abstrato representando uma landing page focada em captacao",
    },
    proof: {
      eyebrow: "Sinal rapido",
      title: "A dobra ja entrega contexto, foco e proximo passo.",
      description:
        "A secao pode virar prova numerica, prazo, capacidade de entrega ou qualquer indicio claro de confianca.",
      items: [
        {
          value: "1",
          label: "CTA principal",
          detail: "sem disputar atencao com muitas rotas",
        },
        {
          value: "3",
          label: "blocos de apoio",
          detail: "prova curta, oferta e outcomes",
        },
        {
          value: "2",
          label: "caminhos de envio",
          detail: "WhatsApp ou integracao HTTP",
        },
      ],
    },
    offer: {
      eyebrow: "Oferta modular",
      title: "O fluxo da pagina cabe em poucos blocos bem definidos.",
      description:
        "Cada bloco abaixo pode representar plano, etapa do servico, diferencial do produto ou recorte de entrega.",
      items: [
        {
          badge: "Entrada",
          title: "Diagnostico rapido",
          description:
            "Use este bloco para explicar o primeiro passo com pouca friccao e sem lotar a dobra com detalhes.",
        },
        {
          badge: "Estrutura",
          title: "Pagina de campanha",
          description:
            "Oferta clara, prova curta, FAQ e formulario no mesmo fluxo para reduzir dispersao e encurtar a conversa.",
        },
        {
          badge: "Entrega",
          title: "Publicacao leve",
          description:
            "Hospedagem estatica, ativos locais e manutencao simples para colocar a rota no ar rapidamente.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Fluxo de conversa",
      title: "Da campanha ao atendimento sem trocar de base.",
      description:
        "Os blocos visuais abaixo funcionam como etapas, beneficios, provas ou resultados esperados da pagina.",
      items: [
        {
          title: "Mensagem concentrada",
          description:
            "O visitante entende a oferta antes de tocar no CTA e nao precisa montar o sentido da pagina sozinho.",
          image: "/assets/gallery-signal.svg",
          alt: "Composicao abstrata para mensagem concentrada",
        },
        {
          title: "Hierarquia mais limpa",
          description:
            "Os componentes ajudam a separar argumento, prova e acao em vez de empilhar blocos com o mesmo peso.",
          image: "/assets/gallery-structure.svg",
          alt: "Composicao abstrata para hierarquia limpa",
        },
        {
          title: "Contato ja preparado",
          description:
            "O modo WhatsApp gera link pronto e o modo HTTP envia os campos para o endpoint configurado.",
          image: "/assets/gallery-launch.svg",
          alt: "Composicao abstrata para ativacao de contato",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ da captacao",
      title: "Respostas curtas para manter o ritmo da conversao.",
      description:
        "Se a rota nao precisar de FAQ, basta desligar a secao em sections.landing.faq.",
      items: [
        {
          question: "Posso usar a pagina sem menu principal?",
          answer:
            "Sim. Voce pode simplificar a navegacao no HTML e manter a mesma base de conteudo, CTA e formulario.",
        },
        {
          question: "O formulario precisa de integracao imediata?",
          answer:
            "Nao. O modo padrao e WhatsApp. Quando houver endpoint, basta mudar contact.form.mode para http.",
        },
        {
          question: "Posso trocar as provas depois?",
          answer:
            "Sim. Os cards e metricas foram feitos para trocar placeholder por prova real sem refazer o layout.",
        },
      ],
    },
    cta: {
      eyebrow: "Fechamento",
      title: "Use a mesma base para campanha, validacao de oferta ou pagina de apoio comercial.",
      description:
        "A estrutura ja prepara copy, CTA e contato. O que muda e a narrativa de cada projeto.",
      primaryCta: {
        label: "Falar agora no WhatsApp",
        kind: "whatsapp",
        message: "Ola, quero usar o Atlas Frame em uma landing de captacao.",
      },
      secondaryCta: {
        label: "Ver a home completa",
        href: "/",
      },
    },
    contact: {
      eyebrow: "Contato de campanha",
      title: "Receba leads no WhatsApp ou no endpoint que voce configurar.",
      description:
        "O mesmo formulario respeita o modo definido no config central e pode ser reaproveitado em varias rotas.",
    },
  },
  pages: {
    company: {
      hero: {
        eyebrow: "Plataforma",
        title: "Entenda a logica do produto sem perder o ritmo da venda.",
        description:
          "Esta rota aprofunda o metodo, mostra o que muda por projeto e explica como a estrutura continua consistente.",
        primaryCta: {
          label: "Ver modelos",
          href: "/pages/showcase.html",
        },
        secondaryCta: {
          label: "Falar no WhatsApp",
          kind: "whatsapp",
          message: "Ola, quero adaptar a pagina de plataforma do Atlas Frame.",
        },
      },
      intro: {
        eyebrow: "Visao do sistema",
        title: "Uma pagina interna para metodo, criterio e contexto.",
        description:
          "Quando a home precisa ficar objetiva, esta rota recebe a profundidade necessaria para explicar o produto com calma.",
      },
      highlights: [
        {
          title: "Posicionamento legivel",
          description:
            "Espaco para explicar nicho, recorte de publico, tipo de entrega e valor percebido sem tirar a clareza do conjunto.",
        },
        {
          title: "Metodo replicavel",
          description:
            "Blocos para mostrar como a frente do produto e montada, validada, publicada e mantida depois do lancamento.",
        },
        {
          title: "Contexto sem excesso",
          description:
            "A pagina interna segura mais texto, mais nuance e mais prova sem comprometer a leveza da home principal.",
        },
      ],
      valuesIntro: {
        eyebrow: "Principios do sistema",
        title: "As decisoes visuais seguem um conjunto pequeno e firme de regras.",
        description:
          "Esses principios ajudam a manter a interface coesa mesmo quando o conteudo muda de projeto para projeto.",
      },
      values: [
        {
          title: "Hierarquia forte",
          description:
            "Marca, argumento e CTA aparecem primeiro. O restante aprofunda sem disputar a mesma prioridade visual.",
        },
        {
          title: "Menos friccao",
          description:
            "A experiencia evita ornamento desnecessario para que quem opera o site entenda o que esta vendo em segundos.",
        },
        {
          title: "Consistencia entre rotas",
          description:
            "Tema, navegacao, footer, formulario e comportamento continuam alinhados entre home, captacao e paginas internas.",
        },
      ],
      timelineIntro: {
        eyebrow: "Implantacao",
        title: "Da configuracao inicial ate a publicacao.",
        description:
          "A rota abaixo pode representar onboarding, discovery, adaptacao ou qualquer ciclo de entrega do produto.",
      },
      timeline: [
        {
          label: "Descoberta",
          description:
            "Mapeie objetivo, oferta, provas disponiveis, publico e canal principal de contato antes de abrir o layout.",
        },
        {
          label: "Adaptacao",
          description:
            "Troque copy, links, secoes, ativos e revise a direcao visual mais aderente ao que o produto precisa comunicar.",
        },
        {
          label: "Validacao",
          description:
            "Cheque responsividade, CTA, formularios, links e consistencia de titulo, description e Open Graph.",
        },
        {
          label: "Publicacao",
          description:
            "Suba em Vercel com a base ativa na pasta site e mantenha a operacao leve para futuras iteracoes.",
        },
      ],
      closing: {
        eyebrow: "Fechamento",
        title: "A pagina institucional segura profundidade para a home continuar objetiva.",
        description:
          "Com isso, a primeira dobra fica comercial e a explicacao detalhada ganha uma rota propria, mais calma e mais legivel.",
        primaryCta: {
          label: "Abrir captacao",
          href: "/landing.html",
        },
        secondaryCta: {
          label: "Voltar para a home",
          href: "/",
        },
      },
    },
    showcase: {
      hero: {
        eyebrow: "Modelos",
        title: "Veja como a mesma base pode virar home, landing e paginas de apoio.",
        description:
          "Este modelo serve para portfolio, vitrine de servicos, biblioteca de blocos ou qualquer grade orientada por narrativa e CTA.",
        primaryCta: {
          label: "Voltar para a home",
          href: "/",
        },
        secondaryCta: {
          label: "Solicitar adaptacao",
          kind: "whatsapp",
          message: "Ola, quero usar os modelos do Atlas Frame em um projeto.",
        },
      },
      intro: {
        eyebrow: "Estrutura replicavel",
        title: "Cards so quando eles realmente ajudam a leitura.",
        description:
          "O mesmo layout pode virar vitrine de paginas, colecao de servicos, listagem editorial ou repertorio de blocos reutilizaveis.",
      },
      filters: ["Todos", "Home", "Landing", "Institucional", "Vitrine"],
      items: [
        {
          category: "Home",
          title: "Home de produto",
          description:
            "Estrutura para apresentar a marca, o sistema e a CTA principal sem cair em um dashboard de marketing.",
          metric: "Dobra forte",
          image: "/assets/gallery-narrative.svg",
          alt: "Composicao abstrata para home de produto",
          cta: {
            label: "Abrir home",
            href: "/",
          },
        },
        {
          category: "Landing",
          title: "Landing de oferta",
          description:
            "Pagina focada em uma promessa especifica, com prova curta, FAQ e formulario reaproveitavel.",
          metric: "CTA direto",
          image: "/assets/gallery-conversion.svg",
          alt: "Composicao abstrata para landing de oferta",
          cta: {
            label: "Abrir captacao",
            href: "/landing.html",
          },
        },
        {
          category: "Institucional",
          title: "Pagina de plataforma",
          description:
            "Rota para explicar processo, principios, governanca ou contexto de marca quando a home precisa ficar mais leve.",
          metric: "Mais contexto",
          image: "/assets/gallery-structure.svg",
          alt: "Composicao abstrata para pagina institucional do produto",
          cta: {
            label: "Abrir plataforma",
            href: "/pages/company.html",
          },
        },
        {
          category: "Vitrine",
          title: "Biblioteca de modelos",
          description:
            "Vitrine de layouts e caminhos de uso para mostrar ao time como a mesma base se adapta sem perder consistencia.",
          metric: "Escala visual",
          image: "/assets/gallery-grid.svg",
          alt: "Composicao abstrata para biblioteca de modelos",
          cta: {
            label: "Rever vitrine",
            href: "/pages/showcase.html",
          },
        },
      ],
      closing: {
        eyebrow: "Expansao",
        title: "Quando precisar de novas rotas, a estrutura ja esta pronta para duplicar.",
        description:
          "Basta usar um dos modelos como base, criar o conteudo correspondente no config e registrar o link na navegacao.",
        primaryCta: {
          label: "Abrir captacao",
          href: "/landing.html",
        },
        secondaryCta: {
          label: "Voltar para a home",
          href: "/",
        },
      },
    },
  },
  contact: {
    email: "contato@example.com",
    phoneLabel: "+55 (85) 90000-4040",
    address: "Operacao remota com build e deploy em Vercel.",
    availability: "Seg a Sex, 09h as 18h.",
    whatsapp: {
      phone: "5585900004040",
      defaultMessage: "Ola, quero adaptar o Atlas Frame para um novo site.",
    },
    channels: [
      {
        label: "Email",
        value: "contato@example.com",
        href: "mailto:contato@example.com",
      },
      {
        label: "WhatsApp",
        value: "+55 (85) 90000-4040",
        href: "https://wa.me/5585900004040",
      },
      {
        label: "Operacao",
        value: "Build, QA e deploy estatico",
        href: "/pages/company.html",
      },
    ],
    form: {
      mode: "whatsapp",
      endpoint: "https://example.com/api/contact",
      method: "POST",
      successMessage: "Mensagem preparada. Abra o WhatsApp para concluir o envio.",
      errorMessage:
        "Nao foi possivel enviar agora. Revise os campos e tente novamente.",
      submitLabel: "Quero conversar",
      fields: {
        name: {
          label: "Nome",
          placeholder: "Seu nome",
        },
        email: {
          label: "Email",
          placeholder: "voce@empresa.com",
        },
        company: {
          label: "Projeto",
          placeholder: "Nome do app, site ou campanha",
        },
        message: {
          label: "Mensagem",
          placeholder: "Conte rapidamente o que voce precisa construir.",
        },
      },
    },
  },
  social: {
    links: [
      {
        label: "Instagram",
        href: "https://instagram.com/example",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/company/example",
      },
      {
        label: "Behance",
        href: "https://behance.net/example",
      },
    ],
  },
  assets: {
    logos: {
      mark: "/assets/logo-mark.svg",
    },
    heroPrimary: "/assets/hero-primary.svg",
    heroSecondary: "/assets/hero-secondary.svg",
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
      testimonials: true,
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
