import React from 'react';

interface HeroProps {
  onStart: () => void;
  onPractice: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onPractice }) => {
  return (
    <div className="bg-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Code of Conduct for <br className="hidden md:block"/> AI Literacy Practitioners
        </h1>
        <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          A DRAFT proposal for journalists, popularisers, ethicists, and policy practitioners translating AI information from the expert domain to the general public.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
                onClick={onStart} 
                className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-1"
            >
                Read the Code
            </button>
            <button 
                onClick={onPractice} 
                className="px-8 py-4 bg-indigo-700/50 border border-indigo-400 text-white font-bold rounded-lg hover:bg-indigo-700 hover:border-white transition-all transform hover:-translate-y-1 backdrop-blur-sm"
            >
                Practice Scenarios
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;