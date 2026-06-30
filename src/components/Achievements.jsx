import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Code2, Coffee, GitMerge } from 'lucide-react';

const stats = [
  { icon: Code2, value: 3, label: "Major Projects", suffix: "+" },
  { icon: GitMerge, value: 150, label: "Git Commits", suffix: "+" },
  { icon: Trophy, value: 5, label: "Core Technologies", suffix: "" },
  { icon: Coffee, value: 500, label: "Hours Coding", suffix: "+" }
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

export default function Achievements() {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel p-6 rounded-3xl flex flex-col items-center justify-center text-center group border-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-emerald-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-slate-400 text-sm mt-2 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}