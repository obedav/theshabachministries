import React, { useState } from 'react';
import '../css/contact.css';
import '../../index.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          
          
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <p>(929) 609-0225</p>
            
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>info@shabachministries.org</p>
            <p>support@shabachministries.org</p>
          </div>
          
         
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="primary-button">Send Message</button>
          </form>
        </div>
      </div>
      
      
      
      {/* Replaced FAQ with Community Section */}
      <section className="community-section">
        <h2>Join Our Community</h2>
        <div className="community-content">
          <p>
            Become part of our vibrant worship community! We invite you to connect with us 
            and experience the love, fellowship, and spiritual growth that defines The Shabach Ministries.
          </p>
          
          <div className="scripture-decoration">
            <div className="line"></div>
            <div className="cross-icon"><i className="fas fa-cross"></i></div>
            <div className="line"></div>
          </div>
          
          <p>
            "And let us consider how we may spur one another on toward love and good deeds, 
            not giving up meeting together, as some are in the habit of doing, 
            but encouraging one another." <span>— Hebrews 10:24-25</span>
          </p>
          
          <div className="community-buttons">
            <a href="#" className="community-btn filled">
              <i className="fas fa-calendar-alt"></i> Attend our Event
            </a>
            <a href="#" className="community-btn">
              <i className="fas fa-hands-helping"></i> Volunteer with Us
            </a>
            <a href="#" className="community-btn">
              <i className="fas fa-user-plus"></i> Join the Praise Team
            </a>
          </div>
          
          <div className="connect-icons">
            <a href="#" className="connect-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="connect-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="connect-icon">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="connect-icon">
              <i className="fab fa-spotify"></i>
            </a>
            <a href="#" className="connect-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;