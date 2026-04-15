import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

// --- EXPLICIT ASSET IMPORTS (Forces Vite to include them) ---
// Wolfgang
import wolfgangCover from "/images/Wolfgang-Cover.jpg";
import wolfgang1 from "/images/Wolfgang-1.jpg";
import wolfgang2 from "/images/Wolfgang-2.jpg";
import wolfgang3 from "/images/Wolfgang-3.jpg";
import wolfgang4 from "/images/Wolfgang-4.jpg";
import wolfgang5 from "/images/Wolfgang-5.jpg";
import wolfgang6 from "/images/Wolfgang-6.jpg";
import wolfgang7 from "/images/Wolfgang-7.png";

// Oswin
import oswinCover from "/images/Oswin-Cover.jpg";
import oswin1 from "/images/Oswin-1.jpg";
import oswin2 from "/images/Oswin-2.jpg";
import oswin3 from "/images/Oswin-3.jpg";
import oswin4 from "/images/Oswin-4.jpg";
import oswin5 from "/images/Oswin-5.jpg";
import oswin6 from "/images/Oswin-6.jpg";
import oswin7 from "/images/Oswin-7.jpg";
import oswin8 from "/images/Oswin-8.jpg";
import oswin9 from "/images/Oswin-9.jpg";
import oswin10 from "/images/Oswin-10.jpg";
import oswin11 from "/images/Oswin-11.jpg";
import oswin12 from "/images/Oswin-12.png";

// Beep
import beepCover from "/images/Beep-Cover.png";
import beep1 from "/images/Beep-1.png";
import beep2 from "/images/Beep-2.png";
import beep3 from "/images/Beep-3.png";
import beep4 from "/images/Beep-4.png";
import beep5 from "/images/Beep-5.png";
import beep6 from "/images/Beep-6.png";
import beep7 from "/images/Beep-7.png";
import beep8 from "/images/Beep-8.png";

// Writing
import blackCrusaderTitle from "/images/Black Crusader Thumbnail_.jpg";
import blackCrusader1 from "/images/TheBlackCrusader-1.jpg";
import blackCrusader2 from "/images/TheBlackCrusader-2.jpg";
import blackCrusader3 from "/images/TheBlackCrusader-3.jpg";
import blackCrusader4 from "/images/TheBlackCrusader-4.jpg";
import blackCrusader5 from "/images/TheBlackCrusader-5.jpg";

import karsTitle from "/images/Kars4Kids Thumbnail.jpg";
import kars1 from "/images/Kars4Kids-1.png";
import kars2 from "/images/Kars4Kids-2.png";
import kars3 from "/images/Kars4Kids-3.png";
import kars4 from "/images/Kars4Kids-4.png";

import royalTitle from "/images/TheRoyalFlush-Title.png";
import royal1 from "/images/TheRoyalFlush-1.png";
import royal2 from "/images/TheRoyalFlush-2.png";

// --- DATA STRUCTURE ---
const deckData: Record<string, { title: string; images: string[]; youtubeId?: string }> = {
  "wolfgang": {
    title: "Wolfgang and Marcel",
    images: [wolfgangCover, wolfgang1, wolfgang2, wolfgang3, wolfgang4, wolfgang5, wolfgang6, wolfgang7]
  },
  "oswin": {
    title: "Oswin the Great",
    youtubeId: "ywWIiahM4UE",
    images: [oswinCover, oswin1, oswin2, oswin3, oswin4, oswin5, oswin6, oswin7, oswin8, oswin9, oswin10, oswin11, oswin12]
  },
  "beep": {
    title: "Beep!",
    images: [beepCover, beep1, beep2, beep3, beep4, beep5, beep6, beep7, beep8]
  },
  "black-crusader": {
    title: "The Black Crusader",
    images: [blackCrusaderTitle, blackCrusader1, blackCrusader2, blackCrusader3, blackCrusader4, blackCrusader5]
  },
  "kars4kids": {
    title: "Kars4Kids!",
    images: [karsTitle, kars1, kars2, kars3, kars4]
  },
  "royal-flush": {
    title: "The Royal Flush",
    images: [royalTitle, royal1, royal2]
  }
};

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const project = id ? deckData[id] : null;

  const isWriting = ["black-crusader", "kars4kids", "royal-flush"].includes(id || "");
  const backUrl = isWriting ? "/writing" : "/development-slate";
  const backTextTop = isWriting ? "← Back to Writing" : "← Back to Slate";
  const backTextBottom = isWriting ? "Back to Writing" : "Back to Development Slate";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
        <h1 className="text-white text-4xl font-bold uppercase tracking-widest mb-8 text-center">
          Project Not Found
        </h1>
        <Link 
          to={backUrl}
          className="inline-block rounded-full border-2 border-[#00e5ff] text-[#00e5ff] px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#00e5ff] hover:text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
        >
          {backTextBottom}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to={backUrl} 
            className="text-white/60 hover:text-[#00e5ff] uppercase tracking-widest text-sm transition-colors duration-300"
          >
            {backTextTop}
          </Link>
          <div className="text-white uppercase tracking-widest font-bold text-sm md:text-base text-right">
            {project.title}
          </div>
        </div>
      </header>

      {/* Scrolling Presentation (The Slides) */}
      <div className="max-w-4xl mx-auto px-4 mt-16 flex flex-col gap-8 md:gap-12">
        {project.youtubeId && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full aspect-video bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/5"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${project.youtubeId}?modestbranding=1`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
        {project.images.map((imgSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-white/5"
          >
            <img 
              src={imgSrc} 
              alt={`${project.title} Slide ${index + 1}`} 
              className="w-full h-auto block"
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 text-center px-6">
        <Link 
          to={backUrl}
          className="inline-block rounded-full border-2 border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
        >
          {backTextBottom}
        </Link>
      </div>
    </div>
  );
}
