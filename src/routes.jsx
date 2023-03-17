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
        "element": <div>Not found</div>
    }
]

export default routes