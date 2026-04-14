"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section id="education" className="py-16 sm:py-24 lg:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-accent" />
            <span className="text-accent-light text-xs tracking-[0.2em] uppercase font-medium">Education</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white">Academic Background</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ x: 4 }}
          className="glass rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all max-w-2xl shine card"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0">
              <span className="text-accent-light font-display font-bold text-sm">B.E.</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl">Bachelor of Engineering</h3>
              <p className="text-accent-light text-sm mt-0.5">Canara Engineering College</p>
              <p className="text-white/30 text-sm mt-2 leading-relaxed">
                Foundation in software development, algorithms, data structures, and computer science fundamentals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
