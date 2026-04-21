import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("original-ip");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const inquiryOptions = [
    { value: "original-ip", label: "Original IP & Co-Production" },
    { value: "commercial-creative", label: "Commercial Creative Direction" },
    { value: "voice-directing", label: "Voice Directing & Casting" },
    { value: "writing", label: "Writing & Script Development" },
    { value: "general", label: "General Inquiry" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 overflow-x-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center w-full"
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-white uppercase break-words w-full">
          Let's Build Something.
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-sans px-2">
          Partner with Samson Animation for original IP development, commercial production, and voice directing.
        </p>
      </motion.div>

      {/* The Contact Form (Centered & Sleek) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-[600px] mx-auto px-2 sm:px-0"
      >
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[#00e5ff] font-display text-2xl md:text-3xl font-bold tracking-wide">
              Received!
            </p>
          </motion.div>
        ) : (
          <form className="flex flex-col gap-8 w-full [color-scheme:dark]" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="8c49f2da-3adf-479a-8a7b-c1b3978b83a6" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="name" className="text-sm font-bold tracking-widest uppercase text-white/70">
                Name *
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required 
                className="w-full bg-zinc-900/50 border-b-2 border-white/20 focus:border-[#00e5ff] outline-none px-4 py-3 text-white font-sans transition-colors placeholder:text-white/20" 
                placeholder="Your Name" 
              />
            </div>
            
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="company" className="text-sm font-bold tracking-widest uppercase text-white/70">
                Company / Agency
              </label>
              <input 
                type="text" 
                id="company" 
                name="company"
                className="w-full bg-zinc-900/50 border-b-2 border-white/20 focus:border-[#00e5ff] outline-none px-4 py-3 text-white font-sans transition-colors placeholder:text-white/20" 
                placeholder="Your Company" 
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="text-sm font-bold tracking-widest uppercase text-white/70">
                Email Address *
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required 
                className="w-full bg-zinc-900/50 border-b-2 border-white/20 focus:border-[#00e5ff] outline-none px-4 py-3 text-white font-sans transition-colors placeholder:text-white/20" 
                placeholder="you@company.com" 
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="inquiry" className="text-sm font-bold tracking-widest uppercase text-white/70">
                Inquiry Type
              </label>
              <div className="relative w-full" ref={dropdownRef}>
                <input type="hidden" name="inquiry_type" value={selectedInquiry} />
                <button 
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between bg-zinc-900/50 border-b-2 ${isDropdownOpen ? 'border-[#00e5ff]' : 'border-white/20'} outline-none px-4 py-3 text-white font-sans transition-colors cursor-pointer`}
                >
                  <span className="truncate pr-4">{inquiryOptions.find(opt => opt.value === selectedInquiry)?.label}</span>
                  <div className={`flex-shrink-0 text-white/50 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-[#1a1a1a] border border-white/10 shadow-2xl z-50 flex flex-col">
                    {inquiryOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setSelectedInquiry(option.value);
                          setIsDropdownOpen(false);
                        }}
                        className="text-left px-4 py-3 text-white font-sans hover:bg-[#2a2a2a] hover:text-[#00e5ff] transition-colors truncate"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="project" className="text-sm font-bold tracking-widest uppercase text-white/70">
                Tell us about your project...
              </label>
              <textarea 
                id="project" 
                name="message"
                rows={6} 
                className="w-full bg-zinc-900/50 border-b-2 border-white/20 focus:border-[#00e5ff] outline-none px-4 py-3 text-white font-sans transition-colors resize-y placeholder:text-white/20" 
                placeholder="Project details, timeline, budget, etc."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#00e5ff] text-black font-display font-extrabold text-lg uppercase tracking-widest py-5 mt-4 hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        )}

        {/* Direct Contact Fallback */}
        <div className="mt-16 text-center w-full">
          <p className="text-white/60 font-sans text-sm break-words">
            Or reach out directly: <br className="md:hidden" />
            <a 
              href="mailto:james@samsonanimation.com" 
              className="text-[#00e5ff] hover:text-white transition-colors font-medium ml-1 break-all"
            >
              james@samsonanimation.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
