import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Public pages
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";

// Layouts
import MainLayout from "./layouts/MainLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

// Admin pages
import Dashboard from "./pages/admin/Dashboard.jsx";
import Members from "./pages/admin/Members.jsx";
// import Trainers from "./pages/admin/Trainers.jsx";
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
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>

        {/* Admin routes with sidebar layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="members" element={<Members />} />
          {/* <Route path="trainers" element={<Trainers />} />
          <Route path="event" element={<Event />} />
          <Route path="card" element={<CardReading />} />
          <Route path="food" element={<Food />} />
          <Route path="settings" element={<Settings />} />
          <Route path="videos" element={<Videos />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
