import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

import ScrollToTop from "./components/ScrollToTop.jsx";
import { AppRoutes } from "./routes/appRoutes.js";


function App() {
  return (
    <Router>
      <ScrollToTop behavior="smooth" />
      <AppRoutes />
    </Router>
  );
}

export default App;
