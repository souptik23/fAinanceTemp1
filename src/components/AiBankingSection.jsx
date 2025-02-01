import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const AIBankingSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="text-gray-600 body-font bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/assets/circuit-pattern.png')] opacity-10 animate-pulse"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container px-5 py-24 mx-auto relative">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0" data-aos="fade-right">
            <h1 className="sm:text-4xl text-3xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                {t.nextGenAiBanking}
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded animate-pulse"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-300" data-aos="fade-left">
            Experience the future of banking with our AI-powered features. Smart analytics, personalized recommendations, and enhanced security - all in one place.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {/* AI Account Management */}
          <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <svg className="w-full h-full text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Smart Account Management</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">AI-powered insights and automated expense tracking for better financial control.</p>
            </div>
          </div>

          {/* AI Security */}
          <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <svg className="w-full h-full text-purple-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Enhanced Security</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Biometric authentication and AI fraud detection for maximum protection.</p>
            </div>
          </div>

          {/* AI Investment */}
          <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <svg className="w-full h-full text-green-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Smart Investments</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">AI-powered investment recommendations and portfolio management.</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 mb-4 relative">
                <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <svg className="w-full h-full text-pink-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">24/7 AI Support</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Instant assistance with our AI chatbot and virtual assistant.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBankingSection;