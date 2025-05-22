import React, { useState } from 'react';

function TestimonialsSection() {

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Church Member',
      image: '/assets/images/testimonials/person1.jpg',
      quote: 'The Shabach Ministries has been a blessing to my family. The worship experience is always uplifting and the community is so welcoming.'
    },
    {
      id: 2,
      name: 'Michael Williams',
      role: 'Worship Leader',
      image: '/assets/images/testimonials/person2.jpg',
      quote: 'Being part of this ministry has helped me grow spiritually and develop my musical gifts. I\'m grateful for the mentorship and opportunities to serve.'
    },
    {
      id: 3,
      name: 'Rebecca Thompson',
      role: 'Youth Member',
      image: '/assets/images/testimonials/person3.jpg',
      quote: 'The youth programs at Shabach Ministries have helped me stay connected to my faith during challenging times. I\'ve made lifelong friends here.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <h2>What People Say</h2>
      
      <div className="testimonial-slider">
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
          </div>
          <div className="testimonial-content">
            <p className="testimonial-quote">"{testimonials[activeIndex].quote}"</p>
            <div className="testimonial-author">
              <h4>{testimonials[activeIndex].name}</h4>
              <p>{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </div>
        
        <div className="testimonial-controls">
          <button onClick={prevTestimonial} className="testimonial-control prev">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`testimonial-indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
          <button onClick={nextTestimonial} className="testimonial-control next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;