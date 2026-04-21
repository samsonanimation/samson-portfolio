import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function DevelopmentSlate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { 
      id: "wolfgang", 
      title: "Wolfgang and Marcel", 
      subtitle: "11/22-Min Comedy | Kids 6-12 (Co-Viewing)", 
      image: "/images/Wolfgang-Cover.jpg" 
    },
    { 
      id: "oswin", 
      title: "Oswin the Great", 
      subtitle: "11/22-Min Action-Adventure Comedy | Kids 6-12 (Co-Viewing)", 
      image: "/images/Oswin-Cover.jpg" 
    },
    { 
      id: "beep", 
      title: "Beep!", 
      subtitle: "7/11-Min Interactive Comedy | Preschool", 
      image: "/images/Beep-Cover.png" 
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 text-center"
      >
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase mb-6">
          Development Slate
        </h1>
        <h2 className="text-[#00e5ff] text-2xl md:text-3xl font-bold uppercase mb-6">
          Original IP
        </h2>
        <p className="text-white/80 text-lg">
          Concept to greenlight. Original IP built for broadcast and beyond.
        </p>
      </motion.div>

      {/* The Layout Structure (1-Column Vertical Stack) */}
      <div className="flex flex-col gap-32">
        {projects.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group"
          >
            {/* The Massive Image */}
            <Link 
              to={`/project/${item.id}`} 
              className="block rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8 relative"
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
              />
            </Link>
            
            {/* The Text & Button Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Text (Left) */}
              <div className="flex flex-col">
                <h3 className="text-white uppercase font-bold text-3xl md:text-4xl mb-2">
                  {item.title}
                </h3>
                <p className="text-[#00e5ff] text-lg md:text-xl">
                  {item.subtitle}
                </p>
              </div>
              
              {/* Button (Right) */}
              <Link 
                to={`/project/${item.id}`}
                className="inline-block rounded-full border-2 border-[#00e5ff] text-[#00e5ff] px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#00e5ff] hover:text-black hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] whitespace-nowrap"
              >
                View Deck
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
