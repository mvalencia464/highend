
import React from 'react';
import { PhoneIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-white/5">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-2xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-white leading-none uppercase tracking-wider">SEATTLE FENCE</span>
                <span className="text-[10px] tracking-[0.3em] font-bold text-secondary uppercase mt-1">& Decks</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 font-light text-gray-400">
              Seattle's premier high-end deck and fence builders. Specialized in cantilever designs and long-lasting waterproof solutions for PNW homes.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'LI', 'HZ'].map((s) => (
                <div key={s} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 cursor-pointer text-xs font-bold text-gray-400 border border-white/10">
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-8">Expert Services</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Custom Deck Design</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Cantilevered Decks</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Composite Materials</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Waterproof Resurfacing</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Premium Fencing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-8">The Process</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Accurate Estimating</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Design & Engineering</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Permit Assistance</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Project Completion</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors duration-300 block py-1">Lifetime Warranty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-8">Get In Touch</h4>
            <div className="space-y-6 text-sm font-light">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 rounded-full border border-white/10 group-hover:border-secondary/50 transition-colors">
                  <PhoneIcon className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-lg font-bold text-white font-heading group-hover:text-secondary transition-colors">(425) 957-0561</span>
              </div>
              <p className="pl-2 border-l border-white/10 hover:border-secondary transition-colors pl-4">Email: info@seattlefenceanddecks.com</p>
              <p className="pl-2 border-l border-white/10 hover:border-secondary transition-colors pl-4">Address: 4757 46th Ave SW,<br />Seattle, WA 98116</p>
              <div className="pt-6">
                <span className="px-6 py-2 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full border border-secondary/20 uppercase tracking-[0.2em]">
                  Active in West Seattle
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium tracking-wide">
          <p>© 2026 Seattle Fence and Decks. All rights reserved.</p>
          <p className="uppercase tracking-widest opacity-60">Licensed & Bonded WA Contractor #SEATTL*FD*101</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
