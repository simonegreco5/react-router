import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

export default function ProductPage() {

    const { id } = useParams()
    const api_products = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState({})
    const [count, setCount] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(api_products)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(err => {
                console.error(err)
            })
    }, [id, navigate])

    return (
        <main id="product_page">

            {/* PAGINAZIONE */}
            <div>
                <ul className="pagination justify-content-center">
                    {/* nel navigate usiamo Number() perché l'id di useParams è una stringa, senza verrebbe '1' + 1 = 11 */}
                    <li className="page-item" ><button className="page-link" onClick={() => navigate(`/product/${Number(id) -1}`)} >Previous</button></li>
                    <li className="page-item" ><button className="page-link" onClick={() => navigate(`/product/${Number(id) +1}`)} >Next</button></li>
                </ul>
            </div>

            {/* CARRELLO DINAMICO IN PAGINA */}
            <button className="dinamic-cart">
                <i className="bi-basket"></i>
                {count !== 0 && <span>{count}</span>}
            </button>

            <div className="col-sm-6 g-5 m-auto" key={product?.id}>
                <div className="card shadow h-100" >

                    {/* BEST SELLER ? */}
                    {(product.rating?.rate >= 4 && product.rating?.count >= 300) && <span className="badge">BestSeller</span>}

                    {/* IMAGE PRODUCT */}
                    <img src={product?.image} className="card-img-top" alt="product_image" />

                    {/* RATES AND ORDERS */}
                    <div className="d-flex">
                        <span>{product.rating?.rate >= 4 ? <i className="bi bi-star-fill"></i> : <i className="bi bi-star-half"></i>} {product.rating?.rate}</span>
                        <span><i className="bi bi-basket"></i> {product.rating?.count}</span>
                    </div>

                    {/* CARD BODY */}
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product?.title}</h5>
                        <h6>{product?.price}$</h6>
                        <p className="card-text">{product?.description}</p>
                        <button onClick={() => setCount(count + 1)} className="btn btn-primary mt-auto"><i className="bi bi-cart-check"> Add to Cart</i></button>
                    </div>
                </div>
            </div>
        </main>

    )
}