import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Carrinho.module.css";
import headerStyles from "./CarrinhoHeader.module.css";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula atraso (se você estiver usando skeleton)
    setTimeout(() => {
      const produtos = JSON.parse(localStorage.getItem("carrinho")) || [];

      // Deduplicar por id: soma quantidades de itens com mesmo id
      const mapa = {};
      produtos.forEach((p) => {
        const id = p.id;
        const qtd = Number(p.quantidade) || 1;
        if (!mapa[id]) {
          mapa[id] = { ...p, quantidade: qtd };
        } else {
          mapa[id].quantidade = (Number(mapa[id].quantidade) || 0) + qtd;
        }
      });

      const produtosComQtd = Object.values(mapa);
      setCarrinho(produtosComQtd);
      setLoading(false); // se você usa loading
    }, 800);
  }, []);

  function atualizarLocalStorage(novoCarrinho) {
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  function adicionarQuantidade(id) {
    const novosProdutos = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    atualizarLocalStorage(novosProdutos);
  }

  function diminuirQuantidade(id) {
    const novosProdutos = carrinho.map((item) =>
      item.id === id
        ? { ...item, quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1 }
        : item
    );
    atualizarLocalStorage(novosProdutos);
  }

  function removerDoCarrinho(id) {
    const novosProdutos = carrinho.filter((item) => item.id !== id);
    atualizarLocalStorage(novosProdutos);
  }

  const valorTotal = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className={styles.container}>
      {/* HEADER DA PÁGINA */}
      <header className={headerStyles.header}>
        <button
          className={headerStyles.voltar}
          onClick={() => navigate("/")}
          aria-label="Voltar para a Home"
        >
          🏠
        </button>
        <h1 className={headerStyles.titulo}>Meu Carrinho</h1>
      </header>

      {/* SKELETON ENQUANTO CARREGA */}
      {loading ? (
        <div className={styles.skeletonWrapper}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={styles.skeletonItem}></div>
          ))}
        </div>
      ) : carrinho.length === 0 ? (
        <p className={styles.vazio}>Seu carrinho está vazio</p>
      ) : (
        <>
          <div role="list" className={styles.lista}>
            {carrinho.map((item) => (
              <div key={item.id} role="listitem" className={styles.item}>
                <img src={item.imagem} alt={item.nome} className={styles.img} />

                <div className={styles.info}>
                  <p className={styles.nome}>{item.nome}</p>
                  <p className={styles.preco}>R$ {item.preco}</p>
                </div>

                <div className={styles.qtdContainer}>
                  <button
                    className={styles.qtdBotao}
                    onClick={() => diminuirQuantidade(item.id)}
                    aria-label={`Diminuir quantidade de ${item.nome}`}
                  >
                    -
                  </button>
                  <span>{item.quantidade}</span>
                  <button
                    className={styles.qtdBotao}
                    onClick={() => adicionarQuantidade(item.id)}
                    aria-label={`Aumentar quantidade de ${item.nome}`}
                  >
                    +
                  </button>
                </div>

                <button
                  className={styles.remover}
                  onClick={() => removerDoCarrinho(item.id)}
                  aria-label={`Remover ${item.nome} do carrinho`}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>

          <h3 className={styles.total}>Total: R$ {valorTotal.toFixed(2)}</h3>

          {/* BOTÃO FINALIZAR PEDIDO */}
          <button
            className={styles.finalizar}
            onClick={() => alert("Pedido finalizado!")}
          >
            Finalizar Pedido
          </button>
        </>
      )}
    </div>
  );
}

export default Carrinho;
