import React from 'react';
import '../css/gallery.css';

function Gallery() {
  // This would typically come from a database or CMS
  const galleryImages = [
    { id: 1, src: 'src/assets/images/worship.png', alt: 'Worship service', category: 'worship' },

    { id: 3, src: 'src/assets/images/choir.png', alt: 'Choir performance', category: 'music' },
    { id: 4, src: 'src/assets/images/studio1.jpg', alt: 'Studio Event', category: 'events' },

    { id: 5, src: 'src/assets/images/praise.png', alt: 'Praise and worship', category: 'worship' },





    // Add more images as needed
  ];

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>Moments captured during our events</p>
      </div>
      
      <div className="gallery-filters">
        <button className="filter-button active">All</button>
        <button className="filter-button">Worship</button>
        <button className="filter-button">Studio</button>
        <button className="filter-button">Music</button>
        
      </div>
      
      <div className="gallery-grid">
        {galleryImages.map(image => (
          <div key={image.id} className={`gallery-item ${image.category}`}>
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <div className="gallery-info">
                <h3>{image.alt}</h3>
                <p>{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;