import {Login} from "../pages/Login/Login.jsx";
import {AUTH_PATH, HOME_PATH, PROMOTIONS_PATH, STORES_PATH, TICKETS_PATH, TRENINGS_PATH} from "./paths.js";
import {Home} from "../pages/Home/Home.jsx";
import {Trenings} from "../pages/Trenings/Trenings.jsx";
import {Promotions} from "../pages/Promotions/Promotions.jsx";
import {Stores} from "../pages/Store/Stores.jsx";
import {Tickets} from "../pages/Ticket/Tickets.jsx";

export const publicRoutes = [
    {
        path: AUTH_PATH,
        Component: Login
    }
];

export const privateRoutes = [
    {
        path: HOME_PATH,
        Component: Home
    },
    {
        path: TRENINGS_PATH,
        Component: Trenings
    },
    {
        path: PROMOTIONS_PATH,
        Component: Promotions
    },
    {
        path: STORES_PATH,
        Component: Stores
    },
    {
        path: TICKETS_PATH,
        Component: Tickets
    }
]