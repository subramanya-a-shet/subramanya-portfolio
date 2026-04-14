"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const jobs = [
  { company:"Sclera", emoji:"🏢", title:"Frontend Developer", range:"Apr 2026 – Present",
    points:["Leading frontend development of scalable React.js and Next.js web applications.","Guiding and mentoring the frontend team, reviewing code, and driving features from concept to production.","Building high-performance reusable UI components and integrating RESTful APIs.","Setting up CI/CD pipelines and managing monorepo architecture."],
    tags:["React.js","Next.js","TypeScript","Redux","Leadership"] },
  { company:"Sclera", emoji:"🏢", title:"Associate Frontend Dev", range:"Mar 2024 – Mar 2026",
    points:["Built scalable React.js and Next.js web apps and React Native mobile apps using Expo.","Developed reusable UI libraries and integrated REST APIs.","Managed application state with Redux and wrote TypeScript for type-safe codebases."],
    tags:["React.js","Next.js","React Native","TypeScript","Redux","Expo"] },
  { company:"ARL", emoji:"🔬", title:"Junior Frontend Dev", range:"Jun 2023 – Mar 2024",
    points:["Developed responsive web interfaces using HTML5, CSS3, and JavaScript.","Built and maintained frontend features with a focus on performance and cross-browser compatibility.","Collaborated with backend teams to integrate APIs."],
    tags:["HTML5","CSS3","JavaScript","React.js","REST APIs"] },
  { company:"ARL", emoji:"🔬", title:"Software Dev Intern", range:"Mar 2023 – May 2023",
    points:["Contributed to frontend development as an intern, building responsive UIs.","Gained hands-on experience with React.js and modern web development practices."],
    tags:["JavaScript","React.js","HTML5","CSS3"] },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });

  return (
    <section id="experience" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, type:"spring", stiffness:80 }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <motion.span animate={inView?{rotate:[0,360]}:{}} transition={{ delay:0.3, duration:0.6, type:"spring" }} className="text-2xl">💼</motion.span>
            <span className="font-mono text-xs text-indigo tracking-[0.2em] uppercase">Experience</span>
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ delay:0.2, duration:0.6, type:"spring", stiffness:80 }}
          className="flex flex-col sm:flex-row gap-0">
          {/* Tabs */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-visible scrollbar-none border-b-2 sm:border-b-0 sm:border-l-2 border-bg-3 mb-6 sm:mb-0 sm:mr-10 flex-shrink-0">
            {jobs.map((j,i) => (
              <motion.button key={i} onClick={() => setActive(i)}
                whileHover={{ x: 3 }}
                transition={{ type:"spring", stiffness:400, damping:15 }}
                className={`font-mono text-xs px-5 py-3.5 whitespace-nowrap text-left transition-all duration-200 border-b-2 sm:border-b-0 sm:border-l-2 -mb-0.5 sm:-ml-0.5 flex items-center gap-2 ${
                  active===i ? "border-indigo text-white bg-indigo/5" : "border-transparent text-gray hover:text-white hover:bg-white/3"
                }`}>
                <span>{j.emoji}</span>{j.company}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity:0, x:16, scale:0.98 }}
                animate={{ opacity:1, x:0, scale:1 }}
                exit={{ opacity:0, x:-16, scale:0.98 }}
                transition={{ duration:0.25, type:"spring", stiffness:200, damping:20 }}>
                <h3 className="text-white font-semibold text-lg mb-0.5">
                  {jobs[active].title}{" "}
                  <span className="text-indigo">@ {jobs[active].company}</span>
                </h3>
                <p className="font-mono text-xs text-gray mb-5">{jobs[active].range}</p>
                <ul className="space-y-3 mb-5">
                  {jobs[active].points.map((p,i) => (
                    <motion.li key={i}
                      initial={{ opacity:0, x:12 }} animate={{ opacity:1, x:0 }}
                      transition={{ delay:i*0.07, type:"spring", stiffness:150 }}
                      className="flex gap-3 text-sm text-gray leading-relaxed">
                      <span className="text-indigo mt-1 flex-shrink-0">▹</span>{p}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {jobs[active].tags.map(t => (
                    <motion.span key={t}
                      whileHover={{ scale:1.08, y:-2 }}
                      transition={{ type:"spring", stiffness:400, damping:12 }}
                      className="font-mono text-xs text-indigo bg-indigo/8 border border-indigo/15 px-3 py-1 rounded-full cursor-default">
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
