import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Category from "../Pages/Category/Category";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../Components/Loading/Loading";



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
                    loader:() => fetch('/news.json'),
                    hydrateFallbackElement:<Loading></Loading>
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
            path:'/news-details/:id',
            element:<PrivetRoute>
                <NewsDetails></NewsDetails>
            </PrivetRoute>,
            loader:() => fetch('/news.json'),
            hydrateFallbackElement:<Loading></Loading>
        },
    
        {
            path:'/*',
            element:<h2>Error - 404 </h2>
        },
    ]
)

export default router;