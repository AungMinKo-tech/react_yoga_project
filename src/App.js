import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Public pages
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";

import BookAppointment from "./pages/BookAppointment.jsx";
import UserPaymentForm from "./pages/UserPaymentForm.jsx";

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
import OurProgram from "./pages/OurProgram.jsx";
import Service from "./pages/Service.jsx";
import Blog from "./pages/Blog.jsx";
// import Footer from '';
// import Program from '';
// import ContactUs from '';
// import Login from '';
// import Register from '';

// Admin pages
import Dashboard from "./pages/admin/Dashboard.jsx";
import Members from "./pages/admin/Members.jsx";
// import Trainers from "./pages/admin/Trainers.jsx";
import AddNewMember from "./pages/admin/Trainers.jsx";
import AddNewTrainer from "./pages/admin/AddNewTrainer.jsx";
import CreateDetoxFood from "./pages/admin/detox-food/CreateDetoxFood.jsx";
import ViewDetoxFood from "./pages/admin/detox-food/ViewDetoxFood.jsx";
import ListDetoxFood from "./pages/admin/detox-food/ListDetoxFood.jsx";
import TrainersList from "./pages/admin/TrainersList.jsx";
import TrainerDetail from "./pages/admin/TrainerDetail.jsx";
import VideoUpload from "./pages/admin/VideoUpload.jsx";
import AppointmentList from "./pages/admin/AppointmentList.jsx";
import AdminPaymentList from "./pages/admin/AdminPaymentList.jsx";
// import CardReading from "./pages/admin/CardReading.jsx";
// import Food from "./pages/admin/Food.jsx";
// import Settings from "./pages/admin/Settings.jsx";
// import Videos from "./pages/admin/Videos.jsx";
// // User Pages
// import UserDashboard from './#';
import UserProfile from "./pages/UserProfile.jsx";
import TrainerVideos from "./pages/admin/TrainerVideos.jsx";
// import UserRegisterForm './#r';

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
        {/* Public routes with main layout (Navbar and Footer) */}
        {/* Routes with the main Navbar and Footer */}
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

        {/* Admin routes with sidebar layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="members" element={<Members />} />
          <Route path="trainers" element={<AddNewTrainer />} />
          <Route path="settings" element={<AddNewMember />} />

          <Route path="event" element={<TrainersList />} />
          <Route path="trainers/:id" element={<TrainerDetail />} />
          <Route path="trainers/:id/videos" element={<TrainerVideos />} />
          <Route path="videos/upload" element={<VideoUpload />} />
          <Route path="appointments" element={<AppointmentList />} />
          <Route path="payments" element={<AdminPaymentList />} />
          {/* <Route path="card" element={<CardReading />} /> */}
          {/* <Route path="food" element={<Food />} /> */}
          <Route path="detox-food">
            <Route path="create" element={<CreateDetoxFood />} />
            <Route path="view/:item_id" element={<ViewDetoxFood />} />
            <Route path=":user_id/lists" element={<ListDetoxFood />} />
          </Route>
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
