import { useState } from "react";

export function NavBar({ produtos, carrinho, valorTotal }) {
  const [abaAtiva, setAbaAtiva] = useState("Sugestoes");
  const produtosFiltrados = produtos[abaAtiva.toLowerCase()] || [];

  return (
    <div>
      <Header quantidade={carrinho.length} valor={valorTotal} />
      <Navegation abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />
      <Tela produtos={produtosFiltrados} />
      <Footer quantidade={carrinho.length} valor={valorTotal} />
    </div>
  );
}

export default NavBar;
