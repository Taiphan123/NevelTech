import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import ButtonSection from "./components/ButtonSection";
import GameSlide from "./components/GameSlide";
import AllProviders from "./components/AllProviders";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full bg-main text-white">
      {/* Header */}
      <Header />
      {/* Banner Section */}
      <BannerSection />
      {/* Buttons Section */}
      <ButtonSection />
      {/* Exclusive Games */}
      <GameSlide />
      {/* Providers */}
      <AllProviders />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
