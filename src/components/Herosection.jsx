import React from "react";
import '@google/model-viewer/dist/model-viewer';


const Herosection = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/assets/circuit-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0" id="particles-js"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80"></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-left" data-aos="fade-right">
            {/* AI Animation */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform animate-pulse"></div>
              <model-viewer
                src="/assets/ai-brain.glb"
                auto-rotate
                camera-controls
                className="w-64 h-64 mx-auto floating"
                style={{ "--poster-color": "transparent" }}
              ></model-viewer>
            </div>

            {/* Animated Headline */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x">
                Next-Gen Banking
              </span>
              <span className="block mt-2 text-4xl">Powered by Advanced AI</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Experience the future of banking with our AI-driven solutions that provide personalized insights, enhanced security, and seamless transactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                <span className="relative z-10 text-white font-medium">Open AI Account</span>
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;