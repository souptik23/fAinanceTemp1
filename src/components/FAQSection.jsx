import React from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "Can I cancel at anytime?",
            answer: "Yes, you can cancel anytime. We believe in flexibility and transparency - no questions asked!"
        },
        {
            question: "How secure is our platform?",
            answer: "We use bank-grade security with 256-bit encryption and continuous monitoring to keep your data safe."
        },
        {
            question: "How do I access my account?",
            answer: "Simply log in through our secure portal using your credentials. We also offer biometric authentication."
        },
        {
            question: "What are the transfer limits?",
            answer: "Transfer limits vary by account type. Premium accounts enjoy higher limits with instant transfers."
        }
    ];

    return (
        <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto relative overflow-hidden bg-gray-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            {/* Floating Search Animation */}
            <div className="flex justify-center mb-16">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 animate-spin-slow">
                        <svg className="w-full h-full text-indigo-500/30" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    Frequently Asked Questions
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Find Your Answers</span>
                </h2>
                <p className="mt-4 text-gray-400">Everything you need to know about our banking services</p>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="group bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <button className="w-full flex items-center justify-between gap-4">
                            <h3 className="text-lg font-semibold text-white group-hover:text-indigo-600 transition-colors">
                                {faq.question}
                            </h3>
                            <span className="group-hover:rotate-180 transition-transform duration-300">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </span>
                        </button>
                        <div className="mt-4 text-gray-400">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-3 bg-indigo-900/30 px-6 py-3 rounded-full">
                    <span className="animate-bounce">
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </span>
                    <p className="text-indigo-400 font-medium">Still have questions? <a href="#" className="underline hover:text-indigo-300">Contact our support team</a></p>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;