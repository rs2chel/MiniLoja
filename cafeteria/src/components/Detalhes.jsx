import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../Styles/ModalProdutoPortal.css";

function Detalhes({ produto, fecharModal, aoAdicionar }) {
  if (!produto) return null;

  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(
    produto.tamanhos ? produto.tamanhos[0] : null
  );
  const [adicionaisSelecionados, setAdicionaisSelecionados] = useState([]);
  const [quantidade, setQuantidade] = useState(1);

  const toggleAdicional = (adicional) => {
    if (adicionaisSelecionados.includes(adicional)) {
      setAdicionaisSelecionados(
        adicionaisSelecionados.filter((a) => a !== adicional)
      );
    } else {
      setAdicionaisSelecionados([...adicionaisSelecionados, adicional]);
    }
  };

  const precoBase = tamanhoSelecionado
    ? tamanhoSelecionado.preco
    : produto.preco || 0;
  const precoAdicionais = adicionaisSelecionados.reduce(
    (acc, a) => acc + a.preco,
    0
  );
  const precoFinal = (precoBase + precoAdicionais) * quantidade;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
           {" "}
      <div className="modal-content">
               {" "}
        <button className="fechar-modal" onClick={fecharModal}>
                    X        {" "}
        </button>
               {" "}
        <img src={produto.imagem} alt={produto.nome} className="modal-imagem" />
                <h2>{produto.nome}</h2>       {" "}
        {produto.descricao && <p>{produto.descricao}</p>}       {" "}
        {produto.tamanhos && (
          <div>
                       {" "}
            <p>
                            <strong>Escolha o tamanho:</strong>           {" "}
            </p>
                       {" "}
            {produto.tamanhos.map((t, i) => (
              <label key={i} style={{ display: "block" }}>
                               {" "}
                <input
                  type="radio"
                  name="tamanho"
                  checked={t === tamanhoSelecionado}
                  onChange={() => setTamanhoSelecionado(t)}
                />
                                {t.tipo} ({t.ml}ml) - R$ {t.preco.toFixed(2)}   
                         {" "}
              </label>
            ))}
                     {" "}
          </div>
        )}
               {" "}
        {produto.adicionais && (
          <div>
                       {" "}
            <p>
                            <strong>Adicionais:</strong>           {" "}
            </p>
                       {" "}
            {produto.adicionais.map((a, i) => (
              <label key={i} style={{ display: "block" }}>
                               {" "}
                <input
                  type="checkbox"
                  checked={adicionaisSelecionados.includes(a)}
                  onChange={() => toggleAdicional(a)}
                />
                                {a.nome} - R$ {a.preco.toFixed(2)}             {" "}
              </label>
            ))}
                     {" "}
          </div>
        )}
               {" "}
        {produto.observacao && (
          <p>
                        <em>{produto.observacao}</em>         {" "}
          </p>
        )}
               {" "}
        <div style={{ marginTop: "10px" }}>
                    <strong>Quantidade:</strong>         {" "}
          <button onClick={() => setQuantidade((q) => Math.max(1, q - 1))}>
                        -          {" "}
          </button>
                    <span style={{ margin: "0 10px" }}>{quantidade}</span>     
              <button onClick={() => setQuantidade((q) => q + 1)}>+</button>   
             {" "}
        </div>
               {" "}
        <p style={{ marginTop: "10px" }}>
                    <strong>Preço final: R$ {precoFinal.toFixed(2)}</strong>   
             {" "}
        </p>
               {" "}
        <button
          className="botao-adicionar"
          onClick={() => {
            aoAdicionar({
              ...produto,
              tamanhoSelecionado,
              adicionaisSelecionados,
              quantidade,
              precoFinal,
            });
            fecharModal();
          }}
        >
                    Adicionar ao Carrinho        {" "}
        </button>
             {" "}
      </div>
         {" "}
    </div>,
    document.getElementById("modal-root")
  );
}

export default Detalhes;
