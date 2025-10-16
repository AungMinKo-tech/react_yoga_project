// import React from 'react';
// import Home from './components/Home';
// import './index.css';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Home from "./components/Home.jsx";
// import AboutUs from './components/AboutUs.jsx';
// import "./index.css"; // Optional, သင် Tailwind အကုန်သုံးမယ်ဆိုရင် ဖယ်လို့ရတယ်

// function App() {
//   return <Home />;
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';        // ✅ .jsx ထည့်ပြီ
import AboutUs from './components/AboutUs.jsx';  // ✅ .jsx ထည့်ပြီ
import Navbar from './components/Navbar.jsx';    // ✅ .jsx ထည့်ပြီ (ရှိရင်)

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* ရှိရင်ပဲ */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;