import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaSearch, FaTimes, FaCar, FaPlay } from 'react-icons/fa';
import logo from '../Asserts/logo.webp';
import user_icon from '../Asserts/user-icon.png';
import './navber.css';
import Login from '../Login/login';
import Register from '../Register/register';

const Navbar = ({ showLoginModal, showRegisterModal }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState({ Pages: false, Electric: false });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const [popupAnimation, setPopupAnimation] = useState('');
  const dropdownRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowMobileDropdown({ Pages: false, Electric: false });
  };

  const toggleMobileDropdown = (key) => {
    setShowMobileDropdown(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handlePopupClose = () => {
    setPopupAnimation('closing');
    setTimeout(() => {
      setShowPopup(false);
    }, 500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto close popup after 10 seconds if user doesn't interact
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        handlePopupClose();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);



  

  return (
    <>
      {/* Loading Popup */}
      {showPopup && (
        <div className={`loading-popup-overlay ${popupAnimation}`}>
          <div className={`loading-popup-container ${popupAnimation}`}>
            <div className="popup-close-btn" onClick={handlePopupClose}>
              <FaTimes />
            </div>
            
            <div className="popup-content">
              <div className="popup-logo">
                <img src={logo} alt="BMW Logo" />
                <FaCar className="car-icon" />
              </div>
              
              <h1 className="popup-title">Welcome to BMW World</h1>
              <p className="popup-subtitle">Experience the Ultimate Driving Machine</p>
              
              <div className="popup-features">
                <div className="feature-item">
                  <span className="feature-icon">🚗</span>
                  <span>Premium Vehicles</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Electric Innovation</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🛠️</span>
                  <span>Expert Service</span>
                </div>
              </div>
              
              <button className="popup-enter-btn" onClick={handlePopupClose}>
                <FaPlay />
                Enter Experience
              </button>
              
              <div className="popup-loader">
                <div className="loader-bar"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <header>
        <nav className="navbar">
          <div className="nav-left">
            <div className="logo">
              <a href="#home">
                <img src={logo} alt="BMW Logo" />
              </a>
            </div>

            <ul className="nav-links">
              <li><a className="nav-btn" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a className="nav-btn" href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a className="nav-btn" href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li className="dropdown" onMouseEnter={() => setActiveDropdown('Pages')} onMouseLeave={() => setActiveDropdown(null)}>
                <span className="nav-btn" onClick={() => handleDropdown('Pages')}>Pages <FaChevronDown /></span>
                {activeDropdown === 'Pages' && (
                  <ul className="dropdown-menu">
                    <li><a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Booking</a></li>
                    <li><a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>Reviews</a></li>
                    <li><a href="#models" onClick={(e) => { e.preventDefault(); scrollToSection('models'); }}>Models</a></li>
                  </ul>
                )}
              </li>
              <li className="dropdown" onMouseEnter={() => setActiveDropdown('Electric')} onMouseLeave={() => setActiveDropdown(null)}>
                <span className="nav-btn" onClick={() => handleDropdown('Electric')}>Electric <FaChevronDown /></span>
                {activeDropdown === 'Electric' && (
                  <ul className="dropdown-menu">
                    <li><a href="#electric" onClick={(e) => { e.preventDefault(); scrollToSection('electric'); }}>BMW Electric Cars</a></li>
                    <li><a href="#hybrid" onClick={(e) => { e.preventDefault(); scrollToSection('hybrid'); }}>BMW Plug-in-Hybrid</a></li>
                  </ul>
                )}
              </li>
              <li><a className="nav-btn" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </div>

          <div className="nav-right">
            <div className="search-container">
              {/* <input type="text" placeholder="Search..." />
              <FaSearch className="search-icon" /> */}
            </div>

            <div className="user-menu">
              <button className="user-btn" onClick={toggleUserMenu}>
                  <button type="button" class="button">
  <span class="fold"></span>

  <div class="points_wrapper">
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
  </div>

  <span class="inner"
    ><svg
      class="icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.5"
    >
      <polyline
        points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
      ></polyline></svg
    >Login</span
  >
</button>
              </button>
              {showUserMenu && (
                <div className="user-dropdown">
                  <button onClick={() => { showLoginModal(); setShowUserMenu(false); }}>Login</button>
                  <button onClick={() => { showRegisterModal(); setShowUserMenu(false); }}>Register</button>
                </div>
              )}
            </div>

            <div className="burger" onClick={toggleMobileMenu}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </nav>

        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <img src={logo} alt="BMW Logo" />
            <FaTimes onClick={closeMobileMenu} className="close-menu" />
          </div>

          <div className="mobile-search">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>

          <div className="mobile-nav-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>

            <div className="mobile-dropdown">
              <button onClick={() => toggleMobileDropdown('Pages')}>Pages {showMobileDropdown.Pages ? <FaChevronUp /> : <FaChevronDown />}</button>
              {showMobileDropdown.Pages && (
                <div className="dropdown-menu">
                  <a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Booking</a>
                  <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>Reviews</a>
                  <a href="#models" onClick={(e) => { e.preventDefault(); scrollToSection('models'); }}>Models</a>
                </div>
              )}
            </div>

            <div className="mobile-dropdown">
              <button onClick={() => toggleMobileDropdown('Electric')}>Electric {showMobileDropdown.Electric ? <FaChevronUp /> : <FaChevronDown />}</button>
              {showMobileDropdown.Electric && (
                <div className="dropdown-menu">
                  <a href="#electric" onClick={(e) => { e.preventDefault(); scrollToSection('electric'); }}>BMW Electric Cars</a>
                  <a href="#hybrid" onClick={(e) => { e.preventDefault(); scrollToSection('hybrid'); }}>BMW Plug-in-Hybrid</a>
                </div>
              )}
            </div>

            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </div>

          <div className="mobile-user-menu">
            <button onClick={() => { showLoginModal(); closeMobileMenu(); }}>Login</button>
            <button onClick={() => { showRegisterModal(); closeMobileMenu(); }}>Register</button>
          </div>
        </div>

        {mobileMenuOpen && <div className="overlay" onClick={closeMobileMenu}></div>}
      </header>
    </>
  );
};

export default Navbar;