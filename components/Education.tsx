"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.2 });
  return (
    <section id="education" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, type:"spring", stiffness:80 }} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <motion.span animate={inView?{rotate:[0,360]}:{}} transition={{ delay:0.3, duration:0.6, type:"spring" }} className="text-2xl">🎓</motion.span>
            <span className="font-mono text-xs text-indigo tracking-[0.2em] uppercase">Education</span>
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>
            Academic Background
          </h2>
        </motion.div>
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ delay:0.15, duration:0.6, type:"spring", stiffness:80 }}
          whileHover={{ x:6 }}
          transition2={{ type:"spring", stiffness:300, damping:20 }}
          className="card rounded-2xl p-6 sm:p-8 max-w-2xl">
          <div className="flex items-start gap-5">
            <motion.div
              whileHover={{ rotate:[0,10,-10,0], scale:1.1 }}
              transition={{ duration:0.4 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl"
              style={{ background:"rgba(99,102,241,0.1)", border:"1px solid rgba(99,102,241,0.2)" }}
            >
              🏫
            </motion.div>
            <div>
              <h3 className="text-white font-semibold text-xl">Bachelor of Engineering</h3>
              <p className="text-indigo font-mono text-sm mt-0.5">Canara Engineering College</p>
              <p className="text-gray text-sm mt-2 leading-relaxed">
                Foundation in software development, algorithms, data structures, and computer science fundamentals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
