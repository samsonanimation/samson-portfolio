import { motion } from "motion/react";
import { Link } from "react-router-dom";

const writingSamples = [
  {
    id: "black-crusader",
    title: "THE BLACK CRUSADER!",
    subtitle: "5 PAGE SKETCH . TEEN & ADULT",
    image: "/images/Black Crusader Thumbnail_.jpg"
  },
  {
    id: "kars4kids",
    title: "KARS4KIDS!",
    subtitle: "4 PAGE SKETCH . TEEN & ADULT",
    image: "/images/Kars4Kids Thumbnail.jpg"
  },
  {
    id: "royal-flush",
    title: "THE ROYAL FLUSH",
    subtitle: "2 PAGE SKETCH . TEEN & ADULT",
    image: "/images/Royal Flush Thumbnail.png"
  }
];

export default function Writing() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 overflow-x-hidden">
      {/* Hero Section & Headers */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 uppercase">
          <span className="text-[#00e5ff]">Writing</span>
        </h1>
        <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
          Crafting compelling narratives, sharp dialogue, and unforgettable characters.
        </p>
      </motion.div>

      <div className="mb-12 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-[#00e5ff]" />
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-[#00e5ff] font-semibold">
          Scripts & Sketches
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {writingSamples.map((sample, i) => (
          <motion.div
            key={sample.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="h-full"
          >
            {/* Card Styling (Clickable) */}
            <Link 
              to={`/project/${sample.id}`} 
              className="flex flex-col h-full block group hover:scale-[1.02] transition-transform duration-500 ease-out"
            >
              {/* Image Container */}
              <div className="rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shrink-0">
                <img 
                  src={sample.image}
                  alt={sample.title}
                  className="w-full h-auto aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Text Block & Visual Button */}
              <div className="mt-6 text-center md:text-left flex flex-col flex-grow justify-between items-center md:items-start">
                <div className="w-full">
                  {/* Title */}
                  <h3 className="text-white uppercase font-display font-bold text-2xl md:text-xl lg:text-2xl group-hover:text-[#00e5ff] transition-colors duration-300">
                    {sample.title}
                  </h3>
                  {/* Subtitle */}
                  <p className="text-[#00e5ff] text-sm uppercase tracking-widest mt-2 mb-8">
                    {sample.subtitle}
                  </p>
                </div>

                {/* THE FIX: Exact visual clone of View Deck */}
                <div className="mt-auto">
                  <span className="inline-block rounded-full border-2 border-[#00e5ff] text-[#00e5ff] px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 group-hover:bg-[#00e5ff] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] whitespace-nowrap">
                    Read Script
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
