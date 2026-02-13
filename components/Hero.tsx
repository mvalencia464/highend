
import React from 'react';
import MultiStepForm from './MultiStepForm';
import { StarIcon, CheckIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Test Images: Seattle1.webp, Seattle2.webp, Seattle3.webp */}
        <img 
          src="/images/test-images/Seattle2.webp" 
          alt="Premium Waterfront Deck in Seattle" 
          className="w-full h-full object-cover opacity-40 object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex text-secondary space-x-1">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <div className="h-px w-8 bg-gray-600"></div>
              <span className="font-bold text-xs tracking-[0.2em] text-gray-300 uppercase">Seattle's Premier Glass & IPE Specialist</span>
            </div>
            
            <h1 className="font-heading font-medium text-5xl lg:text-7xl leading-[1.1] mb-8">
              Finally Build the Backyard You're <span className="text-secondary italic">Proud to Show Off.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
              Tired of staring at a plain, unused yard? We transform frustrating outdoor spaces into luxury retreats using our <span className="text-white font-bold border-b border-secondary/50">Fixed-Price Deck Build System™</span>.
            </p>

            <ul className="grid sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
              {[
                'Fixed-Price, No-Surprise Guarantee',
                'Completed in 21 Days or Less',
                'We Handle All Seattle Permits',
                'Zero-Down Financing Available',
                'Master Craftsman Joinery',
                'Lifetime Material Warranties'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-sm font-medium text-gray-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-secondary/30 flex items-center justify-center text-secondary">
                    <CheckIcon className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-8 border-t border-white/10 pt-8">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i + 60}`}
                    className="w-12 h-12 rounded-full border-2 border-primary grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    alt="Seattle Customer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-white text-base font-heading">Over 187 Decks Built</p>
                <p className="text-secondary text-xs uppercase tracking-widest mt-1">"Trustworthy & On Time"</p>
              </div>
            </div>
          </div>

          <div id="quote" className="lg:pl-12 relative">
             <div className="absolute -inset-4 bg-secondary/5 blur-2xl rounded-full"></div>
             <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-1 rounded-xl">
               <MultiStepForm />
             </div>
          </div>
        </div>
      </div>

      {/* Local Authority Strip */}
      <div className="relative z-10 border-t border-white/5 bg-primary/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-between items-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white font-sans">Licensed & Bonded</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white font-sans">The 21-Day Upgrade Method™</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white font-sans">TimberTech Authorized</span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white font-sans">BBB A+ Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
