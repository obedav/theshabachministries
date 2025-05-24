import React, { useState } from 'react';
import '../css/gallery.css';

function Gallery() {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // This would typically come from a database or CMS
  const galleryImages = [
    { id: 1, src: '/assets/images/worship.png', alt: 'Worship service', category: 'worship' },
    { id: 2, src: '/assets/images/worship1.JPG', alt: 'Worship service', category: 'worship' },
    { id: 3, src: '/assets/images/choir.png', alt: 'Choir performance', category: 'music' },
    { id: 4, src: '/assets/images/choir2.jpg', alt: 'Solo performance', category: 'music' },
    { id: 5, src: '/assets/images/studio1.jpg', alt: 'Studio Event', category: 'studio' },
    { id: 6, src: '/assets/images/studio2.jpg', alt: 'Studio Event', category: 'studio' },
    { id: 7, src: '/assets/images/praise.png', alt: 'Praise and worship', category: 'worship' },
    { id: 8, src: '/assets/images/praise1.JPG', alt: 'Praise and worship', category: 'music' },
    { id: 9, src: '/assets/images/praise2.jpg', alt: 'Praise and worship', category: 'studio' },
    // Add more images as needed
  ];

  // Filter images based on active filter
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  // Handle filter button click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>Moments captured during our events</p>
      </div>
      
      <div className="gallery-filters">
        <button 
          className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
        </button>
        <button 
          className={`filter-button ${activeFilter === 'worship' ? 'active' : ''}`}
          onClick={() => handleFilterClick('worship')}
        >
          Worship
        </button>
        <button 
          className={`filter-button ${activeFilter === 'studio' ? 'active' : ''}`}
          onClick={() => handleFilterClick('studio')}
        >
          Studio
        </button>
        <button 
          className={`filter-button ${activeFilter === 'music' ? 'active' : ''}`}
          onClick={() => handleFilterClick('music')}
        >
          Music
        </button>
      </div>
      
      <div className="gallery-grid">
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <div key={image.id} className={`gallery-item ${image.category}`}>
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h3>{image.alt}</h3>
                  <p className="category-tag">{image.category.charAt(0).toUpperCase() + image.category.slice(1)}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-images">
            <p>No images found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Filter results summary */}
      <div className="filter-summary">
        <p>
          Showing {filteredImages.length} of {galleryImages.length} images
          {activeFilter !== 'all' && ` in "${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}" category`}
        </p>
      </div>
    </div>
  );
}

export default Gallery;