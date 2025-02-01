import { Routes, Route } from "react-router-dom";

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
import ClickSpark from "./components/reactbits/ClickSpark";
import Waves from "./components/reactbits/Waves";
import Squares from "./components/reactbits/Squares";

import LoginPage from "./components/Pages/LoginPage"; // Ensure this path is correct
import SignupPage from "./components/Pages/SignupPage"; // Ensure this path is correct
import "./App.css";
import "./index.css";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/"
          element={
            <>
              <ClickSpark />
              <Herosection />
              <FeatureSectionWithAI />
              <ChatApp />
              <Carousel />
              <LoanServicesSection />
              <CreditCardSection />
              <AIBankingSection />
              <FAQSection />
              <Footer />
              <Squares />
              
              {/* <Waves /> */}
              {/* <LineDataset /> */}
              {/* <VariableProximity /> */}

            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App; 