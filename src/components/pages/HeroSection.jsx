function HeroSection() {
  return (
    <section className="banner-area" id="home">
      <div className="container">
        <div className="row fullscreen align-items-center justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h1 className="text-uppercase text-white">SHABACH & PRAISE</h1>
              <p className="text-uppercase mx-auto">
                SANMI IMANUEL
              </p>
              <div className="d-flex justify-content-center mt-4">
                <a href="/music" className="primary-btn">
                  <span>Listen Now</span>
                </a>
                <a href="/events" className="primary-btn ml-4">
                  <span>Upcoming Events</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;