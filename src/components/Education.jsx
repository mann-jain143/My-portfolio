import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-emerald-400 mb-4 font-semibold tracking-widest uppercase">
            04 / EDUCATION
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Academic journey</h2>
        </motion.div>

        {/* Education Timeline Card */}
        <div className="relative pl-8 md:pl-0">
          {/* Vertical Glowing Line */}
          <div className="absolute left-0 md:left-[-20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-emerald-500/50 to-transparent"></div>
          
          {/* Glowing Dot */}
          <div className="absolute left-[-5px] md:left-[-25px] top-10 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] border-2 border-[#030303]"></div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl relative"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-emerald-500/20 flex items-center justify-center text-white border border-white/10 shadow-lg">
                <GraduationCap size={32} />
              </div>
              
              <div>
                <p className="text-emerald-400 font-bold mb-1 tracking-wide">2023 - 2027</p>
                <h3 className="font-display text-2xl font-bold text-white mb-2">B.Tech, Computer Science (AI)</h3>
                <p className="text-slate-400 font-medium mb-6">G. Pullaiah College of Engineering & Technology</p>
                
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Relevant Areas</h4>
                <div className="flex flex-wrap gap-3">
                  {['Software Development', 'Web Technologies', 'Data Structures', 'Artificial Intelligence'].map((area, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full border border-emerald-500/30 text-emerald-300 text-sm font-medium bg-emerald-500/5">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Career Objective Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-10 rounded-3xl mt-12"
        >
          <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Career Objective</h4>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
            Seeking opportunities as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 font-semibold">Software Developer</span> where I can apply my technical knowledge, contribute to innovative projects, and continuously grow as a technology professional.
          </p>
        </motion.div>

      </div>
    </section>
  );
}