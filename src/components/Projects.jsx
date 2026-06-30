import { motion } from 'framer-motion';
import { Terminal, Code, Rocket, Activity, Layout } from 'lucide-react';

const projects = [
  {
    title: "HireCraftt",
    description: "A next-generation career and recruitment platform. Built to streamline the hiring process with smart resume tracking, candidate management, and a highly responsive, modern user interface.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    icon: <Rocket size={24} />,
    color: "purple",
    codeLink: "https://github.com/mann-jain143/HireCraftt",
    liveLink: "https://hirecraft-nu.vercel.app/"
  },
  {
    title: "GitHub Profile Analyser",
    description: "An interactive developer tool that fetches real-time data from the GitHub API. It beautifully visualizes user statistics, repository metrics, and coding language distributions in an easy-to-read dashboard.",
    tech: ["JavaScript", "GitHub API", "Chart.js", "HTML/CSS"],
    icon: <Activity size={24} />,
    color: "emerald",
    codeLink: "https://github.com/mann-jain143/GitHub-profile-analyser",
    liveLink: "#" // Ready for your live link once deployed
  },
  {
    title: "Premium Dev Portfolio",
    description: "An Awwwards-inspired personal portfolio (this very website!) featuring GPU-accelerated motion graphics, deep glassmorphism UI, and a custom cinematic video background.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS"],
    icon: <Layout size={24} />,
    color: "purple",
    codeLink: "https://github.com/mann-jain143/My-Portfolio",
    liveLink: "https://mann-jain143.github.io/My-Portfolio" // Standard GitHub Pages link
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-emerald-400 mb-4 font-semibold tracking-widest uppercase">
            03 / Projects
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Things I've built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className={`group glass-panel rounded-3xl p-8 flex flex-col relative overflow-hidden ${
                project.color === 'emerald' ? 'hover:border-emerald-500/40' : 'hover:border-purple-500/40'
              }`}
            >
              {/* Premium Icon Wrapper */}
              <div className={`w-14 h-14 rounded-full mb-6 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                project.color === 'emerald' 
                  ? 'bg-emerald-500/20 text-emerald-400 shadow-emerald-500/20' 
                  : 'bg-purple-500/20 text-purple-400 shadow-purple-500/20'
              }`}>
                {project.icon}
              </div>
              
              <div className="flex flex-col flex-grow z-10">
                <h3 className="font-display text-2xl font-bold mb-4 text-white">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-8 flex-grow leading-relaxed font-light">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 pt-2">
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group/link text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-semibold text-sm"
                  >
                    <Code size={18} className="text-purple-400" /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group/link text-slate-400 hover:text-white transition-colors flex items-center gap-2 font-semibold text-sm"
                  >
                    <Terminal size={18} className="text-emerald-400" /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}