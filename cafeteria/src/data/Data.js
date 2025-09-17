const cardapio = {
  sugestoes: [
    {
      id: 101,
      nome: "Combo Saudavel",
      descricao:
        "Sanduíches frescos com folhas verdes e tomate, acompanhados de suco de laranja natural.",
      imagem:
        "https://media.istockphoto.com/id/900397110/pt/foto/a-quick-breakfast-before-work-healthy-sandwiches-and-juice-to-drink-from-oranges-and-hot-fresh.jpg?s=612x612&w=0&k=20&c=qL_jR_PlBN2_b9E5mcAViRA_YwGKI_t-CfCLngS-ESM=",
      preco: 29.9,
    },
    {
      id: 102,
      nome: "Combo Doce da Tarde",
      descricao: "Cappuccino + Brownie",
      imagem:
        "https://media.istockphoto.com/id/2162363301/pt/foto/cappuccino-with-a-brownie.jpg?s=612x612&w=0&k=20&c=qWdzhxJoRcAuer6o8KQGQNM6araXT9UewR-wR9cDS9M=",
      preco: 26.9,
    },
    {
      id: 103,
      nome: "Combo Almoço Leve",
      descricao: "Sanduíche Caprese + Suco Natural",
      imagem:
        "https://media.istockphoto.com/id/1385709981/pt/foto/a-healthy-avocado-toasted-with-smoked-salmon.jpg?s=612x612&w=0&k=20&c=kQYH_kzAzoIrTWY0Q0NccmP0A3_Djorgih4eCHQHgN8=",
      preco: 39.9,
    },
    {
      id: 104,
      nome: "Breakfast Energy",
      descricao:
        "Ovos  com abacate e pão integral, acompanhado de smoothie de frutas.",
      imagem:
        "https://cdn.pixabay.com/photo/2024/03/07/19/31/ai-generated-8619138_640.png",
      preco: 32.9,
    },
    {
      id: 105,
      nome: "Panquecas Clássicas",
      descricao: "Panquecas fofinhas com mel e frutas frescas.",
      imagem:
        "https://cdn.pixabay.com/photo/2018/05/11/08/33/pancakes-3397064_1280.jpg",
      preco: 28.5,
    },
    {
      id: 106,
      nome: "Macarons Sortidos",
      descricao:
        "Delicados macarons franceses em cores vibrantes, com sabor suave e doce.",
      imagem:
        "https://cdn.pixabay.com/photo/2017/07/28/14/28/macarons-2548818_640.jpg",
      preco: 18.9,
      tag: "Novo",
    },
  ],

  bebidas: [
    {
      id: 201,
      nome: "Espresso",
      imagem:
        "https://media.istockphoto.com/id/1557161201/pt/foto/coffee-cup.jpg?s=612x612&w=0&k=20&c=4CVUF3ALEHaRxK77fA9jcOhvScL3sVYVGlYQcnRQgGs=",
      tamanhos: [
        { tipo: "Pequeno", ml: 30, preco: 7.9 },
        { tipo: "Normal", ml: 60, preco: 10.9 },
        { tipo: "Duplo", ml: 120, preco: 13.9 },
      ],
    },
    {
      id: 202,
      nome: "Cappuccino",
      imagem:
        "https://media.istockphoto.com/id/523168994/pt/foto/capuccino-com-gr%C3%A3os-de-caf%C3%A9.jpg?s=612x612&w=0&k=20&c=9AKVQ2eLtKetoza_DzDbEDX6LikQlFLx7bsVfWDg5hI=",
      tamanhos: [
        { tipo: "Pequeno", ml: 30, preco: 7.9 },
        { tipo: "Normal", ml: 250, preco: 12.9 },
        { tipo: "Grande", ml: 350, preco: 15.9 },
      ],
      adicionais: [
        { nome: "Canela", preco: 0 },
        { nome: "Leite Vegetal", preco: 4.5 },
      ],
    },
    {
      id: 203,
      nome: "Latte",
      imagem:
        "https://media.istockphoto.com/id/502048034/pt/foto/caf%C3%A9-latte-caf%C3%A9-quente-na-velha-mesa-de-madeira-com-bolo-de-chocolate-bolo.jpg?s=612x612&w=0&k=20&c=tcTCuoM_RkVGqWW8jUM5UhMJQ4So5VLG0dBgVUXd878=",
      tamanhos: [
        { tipo: "Normal", ml: 250, preco: 13.9 },
        { tipo: "Grande", ml: 350, preco: 15.9 },
      ],
      adicionais: [
        { nome: "Baunilha", preco: 2.0 },
        { nome: "Caramelo", preco: 2.0 },
        { nome: "Leite Vegetal", preco: 4.5 },
      ],
    },
    {
      id: 204,
      nome: "Mocha",
      imagem:
        "https://media.istockphoto.com/id/521618573/pt/foto/chocolate-quente.jpg?s=612x612&w=0&k=20&c=NaUTVrN-194OaD60J4WnGfQAT5sgmj1yWIaLYC5tQA4=",
      tamanhos: [
        { tipo: "Pequeno", ml: 100, preco: 10.9 },
        { tipo: "Normal", ml: 250, preco: 15.9 },
        { tipo: "Grande", ml: 350, preco: 17.9 },
      ],
    },
    {
      id: 205,
      nome: "Matchá Latte",
      imagem:
        "https://media.istockphoto.com/id/1218959751/pt/foto/two-cups-dalgona-matcha-latte-a-creamy-whipped-matcha-on-light-background-matcha-green-tea.jpg?s=612x612&w=0&k=20&c=BJ62HSlbggiXf5OyIoz5ucXy2R85mTLif4IgBlp-ZD4=",
      tamanhos: [
        { tipo: "Pequeno", ml: 100, preco: 10.9 },
        { tipo: "Normal", ml: 250, preco: 15.9 },
        { tipo: "Grande", ml: 350, preco: 17.9 },],
      observacao: "Feito com leite de aveia, pode trocar para leite de vaca",
    },
    {
      id: 206,
      nome: "Chá Gelado de Hibisco",
      imagem:
        "https://media.istockphoto.com/id/1311089753/pt/foto/cold-sparkling-hibiscus-or-karkade-tea-with-lemon-mint-and-ice-in-glass-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=VuGDvk0IRJ1W5lbdubqiUsBXmgVH8cjZRd2K67e8Hgg=",
      tamanhos: [{ tipo: "Copo Único", ml: 300, preco: 11.9 }],
    },
    {
      id: 207,
      nome: "Suco Natural de Laranja",
      imagem:
        "https://media.istockphoto.com/id/507211196/pt/foto/copo-de-suco-de-laranja-em-madeira-em-campo.jpg?s=612x612&w=0&k=20&c=RvtQpZ6SvHBXpCiROOnFNPz-BrtWRD6iiGDqOo9pboU=",

      tamanhos: [
        { tipo: "100ml", ml: 100, preco: 4.5 },
        { tipo: "300ml", ml: 300, preco: 10.9 },
        { tipo: "500ml", ml: 500, preco: 14.9 },
      ],
    },
    {
      id: 208,
      nome: "Chocolate Quente",
      imagem:
        "https://media.istockphoto.com/id/2164391807/pt/foto/close-up-of-drink-on-table.jpg?s=612x612&w=0&k=20&c=89o5BQUuG1-LIebw0yEyPU8OjbGIgIp43rRhWfS7LXE=",
      // adicionei opções 100/300/500 (mantive preços próximos aos originais)
      tamanhos: [
        { tipo: "100ml", ml: 100, preco: 4.9 },
        { tipo: "300ml", ml: 300, preco: 13.9 },
        { tipo: "500ml", ml: 500, preco: 16.9 },
      ],
    },

    // NOVOS TIPOS DE CAFÉ (preservados como você tinha)
    {
      id: 209,
      nome: "Macchiato",
      imagem:
        "https://media.istockphoto.com/id/1185895072/pt/foto/caramel-bru%CC%82le%CC%81e-coffees-in-glass-mugs.jpg?s=612x612&w=0&k=20&c=ou4Co41k3dlxfLjJ_KkhCwD9i1JZNHk_Bnfg-tD097I=",
      tamanhos: [
        { tipo: "Pequeno", ml: 100, preco: 9.9 },
        { tipo: "Normal", ml: 200, preco: 11.9 },
        { tipo: "Duplo", ml: 300, preco: 14.9 },
      ],
      observacao: "Espresso com um toque de espuma de leite",
    },
    {
      id: 210,
      nome: "Flat White",
      imagem:
        "https://media.istockphoto.com/id/2224630445/pt/foto/hot-cofffee-cappuccino-coffee-or-latte-coffee-or-flat-white-or-latte-art.jpg?s=612x612&w=0&k=20&c=uSnthPJcekjwiXP0AlV61ZMPO5Jso9775vDIRupZvco=",
      tamanhos: [
        { tipo: "Pequeno", ml: 100, preco: 12.9 },
        { tipo: "Normal", ml: 200, preco: 14.9 },
        { tipo: "Grande", ml: 300, preco: 17.9 },
      ],
      observacao: "Mais cremoso que o latte, com espresso duplo",
    },
    {
      id: 211,
      nome: "Cold Brew",
      imagem:
        "https://media.istockphoto.com/id/1209718260/pt/foto/cold-brew-coffee-with-milk-and-ice-cubes-in-glass.jpg?s=612x612&w=0&k=20&c=PIQ5nNXF43F8Kx91IL2PuvkTV3GZCoeEXkX78peQ8oo=",
      tamanhos: [
        { tipo: "Copo Único", ml: 300, preco: 15.9 },
        { tipo: "Garrafa", ml: 500, preco: 22.9 },
      ],
      observacao: "Extraído a frio por 12h, menos ácido e refrescante",
    },
    {
      id: 212,
      nome: "Affogato",
      imagem:
        "https://media.istockphoto.com/id/1151360599/pt/foto/iced-coffee-with-vanilla-ice-cream.jpg?s=612x612&w=0&k=20&c=tPml2hjmnPiIDszoz2-NoGkX6reCr9WAwDAF7m8KKX4=",
      tamanhos: [{ tipo: "Taça", ml: 120, preco: 18.9 }],
      observacao: "Espresso servido sobre bola de sorvete de creme",
    },
  ],

  salgados: [
    {
      id: 301,
      nome: "Pão de Queijo",
      descricao: "Feito com queijo da canastra",
      imagem:
        "https://media.istockphoto.com/id/1286193563/pt/foto/brazilian-cheese-buns-table-coffee-in-the-morning-with-cheese-bread-in-basket.jpg?s=612x612&w=0&k=20&c=mQb9yf8J-T5eUG0a3v0_V6jNA_7wsqiLRnt3UkZSI9w=",
      preco: 12.9,
    },
    {
      id: 302,
      nome: "Sanduíche Caprese",
      descricao: "Tomate confit, rúcula e mussarela de búfala",
      imagem:
        "https://media.istockphoto.com/id/1428099452/pt/foto/caprese-toasts-with-mini-mozzarella-cheese-cherry-tomato-and-basil.jpg?s=612x612&w=0&k=20&c=TwQ7xDvkuHwqu-0VasT-y5OjdEJ6WPGz5ol_QKHFsH4=",
      preco: 34.9,
      vegetariano: true,
    },
    {
      id: 303,
      nome: "Cuscuz Nordestino",
      descricao: "Acompanha 2 ovos fritos e bacon crocante",
      imagem:
        "https://media.istockphoto.com/id/1467079518/pt/foto/couscous-from-the-northeast-region-of-brazil-on-a-white-plate-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=tdjs6deUteYeVaagUtxBQw2p5V5GmCp6GQP9Jg4z5AQ=",
      preco: 25.0,
    },
    {
      id: 304,
      nome: "Croissant de Presunto e Queijo",
      descricao: "Croissant amanteigado com recheio gratinado",
      imagem:
        "https://media.istockphoto.com/id/2222537052/pt/foto/breakfast-with-croissant-ham-cheese-vegetable-lettuce-onion-and-slice-tomato-in-black-ceramic.jpg?s=612x612&w=0&k=20&c=QGY-XsyGks4l5V0vRJ9iq32BE7RXJYWanS-ygXn_pDQ=",
      preco: 18.9,
    },
    {
      id: 305,
      nome: "Empada de Frango",
      descricao: "Massa crocante com recheio cremoso",
      imagem:
        "https://media.istockphoto.com/id/1326788748/pt/foto/typical-brazilian-cuisine-appetizer-called-empada-de-camar%C3%A3o.jpg?s=612x612&w=0&k=20&c=HUfl9psX_4G48wYzwqGiM703RvIOwDM4Z49WZjwdKTY=",
      preco: 10.9,
    },
    {
      id: 306,
      nome: "Tapioca de Queijo e Presunto",
      descricao:
        "Feita na hora, com queijo derretido e presunto, servida quentinha.",
      imagem:
        "https://media.istockphoto.com/id/531705022/pt/foto/tapioca.jpg?s=612x612&w=0&k=20&c=9ioghNP9_xq7NdD2hW7Ebt570_lYxS3hmNAnr3lDpVc=",
      preco: 19.9,
    },
  ],

  doces: [
    {
      id: 401,
      nome: "Caramel Slice",
      descricao: "Barrinha de caramelo, chocolate e flor de sal",
      imagem:
        "https://media.istockphoto.com/id/185228575/pt/foto/caramelo-bolacha-amanteigada.jpg?s=612x612&w=0&k=20&c=6-pOUgiXhRSEE9nufq0kkjfjp8wv73EN-YQ7z119SXk=",
      preco: 12.9,
    },
    {
      id: 402,
      nome: "Brownie",
      descricao: "Bem chocolatudo com ganache de chocolate",
      imagem:
        "https://media.istockphoto.com/id/1354282153/pt/foto/coffe-cup-and-brownies.jpg?s=612x612&w=0&k=20&c=7ymbgIQIw36xtMWjt0H0FJHgdxDoiilNkSwcZeZZCok=",
      preco: 16.9,
    },
    {
      id: 403,
      nome: "Brownie com Sorvete",
      descricao: "Brownie quente com sorvete de baunilha",
      imagem:
        "https://media.istockphoto.com/id/160946353/pt/foto/brownie-com-gelado-de-baunilha.jpg?s=612x612&w=0&k=20&c=s7yMH7odHFLuUl4H3FN5ELjtf9Y7jFvS0cKMGkqN40U=",
      preco: 14.9,
    },
    {
      id: 404,
      nome: "Cookie com Gotas de Chocolate",
      descricao: "Crocante por fora e macio por dentro",
      imagem:
        "https://media.istockphoto.com/id/1709722487/pt/foto/homemade-chocolate-chip-cookies.jpg?s=612x612&w=0&k=20&c=WcsXkTZhsUnwAVsbfwCMqjDraQpPfeWPjATY9w_aHnc=",
      preco: 8.9,
    },
    {
      id: 405,
      nome: "Pedaço Torta Banoffee",
      descricao: "Banana, doce de leite e chantilly",
      imagem:
        "https://media.istockphoto.com/id/184401784/pt/foto/tarte-banoffee-em-um-preto-travessa-de-servir.jpg?s=612x612&w=0&k=20&c=38AfkZlsLRiNhe2HQWLc-OhfpJIa6S68Shf2qgRgrVc=",
      preco: 19.9,
    },
    {
      id: 406,
      nome: "Pudim de Leite",
      descricao: "Clássico, com calda de caramelo",
      imagem:
        "https://media.istockphoto.com/id/2231883913/pt/foto/pudim-de-leite.jpg?s=612x612&w=0&k=20&c=skdqsxYKyZqry92ME2qd6lE_-WtUEhnA7r0yqZatOgk=",
      preco: 12.0,
    },
  ],
};

export default cardapio;
