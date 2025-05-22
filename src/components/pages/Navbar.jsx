import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../index.css'; 

function Navbar({  }) {

  const [] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  

  useEffect(() => {
    const handleScroll = () => {
      
      const heroHeight = 500;
      
      if (window.scrollY > heroHeight || !isHomePage) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <header className={`default-header sticky ${isScrolled || !isHomePage ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-wrap">
          <div className="header-top d-flex justify-content-between align-items-center">
            
            <div className="logo flex items-center">
              <img src="/img-logo.jpg" alt="Shabach Ministries Logo" className="h-10 mr-3" />
              <h1 className="text-white font-bold shabach">SHABACH MINISTRIES</h1>
            </div>
            
           
            <div className="main-menubar d-flex align-items-center">
              <nav className="desktop-nav">
                <Link to="/">Home</Link>
                <Link to="/music">Music</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;