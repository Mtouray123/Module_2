import { useContext } from "react";
import { ProductContext } from "../App";

function ProductListItem(props) {
    const { product } = props;
    // Consume the context
    const productContextValue = useContext(ProductContext);
    const {cart, setCart} = productContextValue;

    // console.log(productContextValue);
    
    const handleAddTocart = () => {
        setCart( [...cart, product] )
    }
    
    return (
        <div>
        <h6>{product.name}</h6>
        <img src={product.image} width="200" alt={product.name} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={handleAddTocart}>Add to Cart</button>
    </div>
    )
}

// or 
// function ProductListItem({product}) {
//     return (
//         <div key={product.id}>
//         <h6>{product.name}</h6>
//         <img src={product.image} width="200" alt={product.name} />
//         <p>{product.description}</p>
//         <p>${product.price}</p>
//     </div>
//     )
// }

export default ProductListItem;