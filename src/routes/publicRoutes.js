import React from "react";
import { Route } from "react-router-dom";

//Layout
import MainLayout from "../layouts/MainLayout.jsx";

//Pages
import Home from "../pages/Home.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import BookAppointment from "../pages/BookAppointment.jsx";
import UserPaymentForm from "../pages/UserPaymentForm.jsx";
import OurProgram from "../pages/OurProgram.jsx";
import Service from "../pages/Service.jsx";
import Blog from "../pages/Blog.jsx";


import UserProfile from "../pages/UserProfile.jsx";

/* Public routes with main layout (Navbar and Footer) */
/* Routes with the main Navbar and Footer */

// const withMainLayout = (Component) =>{ 
//     return (
//         <MainLayout>
//             <Component />
//         </MainLayout>);
// }

export const publicRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "/profile",
        element: <UserProfile />
    },
    {
        path: "/book-appointment",
        element: <BookAppointment />
    },
    {
        path: "/payment",
        element: <UserPaymentForm />
    },
    {
        path: "/programs",
        element: <OurProgram />
    },
    {
        path: "/services",
        element: <Service />
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/logout",
        element: <Home />
    }
];
