import React, { useState } from 'react';

const LoanServicesSection = () => {
    const [activeLoan, setActiveLoan] = useState('default');

    const loanTypes = [
        {
            id: 'student',
            title: 'Student Loans',
            description: 'Low interest rates with flexible repayment options',
            details: [
                'Interest rate: 4.5% p.a.',
                'Tenure: Up to 10 years'
            ],
            image: '/assets/student-loan.svg',
            color: 'emerald'
        },
        {
            id: 'home',
            title: 'Home Loans',
            description: 'Make your dream home a reality with competitive rates',
            details: [
                'Interest rate: 6.5% p.a.',
                'Tenure: Up to 30 years'
            ],
            image: '/assets/home-loan.svg',
            color: 'teal'
        },
        {
            id: 'health',
            title: 'Health Care Loans',
            description: 'Quick medical financing with minimal documentation',
            details: [
                'Interest rate: 7% p.a.',
                'Quick approval within 24 hours'
            ],
            image: '/assets/health-loan.svg',
            color: 'emerald'
        },
        {
            id: 'business',
            title: 'Business Loans',
            description: 'Empower your business growth with custom solutions',
            details: [
                'Interest rate: 8% p.a.',
                'Flexible collateral options'
            ],
            image: '/assets/business-loan.svg',
            color: 'teal'
        }
    ];

    return (
        <section className="text-gray-600 body-font overflow-hidden relative group">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100"></div>
                <div className="animate-float absolute top-10 left-10">
                    <svg className="w-20 h-20 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 4c-4.418 0-8 2.239-8 5v10c0 2.761 3.582 5 8 5s8-2.239 8-5V9c0-2.761-3.582-5-8-5z"/>
                    </svg>
                </div>
                <div className="animate-float-delayed absolute bottom-10 right-10">
                    <svg className="w-16 h-16 text-teal-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    </svg>
                </div>
            </div>

            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                        Flexible Loan Solutions
                        <br className="hidden lg:inline-block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">For Every Need</span>
                    </h1>
                    
                    {/* Loan Types Cards with Hover Effects */}
                    <div className="w-full max-w-md mb-8 overflow-hidden">
                        <div className="space-y-4">
                            {loanTypes.map((loan) => (
                                <div
                                    key={loan.id}
                                    className={`p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-${loan.color}-500 hover:translate-x-2`}
                                    onMouseEnter={() => setActiveLoan(loan.id)}
                                    onMouseLeave={() => setActiveLoan('default')}
                                >
                                    <h3 className={`text-lg font-semibold text-${loan.color}-600`}>{loan.title}</h3>
                                    <p className="text-gray-600">{loan.description}</p>
                                    <div className={`h-0 overflow-hidden hover:h-auto hover:mt-4 transition-all duration-300`}>
                                        <div className={`bg-${loan.color}-50 p-3 rounded-lg`}>
                                            {loan.details.map((detail, index) => (
                                                <p key={index} className={`text-sm text-${loan.color}-700`}>{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <button className="inline-flex items-center text-white bg-gradient-to-r from-emerald-600 to-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-700 rounded-lg text-lg transition-all hover:scale-105">
                            Apply Now
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg transition-all hover:scale-105">Calculate EMI</button>
                    </div>
                </div>
                
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
                    {/* Individual loan type images that show/hide on hover */}
                    <div className="relative w-full h-96">
                        {loanTypes.map((loan) => (
                            <img
                                key={loan.id}
                                className={`object-cover object-center rounded-lg shadow-2xl hidden transition-opacity duration-500 ${activeLoan === loan.id ? 'block' : 'hidden'}`}
                                src={loan.image}
                                alt={loan.title}
                            />
                        ))}
                        {/* Default image when no card is hovered */}
                        <img className={`object-cover object-center rounded-lg shadow-2xl ${activeLoan === 'default' ? 'block' : 'hidden'}`} src="/assets/loan-services.svg" alt="Loan Services" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoanServicesSection;