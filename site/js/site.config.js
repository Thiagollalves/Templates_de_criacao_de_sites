const SITE_TEMPLATE_CONFIG = {
  theme: "studio",
  seo: {
    siteName: "Studio Suellen Rocha",
    defaultTitle: "Studio Suellen Rocha | Micropigmentacao e Estetica em Aracaju",
    defaultDescription:
      "Micropigmentacao, estetica e cuidados com foco em naturalidade. Agende sua avaliacao no Studio Suellen Rocha (Atalaia, Aracaju/SE).",
    baseUrl: "https://www.suellenrocha.com.br",
    favicon: "/assets/favicon.svg",
    ogImage: "/assets/og-template.svg",
    pages: {
      home: {
        title: "Studio Suellen Rocha | Micropigmentacao e Estetica em Aracaju",
        description:
          "Micropigmentacao, design e estetica com foco em naturalidade. Agende sua avaliacao.",
        path: "/",
      },
      landing: {
        title: "Agendar avaliacao | Studio Suellen Rocha",
        description:
          "Agende sua avaliacao pelo WhatsApp e tire duvidas sobre procedimentos, cuidados e prazos.",
        path: "/landing.html",
      },
      company: {
        title: "Sobre o studio | Studio Suellen Rocha",
        description:
          "Conheca o studio, o fluxo de atendimento e os cuidados antes e depois do procedimento.",
        path: "/pages/company.html",
      },
      showcase: {
        title: "Procedimentos | Studio Suellen Rocha",
        description:
          "Conheca os principais procedimentos: micropigmentacao, design, extensao de cilios, remocao e cursos.",
        path: "/pages/showcase.html",
      },
      docs: {
        title: "Politicas e informacoes | Studio Suellen Rocha",
        description:
          "Documentos e informacoes usadas como base do projeto (politicas e briefing do cliente).",
        path: "/pages/docs.html",
      },
    },
  },
  brand: {
    name: "Studio Suellen Rocha",
    shortName: "Suellen Rocha",
    eyebrow: "Micropigmentacao e Estetica",
    tagline: "Beleza e naturalidade com cuidados e orientacao.",
    summary:
      "Procedimentos de micropigmentacao, estetica e design, com avaliacao e orientacao de cuidados para um resultado mais natural.",
    location: "Atalaia, Aracaju - SE.",
    legalName: "Centro de Saude e Estetica Suellen Rocha LTDA (CNPJ 30.972.914/0001-85)",
    foundedLabel: "Aracaju/SE",
    footerNote:
      "Atendimento mediante agendamento. Para duvidas, fale pelo WhatsApp. Evite enviar dados sensiveis por mensagem.",
  },
  navigation: {
    items: [
      { label: "Inicio", href: "/", page: "home", enabled: true },
      { label: "Procedimentos", href: "/pages/showcase.html", page: "showcase", enabled: true },
      { label: "Agendar", href: "/landing.html", page: "landing", enabled: true },
      { label: "O Studio", href: "/pages/company.html", page: "company", enabled: true },
      { label: "Politicas", href: "/pages/docs.html", page: "docs", enabled: true },
    ],
    footerGroups: [
      {
        title: "Procedimentos",
        items: [
          { label: "Micropigmentacao", href: "/pages/showcase.html#micropigmentacao" },
          { label: "Design e Cilios", href: "/pages/showcase.html#design" },
          { label: "Remocao", href: "/pages/showcase.html#remocao" },
          { label: "Cursos", href: "/pages/showcase.html#cursos" },
        ],
      },
      {
        title: "Studio",
        items: [
          { label: "Sobre o studio", href: "/pages/company.html" },
          { label: "Agendar avaliacao", href: "/landing.html" },
          { label: "Politicas", href: "/pages/docs.html" },
        ],
      },
      {
        title: "Canais",
        items: [
          { label: "Site", href: "https://www.suellenrocha.com.br" },
          { label: "Instagram", href: "https://www.instagram.com/suellenrochamicropigmentacao/" },
          { label: "Facebook", href: "https://www.facebook.com/ssurocha" },
        ],
      },
    ],
    cta: {
      label: "Agendar no WhatsApp",
      kind: "whatsapp",
      message: "Ola, vim pelo site e gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
    },
  },
  home: {
    hero: {
      eyebrow: "Studio em Aracaju (Atalaia)",
      title: "Micropigmentacao e estetica",
      highlight: "com foco em naturalidade.",
      description:
        "Agende sua avaliacao e entenda qual procedimento faz sentido para voce, com orientacao de cuidados e retorno.",
      primaryCta: {
        label: "Agendar no WhatsApp",
        kind: "whatsapp",
        message: "Ola, vim pelo site e gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
      },
      secondaryCta: {
        label: "Ver procedimentos",
        href: "/pages/showcase.html",
      },
      imageAlt: "Foto do Studio Suellen Rocha",
      signals: [
        {
          title: "Avaliacao antes do procedimento",
          detail: "Entendimento do objetivo, alinhamento de expectativas e orientacoes de preparo.",
        },
        {
          title: "Cuidados e retorno",
          detail: "Orientacao de cuidados e retorno quando necessario, para manter o resultado.",
        },
        {
          title: "Agenda e atendimento",
          detail: "Atendimento mediante agendamento. Segunda a sabado (confirmar horarios).",
        },
      ],
    },
    statsIntro: {
      eyebrow: "Principais frentes",
      title: "Procedimentos e formacao em um unico lugar.",
      description:
        "O studio atende com foco em resultado natural e tambem oferece cursos em micropigmentacao.",
    },
    stats: [
      {
        value: "MP",
        label: "micropigmentacao",
        detail: "sobrancelhas e labios (avaliar tecnica ideal)",
      },
      {
        value: "Design",
        label: "sobrancelhas",
        detail: "design e harmonizacao do olhar",
      },
      {
        value: "Cilios",
        label: "extensao",
        detail: "alongamento e acabamento para o dia a dia",
      },
      {
        value: "Cursos",
        label: "formacao",
        detail: "cursos com acompanhamento (confirmar turmas)",
      },
    ],
    services: {
      eyebrow: "Procedimentos",
      title: "O que voce encontra no Studio Suellen Rocha",
      description:
        "A lista abaixo resume os principais servicos. Confirme detalhes e indicacao no atendimento.",
      items: [
        {
          title: "Micropigmentacao",
          description: "Sobrancelhas e/ou labios, com avaliacao previa e orientacao de cuidados.",
        },
        {
          title: "Design de sobrancelhas",
          description: "Design para valorizar formato e simetria, com acabamento natural.",
        },
        {
          title: "Extensao de cilios",
          description: "Extensao para realcar o olhar, com orientacao de manutencao.",
        },
        {
          title: "Remocao",
          description: "Avaliacao para entender o caso e indicar o melhor caminho de remocao.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Vitrine",
      title: "Resultados e bastidores do studio",
      description:
        "Veja exemplos e conteudo do studio nas redes sociais. Para fotos especificas, consulte no atendimento.",
      items: [
        {
          eyebrow: "Instagram",
          title: "Conteudo e resultados",
          description: "Acompanhe conteudos, resultados e atualizacoes do studio.",
          metric: "@suellenrochamicropigmentacao",
          image: "/assets/gallery-narrative.svg",
          alt: "Ilustracao de vitrine do studio",
          cta: {
            label: "Abrir Instagram",
            href: "https://www.instagram.com/suellenrochamicropigmentacao/",
          },
        },
        {
          eyebrow: "Agendamento",
          title: "Atendimento pelo WhatsApp",
          description:
            "Agende avaliacao e tire duvidas. Evite enviar dados sensiveis por mensagem.",
          metric: "+55 (79) 99970-0199",
          image: "/assets/gallery-conversion.svg",
          alt: "Ilustracao de agendamento via WhatsApp",
          cta: {
            label: "Agendar agora",
            href: "/landing.html",
          },
        },
        {
          eyebrow: "Localizacao",
          title: "Atalaia, Aracaju/SE",
          description:
            "Rocha Porto Empresarial - Av. Poeta Vinicius de Moraes, 70 - Atalaia.",
          metric: "Aracaju/SE",
          image: "/assets/gallery-structure.svg",
          alt: "Ilustracao de localizacao do studio",
          cta: {
            label: "Ver no mapa",
            href: "https://www.google.com/maps/search/?api=1&query=Rocha%20Porto%20Empresarial%20Av.%20Poeta%20Vinicius%20de%20Moraes%2C%2070%20Atalaia%20Aracaju%20SE",
          },
        },
      ],
    },
    process: {
      eyebrow: "Como funciona",
      title: "Um fluxo simples do contato ao pos.",
      description:
        "O objetivo e alinhar expectativa, executar o procedimento com cuidado e orientar o pos.",
      steps: [
        {
          step: "1",
          title: "Contato e agendamento",
          description: "Voce chama no WhatsApp e agenda a avaliacao.",
        },
        {
          step: "2",
          title: "Avaliacao",
          description:
            "Entendemos seu objetivo, orientamos preparo e alinhamos o procedimento indicado.",
        },
        {
          step: "3",
          title: "Procedimento",
          description: "Execucao do procedimento com foco em resultado natural.",
        },
        {
          step: "4",
          title: "Cuidados e retorno",
          description:
            "Orientacao de cuidados e retorno quando necessario, conforme o caso.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "O que clientes comentam",
      description:
        "Ainda nao adicionamos depoimentos aqui. Se quiser, envie 3 a 6 depoimentos curtos para incluir.",
      items: [],
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      title: "Duvidas comuns antes de agendar",
      description:
        "Cada caso e unico. A avaliacao e o melhor caminho para definir indicacao e prazos.",
      items: [
        {
          question: "Quanto tempo dura um procedimento?",
          answer:
            "Varia por procedimento e caso. Na avaliacao voce recebe uma estimativa e orientacoes de preparo.",
        },
        {
          question: "Precisa de retorno?",
          answer:
            "Pode existir retorno conforme o procedimento e o caso. Isso e alinhado no atendimento.",
        },
        {
          question: "Como agendar?",
          answer:
            "Pelo WhatsApp. Envie uma mensagem com seu nome e o procedimento de interesse.",
        },
        {
          question: "Quais cuidados devo ter?",
          answer:
            "Os cuidados variam por procedimento. O studio orienta o pos e o que evitar em cada caso.",
        },
      ],
    },
    cta: {
      eyebrow: "Agende sua avaliacao",
      title: "Pronta(o) para cuidar do seu resultado?",
      description:
        "Chame no WhatsApp e agende sua avaliacao. Evite enviar dados sensiveis por mensagem.",
      primaryCta: {
        label: "Agendar no WhatsApp",
        kind: "whatsapp",
        message: "Ola, vim pelo site e gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
      },
      secondaryCta: {
        label: "Ver procedimentos",
        href: "/pages/showcase.html",
      },
    },
    contact: {
      eyebrow: "Contato",
      title: "Fale com o studio",
      description:
        "Agende avaliacao e tire duvidas pelo WhatsApp. Se preferir, use telefone ou e-mail.",
      asideTitle: "Antes de enviar",
      asidePoints: [
        "Evite enviar dados sensiveis (documentos, cartoes, senhas).",
        "Se precisar, podemos atender por telefone ou e-mail.",
        "Confirme horarios e disponibilidade pelo WhatsApp.",
      ],
    },
  },
  landing: {
    hero: {
      eyebrow: "Agendamento",
      title: "Agende sua avaliacao",
      highlight: "pelo WhatsApp.",
      description:
        "Envie uma mensagem com seu nome e o procedimento de interesse. O studio responde com horarios disponiveis.",
      primaryCta: {
        label: "Agendar agora",
        kind: "whatsapp",
        message: "Ola, vim pelo site e gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
      },
      secondaryCta: {
        label: "Voltar para a home",
        href: "/",
      },
      imageAlt: "Foto do Studio Suellen Rocha",
      signals: [
        { title: "Localizacao", detail: "Atalaia, Aracaju/SE" },
        { title: "Horario", detail: "Seg a Sab, 07:00 - 20:00 (confirmar)" },
        { title: "Atendimento", detail: "Mediante agendamento" },
      ],
    },
    proof: {
      eyebrow: "Antes de confirmar",
      title: "Algumas informacoes ajudam o atendimento",
      description:
        "Se puder, mande no WhatsApp: qual procedimento deseja, se ja fez antes e qual sua preferencia de horario.",
      items: [
        { value: "1", label: "procedimento", detail: "qual procedimento voce quer fazer" },
        { value: "2", label: "historico", detail: "se ja fez algo parecido antes" },
        { value: "3", label: "horarios", detail: "dias e horarios que prefere" },
        { value: "4", label: "duvidas", detail: "principais duvidas para a avaliacao" },
      ],
    },
    offer: {
      eyebrow: "Como funciona",
      title: "Do WhatsApp ao retorno",
      description:
        "Um fluxo simples para alinhar expectativa, orientar cuidados e executar o procedimento.",
      items: [
        {
          title: "Mensagem e agendamento",
          description: "Voce chama no WhatsApp e escolhe o melhor horario disponivel.",
        },
        {
          title: "Avaliacao e orientacao",
          description: "Orientamos preparo, cuidados e indicacao do procedimento.",
        },
        {
          title: "Procedimento e pos",
          description: "Executamos o procedimento e orientamos cuidados e retorno.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Objetivo",
      title: "Resultado mais natural com cuidado no processo",
      description:
        "Cada caso e unico. O foco e alinhar objetivo e orientar cuidados para manter o resultado.",
      items: [
        { title: "Avaliacao", detail: "alinhamento e orientacao antes" },
        { title: "Cuidado", detail: "execucao com tecnica e atencao" },
        { title: "Orientacao", detail: "cuidados e pos bem explicados" },
        { title: "Retorno", detail: "quando necessario, conforme o caso" },
      ],
    },
    faq: {
      eyebrow: "Duvidas rapidas",
      title: "Perguntas comuns sobre agendamento",
      description:
        "Se algo nao ficar claro, pergunte no WhatsApp. A avaliacao detalha o seu caso.",
      items: [
        {
          question: "O studio atende sem agendamento?",
          answer:
            "O atendimento principal e por agendamento. Chame no WhatsApp para confirmar disponibilidade.",
        },
        {
          question: "Posso tirar duvidas antes?",
          answer:
            "Sim. Envie sua duvida no WhatsApp e diga qual procedimento voce quer fazer.",
        },
      ],
    },
    cta: {
      eyebrow: "Vamos marcar?",
      title: "Agende sua avaliacao no WhatsApp",
      description:
        "Envie uma mensagem e conte rapidamente o que voce deseja. Evite dados sensiveis.",
      primaryCta: {
        label: "Agendar no WhatsApp",
        kind: "whatsapp",
        message: "Ola, vim pelo site e gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
      },
      secondaryCta: {
        label: "Ver procedimentos",
        href: "/pages/showcase.html",
      },
    },
  },
  pages: {
    company: {
      hero: {
        eyebrow: "O Studio",
        title: "Um espaco pensado para cuidado e orientacao",
        description:
          "Conheca o fluxo de atendimento e como funciona do contato ao pos-procedimento.",
        primaryCta: {
          label: "Agendar no WhatsApp",
          kind: "whatsapp",
          message: "Ola, gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
        },
        secondaryCta: {
          label: "Ver procedimentos",
          href: "/pages/showcase.html",
        },
      },
      highlightsIntro: {
        eyebrow: "Antes do procedimento",
        title: "Alinhar expectativa e orientar cuidados faz parte do resultado.",
        description:
          "Na avaliacao, o studio entende o objetivo e orienta o que e indicado para o seu caso.",
      },
      highlights: [
        { title: "Avaliacao", detail: "entender objetivo e indicar o caminho" },
        { title: "Cuidados", detail: "orientacao clara antes e depois" },
        { title: "Retorno", detail: "quando necessario, conforme o caso" },
      ],
      principlesIntro: {
        eyebrow: "Como trabalhamos",
        title: "Cuidado, tecnica e comunicacao simples.",
        description:
          "O objetivo e um resultado mais natural, com orientacao e acompanhamento quando necessario.",
      },
      principles: [
        {
          title: "Naturalidade",
          description: "O foco e valorizar seus tracos e buscar um acabamento mais natural.",
        },
        {
          title: "Orientacao",
          description: "Cuidados e retorno sao alinhados para voce manter o resultado.",
        },
        {
          title: "Transparencia",
          description: "O studio explica indicacoes e o que esperar de cada procedimento.",
        },
        {
          title: "Atendimento com hora marcada",
          description: "Agendamento para dar atencao e tempo adequado a cada caso.",
        },
      ],
      valuesIntro: {
        eyebrow: "O que voce ganha",
        title: "Mais clareza antes, mais tranquilidade depois.",
        description:
          "Quando o processo e bem explicado, voce sabe como se preparar e como cuidar do pos.",
      },
      values: [
        { title: "Expectativa alinhada", detail: "voce entende o que e indicado para voce" },
        { title: "Orientacao de cuidados", detail: "pos explicado de forma simples" },
        { title: "Agenda organizada", detail: "atendimento com hora marcada" },
        { title: "Cuidado com detalhes", detail: "acabamento e atencao no processo" },
      ],
      timelineIntro: {
        eyebrow: "Etapas",
        title: "Do contato ao retorno",
        description: "Um roteiro simples para voce saber o que esperar.",
      },
      timeline: [
        { title: "Agendar", detail: "chame no WhatsApp e combine o horario" },
        { title: "Avaliacao", detail: "orientacao e indicacao do procedimento" },
        { title: "Procedimento", detail: "execucao com cuidado e tecnica" },
        { title: "Pos e retorno", detail: "cuidados e retorno quando necessario" },
      ],
      closing: {
        eyebrow: "Agendar avaliacao",
        title: "Vamos conversar sobre o seu caso?",
        description:
          "Chame no WhatsApp e diga qual procedimento voce quer fazer e sua preferencia de horario.",
        primaryCta: {
          label: "Agendar no WhatsApp",
          kind: "whatsapp",
          message: "Ola, gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
        },
        secondaryCta: {
          label: "Ver procedimentos",
          href: "/pages/showcase.html",
        },
      },
    },
    showcase: {
      hero: {
        eyebrow: "Procedimentos",
        title: "Conheca os principais procedimentos do studio",
        description:
          "Micropigmentacao, design, extensao de cilios, remocao e cursos. A avaliacao define indicacao e detalhes.",
        primaryCta: {
          label: "Agendar avaliacao",
          kind: "whatsapp",
          message: "Ola, gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
        },
        secondaryCta: {
          label: "Voltar para a home",
          href: "/",
        },
      },
      intro: {
        eyebrow: "Lista de procedimentos",
        title: "Escolha um tema e veja os detalhes",
        description:
          "Use os filtros para navegar. Os detalhes finais e a indicacao sao alinhados na avaliacao.",
      },
      filters: ["Todos", "Micropigmentacao", "Design", "Cilios", "Remocao", "Cursos"],
      items: [
        {
          category: "Micropigmentacao",
          title: "Micropigmentacao de sobrancelhas",
          description:
            "Avaliacao para definir tecnica e orientar cuidados para um resultado mais natural.",
          metric: "Avaliacao + cuidados",
          image: "/assets/gallery-grid.svg",
          alt: "Ilustracao de micropigmentacao de sobrancelhas",
          cta: { label: "Agendar avaliacao", href: "/landing.html" },
        },
        {
          category: "Micropigmentacao",
          title: "Micropigmentacao labial",
          description: "Procedimento para labios com orientacao de preparo e cuidados no pos.",
          metric: "Preparo + pos",
          image: "/assets/gallery-signal.svg",
          alt: "Ilustracao de micropigmentacao labial",
          cta: { label: "Agendar avaliacao", href: "/landing.html" },
        },
        {
          category: "Design",
          title: "Design de sobrancelhas",
          description: "Design e acabamento para harmonizar e valorizar o olhar.",
          metric: "Simetria + acabamento",
          image: "/assets/gallery-narrative.svg",
          alt: "Ilustracao de design de sobrancelhas",
          cta: { label: "Falar no WhatsApp", kind: "whatsapp" },
        },
        {
          category: "Cilios",
          title: "Extensao de cilios",
          description: "Extensao com orientacao de manutencao e cuidados no dia a dia.",
          metric: "Manutencao + cuidados",
          image: "/assets/gallery-structure.svg",
          alt: "Ilustracao de extensao de cilios",
          cta: { label: "Falar no WhatsApp", kind: "whatsapp" },
        },
        {
          category: "Remocao",
          title: "Remocao (avaliacao)",
          description: "Avaliacao para entender o caso e orientar o melhor caminho.",
          metric: "Avaliacao",
          image: "/assets/gallery-conversion.svg",
          alt: "Ilustracao de remocao",
          cta: { label: "Agendar avaliacao", href: "/landing.html" },
        },
        {
          category: "Cursos",
          title: "Cursos",
          description: "Cursos em micropigmentacao. Consulte disponibilidade e turmas.",
          metric: "Turmas (confirmar)",
          image: "/assets/gallery-launch.svg",
          alt: "Ilustracao de cursos",
          cta: { label: "Falar no WhatsApp", kind: "whatsapp" },
        },
      ],
      closing: {
        eyebrow: "Ainda com duvidas?",
        title: "Agende uma avaliacao e alinhe seu caso",
        description:
          "O melhor caminho para definir indicacao e detalhes e a avaliacao. Chame no WhatsApp.",
        primaryCta: {
          label: "Agendar no WhatsApp",
          kind: "whatsapp",
          message: "Ola, gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
        },
        secondaryCta: {
          label: "Agendar pelo site",
          href: "/landing.html",
        },
      },
    },
  },
  docs: {
    hero: {
      eyebrow: "Base do projeto",
      title: "Politicas e informacoes do cliente",
      description:
        "Esta pagina renderiza arquivos sincronizados de `docs/` e `docs/client-info/docs/` para manter o projeto organizado.",
      primaryCta: {
        label: "Agendar no WhatsApp",
        kind: "whatsapp",
        message: "Ola, vim pelo site e gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
      },
      secondaryCta: {
        label: "Ver procedimentos",
        href: "/pages/showcase.html",
      },
    },
    documents: [
      {
        id: "whatsapp",
        eyebrow: "WhatsApp",
        title: "Politica de mensagens",
        description: "Base de mensagens, consentimento e boas praticas.",
        src: "/content/policies/politica-mensagens-whatsapp.md",
      },
      {
        id: "page-ownership",
        eyebrow: "Meta",
        title: "Ownership de pagina",
        description: "Boas praticas de titularidade e parceria.",
        src: "/content/policies/facebook-page-ownership-best-practices.md",
      },
      {
        id: "marketing-api",
        eyebrow: "Marketing API",
        title: "Melhores praticas",
        description: "Notas de integracao e governanca.",
        src: "/content/policies/facebook-marketing-api-best-practices.md",
      },
      {
        id: "client-info",
        eyebrow: "Cliente",
        title: "Infos do cliente",
        description: "Briefing e dados que alimentam conteudo e configuracao do site.",
        src: "/content/client/Infos%20do%20cliente.md",
      },
    ],
  },
  contact: {
    email: "osmario.porto@me.com",
    phoneLabel: "+55 (79) 99970-0199",
    address:
      "Rocha Porto Empresarial - Av. Poeta Vinicius de Moraes, 70 - Atalaia, Aracaju - SE, 49037-490",
    availability: "Seg a Sab, 07:00 - 20:00 (confirmar).",
    whatsapp: {
      phone: "5579999700199",
      defaultMessage: "Ola, vim pelo site e gostaria de agendar uma avaliacao no Studio Suellen Rocha.",
    },
    channels: [
      {
        label: "WhatsApp",
        value: "+55 (79) 99970-0199",
        href: "https://wa.me/5579999700199",
      },
      {
        label: "Telefone",
        value: "+55 (79) 3019-0199",
        href: "tel:+557930190199",
      },
      {
        label: "E-mail",
        value: "osmario.porto@me.com",
        href: "mailto:osmario.porto@me.com",
      },
      {
        label: "Instagram",
        value: "@suellenrochamicropigmentacao",
        href: "https://www.instagram.com/suellenrochamicropigmentacao/",
      },
      {
        label: "Facebook",
        value: "ssurocha",
        href: "https://www.facebook.com/ssurocha",
      },
      {
        label: "Site",
        value: "suellenrocha.com.br",
        href: "https://www.suellenrocha.com.br",
      },
    ],
    footerItems: [
      {
        label: "WhatsApp",
        value: "+55 (79) 99970-0199",
        href: "https://wa.me/5579999700199",
      },
      {
        label: "Endereco",
        value: "Atalaia, Aracaju - SE",
      },
      {
        label: "Instagram",
        value: "@suellenrochamicropigmentacao",
        href: "https://www.instagram.com/suellenrochamicropigmentacao/",
      },
    ],
    form: {
      mode: "whatsapp",
      endpoint: "",
      method: "POST",
      introMessage: "Ola, vim pelo site e gostaria de agendar uma avaliacao.",
      successMessage: "Mensagem preparada. Abra o WhatsApp para concluir o envio.",
      errorMessage: "Nao foi possivel abrir o WhatsApp agora. Revise os campos e tente novamente.",
      submitLabel: "Agendar avaliacao",
      fields: {
        name: { label: "Nome", placeholder: "Seu nome" },
        email: { label: "E-mail", placeholder: "voce@email.com" },
        company: { label: "Procedimento", placeholder: "Qual procedimento voce quer fazer?" },
        message: {
          label: "Mensagem",
          placeholder: "Conte rapidamente o que voce deseja e sua preferencia de horario.",
        },
        consent: {
          label:
            "Autorizo receber contato do Studio Suellen Rocha no WhatsApp e entendo que posso recusar/bloquear a qualquer momento.",
        },
      },
    },
  },
  social: {
    links: [
      { label: "Instagram", href: "https://www.instagram.com/suellenrochamicropigmentacao/" },
      { label: "Facebook", href: "https://www.facebook.com/ssurocha" },
      { label: "Site", href: "https://www.suellenrocha.com.br" },
    ],
  },
  assets: {
    logos: {
      mark: "/assets/logo-suellen-rocha.png",
    },
    heroPrimary: "/assets/hero-suellen-rocha.jpeg",
    heroSecondary: "/assets/hero-suellen-rocha.jpeg",
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
