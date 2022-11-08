import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddServicePage/AddService/AddService";
import Login from "../../Pages/AuthentcationPage/Login/Login";
import Register from "../../Pages/AuthentcationPage/Register/Register";
import Blog from "../../Pages/BlogPage/Blog/Blog";
import Errorpage from "../../Pages/ErrorPage/Errorpage";
import Home from "../../Pages/HomePage/Home/Home";
import Menu from "../../Pages/MenuPage/Menu/Menu";
import MyReviews from "../../Pages/MyReviewsPage/MyReviews/MyReviews";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Errorpage></Errorpage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home> </Home>
            },
            {
                path: '/my-reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            {
                path: '/menus',
                element: <Menu></Menu>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])