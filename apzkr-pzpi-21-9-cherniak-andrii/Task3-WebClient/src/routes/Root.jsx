import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes.js";
import {Layout} from "./Layout.jsx";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../main.jsx";
import {getAllStores} from "../apiURLs/StoreApi.js";

export const Root = observer(() => {
    const {
        user,
        promotion,
        promStatus,
        role,
        store,
        ticket,
        ticketStatus,
        ticketType,
        trening
    } = useContext(Context);


    useEffect(() => {
        (async function() {
            await role.getAll();
            await user.getAll();
            await store.getAll();
            await promStatus.getAll();
            await promotion.getAll();
            await ticketStatus.getAll();
            await ticketType.getAll();
            await ticket.getAll();
            await trening.getAll();
        })()

    }, []);

    return (
        <Routes>
            {
                publicRoutes.map(({path, Component}) => {
                    return <Route path={path} element={<Component/>} key={path}/>
                })
            }
            <Route path={'/'} element={<Layout/>}>
                {
                    user.isAuth && privateRoutes.map(({path, Component}) => {
                            return <Route path={path} element={<Component/>} key={path}/>
                        })
                }
            </Route>
        </Routes>
    );
})