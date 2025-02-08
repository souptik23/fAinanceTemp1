import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Brain,
  ShieldAlert,
  Users,
  Languages,
  Trophy,
  LineChart,
  MessageSquare,
  Fingerprint,
} from "lucide-react";

// Color schemes for different types of color blindness
const colorSchemes = {
  default: {
    primary: "from-violet-600 to-purple-600",
    secondary: "bg-violet-800/30",
    text: "text-violet-200",
    hover: "hover:bg-violet-700/40",
    background: "bg-gradient-to-b from-gray-900 via-violet-950 to-purple-950",
    border: "border-violet-500/20",
    gradient: "from-violet-600/30 to-purple-600/30",
  },
  protanopia: {
    primary: "from-blue-600 to-teal-600",
    secondary: "bg-blue-800/30",
    text: "text-blue-200",
    hover: "hover:bg-blue-700/40",
    background: "bg-gradient-to-b from-gray-900 via-blue-950 to-teal-950",
    border: "border-blue-500/20",
    gradient: "from-blue-600/30 to-teal-600/30",
  },
  deuteranopia: {
    primary: "from-green-600 to-yellow-600",
    secondary: "bg-green-800/30",
    text: "text-green-200",
    hover: "hover:bg-green-700/40",
    background: "bg-gradient-to-b from-gray-900 via-green-950 to-yellow-950",
    border: "border-green-500/20",
    gradient: "from-green-600/30 to-yellow-600/30",
  },
  tritanopia: {
    primary: "from-pink-600 to-orange-600",
    secondary: "bg-pink-800/30",
    text: "text-pink-200",
    hover: "hover:bg-pink-700/40",
    background: "bg-gradient-to-b from-gray-900 via-pink-950 to-orange-950",
    border: "border-pink-500/20",
    gradient: "from-pink-600/30 to-orange-600/30",
  },
};

const LandingPage = () => {
  const [colorScheme, setColorScheme] = useState(colorSchemes.default);

  // Update the color scheme for the entire page
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-gradient",
      colorScheme.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-bg",
      colorScheme.secondary
    );
    document.documentElement.style.setProperty("--text-color", colorScheme.text);
    document.documentElement.style.setProperty("--hover-bg", colorScheme.hover);
    document.documentElement.style.setProperty(
      "--background-gradient",
      colorScheme.background
    );
    document.documentElement.style.setProperty("--border-color", colorScheme.border);
    document.documentElement.style.setProperty(
      "--gradient-overlay",
      colorScheme.gradient
    );
  }, [colorScheme]);

  const handleColorSchemeChange = (scheme) => {
    setColorScheme(colorSchemes[scheme]);
  };

  const features = [
    {
      title: "Explainable AI",
      description:
        "Transparent AI decision-making with detailed insights into system operations.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Fraud Detection",
      description: "Real-time fraud prevention using advanced AI algorithms.",
      icon: <ShieldAlert className="w-6 h-6" />,
    },
    {
      title: "Smart Recommendations",
      description: "Personalized financial advice powered by machine learning.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Multilingual Support",
      description:
        "Banking services in multiple languages for global accessibility.",
      icon: <Languages className="w-6 h-6" />,
    },
    {
      title: "Gamified Experience",
      description: "Earn rewards while managing your finances effectively.",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "Real-time Analytics",
      description: "Live tracking of your financial metrics and performance.",
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      title: "AI Chat Assistant",
      description: "24/7 intelligent support for all your banking needs.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Biometric Security",
      description: "Advanced security with fingerprint and face recognition.",
      icon: <Fingerprint className="w-6 h-6" />,
    },
  ];

  return (
    <div className={`min-h-screen ${colorScheme.background}`}>
      {/* Color Blindness Dropdown */}
      <div className="fixed top-4 right-4 z-50 mt-20">
        <select
          onChange={(e) => handleColorSchemeChange(e.target.value)}
          className="p-2 rounded-lg bg-violet-800/30 backdrop-blur-lg text-violet-200 border border-violet-500/20"
        >
          <option value="default">Default</option>
          <option value="protanopia">Protanopia</option>
          <option value="deuteranopia">Deuteranopia</option>
          <option value="tritanopia">Tritanopia</option>
        </select>
      </div>

      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Hero Section */}
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme.gradient} backdrop-blur-3xl`} />
        <div className="container mx-auto px-6 pt-32 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`flex items-center gap-2 ${colorScheme.secondary} backdrop-blur-lg w-fit px-4 py-2 rounded-full mb-6`}
              >
                <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                <span className={`${colorScheme.text} text-sm`}>
                  AI-Powered Banking Platform
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl font-bold text-white mb-6 leading-tight"
              >
                Transform Your Banking Experience with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  AI Intelligence
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`${colorScheme.text} text-lg mb-8`}
              >
                Experience the future of banking with our AI-driven solutions.
                Smart, secure, and perfectly tailored to your financial needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 bg-gradient-to-r ${colorScheme.primary} text-white`}
                >
                  Get Started <ChevronRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${colorScheme.secondary} ${colorScheme.text} ${colorScheme.hover}`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${colorScheme.text} mb-4`}>
            Cutting-Edge Features for Modern Banking
          </h2>
          <p className={`${colorScheme.text}/80 max-w-2xl mx-auto`}>
            Our AI-powered platform provides comprehensive tools for secure,
            efficient, and personalized banking experience.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-xl rounded-xl p-6 border ${colorScheme.border} hover:border-violet-400/50 transition-all cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="bg-violet-500/20 p-3 rounded-lg ring-2 ring-violet-500/20 group-hover:ring-violet-400/40 transition-all">
                  {feature.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${colorScheme.text} group-hover:text-violet-300 transition-colors`}>
                    {feature.title}
                  </h3>
                  <p className={`${colorScheme.text}/80 text-sm leading-relaxed`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className={`bg-violet-950/50 backdrop-blur-lg border-t ${colorScheme.border}`}>
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className={`text-2xl font-bold ${colorScheme.text} mb-4`}>
                fAInance
              </h3>
              <p className={`${colorScheme.text}/80`}>Transforming banking with AI</p>
            </div>
            {/* Footer Links */}
            <div>
              <h4 className={`text-lg font-semibold ${colorScheme.text} mb-4`}>
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className={`${colorScheme.text}/80 hover:text-violet-400`}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className={`${colorScheme.text}/80 hover:text-violet-400`}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className={`${colorScheme.text}/80 hover:text-violet-400`}>
                    Press
                  </a>
                </li>
              </ul>
            </div>
            {/* Add more footer sections as needed */}
          </div>
          <div className={`border-t ${colorScheme.border} mt-12 pt-8`}>
            <p className={`text-center ${colorScheme.text}/80`}>
              © 2025 fAInance™. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;