
import React from 'react';
import { StarIcon } from './Icons';

const testimonials = [
  {
    id: 1,
    name: "PNW Dad",
    role: "Local Homeowner",
    content: "Kevin has years of experience as a high end deck builder. He understood all design options and code requirements. He was able to add square footage using a sophisticated cantilever design. Your estimate will be accurate and the project will be done right.",
    avatar: "https://i.pravatar.cc/150?u=pnw"
  },
  {
    id: 2,
    name: "Wendy Ceccherelli",
    role: "Local Guide",
    content: "What a great professional! Rebuilt a deck for me and it turned out really well. No more water penetration, and it looks great! He was prompt, knowledgeable, and went above and beyond.",
    avatar: "https://i.pravatar.cc/150?u=wendy"
  },
  {
    id: 3,
    name: "Alberto Stein Rios",
    role: "Property Manager",
    content: "A tree fell on our client's deck ruins. Seattle Deck and Fence came out and gave us a great value and even better job! Superior customer service reflected in the quality of the job.",
    avatar: "https://i.pravatar.cc/150?u=alberto"
  },
  {
    id: 4,
    name: "Linda Steen",
    role: "Local Guide",
    content: "Great experience from bidding with clear communication, on time, and great quality. Thank you!!!",
    avatar: "https://i.pravatar.cc/150?u=linda"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-offwhite overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10 text-left">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">Reviews & Local Proof</h2>
            <p className="text-5xl lg:text-6xl font-heading font-medium text-primary leading-tight">Trusted in King County.</p>
          </div>
          <div className="bg-white px-8 py-6 shadow-xl flex items-center gap-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-heading font-bold text-primary leading-none">5.0</span>
              <div className="flex text-secondary mt-1 space-x-0.5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
              </div>
            </div>
            <div className="h-12 w-px bg-gray-100" />
            <div className="flex items-center gap-4">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-6 w-auto opacity-80 grayscale hover:grayscale-0 transition-all" 
              />
              <div>
                <p className="text-sm font-bold text-primary leading-tight">Google Verified</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Highly Rated Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-12 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 relative group border-t-2 border-transparent hover:border-secondary">
              <div className="absolute top-8 right-12 text-8xl text-gray-100 font-heading leading-none group-hover:text-secondary/10 transition-colors font-serif">“</div>
              <div className="flex text-secondary mb-8 space-x-1">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
              </div>
              <p className="text-xl text-primary font-heading leading-relaxed mb-10 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-gray-100 group-hover:border-secondary transition-colors" />
                <div>
                  <h4 className="font-bold text-primary text-base font-sans">{t.name}</h4>
                  <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
