import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-md shadow-lg z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src="ai-bank-logo.png" alt="BankBandhu" className="w-12 h-12 object-contain" />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            BankBandhu
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {[
            { name: "Home", link: "/" },
            { name: "Features", link: "/features" },
            { name: "AI Banking", link: "/ai-banking" },
            { name: "Support", link: "/support" },
            { name: "Login", link: "/login" }, // ✅ Ensure correct path
            { name: "Signup", link: "/signup" }
          ].map((item, index) => (
            <Link key={index} to={item.link} onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 p-4">
            {[
              { name: "Home", link: "/" },
              { name: "Features", link: "/features" },
              { name: "AI Banking", link: "/ai-banking" },
              { name: "Support", link: "/support" },
              { name: "Login", link: "/login" }, // ✅ Mobile menu corrected,
              { name: "Signup", link: "/signup" } // ✅ Mobile menu corrected
            ].map((item, index) => (
              <Link key={index} to={item.link} onClick={() => setMobileMenuOpen(false)}
                className="block text-white py-2 hover:text-purple-400">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
