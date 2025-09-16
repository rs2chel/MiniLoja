function CardProduct({ imagem, titulo, valor, descricao }) {
  return (
    <div>
      <img src={imagem} alt={titulo} />
      <p>{titulo}</p>
      <p>{descricao}</p>
      <p>R$ {valor.toFixed(2)}</p>
    </div>
  );
}

export default CardProduct;
