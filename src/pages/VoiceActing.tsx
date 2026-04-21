import { motion } from "motion/react";
import { useLightbox } from "../components/Layout";

export default function VoiceActing() {
  const { openLightbox } = useLightbox();

  const projects = [
    { 
      title: "Soup or Salad", 
      role: "Voices of Sal & Waiter", 
      type: "Original Animated Short",
      embed: "https://www.youtube.com/embed/i6lBts5sdro"
    },
    { 
      title: "Nuclear Meltdown", 
      role: "Greg & Singing Voice", 
      type: "Original Animated Short",
      embed: "https://www.youtube.com/embed/0ohUORfKlmc"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        {/* THE FIX: White "Voice", Cyan "Acting" */}
        <h1 className="font-display text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 uppercase text-white">
  Voice <span className="text-[#00e5ff]">Acting</span>
</h1>
        <p className="text-xl text-white/60 font-light max-w-3xl mx-auto">
          Dynamic and versatile vocal performances across animation, commercial, and interactive media.
        </p>
      </motion.div>

      <div className="mb-12 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-[#00e5ff]" />
        <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-[#00e5ff] font-semibold">
          Performance Reels
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-24 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={project.embed ? "group" : "group cursor-pointer"}
            onClick={project.embed ? undefined : () => openLightbox(project.title)}
          >
            {project.embed ? (
              <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden relative mb-6 shadow-xl shadow-black/50 border border-zinc-800">
                <iframe 
                  className="w-full h-full absolute top-0 left-0"
                  src={project.embed} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden relative mb-6 shadow-xl shadow-black/50 border border-zinc-800">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/800/450?grayscale`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-none bg-[#00e5ff]/20 backdrop-blur-sm flex items-center justify-center border border-[#00e5ff]/50 text-[#00e5ff]">
                    <svg className="w-6 h-6 ml-1 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
            
            {/* THE FIX: This wrapper centers the text on mobile, keeps it left on desktop */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl font-extrabold mb-2 tracking-wide text-white group-hover:text-[#00e5ff] transition-colors duration-300">{project.title}</h3>
              <div className="font-sans text-sm text-[#00e5ff] font-medium tracking-widest uppercase">
                {project.role} <span className="text-white/30 mx-2">|</span> {project.type}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
