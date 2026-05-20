import { Link } from "react-router-dom";

export default function ErrorPage() {

    return (
        <main className="bg-body-tertiary min-vh-100">

            <div className="container text-center my-5">
                <i className="bi-emoji-frown error-badge"></i>
                <h1>We can't find the item you requested.</h1>
                <Link to={"/"} className="btn btn-primary btn-lg button-home">
                    Return to HomePage
                </Link>
            </div>

        </main>
    )
}