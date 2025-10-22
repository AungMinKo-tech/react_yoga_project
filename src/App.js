
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import AccountTemplate from "./pages/AccountCreation/AccountTemplate.jsx";
import Login from "./pages/AccountCreation/Login.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Register from "./pages/AccountCreation/Register.jsx";
import CreateNewPassword from "./pages/AccountCreation/CreateNewPassword.jsx";
import ForgotPassword from "./pages/AccountCreation/ForgotPassword.jsx";
import OTPVerificcation from "./pages/AccountCreation/OTPVerificcation.jsx";
// import Footer from '';
// import Program from '';
// import ContactUs from '';
// import Login from '';
// import Register from '';

// // User Pages
// import UserDashboard from './#';
// import UserProfile from './#';
// import UserRegisterfrom './#r';

// // Admin Pages
// import AdminDashboard from '#';
// import UserManagement from '#';
// import AdminSettings from '#';

// // Simple auth check (real app >> backend >> check )
// const isAuthenticated = true;
// const isAdmin = true;

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with the main Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
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

