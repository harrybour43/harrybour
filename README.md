
# Harry Bour - Portfólio Fotográfico

Este é o repositório oficial do portfólio fotográfico de Harry Bour. Um espaço digital desenvolvido para exibir narrativas visuais, fotojornalismo e trabalhos autorais, focado no realismo hostil e na crueza do cotidiano de São Paulo.

🌍 **Site ao vivo:** [https://harrybour43.github.io/harrybour/](https://harrybour43.github.io/harrybour/)

## 🚀 Funcionalidades

O site foi construído com foco em performance, estética minimalista (low-key) e facilidade de manutenção:

* **Galeria Dinâmica (Masonry):** As imagens são carregadas automaticamente das pastas do repositório utilizando a API do GitHub, eliminando a necessidade de edição de HTML para novas postagens.
* **Lightbox Integrado:** Visualização imersiva em tela cheia para leitura detalhada das obras.
* **Acessibilidade (a11y):** Painel dedicado com opções de alto contraste, ampliação de fonte, modo daltônico e modo claro.
* **Age Gate:** Proteção de conteúdo sensível (+18) para projetos específicos.
* **Totalmente Responsivo:** Adaptado para leitura perfeita em dispositivos móveis e desktops.

## 🛠 Tecnologias Utilizadas

* **HTML5** (Semântico)
* **CSS3** (Variáveis CSS, CSS Grid, Flexbox, Animações)
* **JavaScript (Vanilla)** (Manipulação de DOM, Fetch API)
* **GitHub Pages & GitHub REST API** (Hospedagem e carregamento dinâmico de mídia)

## 📁 Como atualizar as galerias (Workflow)

O processo de curadoria e upload foi automatizado pelo script `app.js`. Para adicionar novas fotos a qualquer galeria:

1. Edite a imagem e renomeie o arquivo utilizando hifens e capitalização. O nome do arquivo será lido como a legenda da foto.
   * *Exemplo:* `Retrato-Low-Key-SP.jpg`
2. Envie o arquivo para a pasta correspondente da galeria dentro de `assets/img/` (ex: `assets/img/retratos/`).
3. Faça o *Commit* e o *Push*.
4. A foto aparecerá automaticamente na página assim que o repositório for atualizado.

## ✒️ Autor

**Harry Bour**
* Estudante de Processos Fotográficos e Fotógrafo em São Paulo.
* [Instagram][(link)](https://www.instagram.com/harrybour_fotografia/)

---
*A imagem não deve ser um monumento à eternidade, e sim o testemunho de uma efemeridade necessária.*
