import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';



const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Contact'];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#030303]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-2xl tracking-tighter uppercase relative group">
          Mann <span className="text-purple-500 transition-colors group-hover:text-emerald-400">Jain.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setActive(link)}
              onMouseLeave={() => setActive('')}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
            >
              {link}
              {active === link && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </a>
          ))}
          <a href="#contact" className="relative group px-6 py-2.5 rounded-full bg-white text-[#030303] font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-purple-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">Let's Talk</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-2xl py-6 px-6 flex flex-col gap-6 md:hidden border-b border-white/10"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-slate-300 text-lg font-medium hover:text-purple-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}