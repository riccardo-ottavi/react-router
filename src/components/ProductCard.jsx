import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const { product } = props;
    return (


        <li>
            <Link to={`/products/${product.id}`}>
                <div className="product-card">
                    <div className="card-img">
                        <img src={product.image}></img>
                    </div>
                    <div className="card-text">
                        <h3 className="big-text">{product.title}</h3>
                        <p className="price-label">{product.price.toFixed(2)}€</p>
                        <p>{product.category.toUpperCase()}</p>
                        <div className="rating">{product.rating.rate} <img src="../public/img/star-solid-full.svg"></img> ({product.rating.count})</div>
                    </div>
                </div>
            </Link>
        </li>
    )
}