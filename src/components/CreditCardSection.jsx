import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

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
            background: null,  // Using 3D model instead
            text: 'Sports Cars Edition',
            image: null
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
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <div className="relative">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Design Your Perfect 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                                    Credit Card
                                </span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Create a personalized credit card that matches your style. Choose from exclusive designs or upload your own image.
                            </p>
                            
                            {/* Conditional Rendering for 3D or 2D Card */}
                            {(true) ? (
                                <div className="w-96 h-56 mx-auto">
                                    <Canvas camera={{ position: [0, 0, 4] }}>
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.5} />
                                        <directionalLight position={[2, 2, 5]} intensity={1} />
                                        <CreditCard3D />
                                    </Canvas>
                                </div>
                            ) : (
                                <div className="relative w-96 h-56 mx-auto bg-cover bg-center rounded-2xl shadow-2xl" 
                                    style={{ backgroundImage: cardBackground ? cardBackground : undefined }}
                                >
                                    <div className="absolute inset-0 bg-black/30 rounded-2xl flex flex-col justify-end p-4 text-white">
                                        <div className="text-xl font-mono">**** **** **** 1234</div>
                                        <div className="flex justify-between">
                                            <span>{cardHolderName}</span>
                                            <span>MM/YY</span>
                                        </div>
                                        <div className="text-sm font-medium">{cardTypeDisplay}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:pl-12">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        onChange={(e) => setCardHolderName(e.target.value || 'CARD HOLDER NAME')}
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white" 
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-2">Card Theme</label>
                                    <select 
                                        onChange={(e) => updateCardStyle(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                                    >
                                        <option value="premium">Classic Premium</option>
                                        <option value="anime">Anime Collection</option>
                                        <option value="cars">Sports Cars</option>
                                        <option value="nature">Nature Series</option>
                                        <option value="custom">Custom Design</option>
                                    </select>
                                </div>

                                {customUploadVisible && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-200 mb-2">Upload Custom Image</label>
                                        <input type="file" className="w-full text-white" onChange={handleCustomImage} />
                                    </div>
                                )}

                                <button className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold">
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

const CreditCard3D = () => {
    const { scene } = useGLTF('/src/assets/credit-card-3d.glb'); // Replace with your 3D model path
    return <primitive object={scene} scale={1.5} />;
};

export default CreditCardSection;
