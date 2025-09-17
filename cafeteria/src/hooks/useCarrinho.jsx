// import { createContext, useContext, useState, useEffect } from "react";

// const CarrinhoContext = createContext();

// export function CarrinhoProvider({ children }) {
//   const [carrinho, setCarrinho] = useState([]);
//   const [valorTotal, setValorTotal] = useState(0);

//   useEffect(() => {
//     const carrinhoSalvo = localStorage.getItem("carrinho");
//     if (carrinhoSalvo) setCarrinho(JSON.parse(carrinhoSalvo));
//   }, []);

//   useEffect(() => {
//     const total = carrinho.reduce((acc, item) => acc + (item.preco || 0), 0);
//     setValorTotal(total);
//     localStorage.setItem("carrinho", JSON.stringify(carrinho));
//   }, [carrinho]);

//   const adicionarAoCarrinho = (produto) =>
//     setCarrinho((prev) => [...prev, produto]);

//   const removerDoCarrinho = (idProduto) =>
//     setCarrinho((prev) => prev.filter((item) => item.id !== idProduto));

//   return (
//     <CarrinhoContext.Provider
//       value={{ carrinho, valorTotal, adicionarAoCarrinho, removerDoCarrinho }}
//     >
//       {children}
//     </CarrinhoContext.Provider>
//   );
// }

// export function useCarrinho() {
//   return useContext(CarrinhoContext);
// }
