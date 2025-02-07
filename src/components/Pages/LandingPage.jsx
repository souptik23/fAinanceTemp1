import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom";
// import SplineSceneCoin from "../Elements/SplineSceneCoin";
// import SplineSceneCoin from "../Elements/SplineSceneCoin";

import React from "react";
import {
  ChevronRight,
  Shield,
  Users,
  Lightbulb,
  PieChart,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import SplineScene from "../Elements/SplineScene";

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all cursor-pointer"
  >
    <div className="flex items-start gap-4">
      <div className="bg-purple-500/10 p-3 rounded-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, content, avatarUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
  >
    <p className="text-gray-300 mb-4">"{content}"</p>
    <div className="flex items-center gap-3">
      <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full" />
      <div>
        <h4 className="font-medium text-white">{name}</h4>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900/90 via-purple-900/90 to-indigo-900/90">
      {/* Hero Section */}
      {/* <SplineSceneCoin /> */}
      {/* <ErrorBoundary>
        <SplineSceneCoin />
      </ErrorBoundary> */}

      <div
        className="container mx-auto px-6 pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://source.unsplash.com/1600x900/?banking,finance')`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-lg w-fit px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span className="text-purple-400 text-sm">
                AI-Powered Banking Platform
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Unlock Your Business Potential with Xenon Bank 🚀
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Experience the future of banking with our AI-driven solutions.
              Smart, secure, and tailored to your needs.
            </p>
            <div className="flex gap-4">
              <Link
                to="/signup" // Specify the route to navigate to
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors flex items-center gap-2"
              >
                Get Started <ChevronRight className="w-4 h-4" />
              </Link>
              <button className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empower Your Business with Our Cutting-Edge Features
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive tools for bias
            detection, transparent decision-making, and personalized financial
            guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Bias Detection & Mitigation"
            description="Advanced AI algorithms to detect and prevent biases in financial decisions, ensuring fair treatment for all customers."
            icon={<Shield className="w-6 h-6 text-purple-400" />}
          />
          <FeatureCard
            title="Explainable AI System"
            description="Transparent decision-making process with detailed explanations for all AI-driven financial recommendations."
            icon={<Lightbulb className="w-6 h-6 text-purple-400" />}
          />
          <FeatureCard
            title="Personalized Financial Advice"
            description="AI-powered insights and recommendations tailored to your unique financial situation and goals."
            icon={<Users className="w-6 h-6 text-purple-400" />}
          />
          <FeatureCard
            title="Advanced Analytics Dashboard"
            description="Comprehensive analytics and reporting tools to track your financial health and progress."
            icon={<PieChart className="w-6 h-6 text-purple-400" />}
          />
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Positive Social Impact
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their financial
            operations with our platform. 👏
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            name="Sarah Chen"
            role="Small Business Owner"
            content="The AI-driven insights have completely transformed how I manage my business finances. 💻"
            avatarUrl="https://i.pravatar.cc/40?img=1"
          />
          <TestimonialCard
            name="James Wilson"
            role="Startup Founder"
            content="The transparent decision-making process has made banking much more accessible and trustworthy. 📊"
            avatarUrl="https://i.pravatar.cc/40?img=2"
          />
          <TestimonialCard
            name="Maria Garcia"
            role="Finance Director"
            content="The bias detection features ensure fair treatment for all our customers. It's revolutionary. 🌟"
            avatarUrl="https://i.pravatar.cc/40?img=3"
          />
        </div>
      </div>

      {/* Awards Section */}
      <div className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-12 items-center">
          <img
            src="https://picsum.photos/120/60?random=1"
            alt="Award 1"
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://picsum.photos/120/60?random=2"
            alt="Award 2"
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://picsum.photos/120/60?random=3"
            alt="Award 3"
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://picsum.photos/120/60?random=4"
            alt="Award 4"
            className="opacity-50 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      {/* Additional Section - Customer Support */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            24/7 Customer Support
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're here to help you every step of the way. Reach out anytime! 📞
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Live Chat Support"
            description="Get instant assistance through our live chat support system."
            icon={<ArrowRight className="w-6 h-6 text-purple-400" />}
          />
          <FeatureCard
            title="Email Support"
            description="Send us an email and we'll get back to you as soon as possible."
            icon={<ArrowRight className="w-6 h-6 text-purple-400" />}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
