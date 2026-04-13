# Jetsales Brasil - Handoff do site institucional

Data de consolidacao: 2026-04-13

## Resumo executivo
- O template estatico foi reposicionado para a Jetsales Brasil como site institucional/comercial focado em atendimento, automacao, IA aplicada e vendas no WhatsApp oficial.
- A entrega cobre 4 rotas: home, landing de demonstracao, pagina institucional de operacao e pagina de solucoes/casos de uso.
- A direcao visual segue a super-frontend-skill: hero full-bleed, marca dominante, poucas mensagens por secao, movimento contido e reducao de visual de starter.
- O site evita claims ambiguos sobre disparo, volume cego ou bypass de politica. A narrativa foi reescrita para consentimento, templates aprovados, ownership correto e governanca do canal.

## Tese visual
- Mood: produto escuro, premium, operacional, com acento verde e linguagem de plataforma em tempo real.
- Materialidade: paineis tecnicos escuros, brilho contido, graficos e composições de inbox/pipeline em SVG local.
- Energia: precisa, confiavel e comercial; menos campanha aspiracional e mais operacao bem resolvida.

## Plano de conteudo
- Hero: Jetsales como plataforma para centralizar atendimento, automacao e vendas no WhatsApp oficial.
- Support: capacidades principais, estrutura operacional e casos onde a operacao ganha forma.
- Detail: ownership, politica de mensagem, onboarding, filas, automacoes e segmentos atendidos.
- Final CTA: abrir conversa comercial no WhatsApp oficial com contexto pronto para demonstracao.

## Tese de interacao
- Hero com profundidade visual por imagem full-bleed e sobreposicao escura para leitura imediata.
- Revelacao por scroll nos principais blocos usando a infraestrutura existente de IntersectionObserver.
- Hover simples em CTAs e links para manter presenca sem transformar a pagina em UI ruidosa.

## Fontes publicas usadas
- Google Maps: https://maps.app.goo.gl/SUGWBjwSyFDi3rWP9
- Site oficial: https://jetsalesbrasil.com.br/
- Politica de cookies: https://jetsalesbrasil.com.br/politica-de-cookies/
- Central de ajuda / API oficial: https://tutoriais.jetsalesbrasil.com.br/aprendendo-o-sistema-jetgo/api-oficial
- LinkedIn: https://www.linkedin.com/company/jetsales-brasil
- Cruzamento cadastral: https://casadosdados.com.br/solucao/cnpj/jetsales-sistemas-e-tecnologia-ltda-42909167000110

## Fatos publicos aplicados no site
- Marca usada: Jetsales Brasil.
- Dominio usado no SEO: https://jetsalesbrasil.com.br
- Canal principal de CTA: WhatsApp oficial +55 (79) 99747-4816.
- Base geografica usada no site: Aracaju, Sergipe - Brasil.
- Canais publicos usados no footer e contato: site oficial, LinkedIn e Instagram @jetsalesbrasil.

## Sitemap final
- /: visao geral da plataforma, estrutura operacional, governanca de mensagem, FAQ e CTA para demonstracao.
- /landing.html: rota de conversao para agendar demonstracao com foco em ownership, equipe, automacao e politica de mensagem.
- /pages/company.html: pagina institucional com operacao, principios de governanca, onboarding e maturidade do canal.
- /pages/showcase.html: pagina de solucoes por segmento e caso de uso, sem virar grade generica de template.

## Copy skeleton por rota
### Home
- Hero: Jetsales centraliza atendimento, automacao e vendas sem perder governanca do canal.
- Support: estrutura operacional, canais oficiais, multiusuario, IA aplicada e capacidades principais.
- Detail: ownership correto, automacoes com regra clara, processo de implantacao e FAQ orientado a compliance.
- CTA: agendar demonstracao e abrir conversa no WhatsApp oficial.

### Landing de demonstracao
- Hero: convite para ver a operacao real no WhatsApp oficial.
- Support: pontos que precisam entrar no desenho da demonstracao: API oficial, janela sensivel e suporte humano.
- Detail: conexao, ownership, filas, departamentos, automacao com regra de negocio e ganhos operacionais.
- CTA: contato direto via WhatsApp oficial.

### Pagina institucional
- Hero: software, canais oficiais e rotina comercial no mesmo desenho operacional.
- Support: empresa de software com foco em WhatsApp, configuracao coerente do canal e visibilidade gerencial.
- Detail: ownership dos ativos, mensagens com consentimento, boas praticas de API, linha de implantacao.
- CTA: falar com a Jetsales e explorar solucoes.

### Pagina de solucoes
- Hero: a estrutura muda por setor, mas a governanca precisa continuar forte.
- Support: segmentos com necessidades diferentes de fila, contexto, follow-up e automacao.
- Detail: casos de uso para industria e producao, seguros e financas, servicos profissionais, saude e bem-estar.
- CTA: agendar demonstracao por segmento.

## Mapeamento de politicas para a copy
### Meta Marketing API best practices
- A copy evita prometer automacao ilimitada e reforca API oficial, governanca tecnica, teste, leitura de erros e operacao rastreavel.
- Claims de eficiencia foram escritos como organizacao operacional, nao como loophole de plataforma.
- O FAQ reforca que a API oficial exige boas praticas e respeito a politicas e limites do ecossistema Meta.

### Page ownership best practices
- Ownership correto de pagina e Instagram comercial foi trazido para hero secundario, pagina institucional e FAQ.
- A narrativa evita posicionar parceiros como donos do ativo. A ideia central e parceria com titularidade preservada.
- A copy trata governance/ownership como tema operacional, nao como detalhe juridico escondido no rodape.

### Politica de mensagens do WhatsApp Business
- O site fala em mensagens consentidas, opt-in, opt-out, templates aprovados, janela operacional e caminho humano de suporte.
- Foram removidas promessas vagas de disparo, spam, bypass ou volume sem criterio.
- O CTA principal leva ao WhatsApp oficial, mas a narrativa nao incentiva contato em massa nem automacao fora de contexto.

## Mudancas tecnicas implementadas
- Reescrita completa de site/js/site.config.js para Jetsales, incluindo SEO, branding, copy, rotas, canais, CTAs e estruturas por pagina.
- Ajustes em site/index.html e site/landing.html para hero full-bleed com sinais operacionais em vez de painel de starter.
- Ajustes em site/pages/company.html e site/pages/showcase.html para remover textos genericos e consumir o novo config central.
- Atualizacao de site/js/template.js para hero signals, footer condicional sem email inventado e mensagens do formulario alinhadas a Jetsales.
- Atualizacao de site/css/styles.css para visual studio mais forte, menos cardizacao e hero com mais presenca.
- Substituicao dos assets SVG em site/assets/ por composicoes alinhadas a plataforma, sem depender de backend ou imagem remota.

## Checklist de go-live
- Revisar se o numero oficial de WhatsApp continua o mesmo antes da publicacao.
- Validar se o ownership dos ativos Meta do cliente final esta coerente com a operacao real.
- Confirmar se a empresa quer expor mais canais publicos alem de site, LinkedIn e Instagram.
- Revisar juridicamente a pagina caso sejam adicionados claims setoriais regulados ou fluxos de campanha sensivel.
- Validar contraste, legibilidade e recorte dos SVGs em um navegador real antes do go-live.
- Se o formulario for migrado para endpoint HTTP, revisar privacidade, retenção e LGPD antes da ativacao.

## Validacoes executadas
- npm test: OK.
- node --check em site/js/site.config.js, site/js/head.js e site/js/template.js: OK.
- Limitacao atual: nao havia navegador headless disponivel neste ambiente para um gut-check visual automatizado.
- Limitacao atual do fluxo DOCX: nao havia stack de renderizacao libreoffice/poppler disponivel para revisar pagina a pagina por imagem.

## Arquivos principais alterados
- site/js/site.config.js
- site/js/template.js
- site/css/styles.css
- site/index.html
- site/landing.html
- site/pages/company.html
- site/pages/showcase.html
- site/assets/*.svg relevantes para branding e heros
