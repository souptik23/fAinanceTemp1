import React from 'react';
import Herosection from "../Herosection";
import FeatureSectionWithAI from "../Featuresectionwithai";
import ChatApp from "../Chatapp";
import LoanServicesSection from "../LoanServicesSection";
import CreditCardSection from "../CreditCardSection";
import AIBankingSection from "../AiBankingSection";
import FAQSection from "../FAQSection";
import Footer from "../Footer";
import Squares from "../reactbits/Squares";
import "./HomePage.css"; // Import component-specific CSS

function Home() {
  return (
    <>
      {/* <ClickSpark /> */}
      <Herosection />
      <FeatureSectionWithAI />
      <ChatApp />
      {/* <Carousel /> */}
      <LoanServicesSection />
      <CreditCardSection />
      <AIBankingSection />
      <FAQSection />
      <Footer />
      <Squares />
    </>
  );
}

export default Home;