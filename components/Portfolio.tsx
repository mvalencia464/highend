
import React from 'react';

const projects = [
  { 
    id: 1, 
    title: 'Garden Entry Staircase', 
    category: 'Hardwood & Stone', 
    price: '$32K',
    image: '/images/1632a79a-70ff-4846-85b0-02735962e240.webp',
    desc: 'Custom hardwood steps with integrated riser lighting, flanked by river rock landscaping and lush greenery.'
  },
  { 
    id: 2, 
    title: 'Craftsman Pergola Deck', 
    category: 'Cedar & Composite', 
    price: '$18K',
    image: '/images/16dcddae-248a-4af0-98f1-9a09d57cfedb.webp',
    desc: 'Elevated composite deck featuring a stunning custom cedar pergola archway and matching privacy screening.'
  },
  { 
    id: 3, 
    title: 'Modern Zen Sanctuary', 
    category: 'Ipe Hardwood', 
    price: '$45K',
    image: '/images/1a0b4cef-6e2f-49d5-becc-361e289fcf82.webp',
    desc: 'Sleek low-profile Ipe deck with contemporary concrete planters, built-in bench seating, and Japanese maple.'
  },
  { 
    id: 4, 
    title: 'Structural Framing Phase', 
    category: 'Work in Progress', 
    price: '$8.5K',
    image: '/images/1bfeebd2-6c8f-45c5-9220-12ab0877aab4.webp',
    desc: 'A behind-the-scenes look at robust pressure-treated post and beam framing before decking installation.'
  },
  { 
    id: 5, 
    title: 'Expansive Entertainer\'s Deck', 
    category: 'Outdoor Living', 
    price: '$28K',
    image: '/images/1ed4a1f9-03c6-461c-866e-54bc1008e51c.webp',
    desc: 'Wide-angle view of a premium hardwood build featuring custom seating zones and a dedicated BBQ station.'
  },
  { 
    id: 6, 
    title: 'Contemporary Glass Railing', 
    category: 'View Preservation', 
    price: '$6.2K',
    image: '/images/1eecd4d1-2698-4b24-87b3-64e9a49bf482.webp',
    desc: 'Modern composite decking paired with black aluminum and glass railing to maximize the neighborhood view.'
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">Our Seattle Portfolio</h2>
          <p className="text-5xl lg:text-6xl font-heading font-medium text-primary mb-6">Real Projects for Real Neighbors.</p>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative h-[400px] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10"></div>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.05]"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-primary uppercase shadow-sm z-20">
                  {p.category}
                </div>
              </div>
              <div className="pr-4">
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-secondary transition-colors duration-300">{p.title}</h3>
                  <span className="text-secondary font-heading text-lg">{p.price}</span>
                </div>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest group/btn opacity-60 group-hover:opacity-100 transition-opacity">
                  View Case Study
                  <span className="transform transition-transform group-hover/btn:translate-x-1 text-secondary">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button className="inline-block bg-primary text-white px-12 py-5 hover:bg-secondary hover:text-primary transition-all duration-300 uppercase text-xs font-bold tracking-widest shadow-xl">
            Explore 180+ Local Builds
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
