export function Navegation({ abaAtiva, setAbaAtiva }) {
  const abas = ["Sugestoes", "Bebidas", "Doces", "Salgados"];

  return (
    <div className="bg-red-50 p-4 shadow-md rounded-lg">
      <ul className="flex justify-center gap-8">
        {abas.map((aba) => (
          <li
            key={aba}
            className={`
              cursor-pointer 
              px-1 py-1 rounded-md
              transition-all duration-300
              ${
                abaAtiva === aba
                  ? "bg-red-300 text-white shadow-lg scale-105"
                  : "bg-red-50 text-yellow-900 hover:bg-red-300"
              }
            `}
            onClick={() => setAbaAtiva(aba)}
          >
            {aba}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navegation;
