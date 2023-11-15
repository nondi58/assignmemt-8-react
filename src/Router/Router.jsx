import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Card from "../pages/Card/Card";
import Donation from "../pages/Donation/Donation";

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
                path:'/donation',
                element:<Donation></Donation>
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