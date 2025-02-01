import React, { useEffect, useState } from "react";
import BankBuildingScene from './BankBuildingScene'; // Ensure this component exists
import Crosshair from '../components/reactbits/Crosshair'; // Ensure this component exists
import './HeroSection.css'; // Import custom CSS for animations
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const HeroSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { language } = useLanguage();
  const t = translations[language];

  // Track cursor position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* <Crosshair /> */}
      {/* Cursor Glow Effect */}
      <div
        className="absolute w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
        style={{
          left: `${cursorPosition.x - 96}px`,
          top: `${cursorPosition.y - 96}px`,
        }}
      ></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-left">
            {/* Animated Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x cut-text">
                {t.nextGenBanking}
              </span>
              <span className="block mt-2 text-4xl slide-in-text">
                {t.poweredByAI}
              </span>
            </h1>

            {/* Animated Paragraph */}
            <p className="text-xl text-gray-300 mb-8 fade-in-text">
              {t.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                <span className="relative z-10 text-white font-medium">
                  {t.openAccount}
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                {t.watchDemo}
              </button>
            </div>
          </div>

          {/* Right Column - 3D Bank Building */}
          <div className="relative">
            <BankBuildingScene />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;