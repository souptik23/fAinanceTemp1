import React from "react";
import AIBankingSection from "../AiBankingSection";
import ChatApp from "../Chatapp";
import CreditCardSection from "../CreditCardSection";
import FAQSection from "../FAQSection";
import FeatureSectionWithAI from "../Featuresectionwithai";
import Herosection from "../Herosection";
import LoanServicesSection from "../LoanServicesSection";
import "./HomePage.css";

function Home() {
  return (
    <>
      <Herosection />
      <FeatureSectionWithAI />
      <ChatApp />
      <LoanServicesSection />
      <CreditCardSection />
      <AIBankingSection />
      <FAQSection />
    </>
  );
}

export default Home;