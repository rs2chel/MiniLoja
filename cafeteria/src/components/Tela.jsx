import React from "react";

function Tela({ produtos, selecionar }) {
  if (!produtos || produtos.length === 0)
    return (
      <p className="text-center text-gray-500 mt-8">
        Nenhum produto disponível
      </p>
    );

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full p-4">
        {produtos.map((produto) => {
          const preco =
            produto.preco ??
            (produto.tamanhos
              ? Math.min(...produto.tamanhos.map((t) => t.preco))
              : produto.quantidades
              ? Math.min(...produto.quantidades.map((q) => q.preco))
              : produto.opcoes?.[0]?.quantidades
              ? Math.min(...produto.opcoes[0].quantidades.map((q) => q.preco))
              : null);

          return (
            <div
              key={produto.id}
              className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer w-full"
              onClick={() => selecionar(produto)}
            >
              {/* Imagem à esquerda */}
              <div className="w-44 h-36 flex-shrink-0 bg-gray-100">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "/fallback.jpg";
                  }}
                />
              </div>

              {/* Conteúdo à direita */}
              <div className="flex flex-col justify-center px-4 py-2 w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  {produto.nome}
                </h3>
                {produto.descricao && (
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {produto.descricao}
                  </p>
                )}
                {preco && (
                  <p className="text-base text-gray-700 mt-2 font-medium">
                    R$ {preco.toFixed(2)}
                  </p>
                )}
                {produto.tag && (
                  <span className="mt-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full w-fit">
                    {produto.tag}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tela;
