import React, { useState, useRef, useEffect } from 'react';
import '../css/music.css';

function Music() {
  const [activePreview, setActivePreview] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressTimerRef = useRef(null);
  

 
  const musicTracks = [
    {
      id: 1,
      title: "I am Grateful Lord",
      artist: "Sanmi Imanuel",
      description: "A powerful worship anthem celebrating God's glory and majesty. This song invites listeners into a deeper experience of praise.",
      duration: "5:08",
      thumbnail: "/assets/images/grateful-1.jpeg",
      previewSrc: "/assets/audio/grateful1.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=HoupHL__C_w"
    },
    {
      id: 2,
      title: "Anchor",
      artist: "Sanmi Imanuel",
      description: "A powerful song refer the Jesus the author and the finisher of our faith. Features dynamic vocals and powerful instrumentation.",
      duration: "4:01",
      thumbnail: "/assets/images/anchor.jpg",
      previewSrc: "/assets/audio/anchor.mp4",
      youtubeUrl: "https://www.youtube.com/watch?v=mG26IahtN7Y"
    },
    {
      id: 3,
      title: "Baba oo (My Father)",
      artist: "Sanmi Imanuel",
      description: "A powerful song refer the Jesus the author and the finisher of our faith. Features dynamic vocals and powerful instrumentation.",
      duration: "5:34",
      thumbnail: "/assets/images/babaoo.jpeg",
      previewSrc: "/assets/audio/babaoo1.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=LakdfuoEk10"
    },
    {
      id: 4,
      title: "You're Worthy To Be Praised",
      artist: "Sanmi Imanuel",
      description: "A testimony of God's faithfulness through life's challenges. This moving song reminds us that God is always by our side.",
      duration: "4:17",
      thumbnail: "/assets/images/grateful.jpg",
      previewSrc: "/assets/audio/You're_worthy.mp3",
      youtubeUrl: "https://www.youtube.com/watch?v=8WDK7PU8ryA"
    }
  ];

  const ministryOpportunities = [
    {
      id: 1,
      title: "Vocalists",
      icon: "fa-microphone",
      description: "Join our team of worship leaders and background vocalists to lead the congregation in praise."
    },
    {
      id: 2,
      title: "Musicians",
      icon: "fa-guitar",
      description: "We welcome skilled keyboardists, guitarists, drummers, and other instrumentalists."
    },
    {
      id: 3,
      title: "Production",
      icon: "fa-sliders-h",
      description: "Help with sound engineering, video production, and live streaming of our worship services."
    },
    {
      id: 4,
      title: "Songwriting",
      icon: "fa-music",
      description: "Contribute your creativity to developing original worship music for our ministry."
    }
  ];


  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, []);


  const handlePreview = (trackId) => {
  
    if (activePreview === trackId) {
      togglePlayPause();
      return;
    }
    
   
    if (audioRef.current) {
      audioRef.current.pause();
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    }
    
    setActivePreview(trackId);
    setIsPlaying(true);
    setProgress(0);
    
   
    const selectedTrack = musicTracks.find(track => track.id === trackId);
    if (!selectedTrack) return;
    
 
    const audio = new Audio(selectedTrack.previewSrc);
    audioRef.current = audio;
    

    audio.addEventListener('loadedmetadata', () => {
      audio.play().catch(err => {
        console.error("Error playing audio:", err);
        setIsPlaying(false);
      });
    });
    
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    });
    
    audio.addEventListener('error', (e) => {
      console.error("Audio error:", e);
      setIsPlaying(false);
      alert(`Error loading audio file: ${selectedTrack.previewSrc}. Please check the file path.`);
    });
    
  
    progressTimerRef.current = setInterval(() => {
      if (audio && !audio.paused) {
      
        const currentProgress = (audio.currentTime / audio.duration) * 100;
        setProgress(currentProgress);
      }
    }, 1000);
  };


  const togglePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Error playing audio:", err);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

 
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };


  const currentTrack = activePreview ? musicTracks.find(track => track.id === activePreview) : null;

  return (
    <div className="music-page">
      <div className="page-header">
        <h1>Our Music</h1>
        <p>Experience the worship and praise from Shabach Ministries. Listen to preview clips and follow the links to enjoy the full songs on YouTube.</p>
      </div>
      
      <div className="music-categories">
        <button className="category-button active">All</button>
        <button className="category-button">Worship</button>
        <button className="category-button">Praise</button>
        <button className="category-button">Gospel</button>
        <button className="category-button">Instrumental</button>
      </div>
      
      <div className="music-list">
        {musicTracks.map(track => (
          <div key={track.id} className="music-track">
            <div className="track-thumbnail">
              <img src={track.thumbnail} alt={track.title} />
              <div className="play-overlay">
                <button onClick={() => handlePreview(track.id)}>
                  <i className={`fas ${activePreview === track.id && isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>
              </div>
            </div>
            
            <div className="track-info">
              <h3 className="track-title">{track.title}</h3>
              <p className="track-artist">{track.artist}</p>
              <p className="track-description">{track.description}</p>
              
              <div className="track-actions">
                <button 
                  className="preview-button" 
                  onClick={() => handlePreview(track.id)}
                >
                  <i className={`fas ${activePreview === track.id && isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                  {activePreview === track.id && isPlaying ? 'Pause Preview' : 'Play Preview'}
                </button>
                
                <a href={track.youtubeUrl} target="_blank" rel="noopener noreferrer" className="youtube-button">
                  <i className="fab fa-youtube"></i>
                  Watch on YouTube
                </a>
                
                <div className="duration-badge">
                  <i className="fas fa-clock"></i>
                  {track.duration}
                </div>
              </div>
              
              {activePreview === track.id && (
                <div className="preview-player">
                  <div className="preview-player-controls">
                    <button onClick={togglePlayPause}>
                      <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                    </button>
                  </div>
                  
                  <div className="preview-progress">
                    <div className="preview-title">Preview: {track.title}</div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="preview-time">
                      {audioRef.current && (
                        <>
                          <span>{formatTime(audioRef.current.currentTime)}</span>
                          <span>{formatTime(audioRef.current.duration || 0)}</span>
                        </>
                      )}
                      {!audioRef.current && (
                        <>
                          <span>0:00</span>
                          <span>1:00</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="preview-message">
                    <i className="fas fa-info-circle"></i>
                    Preview limited to 1 minute. Visit YouTube for the full song.
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
    
      <div className="join-music-ministry">
        <div className="ministry-content">
          <div className="ministry-text">
            <h2>Join Our Music Ministry</h2>
            <p>
              Are you passionate about worship and music? Shabach Ministries is always looking for 
              talented individuals who want to use their gifts to glorify God and inspire others.
            </p>
            
            <div className="ministry-quote">
              <p>"Make a joyful noise unto the Lord, all the earth: make a loud noise, and rejoice, and sing praise."</p>
              <span>— Psalm 98:4</span>
            </div>
            
            <p>
              Whether you're a vocalist, musician, sound engineer, or have other musical talents, 
              we invite you to prayerfully consider joining our worship team. No previous professional 
              experience is required—just a heart for worship and a willingness to serve.
            </p>
            
            <a href="/contact" className="join-button">
              <i className="fas fa-music mr-2"></i> Get Involved
            </a>
          </div>
          
          <div className="ministry-image">
            <img src="/assets/images/studio1.jpg" alt="Worship Team" />
          </div>
        </div>
        
        <div className="ministry-opportunities">
          <h3>Opportunities to Serve</h3>
          <div className="opportunity-list">
            {ministryOpportunities.map(opportunity => (
              <div key={opportunity.id} className="opportunity-item">
                <div className="opportunity-icon">
                  <i className={`fas ${opportunity.icon}`}></i>
                </div>
                <h4>{opportunity.title}</h4>
                <p>{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;