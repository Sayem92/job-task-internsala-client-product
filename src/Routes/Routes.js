import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../components/AddProduct/AddProducts";
import Home from "../components/Home/Home";
import ShowProducts from "../components/ShowProducts/ShowProducts";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/showProducts',
                element: <ShowProducts></ShowProducts>
            },
        ]
        }
    ])