function aoAdicionar(produto) {
    // Pega os produtos já salvos no localStorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Adiciona o novo produto
    carrinho.push(produto);

    // Salva de volta no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert(`${produto.nome} adicionado ao carrinho!`);
}