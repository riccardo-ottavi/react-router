import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";


export default function Products() {
    const [products, setProducts] = useState([]);

    function fetchProducts() {
        const endPoint = "https://fakestoreapi.com/products"
        axios.get(endPoint)
            .then((res => setProducts(res.data))
                
            ).catch(error => console.log(error)
            )
    }

    useEffect(() => {
       fetchProducts(); 

    },[]);
    

    return(
        <div className="products-list">
            <ul>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productProp={product}
                    />
                ))}
            </ul>
        </div>

    )
}