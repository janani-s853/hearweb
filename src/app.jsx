import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Blogs from "./components/blogs";
import Support from "./components/support";
import Profile from "./components/profile";
import Login from "./components/login";
import AboutUs from "./components/about";
import HearingTest from "./components/hearingtest";
import Chatbot from "./components/Chatbot"; 
import Hero2 from "./components/hero2"; 
import Timeline from "./components/timeline"; 
import Footer from "./components/footer"; 

import "./App.css";

const AppContent = () => {
  const location = useLocation();

  // ✅ Pages where you want black navbar
  const blackNavbarPages = ["/about", "/support", "/profile"];
  const isBlackNavbar = blackNavbarPages.includes(location.pathname);

  const hideExtras = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app-container">
      {!hideExtras && <Navbar darkBackground={isBlackNavbar} />}
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/hearingtest" element={<HearingTest />} />
        <Route path="/hero2" element={<Hero2 />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>

      {!hideExtras && <Chatbot />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
