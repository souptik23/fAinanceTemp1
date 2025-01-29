import React, { useEffect, useState } from 'react';

const CreditCardSection = () => {
    const [cardHolderName, setCardHolderName] = useState('CARD HOLDER NAME');
    const [cardType, setCardType] = useState('premium');
    const [cardBackground, setCardBackground] = useState('');
    const [cardTypeDisplay, setCardTypeDisplay] = useState('Premium Rewards Card');
    const [customUploadVisible, setCustomUploadVisible] = useState(false);

    const styles = {
        premium: {
            background: 'bg-gradient-to-r from-yellow-600 to-yellow-400',
            text: 'Premium Rewards Card',
            image: null
        },
        anime: {
            background: 'bg-gradient-to-r from-pink-600 to-purple-400',
            text: 'Anime Collection Card',
            image: '/assets/anime-theme.jpg'
        },
        cars: {
            background: 'bg-gradient-to-r from-red-600 to-orange-400',
            text: 'Sports Cars Edition',
            image: '/assets/sports-car.jpg'
        },
        nature: {
            background: 'bg-gradient-to-r from-green-600 to-emerald-400',
            text: 'Nature Series Card',
            image: '/assets/nature.jpg'
        },
        custom: {
            background: 'bg-gradient-to-r from-blue-600 to-purple-600',
            text: 'Custom Design Card',
            image: null
        }
    };

    useEffect(() => {
        updateCardStyle(cardType);
    }, [cardType]);

    const updateCardStyle = (selectedCardType) => {
        setCardType(selectedCardType);
        setCardTypeDisplay(styles[selectedCardType].text);
        setCustomUploadVisible(selectedCardType === 'custom');

        if (styles[selectedCardType].image) {
            setCardBackground(`url('${styles[selectedCardType].image}')`);
        } else {
            setCardBackground('');
        }
    };

    const handleCustomImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setCardBackground(`url('${e.target.result}')`);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[url('/assets/circuit-pattern.png')] opacity-10 animate-slide-diagonal"></div>
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <div className="relative" data-aos="fade-right">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Design Your Perfect 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                    Credit Card
                                </span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">Create a personalized credit card that matches your style. Choose from exclusive designs or upload your own image to make it truly unique.</p>
                            
                            {/* Floating Card Preview with Smooth Flip Effect */}
                            <div className="relative w-96 h-56 mx-auto lg:mx-0 [perspective:1000px] group">
                                <div className={`absolute w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]`}>
                                    {/* Front of Card */}
                                    <div className={`absolute w-full h-full rounded-2xl shadow-2xl [backface-visibility:hidden]`} id="cardFront">
                                        <div className={`h-full w-full absolute inset-0 rounded-2xl bg-cover bg-center opacity-50 transition-opacity duration-300`} style={{ backgroundImage: cardBackground }}></div>
                                        <div className="h-full p-6 flex flex-col justify-between relative">
                                            <div className="flex justify-between items-start">
                                                <div className="w-12 h-12">
                                                    <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                                                    </svg>
                                                </div>
                                                <div className="w-12 h-12 animate-pulse">
                                                    <svg className="w-full h-full text-white/80" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="text-white space-y-4">
                                                <div className="text-xl font-mono">**** **** **** 1234</div>
                                                <div className="flex justify-between">
                                                    <span>{cardHolderName}</span>
                                                    <span>MM/YY</span>
                                                </div>
                                                <div className="text-sm font-medium">{cardTypeDisplay}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back of Card */}
                                    <div className="absolute w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <div className="h-full flex flex-col justify-between p-6">
                                            <div className="w-full h-12 bg-black/50 mt-4"></div>
                                            <div className="flex flex-col items-end space-y-2">
                                                <div className="w-full h-8 bg-white/10 rounded flex items-center justify-end px-4">
                                                    <span className="text-white font-mono">***</span>
                                                </div>
                                                <div className="text-xs text-gray-400 italic">
                                                    This card is property of NextGen Bank
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full lg:w-1/2 lg:pl-12" data-aos="fade-left">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        onChange={(e) => setCardHolderName(e.target.value || 'CARD HOLDER NAME')}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors" 
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors" 
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-2">Card Theme</label>
                                    <select 
                                        onChange={(e) => updateCardStyle(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-colors"
                                    >
                                        <option value="premium">Classic Premium</option>
                                        <option value="anime">Anime Collection</option>
                                        <option value="cars">Sports Cars</option>
                                        <option value="nature">Nature Series</option>
                                        <option value="custom">Custom Design</option>
                                    </select>
                                </div>

                                {/* Custom Image Upload */}
                                {customUploadVisible && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">Upload Custom Image</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-lg hover:border-purple-500 transition-colors">
                                            <div className="space-y-1 text-center">
                                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <div className="flex text-sm text-gray-400">
                                                    <label className="relative cursor-pointer rounded-md font-medium text-purple-500 hover:text-purple-400">
                                                        <span>Upload a file</span>
                                                        <input 
                                                            type="file" 
                                                            className="sr-only" 
                                                            onChange={handleCustomImage}
                                                        />
                                                    </label>
                                                </div>
                                                <p className="text-xs text-gray-400">PNG, JPG up to 2MB</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <button className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all transform hover:scale-105">
                                    Create My Card
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreditCardSection;