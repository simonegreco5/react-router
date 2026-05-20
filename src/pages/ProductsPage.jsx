// sezione import 
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"

export default function ProductsPage() {

    // chiamata API 
    const api_products = 'https://fakestoreapi.com/products'

    const [productsData, setProductsData] = useState([]) // questo state rimane solo per l'API (questo rimane intatto)
    const [filteredProduct, setFilteredProduct] = useState([]) // secondo state per i prodotti filtrati (filtriamo solo questo)
    const [filter, setFilter] = useState("")
    const [count, setCount] = useState(0) // contatore carrello z-index
    const [isDataLoading, setIsDataLoading] = useState(false)

    function fetchData(url) {

        setIsDataLoading(true)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProductsData(data)
                setFilteredProduct(data)
                setIsDataLoading(false)
            })
    }

    // carichiamo tutti i dati all'avvio della pagina
    useEffect(() => {
        fetchData(api_products)
    }, [])

    useEffect(() => {

        if (filter) {
            const result = productsData.filter((product) => (product.category.toLowerCase() === filter.toLowerCase()))

            setFilteredProduct(result)

        } else {  // invece, quando filter === ""(ovvero all), if(filter) diventa false,
            setFilteredProduct(productsData) // quindi mostriamo i dati originali dell'API (tutti i prodotti)
        }

    }, [filter, productsData]) // aggiungiamo productsData come dipendeza, cosi il filtro si aggiorna anche quando arrivano
    // nuovi dati dall'API

    return (
        <>
            {isDataLoading ? <Loader /> :

                <main id="products_main">

                    {/* carrello dinamico in pagina - con z-index */}
                    <button className="dinamic-cart">
                        <i className="bi-basket"></i>
                        <span>{count}</span>
                    </button>

                    <div className="container-md">

                        {/* filtraggio dei prodotti */}
                        <h5>choose by filter</h5>
                        <select onChange={(e) => setFilter(e.target.value)} className="form-select">
                            <option value="">All</option>
                            <option value="men's clothing">Men's clothing</option>
                            <option value="women's clothing">Women's clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                        </select>

                        {/* rendiamo l'intera card cliccabile per vedere in pagina il singolo prodotto */}

                        <div className="row g-5-p-5">

                            {
                                filteredProduct?.map((item) => (

                                    // CARD PRODUCT
                                    <div className="col-12 col-sm-6 col-md-4 g-5" key={item.id}>
                                        <Link to={`/product/${item.id}`} className="text-decoration-none">

                                            <div className="card shadow h-100" >

                                                {/* BEST SELLER ? */}
                                                {(item.rating.rate >= 4 && item.rating.count >= 300) && <span className="badge">BestSeller</span>}

                                                {/* IMAGE PRODUCT */}
                                                <img src={item.image} className="card-img-top" alt="product_image" />

                                                {/* RATES AND ORDERS */}
                                                <div className="d-flex">
                                                    <span>{item.rating.rate >= 4 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star-half"></i>} {item.rating.rate}</span>
                                                    <span><i className="bi bi-basket"></i> {item.rating.count}</span>
                                                </div>

                                                {/* CARD BODY */}
                                                <div className="card-body d-flex flex-column">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <h6>{item.price}$</h6>
                                                    <p className="card-text">{item.description}</p>
                                                    <button onClick={() => setCount(count + 1)} className="btn btn-primary mt-auto"><i className="bi bi-cart-check"> Add to Cart</i></button>
                                                    {/* <Link to={`/product/${item.id}`} className="button-view"><i className="bi bi-chevron-bar-down"></i> View More</Link> */}
                                                </div>
                                            </div>

                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </main>
            }
        </>
    )
}