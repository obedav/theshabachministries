import React from 'react';
import { Link } from 'react-router-dom';

function GospelGatherings() {
  // Vision categories for future ministry events
  const ministryVisions = [
    {
      id: 1,
      title: "Worship Encounters",
      scripture: "John 4:24",
      scriptureText: "God is spirit, and those who worship him must worship in spirit and truth.",
      description: "Intimate gatherings for Spirit-led worship, creating space for authentic encounters with God through music and prayer.",
      icon: "pray",
      comingSoon: "Summer 2025"
    },
    {
      id: 2,
      title: "Gospel Outreach Concerts",
      scripture: "Mark 16:15",
      scriptureText: "Go into all the world and proclaim the gospel to the whole creation.",
      description: "Taking the message of Christ beyond church walls through music that reaches hearts in public spaces.",
      icon: "music",
      comingSoon: "Fall 2025"
    },
    {
      id: 3,
      title: "Worship Training School",
      scripture: "Psalm 33:3",
      scriptureText: "Sing to him a new song; play skillfully on the strings, with loud shouts.",
      description: "Equipping worshippers with both spiritual foundations and musical excellence to serve the body of Christ.",
      icon: "school",
      comingSoon: "Winter 2025"
    },
    {
      id: 4,
      title: "Healing Worship Nights",
      scripture: "Psalm 107:20",
      scriptureText: "He sent out his word and healed them, and delivered them from their destruction.",
      description: "Creating an atmosphere where God's healing presence is welcomed through worship, prayer, and the Word.",
      icon: "healing",
      comingSoon: "Spring 2026"
    }
  ];

  return (
    <section className="future-gatherings-section">
      <div className="vision-header">
        <div className="vision-scripture">
          <p>"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."</p>
          <span>- Jeremiah 29:11</span>
        </div>
        
        <h1>The Vision Ahead</h1>
        <div className="vision-divider">
          <div className="oil-lamp">
            <i className="fas fa-fire-alt"></i>
          </div>
        </div>
        <p className="vision-subtitle">Upcoming Ministry Through Music</p>
      </div>
      
      <div className="announcement-banner">
        <div className="announcement-content">
          <i className="fas fa-bell"></i>
          <p>God is preparing something beautiful. Join our mailing list to be notified when these events are scheduled!</p>
          <button className="notify-btn">Stay Updated</button>
        </div>
      </div>
      
      <div className="ministry-vision-container">
        {ministryVisions.map(vision => (
          <div key={vision.id} className="ministry-vision-card">
            <div className="vision-icon-container">
              {vision.icon === "pray" && <i className="fas fa-hands"></i>}
              {vision.icon === "music" && <i className="fas fa-music"></i>}
              {vision.icon === "school" && <i className="fas fa-book-open"></i>}
              {vision.icon === "healing" && <i className="fas fa-heart"></i>}
            </div>
            
            <div className="vision-content">
              <h3 className="vision-title">{vision.title}</h3>
              
              <div className="vision-scripture-box">
                <p>"{vision.scriptureText}"</p>
                <span>{vision.scripture}</span>
              </div>
              
              <p className="vision-description">{vision.description}</p>
              
              <div className="vision-timeline">
                <div className="coming-soon-tag">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Anticipated: {vision.comingSoon}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="prayer-request-section">
        <div className="prayer-content">
          <h3>Partner With Us In Prayer</h3>
          <p>As we prepare to launch these ministries, we invite you to join us in prayer for God's guidance, provision, and anointing.</p>
          
          <div className="prayer-points">
            <div className="prayer-point">
              <i className="fas fa-pray"></i>
              <span>For open doors to share the Gospel through music</span>
            </div>
            <div className="prayer-point">
              <i className="fas fa-pray"></i>
              <span>For anointed worship leaders and musicians</span>
            </div>
            <div className="prayer-point">
              <i className="fas fa-pray"></i>
              <span>For hearts to be transformed through worship</span>
            </div>
          </div>
          
          <div className="involvement-options">
            <Link to="/contact" className="involvement-btn">
              Join Worship Team
            </Link>
            <Link to="/contact" className="involvement-btn">
              Support The Vision
            </Link>
          </div>
        </div>
      </div>
      
      <div className="contact-pastor-section">
        <div className="pastor-card">
          <div className="pastor-image">
            <img src="src/assets/images/pastor_img.jpg" alt="Worship Pastor" />
          </div>
          <div className="pastor-info">
            <h3>Have Questions About Our Future Events?</h3>
            <p>Our worship pastor would love to share more about the vision God has placed on our hearts.</p>
            <a href="mailto:worship@shabachministries.com" className="contact-btn">
              <i className="fas fa-envelope"></i> Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GospelGatherings;