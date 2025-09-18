
MiniLoja

MiniLoja é um projeto desenvolvido durante o **curso Dev Jr da +praTI**, com o objetivo de praticar diferentes abordagens de estilização em React. O projeto consiste na construção de uma tela de e-commerce, replicada em quatro técnicas de CSS:

1. CSS Global  
2. CSS Modules  
3. Tailwind CSS  
4. styled-components  

O projeto inclui Navbar, grid de produtos responsivo, cards de produto, dark mode com persistência, estados de interação (hover, focus, disabled, loading com skeleton) e atenção à acessibilidade.

---

## Estrutura do Projeto

O repositório contém quatro pastas principais, cada uma com sua versão de estilização:

01-css-global/
02-css-modules/
03-tailwind/
04-styled-components/

Cada pasta contém componentes reutilizáveis como:

- Navbar – com logo, toggle de tema (claro/escuro) e badge do carrinho.
- ProductCard – imagem, título, preço, rating, tag (“Novo”/“Promo”), botão com variantes (solid/outline/ghost).
- Button – com variantes e estados.
- Skeleton – placeholder para loading.

---

## Funcionalidades

- Grid responsivo:
  - ≤480px: 1 coluna
  - 481–768px: 2 colunas
  - 769–1024px: 3 colunas
  - ≥1025px: 4 colunas
- Dark mode com persistência no navegador.
- Acessibilidade: navegação por teclado, aria-* onde necessário, contraste ≥4.5:1.
- Interações: hover, focus, disabled, loading com skeleton.
- Animações: transições de 150–250ms usando transform e opacity.
- Botões consistentes nos dois temas.
- Lazy loading para imagens de produtos.
- Skeleton sem layout shift.

---

## Tecnologias Utilizadas

- React  
- CSS Global, CSS Modules, Tailwind CSS, styled-components  
- JavaScript/JSX  
- Vite ou Create React App (dependendo da versão)  

---

## Como Rodar o Projeto

1. Clone o repositório:

git clone https://github.com/rs2chel/MiniLoja.git

2. Entre na pasta da versão desejada, por exemplo:

cd MiniLoja/03-tailwind

3. Instale as dependências:

npm install
# ou
yarn

4. Rode o servidor de desenvolvimento:

npm run dev
# ou
yarn dev

5. Abra o navegador em http://localhost:5173 (ou a porta indicada pelo terminal).

---

## Documentação do CSS

Cada versão segue sua técnica específica:

### 1. CSS Global

- Todos os estilos estão centralizados em arquivos .css globais.
- Uso de classes sem escopo específico, aplicáveis a qualquer componente.
- Tokens de cores, espaçamentos e sombras definidos em variáveis CSS.

### 2. CSS Modules

- Estilos encapsulados por componente (Component.module.css).
- Classes únicas geradas automaticamente pelo Webpack/Vite.
- Evita conflitos globais de nomes.

### 3. Tailwind CSS

- Utiliza classes utilitárias para estilização rápida.
- Configuração de breakpoints, cores, espaçamentos e sombras via tailwind.config.js.
- Dark mode controlado pelo class do body com persistência local.

### 4. styled-components

- CSS-in-JS com ThemeProvider.
- Props de tema controlam cores, sombras e variantes do botão.
- Componente encapsulado, sem conflito de classes.
- Suporte completo para dark mode e transições.

---

## Observações

- O projeto foi desenvolvido como tarefa prática do curso Dev Jr da +praTI para fixação de conceitos de CSS e React.

---
