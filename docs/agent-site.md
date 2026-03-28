# Agente de Criação de Sites e Landing Pages

Este agente combina um conjunto expandido de skills para cobrir briefing, conteúdo, design, ativos visuais, mídia e operações de publicação; a base ativa está em `site/` (home, landing e modelos internos renderizados via `site/js/template.js` e `site/js/site.config.js`).

## Fluxo de ativação
1. Sempre iniciar lendo `docs/` do repositório principal, `client-info/docs/`, `skills/` e qualquer material anexado no briefing para absorver políticas, conteúdos prévios e dependências específicas do cliente.
2. Checar `client-info/data/` e `client-info/photos/` para entender métricas, personas, metas, logos e outros ativos visuais que guiarão a proposta.
3. Conferir o checklist em `docs/skills-checklist.md` antes de acionar qualquer skill, garantindo que gatilhos, dependências e pré-requisitos estão presentes no pedido.
4. Acionar as skills conforme o foco da entrega:
   - Estratégia e descoberta: `criador-de-marketing`, `criador-de-sites` e os blocos `doc`, `notion-*` (research, meeting intelligence, spec-to-implementation, knowledge capture) transformam briefings em planos de canais, jornadas, requisitos e artefatos acionáveis.
   - UX e design: `ui-ux-sites`, `frontend-skill` e o ecossistema `figma-*` (use, implement-design, generate-design, generate-library, create-new-file, code-connect-components, create-design-system-rules) cuidam dos protótipos, tokens, histórias visuais e componentes alinhados à nova base.
   - Assets visuais e mídia: `imagegen`, `screenshot`, `sora`, `slides`, `pdf`, `speech` e `transcribe` produzem heróis, ilustrações, provas animadas e roteiros de áudio; `sora` segue os guardrails definidos em `scripts/sora.py`.
   - Documentação e narrativa: `doc`, `slides`, `notion-*`, `openai-docs` e `openai` (quando aplicável) geram relatórios, narrativas e referências de prompt atualizadas.
   - Segurança e auditoria: `security-best-practices`, `security-ownership-map` e `security-threat-model` analisam linguagens/frameworks, rastreiam ativos críticos e informam impactos com severidade e recomendações.
   - Deploy e operações: `vercel-deploy`, `render-deploy`, `cloudflare-deploy`, `netlify-deploy` constroem previews e publicam usando scripts auxiliares (`scripts/deploy.sh`, `wrangler`, etc.) antes do go-live.

## Skills complementares e processo lateral
- `frontend-skill`: define as três teses (visual, conteúdo, interação) e dirige o hero como pôster, limitando paletas e priorizando movimentos deliberados.
- `imagegen`: gera ativos raster (heróis, texturas, ilustrações), salva variantes `-v2` e documenta caminhos finais no repositório.
- `screenshot`: registra provas visuais ao lado do material gerado.
- `slides`: copia helpers, fixa fontes, monta `.pptx` via PptxGenJS e executa `scripts/render_slides.py`, `scripts/slides_test.py` para garantir alinhamento visual e ausência de overflow.
- `sora`: classifica intenção (criação, edição, pulse) e baixa resultados via `scripts/sora.py`, respeitando guardrails de permissão.
- `security-*`: as skills mencionadas anteriormente confirmam segurança antes de qualquer publicação e alimentam relatórios com severidade, linhas e recomendações.
- `openai-docs`/`openai`: consultam documentação oficial da OpenAI para garantir que prompts e integrações estejam alinhados às APIs recentes.
- `doc` e `notion-*`: documentam propostas, decisões e resultados para stakeholders e equipes internas.

## Template base e entregáveis
- O núcleo de frontend está em `site/`: home (`index.html`), landing (`landing.html`) e dois modelos internos (`site/pages/*.html`) consomem `site/js/site.config.js` para branding, SEO, navegação, CTAs e conteúdo configuráveis, além de `site/js/head.js` (SEO) e `site/js/template.js` (renderização `data-*`).
- Os temas `editorial`, `studio` e `corporate` vivem em `site/css/styles.css` e são acionados pelo `theme` no config; as imagens e assets neutros (SVGs, logos) residem em `site/assets/`.
- `scripts/validate-template.js` garante que o config contenha os grupos esperados, que os arquivos principais existam e que referências legadas fiquem confinadas em `site/examples/marcelo-moveis/`.
- O demo legado permanece em `site/examples/marcelo-moveis/`; nunca deve substituir o conteúdo do template ativo nem entrar no fluxo comercial de deploy.
- Ao acionar skills, a customização começa editando `site/js/site.config.js` e substituindo assets em `site/assets/`, enquanto `site/examples/marcelo-moveis/` é apenas referência histórica.

## Procedimentos de atualização
- Sempre que novos documentos/ativos forem adicionados a `docs/`, `client-info/` ou `skills/`, reiniciar a leitura para absorver o contexto atualizado antes de gerar planos ou acionar skills.
- Registrar hero paths, ativos `imagegen`, decks `.pptx/.js`, vídeos Sora, links de deploy e relatórios de segurança em `client-info/README` (ou arquivo similar) para manter o time alinhado sobre propósito e uso dessas entregas.
- Validar com desenvolvedores, operações e segurança antes de publicar; se houver mudanças nos scripts mencionados (render slides, sora, deploy, `scripts/validate-template.js`), atualizar as referências correspondentes neste documento e no checklist.

Com esse conjunto, o agente mantém consistência entre estratégia, construção, identidade visual, segurança e produção final de cada site ou landing page.


