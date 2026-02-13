
import React, { useState } from 'react';
import { PhoneIcon } from './Icons';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary flex items-center justify-center text-secondary font-heading font-bold text-2xl">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary tracking-widest uppercase leading-none">Seattle Fence</span>
              <span className="text-[10px] tracking-[0.4em] font-bold text-secondary uppercase mt-1">& Decks</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#portfolio" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-secondary transition-colors duration-300">Portfolio</a>
            <a href="#services" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-secondary transition-colors duration-300">Process</a>
            <a href="#testimonials" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-secondary transition-colors duration-300">Reviews</a>
            
            <div className="h-8 w-px bg-gray-200 mx-2"></div>
            
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Call Us</span>
              <span className="font-heading font-bold text-lg text-primary hover:text-secondary transition-colors cursor-pointer">(425) 957-0561</span>
            </div>
            
            <a 
              href="#quote" 
              className="bg-primary text-white px-8 py-4 hover:bg-secondary hover:text-primary transition-all duration-300 uppercase text-xs font-bold tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Estimate
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary hover:text-secondary transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-4 flex flex-col gap-4 animate-fadeIn">
            <a href="#portfolio" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
            <a href="#services" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href="#testimonials" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <div className="flex items-center gap-2 text-primary py-2 border-t border-gray-100 mt-2">
              <PhoneIcon className="w-5 h-5 text-secondary" />
              <span className="font-heading font-bold text-lg">(425) 957-0561</span>
            </div>
            <a 
              href="#quote" 
              className="block bg-primary text-white text-center py-4 uppercase text-xs font-bold tracking-widest hover:bg-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Estimate
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
