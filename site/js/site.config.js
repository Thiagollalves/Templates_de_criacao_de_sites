const SITE_TEMPLATE_CONFIG = {
  theme: "editorial",
  seo: {
    siteName: "Atlas Frame",
    defaultTitle: "Atlas Frame | Template estatico para sites e landing pages",
    defaultDescription:
      "Base estatica reutilizavel com home modular, landing pronta, paginas internas e configuracao central.",
    baseUrl: "https://example.com",
    favicon: "/assets/favicon.svg",
    ogImage: "/assets/og-template.svg",
    pages: {
      home: {
        title: "Atlas Frame | Base modular para sites institucionais",
        description:
          "Template estatico com home, landing, paginas internas, temas prontos e configuracao centralizada.",
        path: "/",
      },
      landing: {
        title: "Landing pronta | Atlas Frame",
        description:
          "Exemplo de landing page com oferta, prova, FAQ e formulario reutilizavel.",
        path: "/landing.html",
      },
      company: {
        title: "Pagina institucional | Atlas Frame",
        description:
          "Modelo interno para posicionamento, metodo, valores e contexto institucional.",
        path: "/pages/company.html",
      },
      showcase: {
        title: "Pagina de grade | Atlas Frame",
        description:
          "Modelo interno para mostrar colecoes, servicos, cases ou portfolio com cards reutilizaveis.",
        path: "/pages/showcase.html",
      },
    },
  },
  brand: {
    name: "Atlas Frame",
    shortName: "Atlas",
    eyebrow: "Template estatico reutilizavel",
    tagline: "Direcao visual, conteudo e conversao em um unico starter.",
    summary:
      "Base pronta para discovery, producao, validacao e publicacao de sites comerciais sem depender de CMS.",
    location: "Operacao remota com foco em marcas digitais.",
    legalName: "Atlas Frame Template",
    foundedLabel: "Starter v1",
    footerNote:
      "Troque tema, textos, paginas e CTAs em um unico fluxo de configuracao.",
  },
  navigation: {
    items: [
      { label: "Inicio", href: "/", page: "home", enabled: true },
      { label: "Landing", href: "/landing.html", page: "landing", enabled: true },
      { label: "Empresa", href: "/pages/company.html", page: "company", enabled: true },
      { label: "Cases", href: "/pages/showcase.html", page: "showcase", enabled: true },
    ],
    footerGroups: [
      {
        title: "Paginas",
        items: [
          { label: "Inicio", href: "/" },
          { label: "Landing", href: "/landing.html" },
          { label: "Empresa", href: "/pages/company.html" },
          { label: "Cases", href: "/pages/showcase.html" },
        ],
      },
      {
        title: "Template",
        items: [
          { label: "Tema editorial", href: "/pages/company.html" },
          { label: "Config central", href: "/pages/showcase.html" },
          { label: "Formulario flexivel", href: "/landing.html" },
        ],
      },
      {
        title: "Fluxos",
        items: [
          { label: "Home modular", href: "/" },
          { label: "Landing focada", href: "/landing.html" },
          { label: "Paginas internas", href: "/pages/company.html" },
        ],
      },
    ],
    cta: {
      label: "Falar no WhatsApp",
      kind: "whatsapp",
      message: "Ola, quero adaptar o template Atlas Frame para um novo site.",
    },
  },
  home: {
    hero: {
      eyebrow: "Template para sites institucionais e landing pages",
      title: "Construa um site com presenca forte, conteudo claro e conversao preparada.",
      highlight: "Sem retrabalho estrutural.",
      description:
        "Esta base organiza navegacao, secoes, SEO, prova, formulario e temas em um fluxo unico. O HTML continua editavel, mas o conteudo principal mora em um config central.",
      primaryCta: {
        label: "Abrir landing de exemplo",
        href: "/landing.html",
      },
      secondaryCta: {
        label: "Falar no WhatsApp",
        kind: "whatsapp",
        message: "Ola, quero personalizar o template Atlas Frame.",
      },
      imageAlt: "Composicao abstrata representando blocos modulares do template",
      asideTitle: "Pronto para discovery e producao",
      asideText:
        "Home, landing e paginas internas compartilham o mesmo sistema visual, a mesma camada de SEO e o mesmo contrato de conteudo.",
    },
    statsIntro: {
      eyebrow: "Base modular",
      title: "Mude o conteudo sem desmontar a estrutura.",
      description:
        "As secoes podem ser ativadas ou ocultadas pelo config, e os links principais continuam consistentes em todas as paginas.",
    },
    stats: [
      {
        value: "3",
        label: "temas prontos",
        detail: "editorial, studio e corporate",
      },
      {
        value: "4",
        label: "rotas base",
        detail: "home, landing e duas paginas internas",
      },
      {
        value: "1",
        label: "config central",
        detail: "branding, SEO, links e secoes no mesmo arquivo",
      },
      {
        value: "2",
        label: "modos de formulario",
        detail: "whatsapp ou envio HTTP",
      },
    ],
    services: {
      eyebrow: "Blocos essenciais",
      title: "Tudo o que um site comercial precisa para ir ao ar.",
      description:
        "Cada secao nasce com copy de placeholder, hierarquia pronta e espaco para adaptar narrativas, provas e conversao.",
      items: [
        {
          title: "Narrativa inicial",
          description:
            "Hero com argumento principal, CTA prioritario e painel visual de apoio sem depender de montagem manual a cada projeto.",
        },
        {
          title: "Prova e portfolio",
          description:
            "Cards para servicos, colecoes, cases, galeria e depoimentos usando a mesma linguagem visual.",
        },
        {
          title: "Conversao configuravel",
          description:
            "CTAs de link comum ou WhatsApp e formulario com modo de envio selecionado por configuracao.",
        },
        {
          title: "Paginas internas",
          description:
            "Um modelo institucional e um modelo de grade/listagem prontos para duplicacao manual posterior.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Exemplos de blocos",
      title: "Secoes desenhadas para encaixar provas, servicos e ativos.",
      description:
        "Os blocos abaixo usam assets neutros, mas a estrutura foi pensada para receber imagem real, mockup, foto ou ilustracao.",
      items: [
        {
          eyebrow: "Narrativa",
          title: "Hero com argumento principal",
          description:
            "Espaco para promessa, prova curta, CTA principal e painel visual com profundidade.",
          image: "/assets/gallery-narrative.svg",
          alt: "Ilustracao abstrata para bloco narrativo",
          link: {
            label: "Ver pagina institucional",
            href: "/pages/company.html",
          },
        },
        {
          eyebrow: "Estrutura",
          title: "Cards para portfolio ou servicos",
          description:
            "Use o mesmo grid para mostrar ofertas, colecoes, segmentos, diferenciais ou casos.",
          image: "/assets/gallery-grid.svg",
          alt: "Ilustracao abstrata para bloco em grade",
          link: {
            label: "Ver pagina de grade",
            href: "/pages/showcase.html",
          },
        },
        {
          eyebrow: "Conversao",
          title: "Landing pronta para campanha",
          description:
            "Oferta, prova rapida, outcomes, FAQ e contato no mesmo fluxo para reduzir friccao.",
          image: "/assets/gallery-conversion.svg",
          alt: "Ilustracao abstrata para bloco de conversao",
          link: {
            label: "Abrir landing",
            href: "/landing.html",
          },
        },
      ],
    },
    process: {
      eyebrow: "Fluxo de adaptacao",
      title: "Um processo simples para transformar o starter em site publicado.",
      description:
        "A proposta do template e reduzir decisoes repetidas, nao esconder o HTML de quem vai finalizar o projeto.",
      steps: [
        {
          step: "01",
          title: "Troque marca e tema",
          description:
            "Atualize nome, tagline, contatos, favicon e escolha entre editorial, studio ou corporate.",
        },
        {
          step: "02",
          title: "Substitua o conteudo",
          description:
            "Edite home, landing e paginas internas no config central e ajuste o HTML so onde precisar de variacao.",
        },
        {
          step: "03",
          title: "Troque assets e CTA",
          description:
            "Aponte as imagens reais, revise os links e escolha se o formulario vai para WhatsApp ou endpoint HTTP.",
        },
        {
          step: "04",
          title: "Valide e publique",
          description:
            "Rode a validacao, abra localmente e publique em Vercel mantendo a estrutura estatica.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Uso recomendado",
      title: "O template foi pensado para equipes pequenas com entrega rapida.",
      description:
        "Os depoimentos abaixo sao placeholders e podem virar social proof real, frases de clientes ou observacoes operacionais.",
      items: [
        {
          quote:
            "A base economiza tempo porque layout, SEO e CTA ja nascem alinhados.",
          author: "Time de marketing",
          role: "Operacao de campanha",
        },
        {
          quote:
            "O config central evita retrabalho quando a marca muda links, provas ou canais de contato.",
          author: "Time de produto",
          role: "Estruturacao de conteudo",
        },
        {
          quote:
            "As paginas internas ajudam quando a home nao consegue carregar todo o contexto comercial.",
          author: "Time de vendas",
          role: "Suporte a discovery",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ de template",
      title: "Perguntas comuns antes de adaptar a base.",
      description:
        "Use este bloco como FAQ do produto, FAQ comercial ou esclarecimento operacional do projeto.",
      items: [
        {
          question: "Preciso usar todas as secoes da home?",
          answer:
            "Nao. O grupo sections.home controla quais blocos aparecem. O HTML continua disponivel para ajustes finos.",
        },
        {
          question: "Posso usar so a landing page?",
          answer:
            "Sim. A landing funciona sozinha e compartilha o mesmo config, tema, header, footer e formulario.",
        },
        {
          question: "O template depende de framework?",
          answer:
            "Nao. Ele usa HTML, CSS e JavaScript vanilla para facilitar hospedagem estatica e manutencao simples.",
        },
        {
          question: "Como eu crio mais paginas internas?",
          answer:
            "Duplique um dos modelos em site/pages, ajuste o data-page, registre a rota na navegacao e crie o conteudo correspondente no config.",
        },
      ],
    },
    cta: {
      eyebrow: "Pronto para adaptar",
      title: "Troque marca, links e oferta em um unico arquivo.",
      description:
        "Quando a base estrutural esta pronta, o time pode gastar energia com copy, prova e direcao visual em vez de reconstruir layout.",
      primaryCta: {
        label: "Ver a pagina de grade",
        href: "/pages/showcase.html",
      },
      secondaryCta: {
        label: "Falar sobre a adaptacao",
        kind: "whatsapp",
        message: "Ola, quero definir a melhor estrutura para adaptar o template.",
      },
    },
    contact: {
      eyebrow: "Contato central",
      title: "Use o mesmo bloco para briefing, vendas ou suporte.",
      description:
        "A secao combina lista de canais e formulario com envio configuravel. O mesmo componente pode aparecer na home e na landing.",
      asideTitle: "O que normalmente muda por projeto",
      asidePoints: [
        "Branding, favicon e tema visual",
        "Mensagem principal da dobra e CTA inicial",
        "Lista de servicos, provas e perguntas frequentes",
        "Destino do formulario e numero do WhatsApp",
      ],
    },
  },
  landing: {
    hero: {
      eyebrow: "Landing pronta",
      title: "Estruture uma oferta direta, com prova e CTA desde a dobra.",
      highlight: "Pensada para campanha.",
      description:
        "Use esta rota quando a meta principal for captar interesse com menos navegacao e mais foco em um unico proximo passo.",
      primaryCta: {
        label: "Solicitar contato",
        kind: "whatsapp",
        message: "Ola, quero transformar a landing do template em uma campanha real.",
      },
      secondaryCta: {
        label: "Voltar para a home",
        href: "/",
      },
      imageAlt: "Composicao abstrata representando uma landing page em campanha",
    },
    proof: {
      eyebrow: "Prova rapida",
      title: "Mostre resultado e diferenca antes de pedir o clique.",
      description:
        "A secao pode virar numeros, prazos, capacidade de entrega ou qualquer prova curta de confianca.",
      items: [
        {
          value: "24h",
          label: "para publicar a primeira versao",
          detail: "quando textos e assets ja estao organizados",
        },
        {
          value: "1",
          label: "ponto de configuracao",
          detail: "para SEO, CTA, conteudo e ativos principais",
        },
        {
          value: "0",
          label: "dependencia de backend",
          detail: "no modo WhatsApp, a base continua totalmente estatica",
        },
      ],
    },
    offer: {
      eyebrow: "Oferta modular",
      title: "Cards prontos para promessa, escopo e friccao reduzida.",
      description:
        "Cada card abaixo pode representar plano, diferencial, etapa do servico ou componente de proposta.",
      items: [
        {
          badge: "Entrada",
          title: "Diagnostico rapido",
          description:
            "Use este bloco para explicar o primeiro passo sem sobrecarregar a dobra com detalhes.",
        },
        {
          badge: "Estrutura",
          title: "Pagina de campanha",
          description:
            "Oferta clara, prova curta, formulario e FAQ no mesmo fluxo para reduzir dispersao.",
        },
        {
          badge: "Entrega",
          title: "Publicacao simples",
          description:
            "Hospedagem estatica com Vercel e assets locais para manter a operacao leve.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Fluxo de conversa",
      title: "Da campanha ao atendimento sem trocar de base.",
      description:
        "Os blocos visuais abaixo funcionam como etapas, beneficios, provas ou resultados esperados.",
      items: [
        {
          title: "Captacao com contexto",
          description:
            "O visitante entende o que esta sendo oferecido antes de chegar no CTA.",
          image: "/assets/gallery-signal.svg",
          alt: "Composicao abstrata para captacao com contexto",
        },
        {
          title: "Mensagem melhor organizada",
          description:
            "Os componentes forcam uma hierarquia clara entre argumento, prova e acao.",
          image: "/assets/gallery-structure.svg",
          alt: "Composicao abstrata para estrutura organizada",
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
      eyebrow: "FAQ da landing",
      title: "Mantenha respostas curtas para preservar o ritmo de conversao.",
      description:
        "Se a landing nao precisar de FAQ, basta desligar a secao em sections.landing.faq.",
      items: [
        {
          question: "Posso usar a landing sem menu principal?",
          answer:
            "Sim. Voce pode simplificar a navegacao no HTML mantendo a mesma base de conteudo e CTA.",
        },
        {
          question: "O formulario precisa de integracao imediata?",
          answer:
            "Nao. O modo padrao e WhatsApp. Quando houver endpoint, basta mudar contact.form.mode para http.",
        },
        {
          question: "A landing pode receber provas reais depois?",
          answer:
            "Sim. Os cards e metricas foram feitos para trocar placeholder por prova real sem refazer o layout.",
        },
      ],
    },
    cta: {
      eyebrow: "Fechamento",
      title: "Use a mesma base para campanha, validacao de oferta ou pagina de apoio comercial.",
      description:
        "A estrutura ja prepara copy, CTA e contato. O que muda e a narrativa do projeto.",
      primaryCta: {
        label: "Falar agora no WhatsApp",
        kind: "whatsapp",
        message: "Ola, quero usar a landing do template em uma campanha.",
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
        eyebrow: "Pagina interna institucional",
        title: "Explique metodo, posicionamento e maturidade operacional.",
        description:
          "Quando a home precisa ficar mais objetiva, esta pagina recebe contexto, proposta de valor e narrativa institucional.",
        primaryCta: {
          label: "Abrir landing",
          href: "/landing.html",
        },
        secondaryCta: {
          label: "Falar no WhatsApp",
          kind: "whatsapp",
          message: "Ola, quero adaptar a pagina institucional do template.",
        },
      },
      intro: {
        eyebrow: "Resumo institucional",
        title: "Uma pagina para contexto, proposta e diferencas.",
        description:
          "Use esta estrutura para contar origem, escopo, forma de trabalho, cultura e visao comercial.",
      },
      highlights: [
        {
          title: "Posicionamento claro",
          description:
            "Espaco para explicar nicho, tipo de cliente, faixa de problema e recorte de mercado.",
        },
        {
          title: "Metodo replicavel",
          description:
            "Blocos para mostrar processo, governanca, planejamento ou forma de entrega.",
        },
        {
          title: "Contexto sem excesso",
          description:
            "A pagina interna segura mais texto sem comprometer a leveza da home.",
        },
      ],
      values: [
        {
          title: "Clareza",
          description:
            "Conteudo com hierarquia forte para explicar oferta, prova e acao de forma objetiva.",
        },
        {
          title: "Flexibilidade",
          description:
            "HTML editavel para casos em que o projeto precisa sair do padrao sem quebrar a base.",
        },
        {
          title: "Consistencia",
          description:
            "Tema, CTA, navegacao, footer e SEO continuam alinhados mesmo com multiplas rotas.",
        },
      ],
      timeline: [
        {
          label: "Descoberta",
          description:
            "Mapeie objetivo, oferta, provas disponiveis, publico e canal principal de conversao.",
        },
        {
          label: "Adaptacao",
          description:
            "Troque copy, links, secoes, ativos e revise o tema visual mais aderente ao projeto.",
        },
        {
          label: "Validacao",
          description:
            "Cheque responsividade, CTA, formularios, links e consistencia de titulo, description e Open Graph.",
        },
        {
          label: "Publicacao",
          description:
            "Suba em Vercel com o template ativo na pasta site e o demo legado isolado em examples.",
        },
      ],
      closing: {
        title: "A pagina institucional existe para liberar a home de excesso de contexto.",
        description:
          "Com isso, a dobra principal continua comercial e a profundidade fica em uma rota dedicada.",
      },
    },
    showcase: {
      hero: {
        eyebrow: "Pagina interna de grade",
        title: "Mostre colecoes, servicos ou cases com o mesmo sistema visual.",
        description:
          "Este modelo serve para portfolio, vitrine de servicos, segmentos, produtos ou qualquer grade orientada por cards.",
        primaryCta: {
          label: "Voltar para a home",
          href: "/",
        },
        secondaryCta: {
          label: "Solicitar adaptacao",
          kind: "whatsapp",
          message: "Ola, quero usar a pagina de grade do template em um projeto.",
        },
      },
      intro: {
        eyebrow: "Estrutura replicavel",
        title: "Cards com destaque, categoria e CTA secundario.",
        description:
          "O mesmo layout pode virar colecao de cases, vitrines de servico, paginas de produto ou listagem editorial.",
      },
      filters: ["Todos", "Base", "Conteudo", "Conversao", "Operacao"],
      items: [
        {
          category: "Base",
          title: "Site institucional",
          description:
            "Estrutura para apresentar marca, metodo, servicos e uma CTA principal sem depender de CMS.",
          metric: "Rota pronta",
          image: "/assets/gallery-grid.svg",
          alt: "Composicao abstrata para grade institucional",
          cta: {
            label: "Abrir pagina institucional",
            href: "/pages/company.html",
          },
        },
        {
          category: "Conversao",
          title: "Landing de campanha",
          description:
            "Pagina focada em uma oferta, com prova curta, FAQ e formulario reaproveitavel.",
          metric: "CTA direto",
          image: "/assets/gallery-conversion.svg",
          alt: "Composicao abstrata para grade de conversao",
          cta: {
            label: "Abrir landing",
            href: "/landing.html",
          },
        },
        {
          category: "Conteudo",
          title: "Biblioteca de blocos",
          description:
            "Hero, servicos, processo, portfolio, depoimentos e contato com consistencia visual.",
          metric: "Secoes modulares",
          image: "/assets/gallery-structure.svg",
          alt: "Composicao abstrata para blocos de conteudo",
          cta: {
            label: "Ver home",
            href: "/",
          },
        },
        {
          category: "Operacao",
          title: "Config central",
          description:
            "Branding, SEO, links, social, secoes e comportamento do formulario reunidos em um unico arquivo.",
          metric: "Menos retrabalho",
          image: "/assets/gallery-launch.svg",
          alt: "Composicao abstrata para configuracao central",
          cta: {
            label: "Revisar estrutura",
            href: "/pages/company.html",
          },
        },
      ],
      closing: {
        title: "Precisa de mais rotas?",
        description:
          "Duplique um dos modelos, crie o conteudo correspondente em pages no config e registre o link na navegacao.",
      },
    },
  },
  contact: {
    email: "contato@example.com",
    phoneLabel: "+55 (85) 0000-0000",
    address: "Operacao remota com deploy em Vercel.",
    availability: "Seg a Sex, 09h as 18h.",
    whatsapp: {
      phone: "5585000000000",
      defaultMessage: "Ola, quero adaptar o template Atlas Frame para um novo site.",
    },
    channels: [
      {
        label: "Email",
        value: "contato@example.com",
        href: "mailto:contato@example.com",
      },
      {
        label: "WhatsApp",
        value: "+55 (85) 0000-0000",
        href: "https://wa.me/5585000000000",
      },
      {
        label: "Operacao",
        value: "Deploy estatico com Vercel",
        href: "/landing.html",
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
          placeholder: "Nome da empresa ou campanha",
        },
        message: {
          label: "Mensagem",
          placeholder: "Conte rapidamente o que precisa construir.",
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
