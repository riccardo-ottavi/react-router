export default function ProductCard(prop) {
    const { image, title, price, description, category, rating } = prop.productProp;
    return (
        <li>
            <div className="product-card">
                <div className="card-img">
                    <img src={image}></img>
                </div>
                <div className="card-text">
                    <h3 className="big-text">{title}</h3>
                    <p className="price-label">{price.toFixed(2)}€</p>
                    <p>{category.toUpperCase()}</p>
                    <p className="small-text"><em>{description}</em></p>
                    <div className="rating">{rating.rate} <img src="../public/img/star-solid-full.svg"></img> ({rating.count})</div>
                </div>
            </div>
        </li>
    )
}