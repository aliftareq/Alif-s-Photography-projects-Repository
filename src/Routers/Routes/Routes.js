import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/AboutMePage/AboutMe/AboutMe";
import AddService from "../../Pages/AddServicePage/AddService/AddService";
import Login from "../../Pages/AuthentcationPage/Login/Login";
import Register from "../../Pages/AuthentcationPage/Register/Register";
import Blog from "../../Pages/BlogPage/Blog/Blog";
import Errorpage from "../../Pages/ErrorPage/Errorpage";
import Home from "../../Pages/HomePage/Home/Home";
import MyReviews from "../../Pages/MyReviewsPage/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServicesPage/ServiceDetails/ServiceDetails";
import Services from "../../Pages/ServicesPage/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/add-service',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
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