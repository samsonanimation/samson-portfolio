import { Outlet, Link, useLocation } from "react-router-dom";
import { Mail, Linkedin, X } from "lucide-react";
import { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";

type LightboxContextType = {
  openLightbox: (videoUrl: string) => void;
  closeLightbox: () => void;
};

const LightboxContext = createContext<LightboxContextType | null>(null);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) throw new Error("useLightbox must be used within LightboxProvider");
  return context;
}

export default function Layout() {
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: "Voice Directing", path: "/voice-directing" },
    { name: "Voice Acting", path: "/voice-acting" },
    { name: "Development Slate", path: "/development-slate" },
    { name: "Writing", path: "/writing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <LightboxContext.Provider value={{
      openLightbox: (url) => setLightboxVideo(url),
      closeLightbox: () => setLightboxVideo(null)
    }}>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-[#00e5ff] selection:text-black flex flex-col">
        
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <Link to="/" className="font-display font-black text-3xl tracking-tighter uppercase">
              SAMSON.
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-normal tracking-[0.2em] uppercase">
              {navLinks.map((link) => (
                link.external ? (
                  <a 
                    key={link.name} 
                    href={link.path}
                    className="text-white/70 hover:text-[#00e5ff] transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`transition-colors ${location.pathname === link.path ? "text-[#00e5ff]" : "text-white/70 hover:text-[#00e5ff]"}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow pt-24">
          <div key={location.pathname} className="animate-in fade-in duration-500">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10 flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-white/50 tracking-widest uppercase font-medium">© 2026 Samson.</p>
          <a 
            href="https://www.linkedin.com/in/jamsutt/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#00e5ff] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </footer>

        {/* FAB */}
        <a 
          href="mailto:james@samsonanimation.com"
          className="fixed bottom-8 right-8 w-14 h-14 bg-[#00e5ff] rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:scale-110 transition-transform z-30"
        >
          <Mail className="w-6 h-6" />
        </a>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxVideo && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6"
              onClick={() => setLightboxVideo(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-[#00e5ff] transition-colors z-[60]"
                onClick={() => setLightboxVideo(null)}
              >
                <X className="w-10 h-10" />
              </button>
              <motion.div 
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="w-full max-w-5xl aspect-video bg-zinc-900 rounded-none shadow-2xl border border-white/10 overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/30 font-display tracking-widest">
                  VIDEO PLACEHOLDER
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </LightboxContext.Provider>
  );
}
