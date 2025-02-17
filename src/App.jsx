import AiHeroSection from "./components/AiHeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import SuccessStories from "./components/SuccessStories";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AiHeroSection />
      <ServicesSection />
      <FeaturesSection />
      <SuccessStories />
    </>
  );
}

export default App;
