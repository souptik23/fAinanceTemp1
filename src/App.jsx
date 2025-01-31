import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import FeatureSectionWithAI from "./components/Featuresectionwithai";
import ChatApp from "./components/Chatapp";
import Carousel from "./components/Carousel";
import LoanServicesSection from "./components/LoanServicesSection";
import CreditCardSection from "./components/CreditCardSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import AIBankingSection from "./components/AiBankingSection";

import MagnetLines from "./components/MagnetLines"; // Or "./components/MagnetLines.jsx" etc.
import SplashCursor from "./components/reactbits/SplashCursor";
import PixelCard from "./components/reactbits/PixelCard";
// import Hyperspeed from "./components/reactbits/Hyperspeed";
import InfiniteMenu from "./components/reactbits/InfiniteMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Herosection />
      <FeatureSectionWithAI />
      <ChatApp />
      <Carousel />
      <LoanServicesSection />
      <CreditCardSection />
      <AIBankingSection />

      <SplashCursor />
      <FAQSection />
      <Footer />
      <PixelCard />
      {/* <ReactBitsWaves /> */}
      {/* <Hyperspeed /> */}
      {/* <InfiniteMenu /> */}

    </div>
  );
}

export default App;
