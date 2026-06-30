import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Code, Code2, GitBranch, Database, Cpu, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Glowing Section Divider Component 
const SectionDivider = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent relative my-2 md:my-4">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none"></div>
  </div>
);

// Individual Floating Icon Component
const FloatingIcon = ({ Icon, x, y, delay, color }) => (
  <motion.div
    initial={{ x: 0, y: 0 }}
    animate={{ 
      y: [-15, 15, -15],
      x: [-10, 10, -10],
      rotate: [-5, 5, -5]
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0d18]/80 border border-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.3)] z-0"
    style={{ left: x, top: y }}
  >
    <Icon size={20} className={color} />
  </motion.div>
);

// Live Glowing Shapes Background matching the photo perfectly
const LiveBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0b12] pointer-events-none">
      
      {/* Rich Ambient Lighting (Replaces the pure black) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_30%,_rgba(76,29,149,0.25)_0%,_transparent_40%),radial-gradient(circle_at_100%_10%,_rgba(6,95,70,0.15)_0%,_transparent_40%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,_rgba(76,29,149,0.2)_0%,_transparent_50%),radial-gradient(circle_at_20%_90%,_rgba(6,95,70,0.1)_0%,_transparent_40%)]"></div>

      {/* Big Smooth Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

      {/* Floating Glass Tech Icons */}
      <FloatingIcon Icon={Code} x="12vw" y="25vh" delay={0} color="text-purple-400/80" />
      <FloatingIcon Icon={GitBranch} x="50vw" y="12vh" delay={2} color="text-purple-400/80" />
      <FloatingIcon Icon={Code2} x="82vw" y="22vh" delay={1} color="text-emerald-400/80" />
      <FloatingIcon Icon={Cpu} x="18vw" y="75vh" delay={3} color="text-purple-400/80" />
      <FloatingIcon Icon={Database} x="85vw" y="70vh" delay={2.5} color="text-emerald-400/80" />
      <FloatingIcon Icon={Sparkles} x="68vw" y="85vh" delay={4} color="text-purple-400/80" />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && (
        <motion.div 
          initial={{ y: 0 }} animate={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.2 }}
          className="fixed inset-0 z-[100] bg-[#0a0b12] flex items-center justify-center"
        >
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
            <p className="mt-4 font-display font-bold text-2xl tracking-widest text-gradient">MANN JAIN</p>
          </motion.div>
        </motion.div>
      )}

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-emerald-400 to-purple-600 z-[60] origin-left" 
        style={{ scaleX }} 
      />

      {/* Removed bg-[#030303] so the new LiveBackground glows through properly */}
      <div className="min-h-screen text-slate-50 relative overflow-hidden">
        
        <LiveBackground />
        <Navbar />
        
        <main className="flex flex-col gap-0 overflow-hidden pt-10 relative z-10">
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Achievements /> 
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;