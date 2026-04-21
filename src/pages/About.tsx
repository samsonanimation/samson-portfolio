import { motion } from "motion/react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-6 overflow-x-hidden">
      
      {/* THE NEW CLEAN HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
<h1 className="font-display text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 uppercase text-white">
  About <span className="text-[#00e5ff]">Samson</span>
</h1>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {/* Profile Image (Top) */}
          <div className="flex justify-center mb-8">
            <img
              src="/images/Profile.png"
              alt="James Sutton"
              className="w-full max-w-sm h-auto rounded-2xl border border-zinc-800 shadow-2xl shadow-black/50"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Sub-Headers */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-2">
            James Sutton
          </h2>
          <h3 className="text-xl text-[#00e5ff] font-display tracking-widest uppercase text-center mb-12">
            Creative Director & Founder
          </h3>

          {/* Bio Text */}
          <div className="text-left">
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              At the heart of Samson Animation is a mission to help forward-thinking brands, ad agencies, and animation studios make their commercial and broadcast content human and engaging.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Founded by Creative Director James Sutton, the studio blends high-level broadcast execution with sharp storytelling to turn complex concepts into content that leaves a lasting impression.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Born in Puerto Rico and raised in New York City, James brings a multicultural perspective and a storyteller’s instinct to every project. Since earning his degree from Boston University’s College of Communication, he has built a professional studio pedigree—including a voice directing credit on the first season of Agent 203, as well as providing voice direction for international hits like Super Wings and Katuri.
            </p>

            {/* Core Services List */}
            <h4 className="font-bold text-xl mb-4 mt-8 text-white">Core Services:</h4>
            <ul className="space-y-4 text-zinc-300 text-lg leading-relaxed">
              <li>
                <span className="text-[#00e5ff] font-bold">Creative Direction & IP Development:</span> End-to-end oversight of animated campaigns, series development, and pitch consultation for original properties.
              </li>
              <li>
                <span className="text-[#00e5ff] font-bold">Scriptwriting & Punch-Ups:</span> Developing scripts for animation and educational content, or transforming complex technical specs into sharp, conversational dialogue.
              </li>
              <li>
                <span className="text-[#00e5ff] font-bold">Voice Direction:</span> Expertly managing global talent to capture the perfect, emotionally grounded performance for broadcast hits and brand campaigns.
              </li>
              <li>
                <span className="text-[#00e5ff] font-bold">Voice Acting:</span> Providing versatile, professional in-house voice performances across all genres and media formats.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
