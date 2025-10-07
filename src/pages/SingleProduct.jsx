import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

export default function SingleProduct() {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(error => console.error(error))
    }, [id])

    return (
        <div>
            {product ? (<div>
                <div className="product-card">
                    <div className="card-img">
                        <img src={product.image}></img>
                    </div>
                    <div className="card-text">
                        <h3 className="big-text">{product.title}</h3>
                        <p className="price-label">{product.price?.toFixed(2)}€</p>
                        <p>{product.category?.toUpperCase()}</p>
                        <div className="rating">{product.rating?.rate} <img src="../public/img/star-solid-full.svg"></img> ({product.rating?.count})</div>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>)
                :
                (<p>Loading</p>)
            }
        </div>)

}
