// sezione import
import { NavLink } from "react-router-dom";

export default function HomePage() {

    return (

        <main>
            <div id="home_main" className="p-5 mb-4 bg-body-tertiary rounded-3">

                {/* logo 3D */}
                <div className="logo_tux">
                    <i className="bi bi-tux"></i>
                </div>

                <div className="container-fluid py-5">
                    <div id="title_jumbotron" className="display-5 fw-bold d-flex">
                        <h1>WELCOME IN BOOLEAN</h1>
                    </div>
                    <p className="col-md-8 fs-4">
                        <strong>Everything you need. All in one place.</strong> From everyday essentials to the latest trends, discover thousands
                        of products at unbeatable prices. <strong>Fast shipping, secure payments,
                            and new deals every day</strong> — shopping has never been this easy. <strong>Shop smarter. Live better.</strong>
                    </p>

                    {/* link per products */}
                    <NavLink to={"/products"} className="btn btn-primary btn-lg button-home">
                        Check our Products
                    </NavLink>
                </div>
            </div>
        </main>
    )
}