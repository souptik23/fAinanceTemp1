import React, { useState, useEffect, useRef } from 'react';

const offers = [
  {
    title: 'Premium Banking Package',
    description: 'Experience luxury banking with exclusive benefits',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
    buttonText: 'Get Started',
  },
  {
    title: 'Digital Savings Account',
    description: '6.5% interest rate with zero maintenance fees',
    image: 'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg',
    buttonText: 'Save Now',
  },
  {
    title: 'Student Special Account',
    description: 'Free banking with educational benefits',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
    buttonText: 'Learn More',
  },
  {
    title: 'Business Solutions',
    description: 'Comprehensive banking for your enterprise',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    buttonText: 'Partner With Us',
  },
  {
    title: 'Smart Investments',
    description: 'Grow your wealth with expert guidance',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
    buttonText: 'Invest Now',
  },
  {
    title: 'Mobile Banking',
    description: 'Banking at your fingertips 24/7',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    buttonText: 'Download App',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  return (
    <div id="offers-carousel" className="relative w-full bg-gradient-to-br from-slate-900 to-purple-900 p-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="animate-spin-slow absolute -top-24 -left-24 w-48 h-48 text-purple-500/20" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
          </svg>
          <svg className="animate-pulse absolute top-1/2 right-12 w-32 h-32 text-blue-500/20" viewBox="0 0 100 100">
            <path d="M50 0 L100 87 L0 87 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative h-[32rem] overflow-hidden rounded-2xl">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? 'block' : 'hidden'
            } duration-700 ease-in-out absolute inset-0`}
            data-carousel-item
          >
            <div className="absolute inset-0 flex items-center justify-between p-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
              <div className="w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-white">{offer.title}</h2>
                <p className="text-xl text-gray-200">{offer.description}</p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                  {offer.buttonText}
                </button>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src={offer.image} alt={offer.title} className="w-96 h-96 object-contain animate-float" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all"
        onClick={handlePrev}
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 -translate-y-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all"
        onClick={handleNext}
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;