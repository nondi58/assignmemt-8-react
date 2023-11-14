import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Card from "../pages/Card/Card";

const myCreateRoute=createBrowserRouter([
    {
        path:'/',
        element:
        
            <MainLayout></MainLayout>,
            errorElement:<ErrorPage></ErrorPage>,
       
            
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/phones.json')
            },
            {
                path:'/favorites',
                element:<Favorites></Favorites>
            },
            {
                path:'/CardDonate/:id',
                element:<Card></Card>,
                loader:()=>fetch('/phones.json')
            }
           
            
        ]
    }
])

export default myCreateRoute;