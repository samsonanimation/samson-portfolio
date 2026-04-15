import { motion } from "motion/react";

export default function VoiceDirecting() {
  const projects = [
    { 
      title: "Super Wings", 
      line1: "Tubi, Season 6, Voice Director", 
      line2: "(Baboon Animation)", 
      link: "https://tubitv.com/series/300005157/super-wings/season-6",
      image: "/images/super-wings.jpg" // <-- Remember to ensure this matches your GitHub vault exactly!
    },
    { 
      title: "Agent 203", 
      line1: "YouTube, Voice Director", 
      line2: "(Full Credit)", 
      link: "https://www.youtube.com/playlist?list=PLHnIDPRvkQ8Og-QPbfos5dZk5Opcl1G7j",
      image: "/images/agent-203-title.jpg" // <-- Remember to ensure this matches your GitHub vault exactly!
    },
    { 
      title: "Katuri", 
      line1: "YouTube, Season 3, Voice Director", 
      line2: "(Baboon Animation)", 
      link: "https://www.youtube.com/playlist?list=PLU--2ksJJIMC7qE3B0gYTsj7-vL92YEfM",
      image: "/images/katuri.jpg" // <-- Remember to ensure this matches your GitHub vault exactly!
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* 1. The Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center flex flex-col items-center"
      >
        {/* THIS IS THE RESPONSIVE TEXT FIX SO IT FITS ON MOBILE */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 uppercase text-white break-words px-4 w-full text-center">
          Voice Directing
        </h1>
        <p className="text-xl text-white/60 font-light max-w-3xl mx-auto mb-12">
          Directing authentic, emotionally grounded performances for global broadcast hits.
        </p>
      </motion.div>

      {/* 2. The Spotlight Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full mb-20 flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide border-b-4 border-[#00FFFF] pb-2 inline-block text-center">
          Featured Scenework
        </h2>
        <p className="text-[#AAAAAA] text-lg mb-12 text-center max-w-2xl">
          A deep dive into character arcs and comedic timing on Agent 203.
        </p>
        
        <div className="w-full max-w-[1000px]">
          <iframe 
            width="100%" 
            style={{ aspectRatio: "16/9", borderRadius: "12px" }} 
            src="https://www.youtube.com/embed/3u0hmTMSiDU?modestbranding=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
          <p className="mt-6 text-center text-white/60 font-medium tracking-wide">
            James Sutton | Voice Director - Scene Work & Pacing
          </p>
        </div>
      </motion.div>

      <div className="mb-12 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-[#00e5ff]" />
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-[#00e5ff] font-semibold">
          Global Broadcast Credits
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block text-center">
              <div className="w-full aspect-[16/9] relative overflow-hidden mb-6 bg-zinc-900 rounded-[16px] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/50 border border-white/5">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-[center_10%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#00e5ff] uppercase tracking-wide mb-2">
                {project.title}
              </h3>
              <p className="text-[#FFFFFF] text-base font-medium mb-1">
                {project.line1}
              </p>
              <p className="text-[#AAAAAA] text-sm">
                {project.line2}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
