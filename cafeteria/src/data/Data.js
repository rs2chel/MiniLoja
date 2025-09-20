const cardapio = {
  sugestoes: [
    {
      id: 101,
      nome: "Combo Saudável",
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
        "Ovos com abacate e pão integral, acompanhado de smoothie de frutas.",
      imagem:
        "https://cdn.pixabay.com/photo/2024/03/07/19/31/ai-generated-8619138_640.png",
      preco: 32.9,
    },
    {
      id: 105,
      nome: "Panquecas Clássicas",
      descricao: "Panquecas fofinhas com mel e frutas frescas.",
      imagem:
        "https://img.freepik.com/fotos-gratis/composicao-de-saborosas-panquecas-de-cafe-da-manha_23-2148829556.jpg",
      preco: 28.5,
    },
    {
      "id": 106,
      "nome": "Macarons Sortidos",
      "descricao": "Escolha até 2 sabores de macarons franceses",
      "imagem": "https://cdn.pixabay.com/photo/2017/07/28/14/28/macarons-2548818_640.jpg",
      "opcoes": [
        {
          "sabores": ["Framboesa", "Pistache", "Chocolate", "Baunilha", "Limão Siciliano"],
          "quantidades": [
            { "quantidade": 4, "preco": 18.9 },
            { "quantidade": 8, "preco": 34.9 },
            { "quantidade": 12, "preco": 49.9 }
          ]
        }
      ],
      "tag": "Novo"
    }, {
      id: 107,
      nome: "Combo Café da Manhã Fit",
      descricao: "Iogurte natural com granola + Suco verde",
      imagem: "https://img.freepik.com/fotos-gratis/smoothies-naturais-com-sementes_23-2148574131.jpg?t=st=1758382459~exp=1758386059~hmac=b88387fae9dc76cb37317ea322248a58a54cc062c3e9df6dd10cfec641a29f26&w=360",
      preco: 27.9
    },
    {
      id: 108,
      nome: "Combo Croissant & Café",
      descricao: "Croissant de queijo + Espresso duplo",
      imagem: "https://img.freepik.com/fotos-gratis/captura-aproximada-de-um-croissant-em-um-prato-coberto-de-chocolate-em-um-cafe_181624-59156.jpg",
      preco: 24.9
    },
    {
      id: 109,
      nome: "Combo Tropical",
      descricao: "Tapioca recheada com frango + Suco de maracujá",
      imagem: "https://img.freepik.com/fotos-premium/tapioca-de-frango-com-folha-de-manjericao-de-milho-por-cima_499484-1194.jpg",
      preco: 31.9
    },
    {
      id: 110,
      nome: "Combo Vegano",
      descricao: "Sanduíche de cogumelos com rúcula + Chá gelado de hibisco",
      imagem: "https://img.freepik.com/fotos-gratis/vista-frontal-de-um-delicioso-sanduiche-de-salada_23-2148640164.jpg",
      preco: 33.5
    },
    {
      id: 111,
      nome: "Combo Kids",
      descricao: "Mini pão de queijo + Achocolatado gelado",
      imagem: "https://www.shutterstock.com/image-photo/baked-almojabanas-chocolate-breakfast-typical-260nw-2232685951.jpg",
      preco: 22.0
    },
    {
      id: 112,
      nome: "Combo Chá da Tarde",
      descricao: "Bolo de cenoura com cobertura de chocolate + Chá de camomila",
      imagem: "https://img.freepik.com/fotos-gratis/arranjo-de-vista-superior-com-uma-xicara-de-cha-e-torta-deliciosa_23-2148325660.jpg?t=st=1758384391~exp=1758387991~hmac=af73dc54735c3f2794379d0e79a67a82739a24306e684cdba7ffb989b073ceef&w=360",
      preco: 26.5
    }
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
        { tipo: "Grande", ml: 350, preco: 17.9 },
      ],
      observacao: "Feito com leite de aveia, pode trocar para leite de vaca",
    },
    {
      id: 206,
      nome: "Chá Gelado de Hibisco",
      imagem:
        "https://media.istockphoto.com/id/1311089753/pt/foto/cold-sparkling-hibiscus-or-karkade-tea-with-lemon-mint-and-ice-in-glass-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=VuGDvk0IRJ1W5lbdubqiUsBXmgVH8cjZRd2K67e8Hgg=",
      tamanhos: [{ tipo: "Único", ml: 300, preco: 11.9 }],
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
      tamanhos: [
        { tipo: "100ml", ml: 100, preco: 4.9 },
        { tipo: "300ml", ml: 300, preco: 13.9 },
        { tipo: "500ml", ml: 500, preco: 16.9 },
      ],
    },
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
      imagem: "https://cdn.pixabay.com/photo/2024/02/17/11/44/espresso-8579186_640.jpg",
      tamanhos: [{ tipo: "Taça", ml: 120, preco: 18.9 }],
      observacao: "Espresso servido sobre bola de sorvete de creme",
    },

    {
      "id": 213,
      "nome": "Latte de Lavanda com Mel",
      "imagem": "https://img.freepik.com/fotos-gratis/delicioso-cafe-e-decoracoes-de-pascoa_23-2150249759.jpg?t=st=1758384581~exp=1758388181~hmac=d29d76b0fe73c0902620d5f8813ce1fd8c256993f804b839b2278eafd3b95b3c&w=360",
      "tamanhos": [
        { "tipo": "Normal", "ml": 250, "preco": 15.9 },
        { "tipo": "Grande", "ml": 350, "preco": 18.9 }
      ],
      "observacao": "Feito com leite vaporizado, essência natural de lavanda e mel orgânico"
    },
    {
      "id": 214,
      "nome": "Chá Gelado de Capim-Santo com Limão Siciliano",
      "imagem": "https://img.freepik.com/fotos-gratis/limao-e-hortela-cha-de-ervas-de-vidro-com-canudo-verde-na-toalha-de-mesa-dobrada-contra-o-pano-de-fundo-branco_23-2148091857.jpg?t=st=1758384675~exp=1758388275~hmac=c202fdebc26a56e424b37fd4c8ea38186176ce679078ae5425fe00c2df1a5181&w=740",
      "tamanhos": [
        { "tipo": "Único", "ml": 300, "preco": 13.9 }
      ],
      "observacao": "Refrescante e aromático, feito com infusão natural"
    },
    {
      "id": 215,
      "nome": "Smoothie de Abacaxi com Hortelã",
      "imagem": "https://img.freepik.com/fotos-gratis/delicioso-coquetel-pina-colada-com-abacaxi_23-2150143204.jpg?t=st=1758384757~exp=1758388357~hmac=bfc05b9e13ddda6b6ceac674a853cf5482f236807970ec8ba4f81d6d718c988f&w=1060",
      "tamanhos": [
        { "tipo": "300ml", "ml": 300, "preco": 16.9 },
        { "tipo": "500ml", "ml": 500, "preco": 21.9 }
      ],
      "observacao": "Com sementes de chia e toque de limão"
    },
    {
      "id": 216,
      "nome": "Leite Dourado",
      "imagem": "https://img.freepik.com/fotos-gratis/leite-dourado-de-curcuma-bebida-indiana-tradicional_114579-12548.jpg?ga=GA1.1.227103913.1758373326&semt=ais_incoming&w=740&q=80",
      "tamanhos": [
        { "tipo": "Pequeno", "ml": 200, "preco": 12.9 },
        { "tipo": "Grande", "ml": 350, "preco": 16.9 }
      ],
      "observacao": "Feito com leite vegetal, cúrcuma, gengibre e canela"
    }, {
      "id": 217,
      "nome": "Espresso Tônica",
      "imagem": "https://img.freepik.com/fotos-gratis/cliente-desfrutando-de-uma-bebida-alcoolica_23-2148176793.jpg?ga=GA1.1.227103913.1758373326&semt=ais_incoming&w=740&q=80",
      "tamanhos": [
        { "tipo": "Copo Único", "ml": 200, "preco": 14.9 }
      ],
      "observacao": "Combinação refrescante de café espresso com água tônica e toque cítrico de limão"
    }

  ],

  salgados: [
    {
      id: 301,
      nome: "Pão de Queijo",
      descricao: "Feito com queijo da canastra",
      imagem:
        "https://media.istockphoto.com/id/1286193563/pt/foto/brazilian-cheese-buns-table-coffee-in-the-morning-with-cheese-bread-in-basket.jpg?s=612x612&w=0&k=20&c=mQb9yf8J-T5eUG0a3v0_V6jNA_7wsqiLRnt3UkZSI9w=",
      quantidades: [
        { quantidade: 1, preco: 12.9 },
        { quantidade: 10, preco: 129.0 },
      ],
    },
    {
      id: 302,
      nome: "Sanduíche Caprese",
      descricao: "Tomate confit, rúcula e mussarela de búfala",
      imagem:
        "https://media.istockphoto.com/id/1428099452/pt/foto/caprese-toasts-with-mini-mozzarella-cheese-cherry-tomato-and-basil.jpg?s=612x612&w=0&k=20&c=TwQ7xDvkuHwqu-0VasT-y5OjdEJ6WPGz5ol_QKHFsH4=",
      vegetariano: true,
      preco: 34.9,
    },
    {
      "id": 303,
      "nome": "Coxinhas com Molho Especial",
      "descricao": "Porção de coxinhas douradas e crocantes, acompanhadas de molho cremoso com ervas",
      "imagem": "https://img.freepik.com/fotos-gratis/comida-brasileira-e-arranjo-de-molhos_23-2148875237.jpg?t=st=1758373711~exp=1758377311~hmac=ad1802f921085b24c00e8d139c46b2cde260e739a5e7f43b28e3527c64b1914e&w=360",
      "preco": 25.0
    },
    {
      id: 304,
      nome: "Croissant de Presunto e Queijo",
      descricao: "Croissant amanteigado com recheio gratinado",
      imagem: "https://img.freepik.com/fotos-gratis/bacon-croissant-com-mostarda_1150-11058.jpg?t=st=1758373835~exp=1758377435~hmac=5adfe0a5beb91bf5d7e8a3e70119bf0d337e68b87242b21361c0448ca5c0fd04&w=360",
      preco: 18.9,
    },
    {
      id: 305,
      nome: "Empada de Frango",
      descricao: "Massa crocante com recheio cremoso",
      imagem: "https://img.freepik.com/fotos-premium/aperitivo-tipico-da-culinaria-brasileira-chamado-empada-de-camarao-copie-o-espaco_261158-2187.jpg?w=360",
      quantidades: [
        { quantidade: 1, preco: 6.9 },
        { quantidade: 3, preco: 18.0 },
      ],
    },
    {
      id: 306,
      nome: "Tapioca de Queijo e Presunto",
      descricao:
        "Feita na hora, com queijo derretido e presunto, servida quentinha.",
      imagem: "https://media.istockphoto.com/id/531705022/pt/foto/tapioca.jpg?s=612x612&w=0&k=20&c=9ioghNP9_xq7NdD2hW7Ebt570_lYxS3hmNAnr3lDpVc=",
      preco: 14.9,
    }, {
      "id": 308,
      "nome": "Quiche de Espinafre e Nozes",
      "descricao": "Espinafre salteado com ricota e nozes em massa amanteigada",
      "imagem": "https://img.freepik.com/fotos-gratis/quiche-com-rucula-e-bacon_661915-47.jpg?t=st=1758385799~exp=1758389399~hmac=e81a81895dedadc1df8ff00033caf120c7fbcf17771ab38df5b216fe954a1056&w=360",
      "preco": 22.9
    },
    {
      "id": 309,
      "nome": "Pastel de Jaca com Pimenta Biquinho",
      "descricao": "Recheio vegano de jaca desfiada com toque de pimenta biquinho",
      "imagem": "https://img.freepik.com/fotos-gratis/mini-tortas-vazias-na-placa-de-corte-tornando-o-processo_114579-1676.jpg?ga=GA1.1.227103913.1758373326&semt=ais_incoming&w=740&q=80",
      "quantidades": [
        { "quantidade": 6, "preco": 19.9 },
        { "quantidade": 12, "preco": 36.9 }
      ],
      "vegetariano": true
    },
    {
      "id": 310,
      "nome": "Sanduíche Tostado de Bacon e Cheddar",
      "descricao": "Pão crocante com recheio de bacon defumado e queijo cheddar derretido. Ideal para um café reforçado ou lanche da tarde.",
      "imagem": "https://img.freepik.com/fotos-gratis/sanduiche-close-up-com-bacon-e-queijo_23-2148679089.jpg?t=st=1758386574~exp=1758390174~hmac=dc2a3b1ebef81b66e8cb2ccd844ed9e975b375a2d264dcf70ef173bbb91468b8&w=360",
      "quantidades": [
        { "quantidade": 1, "preco": 14.90 },
        { "quantidade": 2, "preco": 27.00 }
      ],
      "tag": "Clássico"
    },
    {
      "id": 311,
      "nome": "Sanduíche de Cogumelos com Creme de Castanha",
      "descricao": "Cogumelos salteados com creme de castanha de caju em pão integral",
      "imagem": "https://img.freepik.com/fotos-premium/close-up-de-um-hamburguer-vegetariano-servido-num-prato_1048944-24876842.jpg?w=1060",
      "vegetariano": true,
      "preco": 29.9
    },
    {
      "id": 312,
      "nome": "Croissant de Tomate Seco e Rúcula",
      "descricao": "Croissant amanteigado recheado com tomate seco, rúcula e queijo minas",
      "imagem": "https://img.freepik.com/fotos-premium/vista-de-alto-angulo-de-salada-de-frutas-em-prato-na-mesa_1048944-27182875.jpg?ga=GA1.1.227103913.1758373326&semt=ais_incoming&w=740&q=80",
      "vegetariano": true,
      "preco": 19.9
    },
    {
      "id": 313,
      "nome": "Sanduíche da Casa",
      "descricao": "Sanduíche artesanal com pão integral, presunto, alface fresca e ovo caipira estrelado. Ideal para um café da manhã reforçado ou brunch leve.",
      "imagem": "https://img.freepik.com/fotos-gratis/sanduiche-do-cafe-da-manha-feito-com-pao-ovo-estrelado-presunto-e-alface_1150-25679.jpg?ga=GA1.1.227103913.1758373326&semt=ais_incoming&w=740&q=80",
      "quantidades": [
        { "quantidade": 1, "preco": 18.9 },
        { "quantidade": 2, "preco": 34.0 }
      ],
      "tag": "Café da Manhã"
    }
  ],

  doces: [
    {
      id: 401,
      nome: "petit gateau",
      descricao: "Delicioso Petigato servido com sorvete de baunilha cremoso morango e hortela uma explosão de sabor!",
      imagem: "https://img.freepik.com/fotos-premium/sobremesa-petit-gateau-com-sorvete_434193-2090.jpg?w=360",
      preco: 12.9,
    },
    {
      id: 402,
      nome: "Brownie",
      descricao: "Bem chocolatudo com ganache de chocolate",
      imagem: "https://cdn.pixabay.com/photo/2024/01/30/13/15/ai-generated-8541996_640.jpg",
      preco: 16.9,
    },
    {
      id: 403,
      nome: "Brownie com Sorvete",
      descricao: "Brownie quente com sorvete de baunilha",
      imagem: "https://cdn.pixabay.com/photo/2020/07/26/12/16/brownie-5439382_640.jpg",
      preco: 14.9,
    },
    {
      id: 404,
      nome: "Cookie com Gotas de Chocolate",
      descricao: "Crocante por fora e macio por dentro",
      imagem: "https://img.freepik.com/fotos-gratis/deliciosas-gotas-de-chocolate-ainda-vida_52683-89918.jpg",
      quantidades: [
        { quantidade: 1, preco: 8.9 },
        { quantidade: 6, preco: 53.4 },
      ],
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
      descricao: "Clássico, com calda de caramelo e frutas",
      imagem: "https://cdn.pixabay.com/photo/2017/01/06/17/27/caramel-1958386_640.jpg",
      preco: 12.0,
    }, {
      "id": 411,
      "nome": "Cheesecake de Cupuaçu",
      "descricao": "Base crocante com creme de queijo e geleia de cupuaçu",
      "imagem": "https://img.freepik.com/fotos-gratis/torta-de-queijo-com-frutas-no-topo-servida-com-molho-de-bagas_141793-548.jpg",
      "preco": 18.9
    },
    {
      "id": 412,
      "nome": "Pavê de Café",
      "descricao": "Camadas de creme de café, biscoito e ganache de chocolate amargo",
      "imagem": "https://img.freepik.com/fotos-premium/porcao-de-sobremesa-de-tiramisu-classico-e-biscoitos-savoiardi-no-fundo-de-concreto_220507-15865.jpg?ga=GA1.1.227103913.1758373326&semt=ais_incoming&w=740&q=80",
      "preco": 16.9
    },
    {
      "id": 413,
      "nome": "Tartelete de Limão e Hibisco",
      "descricao": "Base amanteigada com creme cítrico e merengue floral",
      "imagem": "https://img.freepik.com/fotos-gratis/delicioso-bolo-assado-com-creme-rosa-e-chocolates-light-bolo-biscoito-doce-assar-creme_140725-32071.jpg",
      "preco": 14.9
    },
    {
      "id": 414,
      "nome": "Trufa de Cachaça",
      "descricao": "Chocolate amargo com recheio cremoso de cachaça artesanal",
      "imagem": "https://img.freepik.com/fotos-gratis/close-up-de-chocolates-coco-ao-lado-de-uma-trufa_1220-64.jpg?t=st=1758385424~exp=1758389024~hmac=faa2ddf9c1aee02d1cf885c9a65103bb42a5eb1028bc1b9de58e3a0a2e5ddee9&w=360",
      "quantidades": [
        { "quantidade": 1, "preco": 6.9 },
        { "quantidade": 4, "preco": 24.0 }
      ]
    },
    {
      "id": 415,
      "nome": "Cookie de Matchá com Chocolate Branco",
      "descricao": "Cookie verde vibrante com gotas de chocolate branco, crocante e exótico",
      "imagem": "https://img.freepik.com/fotos-gratis/delicioso-arranjo-de-biscoitos-matcha_23-2150707221.jpg?t=st=1758385622~exp=1758389222~hmac=7e19b89d6aa1083a8dd40a8e5730b15a2135f2de6bea15f825a8963b0db0c623&w=740",
      "quantidades": [
        { "quantidade": 1, "preco": 9.9 },
        { "quantidade": 4, "preco": 36.0 }
      ]
    },
    {
      "id": 416,
      "nome": "Mousse de Maracujá com Crocante de Baru",
      "descricao": "Mousse leve e azedinha com crocante regional de castanha de baru",
      "imagem": "https://img.freepik.com/fotos-gratis/oculos-de-angulo-alto-com-iogurte_23-2148660413.jpg?ga=GA1.1.1356229116.1758385623&semt=ais_incoming&w=740&q=80",
      "preco": 14.9
    },
  ],
};

export default cardapio;
