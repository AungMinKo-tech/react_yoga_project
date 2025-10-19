
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';   

import Home from './components/Home.jsx';        
import AboutUs from './components/AboutUs.jsx';  
import Navbar from './components/Navbar.jsx';
import OurProgram from './components/OurProgram.jsx';
import Service from './components/Service.jsx'; 
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
      <div className="App">
        <Navbar /> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<OurProgram />} />
          <Route path="/services" element={<Service />} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;

