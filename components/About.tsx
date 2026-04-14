"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const techList = [
  { name:"React.js", emoji:"⚛️" },
  { name:"Next.js", emoji:"▲" },
  { name:"React Native", emoji:"📱" },
  { name:"TypeScript", emoji:"🔷" },
  { name:"Expo", emoji:"🚀" },
  { name:"Redux / Zustand", emoji:"🗃️" },
  { name:"Tailwind CSS", emoji:"🎨" },
  { name:"SEO", emoji:"🔍" },
  { name:"CI/CD", emoji:"⚙️" },
  { name:"Turborepo", emoji:"⚡" },
  { name:"Microfrontends", emoji:"🧩" },
  { name:"Module Federation", emoji:"🔗" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  const [hoveredTech, setHoveredTech] = useState<string|null>(null);

  return (
    <section id="about" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* Section label */}
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, type:"spring", stiffness:80 }} className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <motion.span
              animate={inView?{ rotate:[0,360] }:{}}
              transition={{ delay:0.3, duration:0.6, type:"spring" }}
              className="text-2xl"
            >🧑‍💻</motion.span>
            <span className="font-mono text-xs text-indigo tracking-[0.2em] uppercase">About Me</span>
          </div>
          <h2 className="font-display font-bold text-white leading-tight"
            style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>
            A bit about{" "}
            <motion.span
              animate={{ color:["#ffffff","#6366f1","#ffffff"] }}
              transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
            >
              who I am
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Text — 3 cols */}
          <motion.div initial={{ opacity:0, x:-24 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:0.7, delay:0.1, type:"spring", stiffness:80 }}
            className="lg:col-span-3 space-y-5 text-gray text-sm sm:text-base leading-relaxed">
            <p>
              I&apos;m a <span className="text-white font-medium">Frontend Developer</span> with over{" "}
              <span className="text-white font-medium">3 years</span> of experience building responsive
              web and mobile applications. I started with{" "}
              <span className="text-indigo font-medium">React Native + Expo</span> — building cross-platform
              mobile apps — then expanded into{" "}
              <span className="text-indigo font-medium">Next.js</span> for SEO-optimized websites and web apps
              with SSR, and <span className="text-indigo font-medium">React.js</span> for scalable frontend architectures.
            </p>
            <p>
              Beyond writing code, I set up <span className="text-white font-medium">CI/CD pipelines</span> with
              GitHub Actions and Cloudflare, manage{" "}
              <span className="text-white font-medium">monorepos</span> with Turborepo and Nx, and lead
              frontend teams — mentoring developers and driving projects from idea to production.
            </p>
            <p>
              I care deeply about performance, accessibility, and the details that make an interface feel right.
              When I&apos;m not coding, I&apos;m probably exploring new tech or drinking too much coffee ☕
            </p>

            {/* Tech list — interactive */}
            <div className="pt-2">
              <p className="text-white text-sm font-medium mb-4">Technologies I work with:</p>
              <div className="flex flex-wrap gap-2">
                {techList.map((t, i) => (
                  <motion.div key={t.name}
                    initial={{ opacity:0, scale:0.8 }}
                    animate={inView?{ opacity:1, scale:1 }:{}}
                    transition={{ delay:0.3+i*0.04, type:"spring", stiffness:200, damping:15 }}
                    whileHover={{ scale:1.1, y:-3 }}
                    whileTap={{ scale:0.95 }}
                    onHoverStart={() => setHoveredTech(t.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                    className="flex items-center gap-1.5 bg-bg-2 border border-white/6 rounded-full px-3 py-1.5 cursor-default transition-all duration-200"
                    style={{ borderColor: hoveredTech===t.name ? "rgba(99,102,241,0.4)" : undefined }}
                  >
                    <span className="text-sm">{t.emoji}</span>
                    <span className="font-mono text-xs text-gray">{t.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats — 2 cols */}
          <motion.div initial={{ opacity:0, x:24 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:0.7, delay:0.2, type:"spring", stiffness:80 }}
            className="lg:col-span-2 space-y-4">
            {[
              { num:"3+", label:"Years of Experience", emoji:"📅", desc:"Building web & mobile" },
              { num:"20+", label:"Projects Shipped", emoji:"🚢", desc:"Across web and mobile" },
              { num:"4", label:"Companies", emoji:"🏢", desc:"From intern to lead" },
              { num:"∞", label:"Curiosity", emoji:"🧠", desc:"Always learning" },
            ].map((s,i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
                transition={{ delay:0.3+i*0.1, type:"spring", stiffness:100 }}
                whileHover={{ x:6, borderColor:"rgba(99,102,241,0.3)" }}
                className="card rounded-2xl p-5 flex items-center gap-4">
                <motion.span
                  whileHover={{ rotate:[0,20,-20,0], scale:1.3 }}
                  transition={{ duration:0.4 }}
                  className="text-2xl flex-shrink-0"
                >{s.emoji}</motion.span>
                <div>
                  <div className="font-display text-2xl font-bold text-white">{s.num}</div>
                  <div className="text-white text-xs font-medium">{s.label}</div>
                  <div className="text-gray text-xs">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
