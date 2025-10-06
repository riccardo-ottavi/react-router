export default function ProductCard(prop) {
     const {image, title} = prop.productProp;
    return(
        

        <li><div className="product-card">
            <div className="card-img">
              <img src={image}></img>  
            </div>
            <span>{title}</span>
        </div></li>
    )
}