// sezione import 
import { useEffect, useState } from "react"

export default function ProductsPage() {

    // chiamata API 
    const api_products = 'https://fakestoreapi.com/products'

    const [productsData, setProductsData] = useState([])

    function fetchData(url) {
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
            <div className="row g-5-p-5">
                {
                    productsData?.map((item) => (
                        <div className="col-12 col-sm-6 col-md-4 g-5" key={item.id}>
                            <div className="card shadow h-100" >
                                {(item.rating.rate >= 4 && item.rating.count >= 300) && <span className="badge">BestSeller</span>}
                                <img src={item.image} className="card-img-top" alt="product_image" />
                                <div className="d-flex">
                                    <span>{item.rating.rate >= 4 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star-half"></i>} {item.rating.rate}</span>
                                    <span><i className="bi bi-basket"></i> {item.rating.count}</span>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.title}</h5>
                                    <h6>{item.price}$</h6>
                                    <p className="card-text">{item.description}</p>
                                    <button className="btn btn-primary mt-auto"><i className="bi bi-cart-check"> Buy Now</i></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}