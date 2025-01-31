import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
    <header className="fixed w-full bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-md shadow-lg z-50 overflow-hidden">
      {/* Cursor Glow Effect */}
      <div
        className="absolute w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
        style={{
          left: `${cursorPosition.x - 96}px`, // Center the glow around the cursor
          top: `${cursorPosition.y - 96}px`,
          opacity: mobileMenuOpen ? 0 : 1, // Hide glow when mobile menu is open
        }}
      ></div>

      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center space-x-4">
            <div className="relative w-10 sm:w-12 h-10 sm:h-12 floating">
              <img
                src="ai-bank-logo.png"
                alt="BankBandhu"
                className="h-full w-full object-contain transition-transform hover:scale-110 duration-300 ai-glow"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -inset-2 bg-purple-500/10 rounded-full blur-xl animate-spin-slow"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-105 transition-transform duration-300">
                BankBandhu
              </span>
              <span className="text-xs sm:text-sm text-gray-300 animate-pulse">AI-Powered Banking</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              className="text-gray-300 hover:text-purple-400 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {[
                { name: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" },
                { name: "Features", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477" },
                { name: "AI Banking", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18", new: true },
                { name: "Support", icon: "M18.364 5.636l-3.536 3.536" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="nav-link group relative text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    {item.name}
                    {item.new && (
                      <span className="ml-1 px-2 py-0.5 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full animate-pulse">
                        New
                      </span>
                    )}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-2 pt-2 pb-3 space-y-1">
            {["Home", "Features", "AI Banking", "Support"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-md transition-all duration-300 transform hover:translate-x-2"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;