import CardProduct from "./CardProducts";
import cardapio from "../data/Data";

function ListaProdutos({ categoria }) {
  const produtos = cardapio[categoria]; // "bebidas", "salgados", "doces"

  return (
    <div>
      {produtos.map((item) => (
        <CardProduct
          key={item.id}
          imagem={item.imagem}
          titulo={item.nome}
          valor={item.preco || item.tamanhos?.[0]?.preco} // se tiver tamanhos pega o primeiro preço
          descricao={item.descricao || item.observacao || ""}
        />
      ))}
    </div>
  );
}

export default ListaProdutos;
