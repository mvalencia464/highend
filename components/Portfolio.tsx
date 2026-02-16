
import React, { useState, useEffect, useCallback } from 'react';

const projects = [
  { 
    id: 1, 
    title: 'Garden Entry Staircase', 
    category: 'Hardwood & Stone', 
    price: '$32K',
    image: '/images/hardwood-entry-steps.webp',
    desc: 'Custom hardwood steps with integrated riser lighting, flanked by river rock landscaping and lush greenery.'
  },
  { 
    id: 2, 
    title: 'Craftsman Pergola Deck', 
    category: 'Cedar & Composite', 
    price: '$18K',
    image: '/images/craftsman-pergola-deck.webp',
    desc: 'Elevated composite deck featuring a stunning custom cedar pergola archway and matching privacy screening.'
  },
  { 
    id: 3, 
    title: 'Modern Zen Sanctuary', 
    category: 'Ipe Hardwood', 
    price: '$45K',
    image: '/images/modern-ipe-deck-planters.webp',
    desc: 'Sleek low-profile Ipe deck with contemporary concrete planters, built-in bench seating, and Japanese maple.'
  },
  { 
    id: 4, 
    title: 'Structural Framing Phase', 
    category: 'Work in Progress', 
    price: '$8.5K',
    image: '/images/deck-framing-progress.webp',
    desc: 'A behind-the-scenes look at robust pressure-treated post and beam framing before decking installation.'
  },
  { 
    id: 5, 
    title: 'Expansive Entertainer\'s Deck', 
    category: 'Outdoor Living', 
    price: '$28K',
    image: '/images/hardwood-deck-bbq-station.webp',
    desc: 'Wide-angle view of a premium hardwood build featuring custom seating zones and a dedicated BBQ station.'
  },
  { 
    id: 6, 
    title: 'Contemporary Glass Railing', 
    category: 'View Preservation', 
    price: '$6.2K',
    image: '/images/composite-glass-railing-view.webp',
    desc: 'Modern composite decking paired with black aluminum and glass railing to maximize the neighborhood view.'
  },
  {
    id: 7,
    title: 'Classic Hillside Deck',
    category: 'Traditional Wood',
    price: '$22K',
    image: '/images/classic-brown-deck-stairs.webp',
    desc: 'Traditional elevated deck with vertical picket railings and a sturdy staircase connecting the home to the lawn.'
  },
  {
    id: 8,
    title: 'Backyard Spa Retreat',
    category: 'Cedar Pergola',
    price: '$35K',
    image: '/images/backyard-spa-pergola.webp',
    desc: 'A cozy backyard escape featuring a sunken hot tub under a custom cedar pergola with lattice privacy screens.'
  },
  {
    id: 9,
    title: 'Waterfront Glass Deck',
    category: 'Premium Composite',
    price: '$55K',
    image: '/images/waterfront-glass-deck.webp',
    desc: 'Premium composite deck with seamless glass railings, designed to offer unobstructed views of the water.'
  },
  {
    id: 10,
    title: 'Modern Paver & Wood Patio',
    category: 'Mixed Materials',
    price: '$42K',
    image: '/images/modern-paver-wood-patio.webp',
    desc: 'A harmonious blend of large format pavers and rich wood decking, creating a sophisticated multi-textured outdoor space.'
  },
  {
    id: 11,
    title: 'Minimalist Ipe Deck',
    category: 'Exotic Hardwood',
    price: '$38K',
    image: '/images/minimalist-ipe-deck.webp',
    desc: 'Clean lines and premium Ipe hardwood define this minimalist deck, perfect for modern outdoor living.'
  },
  {
    id: 12,
    title: 'Rain-Ready Entertainment',
    category: 'All-Weather Decking',
    price: '$33K',
    image: '/images/rain-ready-deck-seating.webp',
    desc: 'Durable hardwood decking that shines even in Seattle weather, featuring built-in bench seating and a grilling station.'
  },
  {
    id: 13,
    title: 'Custom Deck Framing',
    category: 'Structural',
    price: '$12K',
    image: '/images/deck-construction-framing.webp',
    desc: 'Precision framing in progress, showcasing the solid structural foundation we build for every lasting project.'
  },
  {
    id: 14,
    title: 'Elevated Structure View',
    category: 'Engineering',
    price: '$45K',
    image: '/images/elevated-deck-structure.webp',
    desc: 'A view from below highlighting the robust post-and-beam support system of a high-elevation deck with glass railings.'
  },
  {
    id: 15,
    title: 'Cedar Deck with Fire Pit',
    category: 'Custom Features',
    price: '$29K',
    image: '/images/cedar-deck-fire-pit-spa.webp',
    desc: 'A spacious cedar deck featuring a custom stone inlay for a fire pit and built-in bench seating for cozy evenings.'
  }
];

const Portfolio: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  const nextProject = useCallback(() => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((prev) => (prev !== null && prev < projects.length - 1 ? prev + 1 : 0));
  }, [selectedProjectIndex]);

  const prevProject = useCallback(() => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : projects.length - 1));
  }, [selectedProjectIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProjectIndex === null) return;

      if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectIndex, nextProject, prevProject]);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">Our Seattle Portfolio</h2>
          <p className="text-5xl lg:text-6xl font-heading font-medium text-primary mb-6">Real Projects for Real Neighbors.</p>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, index) => (
            <div key={p.id} className="group cursor-pointer" onClick={() => openModal(index)}>
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

      {/* Modal / Lightbox */}
      {selectedProjectIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={closeModal}>
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row bg-white overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-50 p-2 text-black/50 hover:text-black bg-white/50 hover:bg-white rounded-full transition-all"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons (Desktop) */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/80 hover:bg-white text-primary rounded-full shadow-lg transition-all transform hover:scale-110 hidden md:block"
              onClick={(e) => { e.stopPropagation(); prevProject(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/80 hover:bg-white text-primary rounded-full shadow-lg transition-all transform hover:scale-110 hidden md:block"
              onClick={(e) => { e.stopPropagation(); nextProject(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="w-full md:w-2/3 h-[50vh] md:h-auto bg-gray-100 relative">
               <img 
                src={projects[selectedProjectIndex].image} 
                alt={projects[selectedProjectIndex].title} 
                className="w-full h-full object-cover"
              />
              
              {/* Mobile Navigation Overlay */}
              <div className="absolute inset-0 flex justify-between items-center md:hidden pointer-events-none">
                 <button 
                  className="p-4 pointer-events-auto bg-black/20 text-white h-full hover:bg-black/30"
                  onClick={(e) => { e.stopPropagation(); prevProject(); }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="p-4 pointer-events-auto bg-black/20 text-white h-full hover:bg-black/30"
                  onClick={(e) => { e.stopPropagation(); nextProject(); }}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-3">
                {projects[selectedProjectIndex].category}
              </span>
              <h3 className="text-3xl font-heading font-bold text-primary mb-2">
                {projects[selectedProjectIndex].title}
              </h3>
              <p className="text-xl font-medium text-gray-400 mb-6">
                {projects[selectedProjectIndex].price}
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                {projects[selectedProjectIndex].desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between text-xs text-gray-400 font-bold tracking-widest uppercase">
                <span>Project {selectedProjectIndex + 1} / {projects.length}</span>
                <span>Seattle, WA</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
