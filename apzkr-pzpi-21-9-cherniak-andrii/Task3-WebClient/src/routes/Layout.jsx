import {Navigation} from "../pages/Home/Navigation/Navigation.jsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <section>
            <Navigation/>
            <section className={'flex'}>
                <Outlet/>
            </section>
        </section>
    );
}