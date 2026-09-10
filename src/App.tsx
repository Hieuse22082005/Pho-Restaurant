// File: src/App.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import Reviews from "./components/Reviews";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";
export default function App() {
  return (
    <div className="min-h-full" style={{ background: "#f5f0e8", color: "#2c1a0e" }}>
      <Navbar />
      <Hero />
      <BestSellers />
      <About />
      <MenuSection />
      <VideoSection />
      <Reviews />
      <Reservation />
      <Footer />
    </div>
  );
}