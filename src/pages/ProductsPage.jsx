// sezione import 
import { useEffect, useState } from "react"

export default function ProductsPage() {

    // chiamata API 
    const api_products = 'https://fakestoreapi.com/products'

    const [productsData, setProductsData] = useState([])

    function fetchData(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProductsData(data)
        })
    }

    // carichiamo tutti i dati all'avvio della pagina
    useEffect(() => {
        fetchData(api_products)
    }, [])

    return (
        <main>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </main>
    )
}