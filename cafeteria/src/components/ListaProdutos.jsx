import { useState } from "react";
import CardProducts from "./CardProducts";
import cardapio from "../data/Data";

function ListaProdutos({ categoria }) {
  const [carrinho, setCarrinho] = useState([]);
  const produtos = cardapio[categoria] || [];

  function handleAddToCart(item) {
    setCarrinho((prev) => [...prev, item]);
    console.log("Carrinho atualizado:", [...carrinho, item]); // só para teste
  }

  return (
    <div>
      {produtos.map((item) => (
        <CardProducts
          key={item.id}
          imagem={item.imagem}
          titulo={item.nome}
          valor={item.preco || item.tamanhos?.[0]?.preco}
          descricao={item.descricao || item.observacao || ""}
          onAddToCart={handleAddToCart}
        />
      ))}

      {/* Exibição temporária do carrinho */}
      <h3>Carrinho</h3>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>
              {item.titulo} x{item.quantidade} — R$ {item.total.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaProdutos;
