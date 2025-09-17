import { useNavigate } from "react-router-dom";
import IconeCarrinho from "../assets/carrinho.png";

export default function Header({ quantidade }) {
  const navigate = useNavigate();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h1>Cafeteria</h1>

      <button
        onClick={() => navigate("/carrinho")}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <img src={IconeCarrinho} alt="Carrinho" style={{ width: "30px" }} />
        {quantidade > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
            }}
          >
            {quantidade}
          </span>
        )}
      </button>
    </header>
  );
}
