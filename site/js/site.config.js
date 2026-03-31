const SITE_TEMPLATE_CONFIG = {
  theme: "studio",
  seo: {
    siteName: "Atlas Frame",
    defaultTitle: "Atlas Frame | Portal e templates para criar sites",
    defaultDescription:
      "Software com site publico, portal do cliente e workspace para criar, revisar e publicar sites comerciais.",
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
      login: {
        title: "Entrar | Atlas Frame",
        description:
          "Acesse o portal do cliente para editar branding, narrativa, paginas e publicacao do site.",
        path: "/login.html",
      },
      app: {
        title: "Workspace | Atlas Frame",
        description:
          "Ambiente autenticado para operar o template, revisar as paginas e preparar a publicacao.",
        path: "/app.html",
      },
    },
  },
  brand: {
    name: "Atlas Frame",
    shortName: "Atlas",
    eyebrow: "Software para criar sites comerciais",
    tagline: "Site publico, portal do cliente e publish no mesmo fluxo.",
    summary:
      "Atlas Frame conecta vitrine publica, login do cliente e workspace para montar, revisar e publicar sites sem depender de CMS.",
    location: "Operacao remota com entrega estatica.",
    legalName: "Atlas Frame App",
    foundedLabel: "Portal ativo",
    footerNote:
      "Ajuste conteudo, credenciais demo e rotas no config central para adaptar o produto ao seu app.",
  },
  navigation: {
    items: [
      { label: "Inicio", href: "/", page: "home", enabled: true },
      { label: "Plataforma", href: "/pages/company.html", page: "company", enabled: true },
      { label: "Modelos", href: "/pages/showcase.html", page: "showcase", enabled: true },
      { label: "Captacao", href: "/landing.html", page: "landing", enabled: true },
      { label: "Entrar", href: "/login.html", page: "login", enabled: true },
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
          { label: "Portal do cliente", href: "/login.html" },
          { label: "Workspace do template", href: "/app.html" },
          { label: "Config unico", href: "/pages/company.html" },
        ],
      },
    ],
    cta: {
      label: "Entrar no portal",
      href: "/login.html",
    },
  },
  home: {
    hero: {
      eyebrow: "Software para vender e operar sites com area do cliente",
      title: "Venda o template e entregue um portal para cada conta.",
      highlight: "Login, editor e publish no mesmo app.",
      description:
        "Atlas Frame organiza o site publico que vende o produto e a area autenticada onde o cliente ajusta branding, narrativa, paginas e publicacao. O front continua leve, mas a experiencia vira software.",
      primaryCta: {
        label: "Entrar no ambiente",
        href: "/login.html",
      },
      secondaryCta: {
        label: "Ver como funciona",
        href: "/pages/company.html",
      },
      imageAlt: "Mockup abstrato representando o front do aplicativo Atlas Frame",
      asideTitle: "Do login ao publish",
      asideText:
        "Cada conta entra no portal, edita o template e acompanha o preparo do site sem sair do mesmo fluxo visual.",
    },
    statsIntro: {
      eyebrow: "Sistema de operacao",
      title: "Site publico na frente, workspace do cliente por dentro.",
      description:
        "A base foi organizada para vender o produto, autenticar o cliente e operar a entrega em um unico sistema visual.",
    },
    stats: [
      {
        value: "01",
        label: "portal por cliente",
        detail: "login, sessao e acesso ao workspace",
      },
      {
        value: "05",
        label: "paineis internos",
        detail: "controle, identidade, conteudo, paginas e publish",
      },
      {
        value: "04",
        label: "rotas prontas",
        detail: "home, captacao, institucional e vitrine",
      },
      {
        value: "100%",
        label: "base editavel",
        detail: "preview, checklist e conteudo salvos no navegador",
      },
    ],
    services: {
      eyebrow: "O que o front resolve",
      title: "A experiencia foi desenhada para vender o produto e operar a entrega.",
      description:
        "O site publico apresenta a oferta; o portal autenticado coloca o cliente dentro do fluxo para configurar, revisar e publicar.",
      items: [
        {
          title: "Portal autenticado",
          description:
            "Cada conta acessa com login e senha e entra num ambiente proprio para operar o template sem depender do codigo bruto.",
        },
        {
          title: "Editor do template",
          description:
            "Branding, hero, CTA, paginas e modo de contato ficam organizados em paineis claros, com persistencia local.",
        },
        {
          title: "Preview vivo",
          description:
            "O cliente ajusta texto, tema e paginas enquanto acompanha uma previa do template em tempo real.",
        },
        {
          title: "Trilha de publicacao",
          description:
            "O ambiente interno organiza dominio, checklist e status para transformar o template em uma entrega de software.",
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
          title: "Site publico do produto",
          description:
            "Apresenta a proposta, organiza o discurso comercial e conduz o clique para a plataforma ou para o portal.",
          image: "/assets/gallery-narrative.svg",
          alt: "Ilustracao abstrata da pagina inicial do Atlas Frame",
          link: {
            label: "Rever a home",
            href: "/",
          },
        },
        {
          eyebrow: "Portal",
          title: "Workspace do cliente",
          description:
            "Entrega o produto vendavel: login, navegacao lateral, preview vivo e trilha de publicacao para usar o template.",
          image: "/assets/workspace-console.svg",
          alt: "Ilustracao do workspace autenticado do Atlas Frame",
          link: {
            label: "Abrir portal",
            href: "/login.html",
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
      title: "Cinco etapas para vender e operar o template.",
      description:
        "A proposta do Atlas Frame nao e esconder o HTML, e transformar a adaptacao do template em um fluxo claro para o cliente.",
      steps: [
        {
          step: "01",
          title: "Libere o acesso",
          description:
            "Crie o acesso do cliente e leve a conta para dentro do portal com sessao, status e ponto de partida definidos.",
        },
        {
          step: "02",
          title: "Defina marca e tema",
          description:
            "Atualize nome, resumo, favicon e direcao visual para alinhar o workspace com a identidade do projeto.",
        },
        {
          step: "03",
          title: "Ajuste a narrativa",
          description:
            "Troque hero, proposta, CTA e contato dentro do editor para aproximar a oferta da realidade do cliente.",
        },
        {
          step: "04",
          title: "Revise paginas e secoes",
          description:
            "Escolha as rotas ativas, ligue ou desligue secoes e valide o escopo antes de ir para publicacao.",
        },
        {
          step: "05",
          title: "Prepare o publish",
          description:
            "Revise dominio, checklist, modo de contato e entregue a versao pronta para deploy.",
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
          quote: "O site vende a oferta e o portal segura a operacao sem quebrar a linguagem visual.",
          author: "Produto",
          role: "Estrutura comercial",
        },
        {
          quote: "Login, editor e preview vivo transformam o template em algo claramente vendavel.",
          author: "Operacoes",
          role: "Onboarding do cliente",
        },
        {
          quote: "O cliente entende o que precisa fazer porque cada painel tem uma funcao objetiva.",
          author: "CS",
          role: "Acompanhamento de publish",
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
      title: "A camada comercial do app fica pronta antes da automacao pesada.",
      description:
        "Com portal, editor e preview no lugar, a energia do time pode ir para onboarding, integracao e escala do produto.",
      primaryCta: {
        label: "Abrir area do cliente",
        href: "/login.html",
      },
      secondaryCta: {
        label: "Conversar sobre a adaptacao",
        kind: "whatsapp",
        message: "Ola, quero adaptar o Atlas Frame para o meu produto.",
      },
    },
    contact: {
      eyebrow: "Contato central",
      title: "Venda, onboard e suporte no mesmo produto.",
      description:
        "A secao combina canais diretos e formulario com envio configuravel para apresentar a oferta e sustentar o pos-venda.",
      asideTitle: "O que normalmente muda",
      asidePoints: [
        "Credenciais demo e fluxo de acesso",
        "Branding, tema e narrativa da primeira dobra",
        "Rotas disponiveis no workspace do cliente",
        "Checklist, dominio e modo de publicacao",
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
        title: "Entenda como o site publico e o portal formam um unico produto.",
        description:
          "Esta rota aprofunda o metodo, mostra a area autenticada e explica como a estrutura continua consistente da venda ao publish.",
        primaryCta: {
          label: "Entrar no portal",
          href: "/login.html",
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
          title: "Portal autenticado",
          description:
            "Cada cliente entra com login e senha e encontra um ambiente proprio para operar o template com mais autonomia.",
        },
        {
          title: "Editor guiado",
          description:
            "Os paineis organizam branding, copy, paginas e publicacao em etapas legiveis para quem nao quer lidar com o HTML.",
        },
        {
          title: "Entrega acompanhada",
          description:
            "Preview, checklist e status deixam claro o que ja esta pronto e o que ainda falta para publicar o site.",
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
          title: "Operacao com estado",
          description:
            "O cliente volta ao portal e encontra o mesmo contexto salvo, com campos, toggles e proximos passos preservados.",
        },
        {
          title: "Preview editavel",
          description:
            "O ambiente interno traduz campos de configuracao em uma previa imediata do template, sem idas e vindas desnecessarias.",
        },
        {
          title: "Consistencia entre rotas",
          description:
            "Tema, navegacao, paginas e publish continuam alinhados entre site publico, modelos e area autenticada.",
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
        title: "A pagina institucional segura profundidade enquanto o portal cuida da operacao.",
        description:
          "Com isso, a home continua comercial, a explicacao detalhada ganha uma rota propria e o cliente trabalha dentro de um ambiente autenticado.",
        primaryCta: {
          label: "Abrir portal",
          href: "/login.html",
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
        title: "Veja como a mesma base vira site publico, portal e paginas de apoio.",
        description:
          "Este modelo serve para portfolio, vitrine de servicos, biblioteca de blocos e tambem para a area autenticada do produto.",
        primaryCta: {
          label: "Entrar no portal",
          href: "/login.html",
        },
        secondaryCta: {
          label: "Solicitar adaptacao",
          kind: "whatsapp",
          message: "Ola, quero usar os modelos do Atlas Frame em um projeto.",
        },
      },
      intro: {
        eyebrow: "Estrutura replicavel",
        title: "Rotas diferentes, mesma linguagem operacional.",
        description:
          "A mesma base pode vender o produto, entregar um ambiente autenticado e sustentar as paginas que cercam o fluxo.",
      },
      filters: ["Todos", "Home", "Portal", "Landing", "Institucional", "Vitrine"],
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
          category: "Portal",
          title: "Workspace do cliente",
          description:
            "Ambiente autenticado com login, navegacao lateral, painel de edicao e preview vivo para operar o template.",
          metric: "Sessao ativa",
          image: "/assets/workspace-console.svg",
          alt: "Composicao do workspace autenticado do Atlas Frame",
          cta: {
            label: "Entrar no portal",
            href: "/login.html",
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
        title: "Quando precisar vender o produto ou operar a entrega, a estrutura ja esta pronta.",
        description:
          "Basta usar um dos modelos como base, criar o conteudo correspondente no config e registrar o link publico ou autenticado.",
        primaryCta: {
          label: "Abrir portal",
          href: "/login.html",
        },
        secondaryCta: {
          label: "Voltar para a home",
          href: "/",
        },
      },
    },
  },
  product: {
    access: {
      loginPath: "/login.html",
      appPath: "/app.html",
      sessionStorageKey: "atlas-frame-session",
      workspaceStorageKey: "atlas-frame-workspace",
      demoUser: {
        email: "cliente@atlasframe.app",
        password: "Atlas123!",
        name: "Camila Rocha",
        role: "Gestora de implantacao",
      },
    },
    login: {
      eyebrow: "Area vendavel",
      title: "Entre para configurar, revisar e publicar o seu site.",
      description:
        "Cada cliente acessa um portal proprio para ajustar marca, copy, paginas e publicacao do template sem depender do codigo bruto.",
      benefits: [
        "Login e sessao persistida no navegador",
        "Workspace com painel, preview e checklist",
        "Fluxo de publicacao orientado por etapas",
      ],
      demoTitle: "Acesso demonstrativo",
      demoDescription:
        "Use as credenciais abaixo para validar a experiencia comercial do app e navegar pela area autenticada.",
    },
    workspace: {
      title: "Console do template",
      description:
        "Edite branding, narrativa, paginas e publicacao do seu site sem sair do mesmo fluxo.",
      panels: [
        {
          key: "overview",
          label: "Controle",
          description: "status geral e proximo passo",
        },
        {
          key: "identity",
          label: "Identidade",
          description: "marca, tema e resumo",
        },
        {
          key: "content",
          label: "Conteudo",
          description: "hero, CTA e oferta",
        },
        {
          key: "pages",
          label: "Paginas",
          description: "rotas e secoes ativas",
        },
        {
          key: "publish",
          label: "Publish",
          description: "dominio, modo e checklist",
        },
      ],
      checklist: [
        "Marca revisada",
        "Hero alinhado com a oferta",
        "Paginas essenciais ligadas",
        "Modo de contato definido",
        "Dominio pronto para publicacao",
      ],
      milestones: [
        {
          label: "Acesso liberado",
          description: "cliente autenticado no portal",
        },
        {
          label: "Narrativa ajustada",
          description: "copy principal revisada",
        },
        {
          label: "Escopo validado",
          description: "rotas e secoes selecionadas",
        },
        {
          label: "Publish encaminhado",
          description: "dominio e checklist revisados",
        },
      ],
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
    workspaceConsole: "/assets/workspace-console.svg",
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
