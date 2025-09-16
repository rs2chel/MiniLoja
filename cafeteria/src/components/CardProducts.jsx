import { useState } from "react";

function CardProducts({ imagem, titulo, valor, descricao, onAddToCart }) {
  const [quantidade, setQuantidade] = useState(0);

  function handleAddToCart() {
    if (quantidade > 0) {
      onAddToCart({
        titulo,
        valor,
        quantidade,
        total: quantidade * valor,
      });
      setQuantidade(0); // reseta depois de adicionar
    }
  }

  return (
    <div>
      <img src={imagem} alt={titulo} />
      <p>{titulo}</p>
      <p>{descricao}</p>
      <p>R$ {valor ? valor.toFixed(2) : "0,00"}</p>

      <div>
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
        <p>{quantidade}</p>
        <button onClick={() => setQuantidade(Math.max(0, quantidade - 1))}>
          -
        </button>
      </div>

      <button onClick={handleAddToCart} disabled={quantidade === 0}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default CardProducts;
