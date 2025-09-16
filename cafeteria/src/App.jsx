import React, { useState } from "react";
import NavBar from "./components/NavBar";
import cardapio from "./data/Data";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  return (
    <div>
      <NavBar produtos={cardapio} carrinho={carrinho} valorTotal={valorTotal} />
    </div>
  );
}

export default App;
