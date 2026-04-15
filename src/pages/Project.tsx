import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

const deckData: Record<string, { title: string; images: string[]; youtubeId?: string }> = {
  // --- ANIMATION PITCH DECKS ---
  "wolfgang": {
    title: "Wolfgang and Marcel",
    images: [
      "/images/Wolfgang-Cover.jpg",
      "/images/Wolfgang-1.jpg",
      "/images/Wolfgang-2.jpg", 
      "/images/Wolfgang-3.jpg",
      "/images/Wolfgang-4.jpg", 
      "/images/Wolfgang-5.jpg", 
      "/images/Wolfgang-6.jpg",
      "/images/Wolfgang-7.png"
    ]
  },
  "oswin": {
    title: "Oswin the Great",
    youtubeId: "ywWIiahM4UE",
    images: [
      "/images/Oswin-Cover.jpg",
      "/images/Oswin-1.jpg",
      "/images/Oswin-2.jpg",
      "/images/Oswin-3.jpg",
      "/images/Oswin-4.jpg",
      "/images/Oswin-5.jpg",
      "/images/Oswin-6.jpg",
      "/images/Oswin-7.jpg",
      "/images/Oswin-8.jpg",
      "/images/Oswin-9.jpg",
      "/images/Oswin-10.jpg",
      "/images/Oswin-11.jpg",
      "/images/Oswin-12.png"
    ]
  },
  "beep": {
    title: "Beep!",
    images: [
      "/images/Beep-Cover.png",
      "/images/Beep-1.png",
      "/images/Beep-2.png",
      "/images/Beep-3.png",
      "/images/Beep-4.png",
      "/images/Beep-5.png",
      "/images/Beep-6.png",
      "/images/Beep-7.png",
      "/images/Beep-8.png"
    ]
  },

  // --- WRITING SCRIPTS ---
  "black-crusader": {
    title: "The Black Crusader",
    images: [
      "/images/Black Crusader Thumbnail_.jpg", 
      "/images/TheBlackCrusader-1.jpg", 
      "/images/TheBlackCrusader-2.jpg",
      "/images/TheBlackCrusader-3.jpg",
      "/images/TheBlackCrusader-4.jpg",
      "/images/TheBlackCrusader-5.jpg"
    ]
  },
  "kars4kids": {
    title: "Kars4Kids!",
    images: [
      "/images/Kars4Kids Thumbnail.jpg", 
      "/images/Kars4Kids-1.png", 
      "/images/Kars4Kids-2.png",
      "/images/Kars4Kids-3.png",
      "/images/Kars4Kids-4.png"
    ]
  },
  "royal-flush": {
    title: "The Royal Flush",
    images: [
      "/images/TheRoyalFlush-Title.png", 
      "/images/TheRoyalFlush-1.png",
      "/images/TheRoyalFlush-2.png"
    ]
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
