import { useState, useEffect } from "react";
import cardapio from "../data/Data";
import Header from "../components/Header";
import Navegation from "../components/Navegation";
import Tela from "../components/Tela";
import Footer from "../components/Footer";
import Detalhes from "../components/Detalhes";

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState("Sugestoes");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
  const [valorCarrinho, setValorCarrinho] = useState(0); // ✅ Estado do valor

  const produtosFiltrados = cardapio[abaAtiva.toLowerCase()] || [];

  // Atualiza quantidade e valor ao carregar a página
  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const novaQuantidade = carrinho.reduce(
      (s, it) => s + (Number(it.quantidade) || 0),
      0
    );
    const novoValor = carrinho.reduce(
      (s, it) =>
        s + Number(it.precoFinal || it.preco || 0) * (it.quantidade || 1),
      0
    );

    setQuantidadeCarrinho(novaQuantidade);
    setValorCarrinho(novoValor);
  }, []);

  // Função para adicionar produtos ao carrinho
  function aoAdicionar(produto) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const qtdAdicionar = produto.quantidade ? Number(produto.quantidade) : 1;
    const indexExistente = carrinho.findIndex((p) => p.id === produto.id);

    if (indexExistente > -1) {
      const itemExistente = carrinho[indexExistente];
      const novaQtd = (Number(itemExistente.quantidade) || 1) + qtdAdicionar;
      carrinho[indexExistente] = {
        ...itemExistente,
        quantidade: novaQtd,
      };
    } else {
      carrinho.push({
        ...produto,
        quantidade: qtdAdicionar,
      });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    const novaQuantidade = carrinho.reduce(
      (s, it) => s + (Number(it.quantidade) || 0),
      0
    );
    const novoValor = carrinho.reduce(
      (s, it) =>
        s + Number(it.precoFinal || it.preco || 0) * (it.quantidade || 1),
      0
    );

    setQuantidadeCarrinho(novaQuantidade);
    setValorCarrinho(novoValor); // ✅ Atualiza o valor do carrinho
    setProdutoSelecionado(null);
  }

  return (
    <div>
      <Header quantidade={quantidadeCarrinho} className="header" />
      <Navegation
        abaAtiva={abaAtiva}
        setAbaAtiva={setAbaAtiva}
        className="nav"
      />
      <main>
        <Tela
          produtos={produtosFiltrados}
          selecionar={setProdutoSelecionado}
          className="tela"
        />
      </main>

      <Detalhes
        produto={produtoSelecionado}
        fecharModal={() => setProdutoSelecionado(null)}
        aoAdicionar={aoAdicionar}
      />

      <Footer quantidade={quantidadeCarrinho} valor={valorCarrinho} />
    </div>
  );
}
