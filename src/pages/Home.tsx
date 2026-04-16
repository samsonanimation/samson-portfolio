import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll Lock Logic
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] px-6 py-20">
        <div className="max-w-5xl text-center">
          {/* Hero Text */}
          <motion.h1 
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter mb-12 flex flex-col items-center"
          >
            <span className="block">Crafting</span>
            <span className="block">Voices.</span>
            <span className="block">Building</span>
            <span className="block text-[#00e5ff]">Worlds.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Bold voice direction and character-driven storytelling that captivate audiences and elevate brands.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <button 
              id="playReelBtn"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#00e5ff] text-black px-8 py-4 rounded-none font-semibold text-lg hover:bg-white transition-colors"
            >
              <Play className="w-5 h-5 fill-current" /> Play Reel
            </button>
            <Link 
              to="/voice-directing"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white px-8 py-4 rounded-none font-semibold text-lg hover:bg-white/5 transition-colors"
            >
              Explore Our Work
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="border-t border-white/10 pt-12"
          >
            <h2 className="text-xs font-mono tracking-[0.3em] text-white/40 mb-8 uppercase">Selected Credits</h2>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-white/50 font-medium tracking-wide">
              <span>NBC Peacock</span>
              <span>Amazon Prime Video</span>
              <span>Tubi</span>
              <span>YouTube</span>
              <span>Baboon Animation</span>
              <span>The Authority Group</span>
              <span>So! Animation</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <div 
        className={`fixed inset-0 z-[100] items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 ${isModalOpen ? 'flex' : 'hidden'}`}
        onClick={() => setIsModalOpen(false)}
      >
        <div 
          className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-[#00e5ff] text-white hover:text-black rounded-full flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <iframe 
            className="w-full h-full"
            src={isModalOpen ? "https://www.youtube.com/embed/nl1bEr1LVY4?autoplay=1&enablejsapi=1&modestbranding=1" : ""} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
