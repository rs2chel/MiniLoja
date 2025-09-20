import { useNavigate } from "react-router-dom";
export function Footer({ quantidade, valor }) {
  const navigate = useNavigate();
  if (quantidade === 0) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-500 text-slate-100 p-3 flex justify-between items-center shadow-lg">
      {" "}
      <div>
        {" "}
        <p className="font-semibold">{quantidade} item(s) no carrinho</p>{" "}
      </div>{" "}
      <div className="flex items-center gap-3">
        {" "}
        <p className="font-bold">R$ {valor.toFixed(2)}</p>{" "}
        <button
          onClick={() => navigate("/carrinho")}
          className="bg-slate-800 hover:bg-slate-950 transition px-3 py-1 rounded text-sm font-semibold flex items-center gap-2 cursor-pointer"
        >
          {" "}
          Carrinho{" "}
          <span className="bg-red-500 w-4 h-4 flex items-center justify-center text-xs rounded-full ">
            {" "}
            {quantidade}{" "}
          </span>{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
export default Footer;
