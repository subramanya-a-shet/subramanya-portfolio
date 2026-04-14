"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ScrambleText from "./ScrambleText";

const exp = [
  { title: "Frontend Developer", company: "Sclera", duration: "Apr 2026 – Present", type: "Full-time", desc: "Leading frontend development of scalable React.js and Next.js web applications. Guiding and mentoring the frontend team, reviewing code, and driving features from concept to production. Building high-performance reusable UI components and integrating RESTful APIs.", tags: ["React.js","Next.js","TypeScript","Redux","REST APIs","Leadership"], current: true },
  { title: "Associate Frontend Developer", company: "Sclera", duration: "Mar 2024 – Mar 2026", type: "Full-time", desc: "Built scalable React.js and Next.js web apps and React Native mobile apps using Expo. Developed reusable UI libraries, integrated REST APIs, managed state with Redux.", tags: ["React.js","Next.js","React Native","TypeScript","Redux","Expo"], current: false },
  { title: "Junior Frontend Developer", company: "Access Research Labs — ARL", duration: "Jun 2023 – Mar 2024", type: "Full-time", desc: "Developed responsive web interfaces using HTML5, CSS3, and JavaScript. Built and maintained frontend features with a focus on performance and cross-browser compatibility.", tags: ["HTML5","CSS3","JavaScript","React.js","REST APIs"], current: false },
  { title: "Software Developer Intern", company: "Access Research Labs — ARL", duration: "Mar 2023 – May 2023", type: "Internship", desc: "Contributed to frontend development as an intern, building responsive UIs and gaining hands-on experience with React.js and modern web development practices.", tags: ["JavaScript","React.js","HTML5","CSS3"], current: false },
];

function Card({ e, i }: { e: typeof exp[0]; i: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {i < exp.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
          className="absolute left-[9px] top-6 bottom-0 w-px origin-top"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)" }}
        />
      )}

      {/* Dot */}
      <motion.div
        whileHover={{ scale: 1.4 }}
        className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer ${e.current ? "border-accent bg-accent/10" : "border-white/15"}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${e.current ? "bg-accent" : "bg-white/20"} ${expanded ? "scale-150" : ""}`} />
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        onClick={() => setExpanded(!expanded)}
        className="glass rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-white/10 transition-all shine cursor-pointer"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg">{e.title}</h3>
            <span className="text-accent-light text-sm">@ {e.company}</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            {e.current ? (
              <span className="flex items-center gap-1.5 text-xs text-accent-light bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Current
              </span>
            ) : (
              <span className="text-xs text-white/25 border border-white/8 px-2.5 py-0.5 rounded-full">{e.duration}</span>
            )}
            <span className="text-xs text-white/20">{e.type}</span>
          </div>
        </div>

        {e.current && <p className="text-xs text-white/25 mb-2">{e.duration}</p>}

        {/* Expandable description */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="text-white/35 text-sm leading-relaxed mb-4 pt-1">{e.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {!expanded && (
          <p className="text-white/20 text-xs mb-3">Click to expand ↓</p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {e.tags.map(t => (
            <motion.span key={t}
              whileHover={{ scale: 1.08, y: -1 }}
              className="text-xs px-2.5 py-0.5 rounded-full border border-accent/15 text-accent-light/60 bg-accent/5 cursor-default">
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-accent" />
            <span className="text-accent-light text-xs tracking-[0.2em] uppercase font-medium">Experience</span>
          </div>
          <ScrambleText text="Work History" tag="h2" delay={100}
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white" />
          <p className="text-white/20 text-xs mt-2">Click any card to expand details</p>
        </motion.div>
        <div className="max-w-3xl">
          {exp.map((e, i) => <Card key={i} e={e} i={i} />)}
        </div>
      </div>
    </section>
  );
}
