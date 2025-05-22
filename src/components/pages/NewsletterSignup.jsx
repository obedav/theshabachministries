import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    
 
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Stay Connected</h2>
        <p>Subscribe to our newsletter to receive updates on new music releases, upcoming events, and ministry news.</p>
        
        {submitted ? (
          <div className="success-message">
            <i className="fas fa-check-circle"></i>
            <p>Thank you for subscribing! You'll receive our updates soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                required 
              />
              <button type="submit" className="primary-button">Subscribe</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default NewsletterSignup;