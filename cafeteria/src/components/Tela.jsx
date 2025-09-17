import React from "react";

function Tela({ produtos, selecionar }) {
  if (!produtos || produtos.length === 0)
    return <p>Nenhum produto disponível</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {produtos.map((produto) => {
        // Pega o preço: se tiver preco direto, usa; se tiver tamanhos, pega o menor preço
        const preco =
          produto.preco ??
          (produto.tamanhos
            ? Math.min(...produto.tamanhos.map((t) => t.preco))
            : null);

        return (
          <div
            key={produto.id}
            className="card-item"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "180px",
              cursor: "pointer",
            }}
            onClick={() => selecionar(produto)}
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{produto.nome}</h3>
            {preco && <p>R$ {preco.toFixed(2)}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Tela;
