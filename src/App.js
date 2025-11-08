import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Public pages
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";

// Layouts
import MainLayout from "./layouts/MainLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import AccountTemplate from "./pages/AccountCreation/AccountTemplate.jsx";
import Login from "./pages/AccountCreation/Login.jsx";
import Register from "./pages/AccountCreation/Register.jsx";
import CreateNewPassword from "./pages/AccountCreation/CreateNewPassword.jsx";
import ForgotPassword from "./pages/AccountCreation/ForgotPassword.jsx";
import OTPVerificcation from "./pages/AccountCreation/OTPVerificcation.jsx";
// import Footer from '';
// import Program from '';
// import ContactUs from '';
// import Login from '';
// import Register from '';

// Admin pages
import Dashboard from "./pages/admin/Dashboard.jsx";
import Members from "./pages/admin/Members.jsx";
import Trainers from "./pages/admin/Trainers.jsx";
import AddNewMember from "./pages/admin/Trainers.jsx";
import AddNewTrainer from "./pages/admin/AddNewTrainer.jsx";
// import Event from "./pages/admin/Event.jsx";
// import CardReading from "./pages/admin/CardReading.jsx";
// import Food from "./pages/admin/Food.jsx";
// import Settings from "./pages/admin/Settings.jsx";
// import Videos from "./pages/admin/Videos.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with main layout (Navbar and Footer) */}
        {/* Routes with the main Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>

        {/* Admin routes with sidebar layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="members" element={<Members />} />
          <Route path="trainers" element={<AddNewTrainer />} />
          {/* <Route path="event" element={<Event />} />  */}
          {/* <Route path="card" element={<CardReading />} /> */}
          {/* <Route path="food" element={<Food />} /> */}
          <Route path="settings" element={<AddNewMember />} />
          {/* <Route path="videos" element={<Videos />} />  */}
        </Route>
        {/* Routes for Account Creation */}
        <Route path="" element={<AccountTemplate />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<OTPVerificcation />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
