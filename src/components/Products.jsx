import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";


export default function Products() {
    const [products, setProducts] = useState([]);
    console.log(products)
    function fetchProducts() {
        const endPoint = "https://fakestoreapi.com/products"
        axios.get(endPoint)
            .then((res => setProducts(res.data))

            ).catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <section className="products-container">
            <ul>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        productProp={product}
                    />
                ))}
            </ul>
        </section>

    )
}