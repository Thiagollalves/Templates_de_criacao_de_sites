# Melhores práticas da Marketing API do Meta (baseadas na versão em inglês)

> A versão em português da página de melhores práticas não pôde ser carregada diretamente, então esta síntese se baseia na versão em inglês oficial atualizada em março de 2026. 【0†source】citeturn2view0

## Revisão automática de anúncios
- Qualquer alteração no criativo (imagem, texto, link, vídeo etc.), targeting, otimização ou eventos de cobrança pode reativar a revisão do anúncio; ajustes em lance, orçamento e cronograma não afetam o status. 【0†source】citeturn2view0

## Paginação e dados do usuário
- Utilize o recurso de paginação do Graph API para percorrer respostas longas e armazene em conjunto o ID do usuário, chave de sessão e ID da conta de anúncios para evitar erros de permissão; qualquer armazenamento de dados deve obedecer aos termos de plataforma e políticas de desenvolvedor. 【0†source】citeturn2view0

## Lances e requisições eficientes
- Rode relatórios frequentes, pois os lances sugeridos mudam dinamicamente conforme concorrência; use múltiplas requisições por chamada ou batches e aproveite as consultas por IDs múltiplos para economizar chamadas. 【0†source】citeturn2view0

## Verificação por ETags e gerenciamento de objetos
- Verifique rapidamente mudanças usando ETags, consultando recursos auxiliares; mantenha somente 5.000 objetos arquivados e mova para excluídos os que não precisa mais. 【0†source】citeturn2view0

## Erros e comunidade
- Compartilhe os códigos de erro detalhados com seus usuários para facilitar correções e participe do grupo Facebook Marketing Developer Community para notícias e atualizações. 【0†source】citeturn2view0

## Testes e sandbox
- Utilize o modo sandbox para testar leituras e gravações sem entregar anúncios reais, usando IDs e criativos fixos para demonstrações de apps; aproveite o Graph API Explorer com permissões `ads_management` ou `ads_read` conforme o caso. 【0†source】citeturn2view0

## Critérios básicos e políticas
- Demonstre valor além do Ads Manager padrão, foque em objetivos de negócio e mantenha boa governança da sua aplicação; esteja pronto para auditorias, respeite os termos de plataforma, políticas de desenvolvedor, uso de dados e demais diretrizes do Ads e adapte-se às atualizações versionadas (90 dias de janela). 【0†source】citeturn2view0
