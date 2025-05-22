import HeroSection from './HeroSection';
import FeaturedMusic from './FeaturedMusic';
import UpcomingEvents from './GospelGatherings';


function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedMusic />
      <UpcomingEvents />
      
      
    </div>
  );
}

export default Home;