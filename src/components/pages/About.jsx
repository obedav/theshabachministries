import React from 'react';
import '../css/about.css';


function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About The Shabach Ministries</h1>
        <p>Our mission, vision, and journey</p>
      </div>
      
<section className="about-section">
  <div className="about-content">
    <div className="about-column">
      <div className="about-text">
        <h2>Our Story</h2>
        <p>
          Shabach Ministries was founded in 2024 with a heartfelt desire to create a Christ-centered community where lives are transformed through worship, teaching, and service. What began as a small gathering of believers has grown into a vibrant ministry that reaches individuals and families both within our city and beyond its borders.
        </p>
        <p>
          The name “Shabach” comes from the Hebrew word meaning “to praise loudly” or “to commend with joy.” It reflects our deep commitment to expressive, Spirit-led worship that honors God without hesitation. Our worship is not just a part of our gatherings—it’s the heartbeat of who we are.
        </p>
        <p>
          Our mission is rooted in Psalm 145:4 — “One generation shall praise (shâbach) Your works to another, and shall declare Your mighty acts.” We believe in raising up generations of believers who boldly proclaim the goodness of God and serve with compassion, unity, and purpose.
        </p>
      </div>
      <div className="about-image">
        <img src="/assets/images/about.jpg" alt="Our church history" />
      </div>
    </div>
  </div>
</section>


      
      <section className="mission-vision-section">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To create an atmosphere of worship where people can encounter God, 
            experience transformation, and be equipped to serve their community with the love of Christ.
          </p>
        </div>
        <div className="vision-box">
          <h2>Our Vision</h2>
          <p>
            To be a beacon of hope and worship excellence, raising up worshippers who will impact 
            their generation through authentic praise and dedicated service.
          </p>
        </div>
      </section>
      
<section className="testimony-section">
  <h2>My Worship Journey</h2>
  <p>
    I didn’t just choose music—God chose me to use music as a vessel for His glory. 
    From humble beginnings singing in church, to writing original songs that speak to the soul, 
    every step of my journey has been marked by God's grace.
  </p>
  <p>
    Through seasons of joy, struggle, and breakthrough, I’ve learned that worship isn’t just a sound—it’s a lifestyle. 
    It’s the way I live, serve, and honor Jesus in everything I do.
  </p>
  <p>
    As I continue to grow in faith and music, I remain committed to using my voice to lift up the name of Jesus 
    and reach hearts around the world.
  </p>
</section>

      
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-church"></i>
            </div>
            <h3>Authentic Worship</h3>
            <p>We believe in creating space for genuine, heartfelt worship experiences.</p>
          </div>
          
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <h3>Biblical Teaching</h3>
            <p>We are committed to sound, relevant teaching from God's Word.</p>
          </div>
          
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Community</h3>
            <p>We foster meaningful relationships and support one another in love.</p>
          </div>
          
          <div className="value-item">
            <div className="value-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h3>Service</h3>
            <p>We believe in actively serving our community and those in need.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;