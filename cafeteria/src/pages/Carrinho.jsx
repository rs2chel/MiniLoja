import { useState, useEffect } from "react";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  // Pega os produtos do localStorage ao montar
  useEffect(() => {
    const produtos = JSON.parse(localStorage.getItem("carrinho")) || [];
    // adiciona quantidade inicial 1 se não tiver
    const produtosComQtd = produtos.map((p) => ({
      ...p,
      quantidade: p.quantidade || 1,
    }));
    setCarrinho(produtosComQtd);
  }, []);

  // Atualiza o localStorage
  function atualizarLocalStorage(novoCarrinho) {
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  // Aumentar quantidade
  function adicionarQuantidade(id) {
    const novosProdutos = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    atualizarLocalStorage(novosProdutos);
  }

  // Diminuir quantidade
  function diminuirQuantidade(id) {
    const novosProdutos = carrinho.map((item) =>
      item.id === id
        ? { ...item, quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1 }
        : item
    );
    atualizarLocalStorage(novosProdutos);
  }

  // Remover item
  function removerDoCarrinho(id) {
    const novosProdutos = carrinho.filter((item) => item.id !== id);
    atualizarLocalStorage(novosProdutos);
  }

  // Valor total
  const valorTotal = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  if (carrinho.length === 0) return <p>Seu carrinho está vazio</p>;

  return (
    <div>
      <h1>Meu Carrinho</h1>
      {carrinho.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <img src={item.imagem} alt={item.nome} width={50} />
          <div>
            <p>{item.nome}</p>
            <p>R$ {item.preco}</p>
          </div>

          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <button onClick={() => diminuirQuantidade(item.id)}>-</button>
            <span>{item.quantidade}</span>
            <button onClick={() => adicionarQuantidade(item.id)}>+</button>
          </div>

          <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
        </div>
      ))}
      <h3>Total: R$ {valorTotal.toFixed(2)}</h3>
    </div>
  );
}

export default Carrinho;
