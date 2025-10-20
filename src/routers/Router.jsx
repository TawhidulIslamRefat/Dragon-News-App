import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Category from "../Pages/Category/Category";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";



const router = createBrowserRouter(
    [
        {
            path:'/',
            Component:HomeLayout,
            children:[
                {
                    path:'/',
                    Component:Home

                },
                {
                    path:'/category/:id',
                    Component:Category,
                    loader:() => fetch('/news.json')

                },
            ]
        },
        {
            path:'/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:'/auth/login',
                    Component:Login
                },
                {
                    path:'/auth/register',
                    Component:Register
                }
            ]
        },
        {
            path:'/news',
            element:<h2>News Layout</h2>
        },
    
        {
            path:'/*',
            element:<h2>Error - 404 </h2>
        },
    ]
)

export default router;