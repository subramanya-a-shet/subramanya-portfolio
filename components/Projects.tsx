"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { emoji:"📱", num:"01", title:"Mobile App — React Native", sub:"Cross-platform iOS & Android", desc:"A cross-platform mobile application built with React Native and Expo. Features smooth navigation, real-time API integration, Redux state management, and a polished UI for both platforms.", tags:["React Native","Expo","Redux","TypeScript","REST API"], featured:true },
  { emoji:"🌐", num:"02", title:"Next.js Websites & Web Apps", sub:"SSR · SEO · Web Applications", desc:"Built both SEO-optimized marketing websites and full-featured web applications using Next.js — SSR, SSG, dynamic routing, TypeScript, and seamless API integration.", tags:["Next.js","TypeScript","SSR","SEO","REST API"], featured:false },
  { emoji:"⚡", num:"03", title:"React Web Applications", sub:"Dashboards · Portals · SPAs", desc:"Scalable React.js web applications — from admin dashboards to complex SPAs — with Redux state management, reusable component libraries, and clean architecture.", tags:["React.js","Redux","JavaScript","REST API"], featured:false },
  { emoji:"🎨", num:"04", title:"UI Component Library", sub:"Reusable design system", desc:"Custom reusable component library built with React and TypeScript, designed for scalability and consistency across multiple projects.", tags:["React.js","TypeScript","CSS3"], featured:false },
];

function Card({ p, i }: { p:typeof projects[0]; i:number }) {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:32, scale:0.97 }}
      animate={inView?{ opacity:1, y:0, scale:1 }:{}}
      transition={{ duration:0.5, delay:i*0.1, type:"spring", stiffness:100, damping:20 }}
      whileHover={{ y:-8, scale:1.02 }}
      transition2={{ type:"spring", stiffness:300, damping:20 }}
      className={`group card rounded-3xl p-6 sm:p-7 overflow-hidden relative ${p.featured?"md:col-span-2":""}`}
    >
      {/* Top accent on hover */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {p.featured && (
        <motion.span
          initial={{ opacity:0, scale:0.8 }} animate={inView?{opacity:1,scale:1}:{}}
          transition={{ delay:0.3, type:"spring" }}
          className="absolute top-5 right-5 text-xs font-mono text-indigo bg-indigo/10 border border-indigo/20 px-2.5 py-0.5 rounded-full z-10">
          Featured ⭐
        </motion.span>
      )}

      <div className="flex items-start justify-between mb-5">
        <motion.span
          whileHover={{ rotate:[0,20,-20,0], scale:1.3 }}
          transition={{ duration:0.4 }}
          className="text-4xl cursor-default"
        >{p.emoji}</motion.span>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.a href="https://github.com/subramanya-a-shet" target="_blank" rel="noreferrer"
            whileHover={{ scale:1.2, y:-2 }} className="text-gray hover:text-white transition-colors">
            <FaGithub />
          </motion.a>
          <motion.a href="#" whileHover={{ scale:1.2, y:-2 }} className="text-gray hover:text-white transition-colors">
            <FaExternalLinkAlt className="text-sm" />
          </motion.a>
        </div>
      </div>

      <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 group-hover:text-indigo transition-colors duration-200">{p.title}</h3>
      <p className="text-xs font-mono text-gray mb-3">{p.sub}</p>
      <p className="text-gray text-sm leading-relaxed mb-5">{p.desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map(t => (
          <motion.span key={t}
            whileHover={{ scale:1.08, y:-1 }}
            transition={{ type:"spring", stiffness:400, damping:12 }}
            className="font-mono text-xs text-indigo bg-indigo/8 border border-indigo/15 px-2.5 py-0.5 rounded-full cursor-default">
            {t}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  return (
    <section id="projects" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, type:"spring", stiffness:80 }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <motion.span animate={inView?{rotate:[0,360]}:{}} transition={{ delay:0.3, duration:0.6, type:"spring" }} className="text-2xl">🛠️</motion.span>
            <span className="font-mono text-xs text-indigo tracking-[0.2em] uppercase">Projects</span>
          </div>
          <h2 className="font-display font-bold text-white" style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>
            Things I&apos;ve Built
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p,i) => <Card key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
