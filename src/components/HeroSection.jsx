import HeroContent from './HeroContent';
import heroImage from '../assets/compra_eloy.png'; // Make sure to have this image in your assets folder

const HeroSection = () => {
  return (
    <section className="relative h-5/10-screen md:h-6/10-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;