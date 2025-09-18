import React, { useState } from "react";
import ReactDOM from "react-dom";

function Detalhes({ produto, fecharModal, aoAdicionar }) {
  if (!produto) return null;

  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(
    produto.tamanhos?.[0] || null
  );
  const [adicionaisSelecionados, setAdicionaisSelecionados] = useState([]);
  const [quantidade, setQuantidade] = useState(1);

  const toggleAdicional = (adicional) => {
    setAdicionaisSelecionados((prev) =>
      prev.some((a) => a.nome === adicional.nome)
        ? prev.filter((a) => a.nome !== adicional.nome)
        : [...prev, adicional]
    );
  };

  const precoBase = tamanhoSelecionado?.preco ?? produto.preco ?? 0;
  const precoAdicionais = adicionaisSelecionados.reduce(
    (acc, a) => acc + a.preco,
    0
  );
  const precoFinal = (precoBase + precoAdicionais) * quantidade;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="content-fechar-modal">
          <button className="fechar-modal" onClick={fecharModal}>
            ✖
          </button>
        </div>
        <div className="content-img">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="modal-imagem"
          />
        </div>
        <div className="content-txt">
          <div className="content-title">
            <h2>{produto.nome}</h2>
          </div>
          <div className="content-descricao">
            {produto.descricao && <p>{produto.descricao}</p>}
          </div>

          {produto.tamanhos && (
            <div>
              <p>
                <strong>Escolha o tamanho:</strong>
              </p>

              {produto.tamanhos.map((t, i) => (
                <div className="content-tamanhos">
                  <label key={i}>
                    <input
                      type="radio"
                      name="tamanho"
                      checked={t.tipo === tamanhoSelecionado?.tipo}
                      onChange={() => setTamanhoSelecionado(t)}
                    />
                    {t.tipo} ({t.ml}ml) - R$ {t.preco.toFixed(2)}
                  </label>
                </div>
              ))}
            </div>
          )}

          {produto.adicionais && (
            <div>
              <p>
                <strong>Adicionais:</strong>
              </p>
              {produto.adicionais.map((a, i) => (
                <label key={i}>
                  <div className="adicional">
                    <input
                      type="checkbox"
                      checked={adicionaisSelecionados.some(
                        (sel) => sel.nome === a.nome
                      )}
                      onChange={() => toggleAdicional(a)}
                    />
                    {a.nome} - R$ {a.preco.toFixed(2)}
                  </div>
                </label>
              ))}
            </div>
          )}
          <div className="content-observacao">
            {produto.observacao && (
              <p>
                <em>{produto.observacao}</em>
              </p>
            )}
          </div>

          <div>
            <strong>Quantidade:</strong>

            <div className="content-ButtonsQuanti">
              <button
                className="btn"
                onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span>{quantidade}</span>
              <button
                className="btn"
                onClick={() => setQuantidade((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="Content-valor">
            <p>
              <strong>Preço final: R${precoFinal.toFixed(2)}</strong>
            </p>
          </div>
          <div className="Content-Btn-adicionar">
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
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Detalhes;
