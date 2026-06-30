import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Link as LinkIcon } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-sm text-slate-400 mb-6 border border-white/10">
              <span className="text-purple-400">#4 /</span> CONTACT
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Let's build something <span className="text-gradient">extraordinary.</span></h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              I'm currently seeking new opportunities, collaborations, and projects. Whether you have a question or just want to say hi, my inbox is open!
            </p>
            
            <div className="space-y-6">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-5 text-slate-300">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(147,51,234,0.15)]">
                  <Mail size={24} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1 font-medium">Email</p>
                  <a href="mailto:mannjain4885@gmail.com" className="font-medium text-lg hover:text-purple-400 transition-colors">
                    mannjain4885@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-5 text-slate-300">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.15)]">
                  <LinkIcon size={24} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1 font-medium">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/m-mann-kumar-b23453" target="_blank" rel="noopener noreferrer" className="font-medium text-lg hover:text-emerald-400 transition-colors">
                    Connect with me
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-10 rounded-3xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Your Name</label>
                <input type="text" className="w-full bg-[#030303]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#030303]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Project Details</label>
                <textarea rows="4" className="w-full bg-[#030303]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 focus:bg-white/5 transition-all resize-none" placeholder="Tell me about what you want to build..."></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)] flex items-center justify-center gap-2 mt-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-shadow"
              >
                Send Message <Send size={20} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}