import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Download, Link as LinkIcon } from 'lucide-react';

export default function Hero() {
  const name = "Mann Jain.";

  // Premium letter-by-letter entrance
  const letterEntrance = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }
    })
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel text-sm text-emerald-300 mb-10 font-medium border-emerald-500/30 shadow-[0_0_20px_rgba(52,211,153,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Available for opportunities - 2027 Grad
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] font-extrabold tracking-tight mb-8 leading-none">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="block text-3xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            Hi, I'm
          </motion.span>
          
          {/* HUGE, High-Contrast, Continuously Shimmering Name */}
          <div className="flex justify-center flex-wrap">
            {name.split("").map((char, index) => (
              <motion.span 
                key={index} custom={index}
                variants={letterEntrance} initial="hidden" animate="visible"
                className="inline-block bg-clip-text text-transparent bg-[linear-gradient(to_right,#34d399,#ffffff,#a78bfa,#34d399)] animate-gradient-text drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed font-light"
        >
          Software Developer <span className="text-purple-400 font-medium">&</span> Tech Innovator<br/>
          <span className="text-lg text-emerald-400/80 italic mt-2 block">Crafting Digital Experiences Through Code</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/uc?export=download&id=1sw8KsFFIezX_pNQ2x64A0VIUraqVfzbG" 
            target="_blank" rel="noopener noreferrer" 
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg overflow-hidden w-full sm:w-auto justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
              <Download size={22} className="group-hover:-translate-y-1 transition-transform" /> Download Resume
            </span>
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="flex items-center gap-3 px-8 py-4 rounded-full glass-panel font-bold text-lg w-full sm:w-auto justify-center hover:text-white hover:border-emerald-500/50"
          >
            Explore Projects <ArrowRight size={22} className="text-emerald-400" />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="flex items-center gap-3 px-8 py-4 rounded-full glass-panel font-bold text-lg w-full sm:w-auto justify-center hover:text-white hover:border-purple-500/50"
          >
            <LinkIcon size={22} className="text-purple-400" /> Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}