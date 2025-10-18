
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Admin from './pages/admin/Admin.jsx';
import MainLayout from './layouts/MainLayout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with the main Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>

        {/* Admin route with its own layout */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
