import { useNavigate } from "react-router-dom";
import IconeCarrinho from "../assets/carrinho.png";

export default function Header({ quantidade }) {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Cafeteria</h1>

      <button onClick={() => navigate("/carrinho")}>
        <img src={IconeCarrinho} alt="Carrinho" />
        {quantidade > 0 && <span>{quantidade}</span>}
      </button>
    </header>
  );
}
