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

  // Atualiza quantidade ao carregar a tela
  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setQuantidadeCarrinho(carrinho.length);
  }, []);

  // Função para adicionar ao carrinho
  function aoAdicionar(produto) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    setQuantidadeCarrinho(carrinho.length);
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
      <Tela
        produtos={produtosFiltrados}
        selecionar={setProdutoSelecionado}
        className="tela"
      />
      <Footer className="footer" />
      <Detalhes
        produto={produtoSelecionado}
        fecharModal={() => setProdutoSelecionado(null)}
        aoAdicionar={aoAdicionar}
      />
    </div>
  );
}
