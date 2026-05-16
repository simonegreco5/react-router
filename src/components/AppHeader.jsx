// sezione import
import { NavLink } from "react-router-dom";
import menu from "../assets/arrayMenu.js";

export default function AppHeader() {

    return (

        <header className="bg-body-tertiary">

            <nav className="d-flex justify-content-between">

                <div className="d-flex">
                    <h3>BOOLEAN SHOP</h3>
                    <i class="bi bi-box-seam"></i>
                </div>

                <ul className="d-flex">
                    {
                        menu.map((item) => (
                            <li key={item.id}>
                                <NavLink to={item.url}>{item.nome}</NavLink>
                            </li>
                        ))
                    }
                </ul>

            </nav>


        </header>
    )

}