


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';        
import AboutUs from './components/AboutUs.jsx';  
import Navbar from './components/Navbar.jsx';    

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
