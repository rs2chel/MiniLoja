import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Detalhes({ produto, fecharModal, aoAdicionar }) {
  if (!produto) return null;

  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const [quantidadeOpcaoSelecionada, setQuantidadeOpcaoSelecionada] =
    useState(null);
  const [saboresSelecionados, setSaboresSelecionados] = useState([]);
  const [adicionaisSelecionados, setAdicionaisSelecionados] = useState([]);
  const [quantidade, setQuantidade] = useState(1);

  useEffect(() => {
    setTamanhoSelecionado(produto.tamanhos?.[0] || null);
    setQuantidadeOpcaoSelecionada(
      produto.quantidades?.[0] || produto.opcoes?.[0]?.quantidades?.[0] || null
    );
    setSaboresSelecionados([]);
    setAdicionaisSelecionados([]);
    setQuantidade(1);
  }, [produto]);

  const toggleAdicional = (adicional) => {
    setAdicionaisSelecionados((prev) =>
      prev.some((a) => a.nome === adicional.nome)
        ? prev.filter((a) => a.nome !== adicional.nome)
        : [...prev, adicional]
    );
  };

  const toggleSabor = (sabor) => {
    setSaboresSelecionados((prev) =>
      prev.includes(sabor)
        ? prev.filter((s) => s !== sabor)
        : prev.length < 2
        ? [...prev, sabor]
        : prev
    );
  };

  const precoBase =
    produto.tamanhos?.length > 0
      ? tamanhoSelecionado?.preco ?? 0
      : produto.quantidades?.length > 0
      ? quantidadeOpcaoSelecionada?.preco ?? 0
      : produto.opcoes?.[0]?.quantidades?.length > 0
      ? quantidadeOpcaoSelecionada?.preco ?? 0
      : produto.preco ?? 0;

  const precoAdicionais = adicionaisSelecionados.reduce(
    (acc, a) => acc + a.preco,
    0
  );

  const precoFinal =
    produto.quantidades || produto.opcoes
      ? precoBase + precoAdicionais
      : (precoBase + precoAdicionais) * quantidade;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="fechar-modal" onClick={fecharModal}>
          ✖
        </button>

        <div className="content-img">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="modal-imagem"
          />
        </div>

        <div className="content-txt">
          <h2>{produto.nome}</h2>
          {produto.descricao && <p>{produto.descricao}</p>}

          {produto.tamanhos && (
            <div>
              <strong>Escolha o tamanho:</strong>
              {produto.tamanhos.map((t, i) => (
                <label key={i} className="content-tamanhos">
                  <input
                    type="radio"
                    name="tamanho"
                    checked={t.tipo === tamanhoSelecionado?.tipo}
                    onChange={() => setTamanhoSelecionado(t)}
                  />
                  {t.tipo} ({t.ml}ml) – R$ {t.preco.toFixed(2)}
                </label>
              ))}
            </div>
          )}

          {/* Quantidades (salgados ou doces com porção) */}
          {produto.quantidades && (
            <div>
              <strong>Escolha a quantidade:</strong>
              {produto.quantidades.map((q, i) => (
                <label key={i} className="content-tamanhos">
                  <input
                    type="radio"
                    name="quantidadeOpcao"
                    checked={
                      q.quantidade === quantidadeOpcaoSelecionada?.quantidade
                    }
                    onChange={() => setQuantidadeOpcaoSelecionada(q)}
                  />
                  {q.quantidade} unidade{q.quantidade > 1 ? "s" : ""} – R${" "}
                  {q.preco.toFixed(2)}
                </label>
              ))}
            </div>
          )}

          {/* Opções (doces com sabores e quantidades) */}
          {produto.opcoes && (
            <div>
              <strong>Escolha até 2 sabores:</strong>
              {produto.opcoes[0].sabores.map((sabor, i) => (
                <label key={i} className="adicional">
                  <input
                    type="checkbox"
                    checked={saboresSelecionados.includes(sabor)}
                    onChange={() => toggleSabor(sabor)}
                    disabled={
                      !saboresSelecionados.includes(sabor) &&
                      saboresSelecionados.length >= 2
                    }
                  />
                  {sabor}
                </label>
              ))}

              <strong>Escolha a quantidade:</strong>
              {produto.opcoes[0].quantidades.map((q, i) => (
                <label key={i} className="content-tamanhos">
                  <input
                    type="radio"
                    name="quantidadeOpcao"
                    checked={
                      q.quantidade === quantidadeOpcaoSelecionada?.quantidade
                    }
                    onChange={() => setQuantidadeOpcaoSelecionada(q)}
                  />
                  {q.quantidade} unidade{q.quantidade > 1 ? "s" : ""} – R${" "}
                  {q.preco.toFixed(2)}
                </label>
              ))}
            </div>
          )}

          {/* Adicionais (bebidas) */}
          {produto.adicionais && (
            <div>
              <strong>Adicionais:</strong>
              {produto.adicionais.map((a, i) => (
                <label key={i} className="adicional">
                  <input
                    type="checkbox"
                    checked={adicionaisSelecionados.some(
                      (sel) => sel.nome === a.nome
                    )}
                    onChange={() => toggleAdicional(a)}
                  />
                  {a.nome} – R$ {a.preco.toFixed(2)}
                </label>
              ))}
            </div>
          )}

          {/* Observação */}
          {produto.observacao && (
            <p className="content-observacao">
              <em>{produto.observacao}</em>
            </p>
          )}

          {/* Contador para produtos simples */}
          {!produto.quantidades && !produto.opcoes && (
            <div>
              <strong>Quantidade:</strong>
              <div className="content-ButtonsQuanti">
                <button
                  className="btn"
                  onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
                >
                  –
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
          )}

          <div className="Content-valor">
            <p>
              <strong>Preço final: R$ {precoFinal.toFixed(2)}</strong>
            </p>
          </div>

          <button
            className="botao-adicionar"
            onClick={() =>
              aoAdicionar({
                ...produto,
                tamanhoSelecionado,
                quantidadeOpcaoSelecionada,
                adicionaisSelecionados,
                saboresSelecionados,
                quantidade,
                precoFinal,
              })
            }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Detalhes;
