import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import '../../index.css'; 

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || !isHomePage) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`default-header ${scrolled || !isHomePage ? 'scrolled non-home-header' : ''}`}>
      <div className="container">
        <div className="header-wrap">
          <div className="header-top">
            
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo.jpg" alt="Shabach Ministries Logo" />
                <h1 className="shabach">SHABACH MINISTRIES</h1>
              </Link>
            </div>
              
            <div className="main-menubar">
              <nav className="desktop-nav">
                <Link to="/">Home</Link>
                <Link to="/music">Music</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              
              <div className="menu-controls">

                
                <button className="menu-toggle" onClick={toggleMobileMenu}>
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMobileMenu}>Home</Link>
        <Link to="/about" onClick={closeMobileMenu}>About</Link>
        <Link to="/music" onClick={closeMobileMenu}>Music</Link>
        <Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link>
        <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
      </div>
    </header>
  );
}

export default Navbar;