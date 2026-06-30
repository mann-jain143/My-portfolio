import { Terminal, Mail, Link as LinkIcon, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#030303] py-12 relative z-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="font-display font-bold tracking-tighter text-2xl uppercase relative group">
          Mann <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-400">Jain.</span>
        </div>
        
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Mann Jain. Crafted with React & Motion.
        </p>

        <div className="flex gap-6 justify-center items-center">
          <motion.a whileHover={{ y: -3 }} href="https://github.com/mann-jain143" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Terminal size={22} />
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/m-mann-kumar-b23453" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
            <LinkIcon size={22} />
          </motion.a>
          <motion.a whileHover={{ y: -3 }} href="mailto:mannjain4885@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors">
            <Mail size={22} />
          </motion.a>
          
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}