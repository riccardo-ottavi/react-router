import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";


export default function Products() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedCategory, setSelectedCategory] = useState(null)

    console.log(products)
    function fetchProducts() {
        const endPoint = "https://fakestoreapi.com/products"
        axios.get(endPoint)
            .then((res => setProducts(res.data))

            ).catch(error => console.log(error)
            )
    }

    const handleSelect = (e) => {
        setSelectedCategory(e.target.value)
    }

    useEffect(() => {
        fetchProducts();
        if (selectedCategory) {
            setFilteredProducts(
                products.filter(product => product.category === selectedCategory)
            );
        } else {
            setFilteredProducts(products)
        }
    }, [selectedCategory]);

    return (
        <>
            <section className="products-container">
                <select name="Categoria" id="Categoria" onChange={handleSelect} className="select">
                    <option value="">Tutte le categorie</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                    <option value="women's clothing">Women's clothing</option>
                </select>
                <ul>
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            productProp={product}
                        />
                    ))}
                </ul>
            </section>
        </>
    )
}