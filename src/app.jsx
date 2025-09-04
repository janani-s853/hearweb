// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductsPage from "./components/products";
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
import HearingInfo from "./components/HearingInfo";

import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const hideExtras = location.pathname === "/login" || location.pathname === "/signup";

  // NEW LOGIC STARTS HERE
  // List of old pages that have their own footer inside their component file.
  const pagesWithOwnFooter = [
    "/",
    "/blogs",
    "/support",
    "/profile",
    "/about",
    "/hero2",
    "/timeline",
     "/products" 
  ];

  // This will be true if the current page is in the list above.
  const shouldHideMainFooter = pagesWithOwnFooter.includes(location.pathname);
  // NEW LOGIC ENDS HERE

  return (
    <div className="app-container">
      {!hideExtras && <Navbar />}

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
        <Route path="/hearinginfo" element={<HearingInfo />} />
        <Route path="/products" element={<ProductsPage />} /> {/* ✅ Add this */}

      </Routes>

      {!hideExtras && <Chatbot />}

      {/* MODIFIED: The main footer will now only appear if we are NOT on a page that has its own footer. */}
      {!hideExtras && !shouldHideMainFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
