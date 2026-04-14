"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrambleText from "./ScrambleText";
import TiltCard from "./TiltCard";

const skills = [
  { name: "Tailwind CSS", pct: 90, color: "#38bdf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "React.js", pct: 95, color: "#61dafb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", pct: 92, color: "#a78bfa", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React Native", pct: 90, color: "#61dafb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Expo", pct: 90, color: "#818cf8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", pct: 82, color: "#60a5fa", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", pct: 92, color: "#f7df1e", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Redux", pct: 88, color: "#a78bfa", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Zustand", pct: 80, color: "#f97316", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", pct: 95, color: "#f97316", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", pct: 90, color: "#60a5fa", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SEO", pct: 80, color: "#34d399", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Turborepo", pct: 75, color: "#ef4444", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "pnpm Workspaces", pct: 75, color: "#f59e0b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Nx Workspaces", pct: 70, color: "#143055", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Microfrontends", pct: 72, color: "#8b5cf6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Module Federation", pct: 70, color: "#60a5fa", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  { name: "GitHub Actions", pct: 75, color: "#f0f6ff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Cloudflare", pct: 72, color: "#f6821f", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
  { name: "Git", pct: 88, color: "#f97316", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const tags = ["React.js","Next.js","React Native","Expo","TypeScript","JavaScript","Redux","Zustand","HTML5","CSS3","REST APIs","SEO","Turborepo","pnpm","Nx","Microfrontends","Module Federation","GitHub Actions","Cloudflare","CI/CD","Git","SSR","Monorepo","Performance"];

function SkillCard({ s, i }: { s: typeof skills[0]; i: number }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.035 }}
    >
      <TiltCard className="glass rounded-2xl p-4 sm:p-5 border border-white/5 shine group" intensity={6}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform flex-shrink-0">
            <img src={s.icon} alt={s.name} className="w-full h-full object-contain" loading="lazy" />
          </div>
          <span className="text-white/70 text-sm font-medium flex-1 truncate">{s.name}</span>
          <span className="text-xs font-semibold flex-shrink-0" style={{ color: s.color }}>{s.pct}%</span>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${s.color}44, ${s.color})` }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: i * 0.035 + 0.2, ease: "easeOut" }}
          />
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 100% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)" }} />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-accent" />
            <span className="text-accent-light text-xs tracking-[0.2em] uppercase font-medium">Skills</span>
          </div>
          <ScrambleText text="Tech Stack" tag="h2" delay={100}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white" />
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {skills.map((s, i) => <SkillCard key={s.name} s={s} i={i} />)}
        </div>
      </div>
      {/* Marquee */}
      <div className="overflow-hidden py-4 border-y border-white/5 mt-4">
        <div className="flex gap-8 marquee whitespace-nowrap">
          {[...tags, ...tags].map((t, i) => (
            <span key={i}
              className="text-xs text-white/12 hover:text-white/40 transition-colors cursor-default flex-shrink-0 flex items-center gap-6 tracking-[0.15em] uppercase">
              {t} <span className="text-accent/15">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
