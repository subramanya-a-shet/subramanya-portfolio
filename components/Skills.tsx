"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name:"React.js", pct:95, color:"#61dafb", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name:"Next.js", pct:92, color:"#a78bfa", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name:"React Native", pct:90, color:"#61dafb", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name:"Expo", pct:90, color:"#818cf8", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name:"TypeScript", pct:82, color:"#60a5fa", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name:"JavaScript", pct:92, color:"#f7df1e", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name:"Tailwind CSS", pct:90, color:"#38bdf8", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name:"Redux", pct:88, color:"#a78bfa", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name:"Zustand", pct:80, color:"#f97316", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name:"HTML5 / CSS3", pct:95, color:"#f97316", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name:"SEO", pct:80, color:"#34d399", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name:"GitHub Actions", pct:75, color:"#e2e8f0", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name:"Turborepo", pct:75, color:"#ef4444", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name:"Git", pct:88, color:"#f05032", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const tags = ["React.js","Next.js","React Native","Expo","TypeScript","Redux","Zustand","Tailwind","SEO","CI/CD","Turborepo","Nx","Microfrontends","Module Federation","GitHub Actions","Cloudflare","SSR","Performance"];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  return (
    <section id="skills" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, type:"spring", stiffness:80 }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <motion.span animate={inView?{rotate:[0,360]}:{}} transition={{ delay:0.3, duration:0.6, type:"spring" }} className="text-2xl">⚡</motion.span>
            <span className="font-mono text-xs text-indigo tracking-[0.2em] uppercase">Skills</span>
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-12">
          {skills.map((s,i) => {
            const { ref:bRef, inView:bv } = useInView({ triggerOnce:true });
            return (
              <motion.div key={s.name} ref={bRef}
                initial={{ opacity:0, scale:0.8, y:16 }}
                animate={inView?{ opacity:1, scale:1, y:0 }:{}}
                transition={{ delay:i*0.04, type:"spring", stiffness:150, damping:15 }}
                whileHover={{ y:-4, scale:1.04 }}
                transition2={{ type:"spring", stiffness:400, damping:12 }}
                className="card rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <img src={s.icon} alt={s.name} className="w-6 h-6 object-contain flex-shrink-0" loading="lazy" />
                  <span className="text-white text-xs font-medium truncate">{s.name}</span>
                </div>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-xs" style={{ color:s.color }}>{s.pct}%</span>
                </div>
                <div className="h-1 bg-bg-4 rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full"
                    style={{ background:`linear-gradient(90deg,${s.color}44,${s.color})` }}
                    initial={{ width:0 }}
                    animate={bv?{ width:`${s.pct}%` }:{ width:0 }}
                    transition={{ duration:1.2, delay:i*0.04+0.2, ease:"easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-white/5 py-3">
        <div className="flex gap-8 marquee whitespace-nowrap">
          {[...tags,...tags].map((t,i) => (
            <span key={i} className="font-mono text-xs text-gray-2 flex items-center gap-6 flex-shrink-0">
              {t} <span className="text-indigo/20">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
