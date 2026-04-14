"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrambleText from "./ScrambleText";
import TiltCard from "./TiltCard";

const pillars = [
  {
    num: "01",
    title: "Mobile Apps with React Native & Expo",
    desc: "Building cross-platform iOS & Android apps using React Native and Expo — smooth navigation, native APIs, and polished UIs that feel truly native.",
    color: "#6366f1",
  },
  {
    num: "02",
    title: "Websites & Web Apps with React & Next.js",
    desc: "Built both marketing websites and complex web applications using React.js and Next.js — SSR, SSG, SEO optimization, dynamic routing, and REST API integration.",
    color: "#8b5cf6",
  },
  {
    num: "03",
    title: "CI/CD, Monorepo & Team Leadership",
    desc: "Setting up CI/CD pipelines with GitHub Actions and Cloudflare. Managing monorepos with Turborepo, Nx, and pnpm workspaces. Leading and mentoring frontend teams.",
    color: "#06b6d4",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 0% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)" }} />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 h-px bg-accent" />
              <span className="text-accent-light text-xs tracking-[0.2em] uppercase font-medium">About</span>
            </div>

            <ScrambleText
              text="Building interfaces"
              tag="h2"
              delay={200}
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
            />
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8"
              style={{ color: "rgba(255,255,255,0.2)" }}>
              people love to use
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              <p>
                I&apos;m a <span style={{ color: "rgba(255,255,255,0.8)" }}>Frontend Developer</span> with over{" "}
                <span style={{ color: "rgba(255,255,255,0.8)" }}>3 years</span> of experience — constantly
                exploring, building, and pushing the boundaries of what frontend can do.
              </p>
              <p>
                I work across the full React ecosystem:{" "}
                <span className="text-accent-light">React Native + Expo</span> for mobile,{" "}
                <span className="text-accent-light">React.js & Next.js</span> for both marketing websites
                and complex web applications — with SSR, SEO, and clean architecture.
              </p>
              <p>
                Beyond code — I set up <span className="text-accent-light">CI/CD pipelines</span> with
                GitHub Actions and Cloudflare, manage <span className="text-accent-light">monorepos</span> with
                Turborepo and Nx, and lead frontend teams — mentoring developers and driving delivery.
              </p>
            </div>
          </motion.div>

          {/* Right — tilt cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {pillars.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12 }}
              >
                <TiltCard className="glass rounded-2xl p-5 sm:p-6 border border-white/5 shine">
                  <div className="flex items-start gap-4">
                    <span className="font-display font-bold text-2xl leading-none mt-0.5 flex-shrink-0"
                      style={{ color: p.color + "35" }}>
                      {p.num}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1.5 transition-colors duration-200"
                        onMouseEnter={e => (e.currentTarget.style.color = p.color)}
                        onMouseLeave={e => (e.currentTarget.style.color = "white")}
                      >
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>{p.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
