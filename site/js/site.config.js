const SITE_TEMPLATE_CONFIG = {
  theme: "studio",
  seo: {
    siteName: "Jetsales Brasil",
    defaultTitle: "Jetsales Brasil | Atendimento, automacao e vendas no WhatsApp oficial",
    defaultDescription:
      "A Jetsales organiza atendimento, automacao, IA aplicada e vendas no WhatsApp oficial com mais governanca, contexto comercial e controle operacional.",
    baseUrl: "https://jetsalesbrasil.com.br",
    favicon: "/assets/favicon.svg",
    ogImage: "/assets/og-template.svg",
    pages: {
      home: {
        title: "Jetsales Brasil | Operacao comercial no WhatsApp oficial",
        description:
          "Centralize atendimento, automacao, equipes e canais Meta em uma operacao mais clara, rastreavel e orientada a vendas.",
        path: "/",
      },
      landing: {
        title: "Agende uma demonstracao | Jetsales Brasil",
        description:
          "Converse com a Jetsales e veja como estruturar atendimento, IA e automacoes no WhatsApp oficial sem promessas cinzas.",
        path: "/landing.html",
      },
      company: {
        title: "Como a Jetsales opera | Jetsales Brasil",
        description:
          "Conheca a operacao da Jetsales, os principios de governanca dos canais e a estrutura de onboarding para times comerciais.",
        path: "/pages/company.html",
      },
      showcase: {
        title: "Solucoes e casos de uso | Jetsales Brasil",
        description:
          "Explore os fluxos que a Jetsales aplica em atendimento, automacao e vendas para diferentes segmentos e estruturas comerciais.",
        path: "/pages/showcase.html",
      },
    },
  },
  brand: {
    name: "Jetsales Brasil",
    shortName: "Jetsales",
    eyebrow: "WhatsApp oficial, IA aplicada e multiatendimento",
    tagline: "Atendimento, automacao e vendas no WhatsApp oficial com mais governanca.",
    summary:
      "A Jetsales conecta canais, equipes, IA e operacao comercial em uma estrutura mais clara para atender, vender e acompanhar performance.",
    location: "Aracaju, Sergipe - Brasil.",
    legalName: "Jetsales Sistemas e Tecnologia Ltda.",
    foundedLabel: "Desde 2021",
    footerNote:
      "Automacoes, campanhas e mensagens devem respeitar consentimento, templates aprovados, alternativas de suporte humano e governanca dos ativos Meta.",
  },
  navigation: {
    items: [
      { label: "Inicio", href: "/", page: "home", enabled: true },
      { label: "Demonstracao", href: "/landing.html", page: "landing", enabled: true },
      { label: "Operacao", href: "/pages/company.html", page: "company", enabled: true },
      { label: "Solucoes", href: "/pages/showcase.html", page: "showcase", enabled: true },
    ],
    footerGroups: [
      {
        title: "Produto",
        items: [
          { label: "Inicio", href: "/" },
          { label: "Demonstracao", href: "/landing.html" },
          { label: "Central de ajuda", href: "https://tutoriais.jetsalesbrasil.com.br/" },
        ],
      },
      {
        title: "Governanca",
        items: [
          { label: "Operacao e onboarding", href: "/pages/company.html" },
          { label: "Solucoes por segmento", href: "/pages/showcase.html" },
          { label: "Politica de cookies", href: "https://jetsalesbrasil.com.br/politica-de-cookies/" },
        ],
      },
      {
        title: "Canais",
        items: [
          { label: "Site oficial", href: "https://jetsalesbrasil.com.br/" },
          { label: "LinkedIn", href: "https://www.linkedin.com/company/jetsales-brasil" },
          { label: "Instagram", href: "https://www.instagram.com/jetsalesbrasil/" },
        ],
      },
    ],
    cta: {
      label: "Agendar demonstracao",
      kind: "whatsapp",
      message: "Ola, vim pelo site da Jetsales e quero agendar uma demonstracao.",
    },
  },
  home: {
    hero: {
      eyebrow: "JetGO para operacao comercial em canais oficiais",
      title: "Jetsales centraliza atendimento, automacao e vendas",
      highlight: "sem perder governanca do canal.",
      description:
        "Organize WhatsApp oficial, Instagram, Facebook, webchat, IA e multiatendimento em uma operacao mais rastreavel, com mensagens consentidas e mais contexto para o time comercial.",
      primaryCta: {
        label: "Agendar demonstracao",
        kind: "whatsapp",
        message: "Ola, vim pelo site da Jetsales e quero agendar uma demonstracao.",
      },
      secondaryCta: {
        label: "Ver o fluxo comercial",
        href: "/landing.html",
      },
      imageAlt: "Ilustracao da plataforma Jetsales com inbox, funis e indicadores",
      signals: [
        {
          title: "API oficial da Meta",
          detail: "WhatsApp Business, Instagram e Facebook conectados com mais previsibilidade operacional.",
        },
        {
          title: "Equipe no mesmo fluxo",
          detail: "Um unico numero, varios atendentes, departamentos e acompanhamento de desempenho.",
        },
        {
          title: "IA e automacoes com contexto",
          detail: "Fluxos pensados para organizar atendimento e vendas sem incentivar spam ou atalhos fora de politica.",
        },
      ],
    },
    statsIntro: {
      eyebrow: "Estrutura operacional",
      title: "Uma base para vender melhor e operar com menos ruido.",
      description:
        "A plataforma combina canais oficiais, distribuicao de atendimento, automacoes e acompanhamento gerencial em um fluxo unico.",
    },
    stats: [
      {
        value: "1",
        label: "operacao central",
        detail: "inbox, gestao e acompanhamento no mesmo ambiente",
      },
      {
        value: "Meta",
        label: "canais oficiais",
        detail: "WhatsApp, Instagram e Facebook no mesmo desenho operacional",
      },
      {
        value: "IA",
        label: "apoio ao atendimento",
        detail: "triagem, ganho de velocidade e contexto para o proximo passo",
      },
      {
        value: "Times",
        label: "multiusuario real",
        detail: "departamentos, filas e visibilidade para a lideranca",
      },
    ],
    services: {
      eyebrow: "Capacidades principais",
      title: "A Jetsales estrutura a operacao do canal, nao apenas o envio da mensagem.",
      description:
        "A proposta combina tecnologia, atendimento e governanca para transformar o WhatsApp em um canal comercial mais previsivel.",
      items: [
        {
          title: "Conexao oficial dos canais",
          description:
            "Conecte WhatsApp oficial, Instagram, Facebook e webchat a uma operacao unica, com menos troca de ferramenta e menos perda de contexto.",
        },
        {
          title: "Automacoes com regra clara",
          description:
            "Organize respostas, jornadas, redistribuicao e funis respeitando consentimento, janela operacional e uso de templates aprovados.",
        },
        {
          title: "Gestao do time de atendimento",
          description:
            "Acompanhe desempenho dos colaboradores, distribuicao entre departamentos e gargalos do fluxo comercial em um mesmo dashboard.",
        },
        {
          title: "Operacao orientada a venda",
          description:
            "Transforme o atendimento em uma esteira mais profissional, com mais velocidade, padrao de resposta e visibilidade para o gestor.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Onde a operacao ganha forma",
      title: "Do canal oficial ao acompanhamento do time, cada bloco responde a um problema real.",
      description:
        "A Jetsales trabalha a operacao comercial de ponta a ponta: conexao, atendimento, automacao, governanca e leitura de desempenho.",
      items: [
        {
          eyebrow: "Canal oficial",
          title: "WhatsApp, Instagram e Facebook no mesmo fluxo",
          description:
            "Centralize os pontos de contato mais usados pelo cliente sem perder historico, contexto nem visibilidade do atendimento.",
          image: "/assets/gallery-narrative.svg",
          alt: "Ilustracao de canais conectados na plataforma Jetsales",
          link: {
            label: "Entender a operacao",
            href: "/pages/company.html",
          },
        },
        {
          eyebrow: "Governanca",
          title: "Mensageria com mais controle e menos improviso",
          description:
            "Ownership da pagina, permissao correta, politicas do WhatsApp e configuracoes dos ativos entram no mesmo raciocinio de implantacao.",
          image: "/assets/gallery-structure.svg",
          alt: "Ilustracao de governanca e monitoramento de canais",
          link: {
            label: "Ver principios de operacao",
            href: "/pages/company.html",
          },
        },
        {
          eyebrow: "Vendas",
          title: "Automacao, IA e atendimento a servico da conversao",
          description:
            "A meta nao e automatizar por automatizar, e sim reduzir tempo de resposta, organizar follow-up e manter o time comercial mais responsivo.",
          image: "/assets/gallery-launch.svg",
          alt: "Ilustracao de funis e automacoes comerciais",
          link: {
            label: "Ver demonstracao comercial",
            href: "/landing.html",
          },
        },
      ],
    },
    process: {
      eyebrow: "Da implantacao ao ganho de ritmo",
      title: "Quatro etapas para sair do atendimento pulverizado para uma operacao comercial mais clara.",
      description:
        "A logica da implementacao precisa alinhar canais, permissao, times, regras de contato e acompanhamento de resultado.",
      steps: [
        {
          step: "01",
          title: "Diagnostico do canal e da jornada",
          description:
            "Mapear onde as conversas chegam, como as equipes respondem hoje e quais pontos geram perda de contexto, atraso ou retrabalho.",
        },
        {
          step: "02",
          title: "Conexao oficial e ownership correto",
          description:
            "Estruturar canais Meta, ownership de paginas e acessos de parceiros sem deslocar a titularidade do ativo para terceiros.",
        },
        {
          step: "03",
          title: "Fila, automacao e regra de mensagem",
          description:
            "Distribuir atendimento, configurar respostas, definir templates aprovados e desenhar opt-in, opt-out e janelas de contato.",
        },
        {
          step: "04",
          title: "Leitura de performance e melhoria continua",
          description:
            "Acompanhar time, resposta, gargalos, qualidade do atendimento e oportunidades de venda para evoluir a operacao sem prometer o que a politica nao permite.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Sinais de confianca",
      title: "",
      description: "",
      items: [],
    },
    faq: {
      eyebrow: "Perguntas que precisam estar claras",
      title: "A operacao so escala quando a regra do canal tambem escala.",
      description:
        "A copy do site e a estrutura comercial precisam deixar evidente o que e permitido, o que exige aprovacao e o que depende de consentimento do usuario.",
      items: [
        {
          question: "A Jetsales trabalha com mensagens fora das politicas do WhatsApp?",
          answer:
            "Nao. O desenho correto envolve consentimento, uso de templates aprovados fora da janela permitida, opt-out claro e uma alternativa de suporte humano quando necessario.",
        },
        {
          question: "Ownership de pagina e Instagram realmente importa para a operacao?",
          answer:
            "Sim. Pagina, Instagram comercial e acessos de parceiros precisam seguir ownership coerente para evitar bloqueios, perda de controle e ruido em anuncios ou integracoes.",
        },
        {
          question: "Automacao significa volume sem criterio?",
          answer:
            "Nao. A automacao precisa servir ao atendimento e ao funil com segmentacao, consentimento e governanca. Promessa vaga de volume sem criterio e atalho ruim para o negocio e para a plataforma.",
        },
        {
          question: "Como a API oficial entra nesse processo?",
          answer:
            "Ela e a base para integrar o canal oficial, organizar operacao e reduzir improviso tecnico. A implementacao ainda precisa respeitar politicas, limites e boas praticas da Meta.",
        },
      ],
    },
    cta: {
      eyebrow: "Proximo passo",
      title: "Se o WhatsApp ja e canal de venda, ele precisa de operacao a altura.",
      description:
        "Converse com a Jetsales para revisar canal oficial, distribuir atendimento, estruturar automacoes e ganhar mais leitura sobre o que acontece na jornada comercial.",
      primaryCta: {
        label: "Agendar demonstracao",
        kind: "whatsapp",
        message: "Ola, quero agendar uma demonstracao da Jetsales.",
      },
      secondaryCta: {
        label: "Explorar solucoes",
        href: "/pages/showcase.html",
      },
    },
    contact: {
      eyebrow: "Fale com a Jet",
      title: "Abra a conversa pelo WhatsApp e chegue com o contexto certo.",
      description:
        "Use o formulario para iniciar um contato comercial. O envio abre o WhatsApp oficial com a mensagem preenchida para reduzir friccao no primeiro atendimento.",
      asideTitle: "O que a conversa inicial normalmente cobre",
      asidePoints: [
        "Canal atual, ownership e permissao dos ativos Meta",
        "Estrutura da equipe, filas, departamentos e tempo de resposta",
        "Fluxos de automacao, templates e pontos de consentimento",
        "Integracoes, acompanhamento de atendimento e objetivo comercial",
      ],
    },
  },
  landing: {
    hero: {
      eyebrow: "Demonstracao comercial",
      title: "Veja como a Jetsales organiza atendimento e vendas",
      highlight: "no WhatsApp oficial.",
      description:
        "A demonstracao foca em operacao real: canais conectados, distribuicao do time, automacoes, IA aplicada, governanca do ativo e proximos passos do seu fluxo comercial.",
      primaryCta: {
        label: "Falar no WhatsApp",
        kind: "whatsapp",
        message: "Ola, quero falar com a Jetsales sobre uma demonstracao.",
      },
      secondaryCta: {
        label: "Voltar para a home",
        href: "/",
      },
      imageAlt: "Ilustracao do fluxo comercial da Jetsales em uma tela escura",
      signals: [
        {
          title: "Mensagens consentidas",
          detail: "O canal precisa crescer com opt-in, opt-out e uso correto de templates.",
        },
        {
          title: "Time e IA no mesmo contexto",
          detail: "Menos troca de ferramenta e mais clareza sobre quem atende, quando e por qual canal.",
        },
      ],
    },
    proof: {
      eyebrow: "Pontos que precisam estar no desenho",
      title: "Nao basta responder mais rapido. E preciso responder com criterio operacional.",
      description:
        "A demonstracao mostra como a estrutura correta reduz ruido de atendimento e melhora a previsibilidade do canal.",
      items: [
        {
          value: "API",
          label: "canal oficial",
          detail: "integre o WhatsApp Business dentro de uma operacao mais consistente",
        },
        {
          value: "24h",
          label: "janela sensivel",
          detail: "fora dela, a conversa exige uso correto de templates aprovados",
        },
        {
          value: "Humano",
          label: "rota de apoio",
          detail: "automacao nao elimina a necessidade de um caminho claro para suporte real",
        },
      ],
    },
    offer: {
      eyebrow: "O que a conversa precisa cobrir",
      title: "Uma demonstracao util parte da operacao, nao do discurso.",
      description:
        "Cada bloco abaixo representa uma camada que precisa fazer sentido ao mesmo tempo para a operacao ganhar ritmo.",
      items: [
        {
          badge: "Canal",
          title: "Conexao e ownership",
          description:
            "Revisar pagina, Instagram comercial, acessos e ownership dos ativos para nao construir em cima de um risco estrutural.",
        },
        {
          badge: "Equipe",
          title: "Filas, departamentos e SLA",
          description:
            "Desenhar como as conversas entram, quem assume, quando redistribuir e como acompanhar performance do time.",
        },
        {
          badge: "Fluxo",
          title: "Automacao com regra de negocio",
          description:
            "Usar IA, gatilhos e templates quando isso melhora a jornada, sem apelos vagos a volume cego ou contato fora de contexto.",
        },
      ],
    },
    outcomes: {
      eyebrow: "O que melhora quando a base esta certa",
      title: "Atendimento menos disperso. Conversa mais rastreavel. Time com mais contexto.",
      description:
        "A operacao fica mais legivel para quem atende, para quem lidera e para quem depende do canal para vender.",
      items: [
        {
          title: "Visibilidade da operacao",
          description:
            "Acompanhe onde a conversa entrou, quem respondeu e quais filas precisam de atencao.",
          image: "/assets/gallery-signal.svg",
          alt: "Ilustracao de indicadores e monitoramento",
        },
        {
          title: "Fluxo comercial mais organizado",
          description:
            "Menos improviso entre primeiro contato, qualificacao, atendimento e follow-up.",
          image: "/assets/gallery-grid.svg",
          alt: "Ilustracao de pipeline comercial e distribuicao de conversas",
        },
        {
          title: "Governanca desde a mensagem",
          description:
            "Ownership, permissao, templates e privacidade deixam de ser detalhe e entram no desenho principal.",
          image: "/assets/gallery-conversion.svg",
          alt: "Ilustracao de governanca e mensagens autorizadas",
        },
      ],
    },
    faq: {
      eyebrow: "Antes de marcar",
      title: "A conversa comercial precisa partir dos riscos e das metas corretas.",
      description:
        "Essas perguntas ajudam a separar curiosidade de diagnostico serio da operacao.",
      items: [
        {
          question: "A demonstracao serve so para quem ja usa a API oficial?",
          answer:
            "Nao. Ela tambem ajuda empresas que ainda estao reorganizando canal, ownership de pagina ou estrutura do time antes da conexao oficial.",
        },
        {
          question: "A Jetsales promete volume de mensagens sem restricao?",
          answer:
            "Nao. O trabalho serio precisa considerar consentimento, qualidade do contato, uso correto de templates e limites das politicas do WhatsApp Business.",
        },
        {
          question: "Posso levar meu time para a conversa?",
          answer:
            "Sim. Quanto mais cedo comercial, atendimento e operacao alinham a expectativa, melhor fica o desenho do fluxo.",
        },
      ],
    },
    cta: {
      eyebrow: "Conversar com contexto",
      title: "Leve seu canal atual, seus gargalos e sua meta comercial para a mesa.",
      description:
        "A melhor demonstracao e a que sai com clareza sobre ownership, canais, equipe, automacoes e proximo passo tecnico.",
      primaryCta: {
        label: "Abrir WhatsApp da Jetsales",
        kind: "whatsapp",
        message: "Ola, quero agendar uma demonstracao da Jetsales para revisar minha operacao.",
      },
      secondaryCta: {
        label: "Ver como a operacao funciona",
        href: "/pages/company.html",
      },
    },
    contact: {
      eyebrow: "Contato comercial",
      title: "Inicie pelo WhatsApp oficial da Jetsales.",
      description:
        "O formulario prepara a conversa com nome, empresa e contexto do seu fluxo atual para o primeiro atendimento.",
    },
  },
  pages: {
    company: {
      hero: {
        eyebrow: "Operacao, onboarding e confianca institucional",
        title: "Software, canais oficiais e rotina comercial no mesmo desenho operacional.",
        description:
          "A Jetsales atua como plataforma de software para organizar atendimento, automacao e vendas via WhatsApp, com base em ownership correto, operacao clara e governanca dos canais.",
        primaryCta: {
          label: "Agendar demonstracao",
          kind: "whatsapp",
          message: "Ola, quero entender como a Jetsales estrutura a operacao comercial.",
        },
        secondaryCta: {
          label: "Ver solucoes por segmento",
          href: "/pages/showcase.html",
        },
      },
      intro: {
        eyebrow: "Como a base se sustenta",
        title: "A operacao precisa ser confiavel para o cliente, para o time e para o canal.",
        description:
          "A pagina institucional aprofunda os pilares operacionais que nao cabem na home: ownership, onboarding, time, politica de mensagem e responsabilidade sobre os ativos digitais.",
      },
      highlights: [
        {
          title: "Empresa de software com foco em WhatsApp",
          description:
            "A Jetsales se apresenta publicamente como plataforma de gestao, automacao e vendas pelo WhatsApp, com sede em Aracaju e atuacao voltada a operacao comercial.",
        },
        {
          title: "Canal oficial e configuracao coerente",
          description:
            "Conexao tecnica, ownership de pagina, relacionamento com parceiros e coerencia entre pagina e Instagram comercial precisam ser tratados como parte do mesmo problema.",
        },
        {
          title: "Atendimento com visibilidade gerencial",
          description:
            "Acompanhamento do rendimento dos colaboradores, departamentos e filas ajuda a profissionalizar o atendimento e orientar a melhoria continua.",
        },
      ],
      valuesIntro: {
        eyebrow: "Principios de operacao",
        title: "Tecnologia sem regra de canal vira risco. Regra sem operacao vira gargalo.",
        description:
          "Os principios abaixo conectam o que a plataforma promete com o que as politicas da Meta e do WhatsApp exigem.",
      },
      values: [
        {
          title: "Ownership correto dos ativos",
          description:
            "Paginas, Instagram comercial e acessos de parceiros precisam permanecer sob titularidade correta para evitar perda de controle do ativo.",
        },
        {
          title: "Mensagens com consentimento",
          description:
            "Opt-in, opt-out, templates aprovados e canal humano de apoio nao sao detalhe juridico; sao parte do desenho da experiencia.",
        },
        {
          title: "Boas praticas de API e governanca",
          description:
            "Versionamento, testes, sandbox, leitura de erros e uso eficiente das chamadas ajudam a construir uma operacao mais resiliente.",
        },
      ],
      timelineIntro: {
        eyebrow: "Ritmo de implantacao",
        title: "Do diagnostico ao acompanhamento, a operacao precisa evoluir em fases claras.",
        description:
          "Essa linha mostra o tipo de conversa que precisa acontecer para que o canal oficial funcione com menos friccao e mais contexto.",
      },
      timeline: [
        {
          label: "Descoberta",
          description:
            "Mapear canais ativos, ownership, estrutura de equipe, pontos de contato e metas comerciais antes de qualquer configuracao.",
        },
        {
          label: "Conexao",
          description:
            "Organizar canais oficiais, permissoes, ownership de paginas e integracoes sem deixar o ativo principal nas maos erradas.",
        },
        {
          label: "Orquestracao",
          description:
            "Distribuir atendimento, desenhar filas, automacoes, templates e transbordo para humano com regras compreensiveis para o time.",
        },
        {
          label: "Acompanhamento",
          description:
            "Ler performance, gargalos, qualidade do atendimento e oportunidades de venda para melhorar a operacao sem violar politicas do canal.",
        },
      ],
      closing: {
        eyebrow: "Quando a operacao amadurece",
        title: "O canal deixa de ser improvisado e passa a ser um ativo comercial gerenciavel.",
        description:
          "Essa maturidade depende tanto de tecnologia quanto de ownership, politica de mensagem, fila, time e disciplina de acompanhamento.",
        primaryCta: {
          label: "Falar com a Jetsales",
          kind: "whatsapp",
          message: "Ola, quero conversar com a Jetsales sobre ownership, canais e atendimento.",
        },
        secondaryCta: {
          label: "Explorar solucoes",
          href: "/pages/showcase.html",
        },
      },
    },
    showcase: {
      hero: {
        eyebrow: "Solucoes por segmento e caso de uso",
        title: "A estrutura do canal muda de setor para setor, mas a governanca precisa continuar forte.",
        description:
          "A Jetsales apresenta solucoes para contextos comerciais diferentes, sempre com o mesmo nucleo: canal oficial, contexto de atendimento, automacao com regra e leitura de performance.",
        primaryCta: {
          label: "Agendar demonstracao",
          kind: "whatsapp",
          message: "Ola, quero ver como a Jetsales se aplica ao meu segmento.",
        },
        secondaryCta: {
          label: "Voltar para a home",
          href: "/",
        },
      },
      intro: {
        eyebrow: "Casos de uso",
        title: "Segmentos diferentes exigem combinacoes diferentes de fila, contexto, follow-up e automacao.",
        description:
          "Os blocos abaixo nao sao pacotes prontos. Eles mostram como a mesma base operacional se adapta a contextos comerciais distintos.",
      },
      filters: ["Todos", "Atendimento", "Automacao", "Governanca", "Setores"],
      items: [
        {
          category: "Setores",
          title: "Industria e producao",
          description:
            "Operacoes com volume, distribuicao entre equipes e necessidade de historico claro para atendimento, cotacao e follow-up.",
          metric: "Fila + contexto",
          image: "/assets/gallery-grid.svg",
          alt: "Ilustracao de operacao industrial com filas de atendimento",
          cta: {
            label: "Ver como a operacao se organiza",
            href: "/pages/company.html",
          },
        },
        {
          category: "Setores",
          title: "Seguros e financas",
          description:
            "Fluxos mais sensiveis pedem criterio de mensagem, ownership bem resolvido e acompanhamento forte sobre qualidade do atendimento.",
          metric: "Regra + registro",
          image: "/assets/gallery-conversion.svg",
          alt: "Ilustracao de operacao financeira com governanca de mensagem",
          cta: {
            label: "Agendar demonstracao",
            href: "/landing.html",
          },
        },
        {
          category: "Setores",
          title: "Servicos profissionais",
          description:
            "Escritorios, consultorias e operacoes B2B ganham velocidade quando centralizam conversa, qualificacao e proximo passo em um fluxo menos fragmentado.",
          metric: "Qualificacao + follow-up",
          image: "/assets/gallery-signal.svg",
          alt: "Ilustracao de funil para servicos profissionais",
          cta: {
            label: "Ver jornada comercial",
            href: "/landing.html",
          },
        },
        {
          category: "Setores",
          title: "Saude e bem-estar",
          description:
            "Times de atendimento precisam de ritmo, padrao de resposta e governanca de canal para nao transformar demanda em caos operacional.",
          metric: "SLA + distribuicao",
          image: "/assets/gallery-structure.svg",
          alt: "Ilustracao de operacao de atendimento em saude e bem-estar",
          cta: {
            label: "Falar com a Jetsales",
            href: "/landing.html",
          },
        },
      ],
      closing: {
        eyebrow: "Adaptacao com criterio",
        title: "O setor muda. O compromisso com ownership, consentimento e clareza operacional nao.",
        description:
          "Se o seu canal comercial depende de WhatsApp, vale revisar como a Jetsales organiza equipe, automacao e governanca para o seu contexto.",
        primaryCta: {
          label: "Agendar demonstracao",
          kind: "whatsapp",
          message: "Ola, quero entender como a Jetsales se aplica ao meu segmento.",
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
      demoUser: {
        name: "Equipe Jetsales",
        role: "Workspace demo",
        email: "demo@jetsales.local",
        password: "jetsales-demo",
      },
      sessionStorageKey: "jetsales-session",
      workspaceStorageKey: "jetsales-workspace",
      loginPath: "/login.html",
      appPath: "/app.html",
    },
    login: {
      eyebrow: "Portal autenticado",
      title: "Entre no workspace da Jetsales.",
      description:
        "Use o ambiente autenticado para revisar identidade, narrativa, paginas ativas e readiness antes da publicacao.",
      demoTitle: "Acesso demonstrativo",
      demoDescription:
        "Credenciais de exemplo para navegar no workspace estatico do projeto.",
      benefits: [
        "Revisar a narrativa principal e o CTA comercial.",
        "Acompanhar rotas, secoes e readiness do pacote.",
        "Validar o resumo antes de handoff ou deploy.",
      ],
    },
    workspace: {
      title: "Workspace Jetsales",
      description:
        "Edite branding, mensagem principal, escopo de paginas e checklist de publish do projeto.",
      panels: [
        {
          key: "overview",
          label: "Overview",
          description: "Status geral da entrega",
        },
        {
          key: "identity",
          label: "Identidade",
          description: "Marca, tema e posicionamento",
        },
        {
          key: "content",
          label: "Conteudo",
          description: "Hero, CTA e narrativa",
        },
        {
          key: "pages",
          label: "Paginas",
          description: "Rotas e secoes ativas",
        },
        {
          key: "publish",
          label: "Publish",
          description: "Dominio e checklist final",
        },
      ],
      checklist: [
        "Marca e tema revisados.",
        "Hero e CTA com mensagem clara.",
        "Escopo de paginas confirmado.",
        "Canal de contato definido.",
        "Dominio e lancamento alinhados.",
      ],
      milestones: [
        {
          label: "Acesso liberado",
          description: "Sessao ativa e workspace disponivel para revisao.",
        },
        {
          label: "Narrativa revisada",
          description: "Titulo, destaque e descricao principal validados.",
        },
        {
          label: "Escopo fechado",
          description: "Paginas e secoes essenciais definidas no pacote.",
        },
        {
          label: "Publish encaminhado",
          description: "Dominio, owner e observacoes finais preenchidos.",
        },
      ],
    },
  },  contact: {
    email: "",
    phoneLabel: "+55 (79) 99747-4816",
    address: "Aracaju, Sergipe - Brasil",
    availability: "Atendimento comercial e demonstracoes sob consulta.",
    whatsapp: {
      phone: "5579997474816",
      defaultMessage: "Ola, vim pelo site da Jetsales e quero agendar uma demonstracao.",
    },
    channels: [
      {
        label: "WhatsApp oficial",
        value: "+55 (79) 99747-4816",
        href: "https://wa.me/5579997474816",
      },
      {
        label: "Site oficial",
        value: "jetsalesbrasil.com.br",
        href: "https://jetsalesbrasil.com.br/",
      },
      {
        label: "LinkedIn",
        value: "Jetsales Brasil",
        href: "https://www.linkedin.com/company/jetsales-brasil",
      },
      {
        label: "Instagram",
        value: "@jetsalesbrasil",
        href: "https://www.instagram.com/jetsalesbrasil/",
      },
    ],
    footerItems: [
      {
        label: "WhatsApp oficial",
        value: "+55 (79) 99747-4816",
        href: "https://wa.me/5579997474816",
      },
      {
        label: "Base publica",
        value: "Aracaju, Sergipe - Brasil",
      },
      {
        label: "Site",
        value: "jetsalesbrasil.com.br",
        href: "https://jetsalesbrasil.com.br/",
      },
    ],
    form: {
      mode: "whatsapp",
      endpoint: "",
      method: "POST",
      introMessage: "Ola, vim pelo site da Jetsales e quero agendar uma demonstracao.",
      successMessage: "Mensagem preparada. Abra o WhatsApp para concluir o envio.",
      errorMessage:
        "Nao foi possivel abrir o WhatsApp agora. Revise os campos e tente novamente.",
      submitLabel: "Quero falar com a Jet",
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
          label: "Empresa",
          placeholder: "Empresa, area ou contexto comercial",
        },
        message: {
          label: "Contexto",
          placeholder: "Conte rapidamente como seu atendimento funciona hoje e o que voce quer organizar.",
        },
      },
    },
  },
  social: {
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/jetsales-brasil",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/jetsalesbrasil/",
      },
      {
        label: "Ajuda",
        href: "https://tutoriais.jetsalesbrasil.com.br/",
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

