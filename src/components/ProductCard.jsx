export default function ProductCard(prop) {
     const {image} = prop.productProp;
    return(
        

        <li><div className="actor-card">
            <img src={image}></img>
        </div></li>
    )
}