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
import UpdateReview from "../../Pages/MyReviewsPage/UpdateReview/UpdateReview";
import ServiceDetails from "../../Pages/ServicesPage/ServiceDetails/ServiceDetails";
import Services from "../../Pages/ServicesPage/Services/Services";
import LoadingRoute from "../LoadingRoute/LoadingRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Errorpage></Errorpage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <LoadingRoute><Home> </Home></LoadingRoute>
            },
            {
                path: '/services',
                element: <LoadingRoute><Services></Services></LoadingRoute>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://alif-photography-serverside-aliftareq.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/updateReview/:id',
                loader: ({ params }) => fetch(`https://alif-photography-serverside-aliftareq.vercel.app/review/${params.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('User-Token')}`
                    }
                }),
                element: <PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>
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