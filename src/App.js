import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import OurProgram from './pages/OurProgram.jsx';
import Service from './pages/Service.jsx';
import Blog from './pages/Blog.jsx';

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
      <div className="App">
        <Navbar /> {/* Navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<OurProgram />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer /> {/* Footer */}
      </div>
    </Router>
  );
}

export default App;