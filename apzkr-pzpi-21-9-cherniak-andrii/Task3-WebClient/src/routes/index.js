import {createBrowserRouter} from "react-router-dom";
import {Root} from "./Root.jsx";

export const router = createBrowserRouter([
    {
        path: '*',
        Component: Root
    }
])