import React, { useRef, useState, useEffect } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isBlogsPage = location.pathname === '/blogs';
  const isSupportPage = location.pathname === '/support';

  const navbarClass = `navbar ${
    isBlogsPage || isSupportPage
      ? 'scrolled translucent'
      : scrolled
      ? 'scrolled solid'
      : ''
  }`;

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Collapse search when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Collapse dropdown when clicked outside
  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideDropdown);
    return () => document.removeEventListener('mousedown', handleClickOutsideDropdown);
  }, []);

  const handleUserClick = () => {
    navigate('/profile');
  };

  return (
    <nav className={navbarClass}>
      <div className="logo">H . E . A . R</div>

      <ul className="nav-links">
        <li><a href="/#">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/support">Support</a></li>
        <li><a href="/hearingtest">Take a Hearing Test</a></li>
      </ul>

      <div className="nav-icons">
        <div
          className={`search-container ${searchActive ? 'active' : ''}`}
          ref={searchRef}
          onClick={() => setSearchActive(true)}
        >
          <Search className="icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search hearing aids"
          />
        </div>

        <ShoppingCart className="icon" />

        <div
          className="user-container"
          onMouseEnter={() => setDropdownVisible(true)}
          ref={dropdownRef}
        >
          <User className="custicon" onClick={handleUserClick} />
          {dropdownVisible && (
            <div
              className="user-dropdown"
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <p className="dropdown-header">Welcome, Janani</p>
              <ul>
                <li><a href="/login">Signup / Login</a></li>
                <li><a href="/profile">My Profile</a></li>
                <li><a href="/wishlist">My Wishlist</a></li>
                <li><a href="/orders">Track My Orders</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
