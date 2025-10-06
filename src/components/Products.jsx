

export default function Products() {

    function fetchProduct() {
        const endPoint = "https://fakestoreapi.com/products"
        axios.get(endPoint)
            .then((res =>
                console.log("chiamata riuscita: ", res))
            ).catch(error => console.log(error)
            )
    }
    
    fetchProduct();

    return(
        <header>
            <div className="section-title">
              <h1>Products (Sono il titolo)</h1>  
            </div>
        </header>
    )
}