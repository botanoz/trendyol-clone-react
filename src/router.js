import ProductDetail from "./pages/ProductDetail";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("./layouts/Layout");
const { default: Home } = require("./pages/Home");
const { default: NotFound } = require("./pages/NotFound");

const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/product-detail",
            element:<ProductDetail/>
        }
    ]
},
{
    path:"*",
    element:<NotFound/>
}
])

export default router
