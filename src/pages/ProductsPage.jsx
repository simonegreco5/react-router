// sezione import 
import { useEffect, useState } from "react"

export default function ProductsPage() {

    // chiamata API 
    const api_products = 'https://fakestoreapi.com/products'

    const [productsData, setProductsData] = useState([])
    const [filteredProduct, setFilteredProduct] = useState ([])
    const [filter, setFilter] = useState("")

    function fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProductsData(data)
                setFilteredProduct(data) 
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

        } else {
            setFilteredProduct(productsData)
        }

    }, [filter, productsData])

    return (
        <main>

            {/* filtraggio dei prodotti */}
            <h5>choose by filter</h5>
            <select onChange={(e) => setFilter(e.target.value)} className="form-select">
                <option value="">All</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>

            <div className="row g-5-p-5">
                {
                    filteredProduct?.map((item) => (

                        // CARD PRODUCT
                        <div className="col-12 col-sm-6 col-md-4 g-5" key={item.id}>
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