
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { CheckIcon } from './components/Icons';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 selection:bg-secondary selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Problem Agitation Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">The Real Cost of a Plain Backyard</h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-heading font-medium text-primary mb-12 leading-tight">
              Stop Staring at What Your Backyard <span className="italic text-secondary">Could Be.</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                { title: 'The Budget Trap', desc: 'Afraid of "hidden costs"? Our Fixed-Price System means the quote you sign is the price you pay.' },
                { title: 'The Endless Build', desc: 'Worried about a project dragging on? We guarantee a 21-day completion window so you can start hosting.' },
                { title: 'The Ghosting Risk', desc: 'Tired of contractors who don\'t call back? We communicate daily so you never feel out of the loop.' },
                { title: 'The Status Gap', desc: 'Is your yard the only one on the block that isn\'t built for hosting? Stop feeling like you\'re falling behind.' }
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-offwhite hover:bg-white transition-all duration-500 border-l-2 border-transparent hover:border-secondary hover:shadow-xl">
                  <h4 className="font-heading font-bold text-primary text-xl mb-3 flex items-center gap-3">
                    <span className="text-secondary opacity-60 group-hover:opacity-100 transition-opacity">❖</span> {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Mechanism / Named Process */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">Our Unique Mechanism</h2>
              <h3 className="text-5xl lg:text-6xl font-heading font-medium mb-8 leading-tight">The Fixed-Price Deck <br/><span className="text-secondary italic">Build System™</span></h3>
              <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">We don't just "build decks." We use a proprietary engineering and planning system that removes 100% of the common construction headaches.</p>
              
              <div className="space-y-10">
                {[
                  { title: '3D Render Approval', desc: 'See your dream backyard before spending a dollar. We build it digitally first.' },
                  { title: 'The "Bulletproof" Quote', desc: 'Once the design is locked, your price is fixed. No add-ons. No "surprises".' },
                  { title: 'The 21-Day Sprint', desc: 'A dedicated team on-site daily until your project is 100% finished.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-10 h-10 rounded-full border border-secondary/30 text-secondary flex items-center justify-center font-heading font-bold text-lg shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">{i+1}</div>
                    <div>
                      <h4 className="font-heading font-bold text-xl mb-2 text-white">{step.title}</h4>
                      <p className="text-gray-500 text-sm font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16">
                <a href="#quote" className="inline-block bg-secondary text-primary font-bold px-10 py-5 hover:bg-white transition-all duration-300 tracking-wide uppercase text-xs">
                  Get Your Free 3D Design Preview
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 z-0"></div>
              <img 
                src="/images/elevated-deck-framing.webp" 
                className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                alt="Expert Framing and Engineering"
              />
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="py-32 bg-offwhite" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 border-2 border-secondary/20 -rotate-2 z-0"></div>
                <img 
                  src="/images/waterfront-glass-deck.webp" 
                  alt="Kevin building custom deck" 
                  className="relative z-10 shadow-xl w-full object-cover aspect-[4/5] filter brightness-[0.9] contrast-[1.1]"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-10 shadow-2xl z-20 hidden md:block max-w-[320px] border-t-4 border-secondary">
                  <p className="font-heading text-primary text-2xl mb-4">The Kevin Difference</p>
                  <p className="text-gray-600 text-sm font-light leading-relaxed italic">
                    "He explained the pros/cons of all materials and understood all code requirements." <br/><span className="not-italic font-bold mt-2 block">— PNW Dad</span>
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-6">Why Local Homeowners Choose Us</h2>
                <h3 className="text-5xl lg:text-6xl font-heading font-medium text-primary mb-10 leading-tight">Master Craftsmanship. <br/><span className="text-accent underline decoration-secondary decoration-2 underline-offset-4">Zero Guesswork.</span></h3>
                <div className="space-y-12">
                  {[
                    { 
                      title: 'Specialized Cantilever Design', 
                      desc: 'Maximize your square footage. We specialize in sophisticated structural engineering that other builders won\'t touch, adding real usable space to your PNW home.' 
                    },
                    { 
                      title: 'Master Finish Work', 
                      desc: 'From invisible fasteners to custom joinery, the finish quality of our decks is the highest in Seattle. We build for aesthetics that last a lifetime.' 
                    },
                    { 
                      title: 'Accurate Bidding & Communication', 
                      desc: 'As Linda Steen noted: "Great experience from bidding with clear communication, on time, and great quality." No hidden fees, no surprise delays.' 
                    }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-8 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-transparent border border-gray-200 flex items-center justify-center font-heading text-secondary text-xl group-hover:border-secondary transition-colors duration-300">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold text-primary mb-3">{feat.title}</h4>
                        <p className="text-gray-600 leading-relaxed font-light text-sm">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <Portfolio />

        {/* Closing Conversion Block */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-2/3 h-full bg-accent/20 skew-x-12 transform translate-x-1/2" />
               <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center p-12 lg:p-24">
                 <div>
                   <h2 className="text-white text-5xl lg:text-6xl font-heading font-medium mb-8 leading-tight">Luxury living for <br/><span className="text-secondary italic">less than $150/week.</span></h2>
                   <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">Join 500+ Seattle homeowners who trusted Kevin. No deposit until permits are approved. 0% financing available for qualified projects.</p>
                   <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                     <a href="#quote" className="bg-secondary hover:bg-white text-primary font-bold px-10 py-5 transition-all uppercase text-xs tracking-wider">
                        Get Your Free 3D Design Preview
                     </a>
                     <div className="flex flex-col">
                        <span className="text-white font-heading text-2xl">(425) 957-0561</span>
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Direct Line to Kevin</span>
                     </div>
                   </div>
                 </div>
                 <div className="hidden lg:block relative text-center">
                    <div className="bg-white/5 p-12 backdrop-blur-sm border border-white/10 inline-block">
                        <p className="text-5xl font-heading text-white mb-2">0% APR</p>
                        <p className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">For 12 Months</p>
                        <div className="w-12 h-px bg-secondary/50 mx-auto my-8"></div>
                        <p className="text-gray-400 text-sm font-serif italic">"We built now and paid later. Best <br/>decision we made for our home."</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

