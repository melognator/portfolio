import ContactPage from "./pages/Contact/ContactPage"
import HomePage from "./pages/Home/HomePage"

const routes = [
    {   
        "type": "route",
        "key": "home",
        "label": "Home",
        "icon": "fa-solid fa-house",
        "path": "/",
        "element": <HomePage />
    },
    {   
        "type": "route",
        "key": "contact",
        "label": "Contact me",
        "icon": "fa-solid fa-address-book",
        "path": "/contact",
        "element": <ContactPage />
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