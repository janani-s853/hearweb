import React, { useRef, useState, useEffect } from 'react';
import { Search, ShoppingCart, User, UserCircle, ArrowRightToLine, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth <= 1155);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileName, setProfileName] = useState("");

  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  const alwaysBlackPages = ['/products', '/hearingtest', '/profile', '/blogs', '/support','/consultation'];

  useEffect(() => {
    if (!alwaysBlackPages.includes(pathname)) {
      const handleScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => setShowHamburger(window.innerWidth <= 1155);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const storedName = localStorage.getItem("profileName");
    if (storedName) {
      setProfileName(storedName);
    } else {
      setProfileName("Guest User");
    }
  }, []);

  const handleUserClick = () => navigate('/profile');

  const navbarClass = `navbar ${alwaysBlackPages.includes(pathname) || scrolled ? 'scrolled solid' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="logo">H . E . A . R</div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        {/* Show X only on mobile and only when sidebar is open */}
        {showHamburger && menuOpen && (
          <X className="sidebar-close-button" onClick={() => setMenuOpen(false)} />
        )}

        <li><Link to="/">Home</Link></li>
        {showHamburger && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/hearinginfo">Take a Hearing Test</Link></li>
        <li><Link to="/consultation">Consultation</Link></li>
      </ul>

      <div className="nav-icons">
        <div
          className={`hamburger ${menuOpen ? 'active hidden' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

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
            autoFocus={searchActive}
          />
        </div>

        <ShoppingCart className="icon" />

        {!showHamburger && (
          <div
            className="user-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <User className="custicon" onClick={handleUserClick} />

            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <div className="dropdown-header">
                <p className="welcome">Welcome,</p>
                <p className="profile-name">{profileName}</p>
              </div>
              <div className="dropdown-links">
                <Link to="/profile">
                  <UserCircle size={16} />
                  <span>My Account</span>
                </Link>
                <Link to="/login">
                  <ArrowRightToLine size={16} />
                  <span>Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;