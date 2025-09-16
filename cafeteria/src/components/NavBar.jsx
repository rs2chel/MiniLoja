import { useState } from "react";

export function Header({ quantidade, valor }) {
  return (
    <div>
      {/* <img src="logo.png" alt="Logo" /> */}
      <input type="text" placeholder="Buscar" />
      <button>Buscar</button>
      <button>Carrinho ({quantidade})</button>
      <button>Favoritos</button>
    </div>
  );
}

export function Navegation({ abaAtiva, setAbaAtiva }) {
  const abas = ["Sugestoes", "Bebidas", "Doces", "Salgados"];
  return (
    <div>
      <ul>
        {abas.map((aba) => (
          <li
            key={aba}
            style={{
              fontWeight: abaAtiva === aba ? "bold" : "normal",
              cursor: "pointer",
            }}
            onClick={() => setAbaAtiva(aba)}
          >
            {aba}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ quantidade, valor }) {
  if (quantidade === 0) return null;
  return (
    <div>
      <p>{quantidade} Quantidade no carrinho</p>
      <p>Valor: R$ {valor.toFixed(2)}</p>
    </div>
  );
}

export function Tela({ produtos }) {
  return (
    <div>
      {produtos &&
        produtos.map((item) => (
          <div key={item.id}>
            <img src={item.imagem} alt={item.nome} width={100} />
            <p>{item.nome}</p>
            <p>{item.descricao}</p>
            <p>R$ {item.preco}</p>
          </div>
        ))}
    </div>
  );
}

export function NavBar({ produtos, carrinho, valorTotal }) {
  const [abaAtiva, setAbaAtiva] = useState("Sugestoes");

  // Filtra produtos pela aba ativa
  const produtosFiltrados = produtos[abaAtiva.toLowerCase()] || [];

  return (
    <div>
      <Navegation abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />
      <Header quantidade={carrinho.length} valor={valorTotal} />
      <Tela produtos={produtosFiltrados} />
      <Footer quantidade={carrinho.length} valor={valorTotal} />
    </div>
  );
}

export default NavBar;
