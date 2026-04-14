"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineDeviceMobile, HiOutlineGlobe, HiOutlineViewGrid, HiOutlineColorSwatch } from "react-icons/hi";
import ScrambleText from "./ScrambleText";
import TiltCard from "./TiltCard";

const projects = [
  { icon: <HiOutlineDeviceMobile className="text-2xl" />, num: "01", title: "Mobile App — React Native", sub: "Cross-platform iOS & Android", desc: "A cross-platform mobile application built with React Native and Expo. Features smooth navigation, real-time API integration, Redux state management, and a polished UI for both platforms.", tags: ["React Native","Expo","Redux","REST API","TypeScript"], accent: "#6366f1", featured: true },
  { icon: <HiOutlineGlobe className="text-2xl" />, num: "02", title: "Next.js Websites & Web Apps", sub: "SSR · SEO · Web Applications", desc: "Built both SEO-optimized marketing websites and full-featured web applications using Next.js — SSR, SSG, dynamic routing, TypeScript, and seamless API integration.", tags: ["Next.js","TypeScript","SSR","SEO","REST API"], accent: "#8b5cf6", featured: false },
  { icon: <HiOutlineViewGrid className="text-2xl" />, num: "03", title: "React Web Applications", sub: "Dashboards · Portals · SPAs", desc: "Developed scalable React.js web applications — from admin dashboards to complex SPAs — with Redux state management, reusable component libraries, and clean architecture.", tags: ["React.js","Redux","JavaScript","REST API"], accent: "#06b6d4", featured: false },
  { icon: <HiOutlineColorSwatch className="text-2xl" />, num: "04", title: "UI Component Library", sub: "Reusable design system", desc: "A custom reusable component library built with React and TypeScript, designed for scalability and consistency across multiple projects.", tags: ["React.js","TypeScript","CSS3"], accent: "#f59e0b", featured: false },
];

function Card({ p, i }: { p: typeof projects[0]; i: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={p.featured ? "md:col-span-2" : ""}
    >
      <TiltCard
        className="group relative glass rounded-3xl p-6 sm:p-7 border border-white/5 overflow-hidden shine h-full"
        intensity={p.featured ? 4 : 7}
      >
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />

        {/* Number watermark */}
        <span className="absolute top-4 right-5 font-display text-6xl font-bold opacity-[0.03] text-white select-none">{p.num}</span>

        {p.featured && (
          <span className="absolute top-5 right-5 text-xs font-medium px-2.5 py-0.5 rounded-full border z-10"
            style={{ color: p.accent, borderColor: p.accent + "30", background: p.accent + "10" }}>
            Featured
          </span>
        )}

        <div className="flex items-start justify-between mb-5">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-11 h-11 rounded-2xl flex items-center justify-center"
            style={{ color: p.accent, background: p.accent + "15" }}
          >
            {p.icon}
          </motion.div>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <motion.a href="https://github.com/subramanya-a-shet" target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.2, y: -2 }} className="text-white/25 hover:text-white transition-colors">
              <FaGithub />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2, y: -2 }} className="text-white/25 hover:text-white transition-colors">
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </div>
        </div>

        <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 group-hover:text-white transition-colors">{p.title}</h3>
        <p className="text-white/25 text-xs mb-3">{p.sub}</p>
        <p className="text-white/35 text-sm leading-relaxed mb-5">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(t => (
            <motion.span key={t} whileHover={{ scale: 1.08, y: -1 }}
              className="text-xs px-2.5 py-0.5 rounded-full border cursor-default"
              style={{ color: p.accent + "bb", borderColor: p.accent + "20", background: p.accent + "08" }}>
              {t}
            </motion.span>
          ))}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_50%,rgba(99,102,241,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-accent" />
            <span className="text-accent-light text-xs tracking-[0.2em] uppercase font-medium">Projects</span>
          </div>
          <ScrambleText text="Featured Work" tag="h2" delay={100}
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {projects.map((p, i) => <Card key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
