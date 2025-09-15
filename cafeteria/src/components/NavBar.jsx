

export function Header() {
    return (
        <div>
            {/* <img src="logo.png" alt="Logo" /> */}
            <input type="text" placeholder="Buscar" />
            <button>Buscar</button>
            <button>Carrinho</button>
            <button>Favoritos</button>

        </div>
    )
}


export function Navegation() {
    return (
        <div>
            <ul>
                <li>Sugestoes</li>
                <li>Bebidas</li>
                <li>Doces</li>
                <li>Salgados</li>
            </ul>
        </div>
    )
    // vai receber o estado de ativo em cada uma das abas
}
export function Footer(){
    return (
        <div>
            <div>
                <p>0 Quantidade carrinho  </p>
                <p>valor R$ 50,00</p>
            </div>
        </div>

    )
    // se o carrinho estiver vazio ele nao aparece
    // vai receber o valor atual do carrinho e a quantidade de itens selecionadas
    
}


export function NavBar() {
    return (
        <div>
            <Navegation />
            <Header />
            <Footer />
        </div>

    )
}




export default NavBar;
