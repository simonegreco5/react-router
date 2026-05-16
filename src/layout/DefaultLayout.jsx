// sezione import
import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout() {

    return (

        <>

            {/* default header */}
            <AppHeader />

            {/* remember to add main  */}
            <Outlet />

            {/* default footer */}
            <AppFooter />

        </>

    )
}