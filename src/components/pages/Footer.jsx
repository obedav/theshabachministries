import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>SHABACH MINISTRIES</h2>
          <p>Spreading the gospel through music and worship</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Navigate</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/music">Music</a></li>
             
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links-column">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://instagram.com" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://youtube.com" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="https://twitter.com" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-column">
            <h3>Subscribe</h3>
            <form className="subscribe-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
            <div className="footer-verse">
              <p>"Make a joyful noise unto the LORD, all the earth: make a loud noise, and rejoice, and sing praise."</p>
              <span>Psalm 98:4</span>
            </div>
        <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shabach Ministries. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;