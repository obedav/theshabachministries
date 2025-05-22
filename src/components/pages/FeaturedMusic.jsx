import React, { useState } from 'react';

function FeaturedMusic() {
  const [activeAudio, setActiveAudio] = useState(null);
  
  const featuredSongs = [
  {
      id: 3,
      title: "Anchor",
      scripture: "Revelation 5:12",
      coverImage: "src/assets/images/anchor.jpg",
      audioUrl: "src/assets/audio/anchor.mp3"
    },

    {
      id: 1,
      title: "I am Greatful Lord",
      scripture: "Ephesians 2:8-9",
      coverImage: "src/assets/images/grateful-1.jpeg",
      audioUrl: "src/assets/audio/grateful.mp3"
    },
    {
      id: 2,
      title: "You're Worthy",
      scripture: "Psalm 100:4",
      coverImage: "src/assets/images/grateful.jpg",
      audioUrl: "src/assets/audio/you're-worthy.mp3"
    }
  
  ];
  
  const handlePlay = (songId) => {
    setActiveAudio(activeAudio === songId ? null : songId);
  };

  return (
    <section className="featured-music-section">
      <div className="section-heading">
        <h2>Featured Worship</h2>
        <div className="scripture-decoration">
          <span className="line"></span>
          <span className="cross-icon">✝</span>
          <span className="line"></span>
        </div>
        <p className="section-subheading">Songs of Praise and Devotion</p>
      </div>
      
      <div className="music-container">
        {featuredSongs.map(song => (
          <div key={song.id} className="gospel-music-card">
            <div className="music-card-wrapper">
              <div className="album-image-container">
                <img 
                  src={song.coverImage} 
                  alt={`${song.title} cover`} 
                  className="album-image"
                />
                <div className="album-glow"></div>
              </div>
              
              <div className="album-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-scripture">{song.scripture}</p>
                
                <button 
                  className={`worship-play-button ${activeAudio === song.id ? 'playing' : ''}`} 
                  onClick={() => handlePlay(song.id)}
                >
                  {activeAudio === song.id ? (
                    <><span className="pause-icon"></span> Pause</>
                  ) : (
                    <><span className="play-icon"></span> Listen</>
                  )}
                </button>
                
                {activeAudio === song.id && (
                  <audio 
                    src={song.audioUrl} 
                    autoPlay 
                    className="audio-player"
                    controls
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="worship-view-all">
        <a href="/music" className="worship-view-link">
          <span>Explore All Worship</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default FeaturedMusic;