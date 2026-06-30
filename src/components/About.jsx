import { motion } from 'framer-motion';
import { User, Target, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-sm text-purple-400 mb-6 font-semibold uppercase tracking-wider">
            #1 / About
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">A glimpse of who I am</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-2 glass-panel p-10 rounded-3xl group relative overflow-hidden"
          >
            {/* Internal Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-[60px] group-hover:bg-purple-600/40 transition-colors duration-500"></div>
            
            <div className="flex items-center gap-5 mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shadow-[0_0_20px_rgba(147,51,234,0.15)] group-hover:scale-110 transition-transform duration-500">
                <User size={30} />
              </div>
              <h3 className="font-display text-4xl font-bold">My Journey</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-xl mb-6 relative z-10 font-light">
              I am a Computer Science student with a strong interest in software engineering and modern web development. My journey started with Java programming and gradually expanded into HTML, CSS, JavaScript, React, SQL, and database management.
            </p>
            <p className="text-slate-300 leading-relaxed text-xl relative z-10 font-light">
              I enjoy building responsive websites, experimenting with new technologies, and solving programming challenges. My goal is to become a skilled software engineer capable of building impactful applications and innovative solutions.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-panel-emerald p-8 rounded-3xl flex-1 group">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:rotate-12 transition-transform duration-500">
                  <Target size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold group-hover:text-emerald-400 transition-colors">Career Goal</h3>
              </div>
              <p className="text-slate-300 text-lg font-light">To become a professional software engineer and build innovative applications that solve real-world problems.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-panel p-8 rounded-3xl flex-1 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:-rotate-12 transition-transform duration-500">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold group-hover:text-purple-400 transition-colors">Core Interests</h3>
              </div>
              <ul className="text-slate-300 space-y-3 font-light text-lg">
                {['Software Development', 'Web Development', 'Artificial Intelligence', 'UI/UX Design', 'Database Systems'].map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 10, color: "#fff" }} className="flex items-center gap-3 transition-colors cursor-default">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.8)]"></div> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}