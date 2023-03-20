import { Navigate } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"

const routes = [
    {   
        "type": "route",
        "key": "home",
        "label": "Home",
        "path": "/",
        "element": <HomePage />
    },
    {
        "type": "hidden",
        "key": "notfound",
        "label": "",
        "path": "*",
        "element": <Navigate to='/' />
    }
]

export default routes