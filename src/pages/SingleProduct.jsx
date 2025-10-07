import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

export default function SingleProduct(){
    const { id } = useParams();

    useEffect(() => {

    }, [])

    return(
        <div className="single-product">
            <h1>Sono la pagina di prodotto singolo, ID prodotto: {id}</h1>
        </div>
    )
}