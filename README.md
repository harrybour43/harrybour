Harry Bour - Portfólio Fotográfico & Processos Visuais
Este é o repositório oficial do portfólio digital de Harry Bour. Um espaço desenvolvido para exibir narrativas visuais, fotojornalismo e trabalhos autorais, focado no realismo hostil, na crueza do cotidiano de São Paulo e na exploração da luz e sombra (Low-key e Bodyscapes).

🌍 **Site ao vivo:** [https://harrybour.com.br/](https://harrybour.com.br/)

🚀 Funcionalidades e UX/UI
O site foi construído com uma arquitetura front-end limpa, focada em performance, estética minimalista e padronização rigorosa, garantindo uma experiência de usuário (UX) fluida:

Galeria Dinâmica (Masonry): Sistema de grid responsivo que adapta a exibição das imagens de acordo com a resolução da tela, mantendo a proporção original das fotografias.

Lightbox Imersivo (com Navegação por Teclado): Visualização em tela cheia com suporte a navegação por setas (← e →) e fechamento via Esc, proporcionando uma leitura detalhada das obras.

Acessibilidade Persistente (a11y): Painel dedicado com opções de Alto Contraste, Ampliação de Fonte, Modo Daltônico e Modo Claro. As preferências do usuário são salvas no navegador (localStorage), mantendo a consistência visual em todas as páginas visitadas.

Proteção de Conteúdo: Scripts dedicados para desativar o clique com o botão direito, atalhos de inspeção de código (F12, Ctrl+Shift+I) e o arrastar de imagens, criando uma camada extra de proteção autoral contra cópias casuais.

Age Gate (Fricção Intencional): Proteção de conteúdo sensível (+18) para o Projeto Lumen, exigindo validação de data de nascimento via formulário antes de liberar o acesso, em conformidade com diretrizes de segurança.

🗂 Estrutura do Site
O portfólio está dividido em áreas estratégicas para separar o trabalho artístico dos serviços técnicos:

Portfólio: Galerias temáticas (Voz do Povo, Retratos, Publicidade, Espetáculos, Processos Históricos, Audiovisual, e o restrito Lumen).

Serviços: Seção dedicada ao trabalho técnico de estúdio e laboratório, abrangendo Restauração de imagens e Tratamento High-End.

Ferramentas: Acesso à ferramenta CLARA.

Acervo Privado: Espaço do Cliente, protegido contra indexadores de busca.

⚙️ Tecnologias & Técnicas de Programação
O projeto foi desenvolvido sem o uso de frameworks pesados, priorizando o controle total sobre o código (Vanilla):

HTML5 Semântico: Estruturação lógica para leitores de tela e otimização de busca.

CSS3 Moderno: Uso extensivo de Variáveis CSS (:root) para troca dinâmica de temas, Flexbox e CSS Grid para layouts responsivos complexos (como a sidebar retrátil mobile), e animações suaves (efeito Ken Burns na página inicial).

JavaScript (Vanilla): * Manipulação de DOM para o Lightbox e Menus.

Uso de Array.from() e findIndex() para mapeamento de galerias em tempo real.

Gerenciamento de estado via localStorage e sessionStorage.

Interceptação de eventos (keydown, contextmenu, dragstart) para acessibilidade e segurança.

Infraestrutura: Hospedagem via GitHub Pages com domínio customizado e certificado SSL/TLS (HTTPS Enforced) integrado via Let's Encrypt.

🔍 SEO e Otimização para Redes Sociais
A arquitetura do site foi projetada para garantir a melhor indexação e compartilhamento orgânico:

Open Graph & Twitter Cards: Meta tags configuradas (og:title, og:image, og:description) para gerar rich previews perfeitos ao compartilhar os links no WhatsApp, Telegram, LinkedIn e outras redes, utilizando imagens altamente comprimidas para carregamento instantâneo.

Sitemap XML: Arquivo sitemap.xml estruturado com URLs limpas e prioridades (<priority>) atualizadas, dando o peso correto às novas seções de Serviços e Portfólio.

Robots.txt Seguro: Configuração restritiva (Disallow) para impedir que os crawlers do Google e do Bing indexem páginas sensíveis (Lumen e Espaço do Cliente), protegendo a privacidade dos ensaios e dos clientes.

Performance Híbrida: Redução de reflows do navegador e correção de Mixed Content, garantindo o cadeado verde de segurança ininterrupto.

📁 Workflow de Atualização de Galerias
O processo de curadoria e upload foi otimizado para não depender da reescrita de código HTML. Para adicionar novas fotos a qualquer galeria:

Edite a imagem e renomeie o arquivo utilizando hifens e capitalização (o nome do arquivo serve de base para os metadados).

Exemplo: Retrato-Low-Key-SP.jpg

Envie o arquivo para a pasta correspondente da galeria dentro de assets/img/.

Certifique-se de que a tag <img> no HTML possua a classe .masonry-item e o atributo alt preenchido corretamente para acessibilidade e SEO.

Faça o Commit e o Push.

✒️ Autor
Harry Bour

Estudante de Processos Fotográficos, Fotógrafo e Revisor em São Paulo.

* [Instagram][(link)](https://www.instagram.com/harrybour_fotografia/)

A imagem não deve ser um monumento à eternidade, e sim o testemunho de uma efemeridade necessária.
