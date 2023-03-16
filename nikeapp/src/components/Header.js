import { ProductContext } from "../App";
import { useContext } from "react";

function Header() {
    const productContextValue = useContext(ProductContext)
    console.log(productContextValue)
    const {cart} = productContextValue
    return (
        <header>
            <h1>Nike Store</h1>
            <p>Shopping Cart:{cart.length} </p>
        </header>
    )
}

export default Header;