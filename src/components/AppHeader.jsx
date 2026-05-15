// sezione import
import menu from "../assets/arrayMenu.js";

export default function AppHeader() {

    return (

        <header className="bg-body-tertiary">

            <nav className="d-flex justify-content-between">

                <div className="d-flex">
                    <h3>BOOLEAN FLIGHT</h3>
                    <i className="bi bi-airplane"></i>
                </div>

                <ul className="d-flex">
                    {
                        menu.map((item) => (
                            <li key={item.id}>
                                <a href={item.url}>{item.nome}</a>
                            </li>
                        ))
                    }
                </ul>

            </nav>


        </header>
    )

}