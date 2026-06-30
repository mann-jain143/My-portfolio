import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    color: "purple",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ]
  },
  {
    title: "Backend & Core",
    color: "emerald",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 50 },
      { name: "Spring Boot", level: 70 },
      { name: "Node.js", level: 70 },
    ]
  },
  {
    title: "Databases",
    color: "purple",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "SQL Design", level: 85 },
    ]
  },
  {
    title: "Tools & Tech",
    color: "emerald",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "REST APIs", level: 80 },
      { name: "Postman", level: 85 },
    ]
  }
];

const coreSkills = [
  "Data Structures",
  "OOP Concepts",
  "Responsive Design",
  "API Integration",
  "Debugging",
  "Problem Solving"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-sm text-purple-400 mb-6 font-semibold uppercase tracking-wider">
            #2 / Skills
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">My technical toolkit</h2>
        </motion.div>

        {/* Animated Progress Bar Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-panel p-8 rounded-3xl group ${category.color === 'emerald' ? 'hover:border-emerald-500/30' : 'hover:border-purple-500/30'}`}
            >
              <h3 className="font-display text-2xl font-bold mb-8 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-semibold mb-3">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-[#0a0a0a] rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + (idx * 0.1) }}
                        className={`h-full rounded-full ${
                          category.color === 'purple' 
                            ? 'bg-gradient-to-r from-purple-600 to-purple-400 shadow-[0_0_15px_rgba(147,51,234,0.5)]' 
                            : 'bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Core Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-8 rounded-3xl text-center"
        >
          <h3 className="text-sm font-bold text-slate-500 mb-6 uppercase tracking-widest">Core Capabilities</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreSkills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ y: -3, scale: 1.05 }}
                className="px-5 py-2.5 rounded-xl bg-[#0a0a0a]/80 border border-white/10 text-slate-300 font-medium hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white transition-all cursor-default shadow-lg"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}