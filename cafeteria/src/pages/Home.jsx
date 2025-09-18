import { useState, useEffect } from "react";
import cardapio from "../data/Data";
import Header from "../components/Header";
import Navegation from "../components/Navegation";
import Tela from "../components/Tela";
import Footer from "../components/Footer";
import Detalhes from "../components/Detalhes";
import "../Styles/Home.css"; //

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState("Sugestoes");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  const produtosFiltrados = cardapio[abaAtiva.toLowerCase()] || [];

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setQuantidadeCarrinho(carrinho.length);
  }, []);

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
    setQuantidadeCarrinho(
      carrinho.reduce((s, it) => s + (Number(it.quantidade) || 0), 0)
    );
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
      <div class="grid grid-cols-3 gap-4 justify-items-stretch p-2 bg-gray-900 max-w-md">
        <Tela
          produtos={produtosFiltrados}
          selecionar={setProdutoSelecionado}
          className="tela"
        />
      </div>

      <Footer className="footer" />
      <Detalhes
        produto={produtoSelecionado}
        fecharModal={() => setProdutoSelecionado(null)}
        aoAdicionar={aoAdicionar}
      />
    </div>
  );
}
