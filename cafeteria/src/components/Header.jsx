import { useNavigate } from "react-router-dom";
import IconeCafe from "../assets/IcoNCafe.png";
import IconeCarrinho from "../assets/carrinho.png";
export default function Header({ quantidade }) {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md p-4 flex flex-wrap items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={IconeCafe}
          alt="Cafeteria"
          className="h-10 w-10 object-contain cursor-pointer"
        />
        <h1 className="text-white text-2xl font-extrabold tracking-wide cursor-pointer">
          Cafeteria
        </h1>
      </div>

      <button
        className="relative flex items-center bg-white text-yellow-600 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
        onClick={() => navigate("/carrinho")}
      >
        <img
          src={IconeCarrinho}
          alt="Carrinho"
          className="w-5 h-5 md:w-6 md:h-6 object-contain cursor-pointer"
        />
        <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
          {quantidade}
        </span>
      </button>
    </header>
  );
}
