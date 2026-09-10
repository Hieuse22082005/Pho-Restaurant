// File: src/App.tsx

import React from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import Reviews from "./components/Reviews";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";

// TẠO KHỐI HIỆU ỨNG TRƯỢT LÊN (SCROLL REVEAL)
const RevealWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ 
        once: false, // Để 'false' thì lướt XUỐNG hay lướt LÊN đều sẽ có hiệu ứng hiện ra
        margin: "-100px" 
      }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-full" style={{ background: "#f5f0e8", color: "#2c1a0e" }}>
      {/* Navbar và Hero luôn hiện đầu tiên nên không cần bọc hiệu ứng */}
      <Navbar />
      <Hero />
      
      {/* Bọc toàn bộ các phần bên dưới vào hộp hiệu ứng */}
      <RevealWrapper>
        <BestSellers />
      </RevealWrapper>

      <RevealWrapper>
        <About />
      </RevealWrapper>

      <RevealWrapper>
        <MenuSection />
      </RevealWrapper>

      <RevealWrapper>
        <VideoSection />
      </RevealWrapper>

      <RevealWrapper>
        <Reviews />
      </RevealWrapper>

      <RevealWrapper>
        <Reservation />
      </RevealWrapper>

      <RevealWrapper>
        <Footer />
      </RevealWrapper>
    </div>
  );
}