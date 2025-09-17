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

export default Navegation;
