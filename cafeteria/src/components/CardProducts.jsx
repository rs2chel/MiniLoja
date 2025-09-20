import React, { useState } from "react";

function CardProducts({ produtos }) {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const abrirModal = (produto) => setProdutoSelecionado(produto);
  const fecharModal = () => setProdutoSelecionado(null);
  const handleAdicionar = (produto) => {
    fecharModal();
  };

  if (!produtos || produtos.length === 0)
    return <p>Nenhum produto disponível</p>;

  return (
    <div>
      <div>
        {produtos.map((item) => (
          <div
            key={item.id}
            className="CardItens"
            s
            onClick={() => abrirModal(item)}
          >
            <img
              src={item.imagem}
              alt={item.nome}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h3>{item.nome}</h3>
            {item.preco && <p>Preço: R$ {item.preco.toFixed(2)}</p>}
          </div>
        ))}
      </div>

      <ModalProdutoPortal
        produto={produtoSelecionado}
        fecharModal={fecharModal}
        aoAdicionar={handleAdicionar}
      />
    </div>
  );
}

export default CardProducts;
