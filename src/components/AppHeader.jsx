// sezione import
import { NavLink } from "react-router-dom";
import menu from "../assets/arrayMenu.js";

export default function AppHeader() {

    return (

        <header className="">

            <nav className="d-flex justify-content-between">

                <div className="d-flex">
                    <i className="bi bi-tux"></i>
                    <h3>BOOLEAN SHOPPING</h3>
                    {/* <i className="bi bi-box-seam-fill"></i> */}
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