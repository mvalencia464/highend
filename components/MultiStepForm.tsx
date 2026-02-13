
import React, { useState } from 'react';
import { CheckIcon } from './Icons';
import { FormData } from '../types';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    zip: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white/95 backdrop-blur-xl p-10 rounded-xl shadow-2xl text-center border-t-4 border-secondary ring-1 ring-black/5">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
          <CheckIcon className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-primary mb-3">Design Request Locked In</h3>
        <div className="space-y-4 my-8 bg-offwhite p-6 rounded-lg border border-gray-100 text-left">
          <p className="text-primary font-bold text-sm uppercase tracking-widest border-b border-gray-200 pb-2 mb-3">Next Steps</p>
          <div className="flex gap-3 items-start">
            <span className="text-secondary font-bold text-lg">01</span>
            <p className="text-gray-600 text-sm font-light">Kevin will text you within 2 hours to confirm details.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-secondary font-bold text-lg">02</span>
            <p className="text-gray-600 text-sm font-light">We'll schedule your 15-min site assessment.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-secondary font-bold text-lg">03</span>
            <p className="text-gray-600 text-sm font-light">Receive your 3D render and fixed-price quote.</p>
          </div>
        </div>
        <p className="text-gray-500 font-medium text-xs mb-6">Direct Line: <span className="font-bold text-primary">(425) 957-0561</span></p>
        <button 
          onClick={() => { setIsSuccess(false); setStep(1); }}
          className="text-primary font-bold hover:text-secondary text-xs uppercase tracking-widest transition-colors"
        >
          Start New Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden border border-white/50 ring-1 ring-black/5">
      <div className="bg-primary px-8 py-6 text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
        <h3 className="text-xl font-heading font-medium">Free 3D Design Preview</h3>
        <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.2em] mt-2">Valued at $497 — Limited Availability</p>
        <div className="flex gap-1.5 mt-5">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-secondary' : 'bg-white/10'}`} 
            />
          ))}
        </div>
      </div>

      <div className="p-8">
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <p className="font-heading font-bold text-primary text-xl mb-6">What project are you planning?</p>
            {['New Custom Deck', 'Deck Resurfacing', 'Fence Installation', 'Cantilevered Specialty Deck'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => { setFormData({...formData, projectType: type}); handleNext(); }}
                className={`w-full text-left px-6 py-4 rounded-lg border transition-all duration-300 font-medium text-sm tracking-wide ${
                  formData.projectType === type 
                    ? 'border-secondary bg-secondary/5 text-primary shadow-sm ring-1 ring-secondary/20' 
                    : 'border-gray-200 text-gray-500 hover:border-secondary/50 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <p className="font-heading font-bold text-primary text-xl mb-6">When is your ideal start date?</p>
            {['Immediately', 'Next 30 Days', 'Planning Stage', 'Emergency Repair'].map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => { setFormData({...formData, timeline: time}); handleNext(); }}
                className={`w-full text-left px-6 py-4 rounded-lg border transition-all duration-300 font-medium text-sm tracking-wide ${
                  formData.timeline === time 
                    ? 'border-secondary bg-secondary/5 text-primary shadow-sm ring-1 ring-secondary/20' 
                    : 'border-gray-200 text-gray-500 hover:border-secondary/50 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {time}
              </button>
            ))}
            <button onClick={handleBack} className="w-full text-xs font-bold uppercase tracking-widest text-gray-400 mt-6 hover:text-primary transition-colors">← Back</button>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
            <p className="font-heading font-bold text-primary text-xl mb-6">Where should we send your design?</p>
            <div className="space-y-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3.5 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all text-primary placeholder:text-gray-400 bg-white/50 focus:bg-white"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3.5 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all text-primary placeholder:text-gray-400 bg-white/50 focus:bg-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <div className="flex gap-3">
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 px-5 py-3.5 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all text-primary placeholder:text-gray-400 bg-white/50 focus:bg-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <input
                  required
                  type="text"
                  placeholder="Zip"
                  className="w-28 px-5 py-3.5 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary/50 outline-none transition-all text-primary placeholder:text-gray-400 bg-white/50 focus:bg-white"
                  value={formData.zip}
                  onChange={(e) => setFormData({...formData, zip: e.target.value})}
                />
              </div>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-primary hover:bg-secondary hover:text-primary text-white font-bold py-4 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 mt-6 text-xs uppercase tracking-widest"
            >
              {isSubmitting ? 'Processing...' : 'Get My Free 3D Preview'}
            </button>
            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider pt-2 opacity-60">
              <CheckIcon className="w-3 h-3 text-green-500" />
              <span>Secure & Confidential</span>
            </div>
            <button type="button" onClick={handleBack} className="w-full text-xs font-bold uppercase tracking-widest text-gray-400 mt-2 hover:text-primary transition-colors">← Back</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
