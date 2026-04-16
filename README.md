# Static Site Template

Base estatica reutilizavel para criar landing pages e sites institucionais em HTML, CSS e JavaScript vanilla.

## O que esta incluso
- Home modular com hero, servicos, portfolio, processo, depoimentos, FAQ, CTA e contato.
- Landing page focada em conversao.
- Duas paginas internas modelo para duplicacao manual.
- Tema centralizado com tres variacoes: `editorial`, `studio` e `corporate`.
- Configuracao unica em `site/js/site.config.js`.
- Demo legado preservado em `site/examples/marcelo-moveis/`.

## Estrutura principal
- `site/index.html`: home institucional.
- `site/landing.html`: landing page de conversao.
- `site/pages/company.html`: pagina interna institucional.
- `site/pages/showcase.html`: pagina interna com grade/listagem.
- `site/js/site.config.js`: conteudo, branding, SEO, assets, navegacao e comportamento.
- `site/js/head.js`: aplica SEO, favicon e tema antes da renderizacao.
- `site/js/template.js`: renderiza navegacao, footer, listas, secoes, CTAs e formulario.
- `site/css/styles.css`: sistema visual compartilhado e temas.

## Como personalizar
1. Edite `site/js/site.config.js`.
2. Troque `theme` entre `editorial`, `studio` e `corporate`.
3. Atualize `brand`, `seo`, `contact`, `social` e os blocos de `home`, `landing` e `pages`.
4. Substitua assets em `site/assets/` e aponte os caminhos novos no config.
5. Ative ou desative blocos por `sections.home` e `sections.landing`.

## Como criar novas paginas
1. Duplique `site/pages/company.html` ou `site/pages/showcase.html`.
2. Ajuste o `data-page` do arquivo novo.
3. Registre a rota em `navigation.items`.
4. Adicione o conteudo correspondente dentro de `pages` no config.

## Formularios e CTAs
- `contact.form.mode = "whatsapp"` envia a mensagem para o numero configurado.
- `contact.form.mode = "http"` envia o formulario para o endpoint definido em `contact.form.endpoint`.
- CTAs podem apontar para links normais ou gerar links de WhatsApp usando o numero central.

## Desenvolvimento e validacao
- `npm run dev`: sobe a pasta `site` localmente.
- `npm test`: valida config, arquivos esperados e referencias legadas fora da pasta de exemplo.

## Coleta de referencias (clientes grandes)
- `npm run collect:magalu`: gera um snapshot simples (title/h1/links/destaques) em `output/magalu/` para apoiar o preenchimento de briefing e ajustes do template.

## Publicacao
- O repositorio continua compativel com Vercel usando `vercel.json`.
- A raiz publicada permanece o novo template em `site/`.
