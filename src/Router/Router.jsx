import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";

const myCreateRoute=createBrowserRouter([
    {
        path:'/',
        element:
        
            <MainLayout></MainLayout>
       
            ,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/favorites',
                element:<Favorites></Favorites>
            }
            
        ]
    }
])

export default myCreateRoute;