import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMePage/AboutMe/AboutMe";
import Login from "../../Pages/AuthentcationPage/Login/Login";
import Register from "../../Pages/AuthentcationPage/Register/Register";
import Blog from "../../Pages/BlogPage/Blog/Blog";
import Errorpage from "../../Pages/ErrorPage/Errorpage";
import Home from "../../Pages/HomePage/Home/Home";

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
                path: '/about-me',
                element: <AboutMe></AboutMe>
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