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

export const publicRoutes = (
    <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/payment" element={<UserPaymentForm />} />
        <Route path="/programs" element={<OurProgram />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
    </Route>
);

