"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";

const stats = [
  { value:3, suffix:"+", label:"Years Exp." },
  { value:20, suffix:"+", label:"Projects" },
  { value:null, suffix:"∞", label:"Curiosity" },
];

// Whimsical floating decoration component
function FloatingDeco({ children, delay=0, x=0, y=0 }: { children:React.ReactNode; delay?:number; x?:number; y?:number }) {
  return (
    <motion.div
      initial={{ opacity:0, scale:0, rotate:-20 }}
      animate={{ opacity:1, scale:1, rotate:0 }}
      transition={{ delay, duration:0.6, type:"spring", stiffness:200, damping:15 }}
      style={{ position:"absolute", left:x, top:y }}
      whileHover={{ scale:1.3, rotate:15, transition:{ type:"spring", stiffness:400, damping:10 } }}
      className="cursor-default select-none"
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce:true });
  const { scrollY } = useScroll();
  const rawImgY = useTransform(scrollY, [0,600], [0,60]);
  const imgY = useSpring(rawImgY, { stiffness:100, damping:30 });
  const opacity = useTransform(scrollY, [0,400], [1,0]);
  const [hovered, setHovered] = useState<number|null>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
          style={{ background:"radial-gradient(circle,#6366f1,transparent)" }} />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — Text */}
          <div className="order-2 lg:order-1">
            {/* Greeting with wave emoji */}
            <motion.div
              initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
              transition={{ delay:0.1 }}
              className="flex items-center gap-2 mb-5"
            >
              <motion.span
                animate={{ rotate:[0,20,0,20,0] }}
                transition={{ delay:1, duration:1, repeat:Infinity, repeatDelay:3 }}
                className="text-2xl"
              >
                👋
              </motion.span>
              <span className="font-mono text-sm text-indigo">Hi, I&apos;m</span>
            </motion.div>

            {/* Name — spring entrance */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y:"110%", opacity:0 }}
                animate={{ y:"0%", opacity:1 }}
                transition={{ duration:0.7, delay:0.2, type:"spring", stiffness:100, damping:20 }}
                className="font-display font-bold text-white leading-[0.95] tracking-tight"
                style={{ fontSize:"clamp(3rem,8vw,6rem)" }}
              >
                Subramanya
              </motion.h1>
            </div>

            {/* Typed role */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.45, type:"spring", stiffness:100 }}
              className="font-display font-bold text-gray leading-tight mb-6"
              style={{ fontSize:"clamp(1.4rem,3.5vw,2.5rem)", minHeight:"1.2em" }}
            >
              <TypeAnimation
                sequence={["Frontend Developer",2500,"React.js Expert",2000,"Next.js Developer",2000,"React Native Dev",2000]}
                wrapper="span" speed={55} repeat={Infinity}
                style={{ color:"#6366f1" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.6, type:"spring", stiffness:80 }}
              className="text-gray text-sm sm:text-base leading-relaxed max-w-md mb-8"
            >
              I build fast, beautiful, accessible digital experiences.
              Specializing in <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Next.js</span> &{" "}
              <span className="text-white font-medium">React Native</span> — from pixel-perfect UIs to
              SEO-optimized websites and cross-platform mobile apps.
            </motion.p>

            {/* CTAs with spring */}
            <motion.div
              initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.75, type:"spring", stiffness:80 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <motion.a href="#projects"
                whileHover={{ scale:1.06, y:-2 }}
                whileTap={{ scale:0.94 }}
                transition={{ type:"spring", stiffness:400, damping:15 }}
                className="group flex items-center gap-2 bg-indigo text-white font-semibold text-sm px-7 py-3.5 rounded-xl shine"
                style={{ boxShadow:"0 0 0 0 rgba(99,102,241,0.4)" }}
              >
                View Work
                <motion.span animate={{ x:[0,4,0] }} transition={{ duration:1.5, repeat:Infinity }}>
                  <HiArrowRight />
                </motion.span>
              </motion.a>
              <motion.a href="#contact"
                whileHover={{ scale:1.04, y:-1 }} whileTap={{ scale:0.96 }}
                transition={{ type:"spring", stiffness:400, damping:15 }}
                className="text-gray hover:text-white text-sm font-medium transition-colors border-b border-transparent hover:border-gray pb-0.5"
              >
                Let&apos;s Talk →
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }}
              transition={{ delay:0.9 }}
              className="flex items-center gap-4"
            >
              {[
                { href:"https://www.linkedin.com/in/subramanyaashet", icon:<FaLinkedin className="text-lg"/>, label:"LinkedIn" },
                { href:"https://github.com/subramanya-a-shet", icon:<FaGithub className="text-lg"/>, label:"GitHub" },
                { href:"https://www.instagram.com/subramanya_shet_", icon:<FaInstagram className="text-lg"/>, label:"Instagram" },
              ].map((s,i) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  whileHover={{ y:-4, scale:1.2, color:"#6366f1" }}
                  whileTap={{ scale:0.9 }}
                  transition={{ type:"spring", stiffness:400, damping:12 }}
                  className="text-gray-2 hover:text-indigo transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo with whimsical decorations */}
          <motion.div
            initial={{ opacity:0, scale:0.9, x:30 }}
            animate={{ opacity:1, scale:1, x:0 }}
            transition={{ duration:0.8, delay:0.3, type:"spring", stiffness:80, damping:20 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative" style={{ width:"clamp(260px,40vw,360px)" }}>

              {/* Whimsical floating decorations */}
              <FloatingDeco delay={0.8} x={-30} y={20}>
                <motion.div
                  animate={{ rotate:[0,10,-10,0] }}
                  transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
                  className="text-3xl"
                >⚛️</motion.div>
              </FloatingDeco>

              <FloatingDeco delay={1.0} x="85%" y={-10}>
                <motion.div
                  animate={{ rotate:[0,-15,15,0] }}
                  transition={{ duration:5, repeat:Infinity, ease:"easeInOut", delay:0.5 }}
                  className="text-2xl"
                >🚀</motion.div>
              </FloatingDeco>

              <FloatingDeco delay={1.2} x={-20} y="60%">
                <motion.div
                  animate={{ scale:[1,1.2,1] }}
                  transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
                  className="text-2xl"
                >📱</motion.div>
              </FloatingDeco>

              <FloatingDeco delay={1.4} x="80%" y="70%">
                <motion.div
                  animate={{ rotate:[0,20,-20,0] }}
                  transition={{ duration:4.5, repeat:Infinity, ease:"easeInOut", delay:1 }}
                  className="text-2xl"
                >💻</motion.div>
              </FloatingDeco>

              <FloatingDeco delay={1.6} x="40%" y={-25}>
                <motion.div
                  animate={{ y:[0,-6,0] }}
                  transition={{ duration:2.5, repeat:Infinity, ease:"easeInOut" }}
                  className="text-xl"
                >✨</motion.div>
              </FloatingDeco>

              {/* Photo */}
              <div className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio:"3/4", border:"2px solid rgba(99,102,241,0.2)" }}>
                <motion.div style={{ y:imgY }} className="absolute inset-0 scale-110">
                  <Image src="/profile.png" alt="Subramanya" fill
                    sizes="(max-width:640px) 260px,360px"
                    className="object-cover object-top" priority />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />

                {/* Status badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div
                    initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
                    transition={{ delay:1, type:"spring", stiffness:100 }}
                    className="bg-bg-2/90 backdrop-blur-xl rounded-2xl p-3.5 border border-white/8"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold text-sm">Subramanya</p>
                        <p className="text-gray text-xs mt-0.5">Frontend Engineer · India</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span className="text-emerald-400 text-xs font-mono">Open</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Skill chips floating beside photo */}
              <motion.div className="float absolute -left-4 sm:-left-14 top-16 bg-bg-2 rounded-2xl px-4 py-2.5 border border-white/8 shadow-xl">
                <p className="text-white text-xs font-semibold">React.js</p>
                <p className="text-gray text-xs">3+ years</p>
              </motion.div>
              <motion.div className="float-2 absolute -right-4 sm:-right-14 bottom-28 bg-bg-2 rounded-2xl px-4 py-2.5 border border-white/8 shadow-xl">
                <p className="text-white text-xs font-semibold">Next.js</p>
                <p className="text-gray text-xs">SSR · SEO</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats with spring pop */}
        <motion.div ref={ref}
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:1.1, type:"spring", stiffness:80 }}
          className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-4 sm:gap-8 max-w-xs sm:max-w-sm"
        >
          {stats.map((s,i) => (
            <motion.div key={i}
              whileHover={{ scale:1.08, y:-3 }}
              transition={{ type:"spring", stiffness:400, damping:12 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                {s.value!==null ? (inView ? <CountUp end={s.value!} duration={2.5} /> : 0) : null}
                <motion.span
                  animate={{ color: hovered===i ? "#6366f1" : "#ffffff" }}
                  transition={{ duration:0.2 }}
                >
                  {s.suffix}
                </motion.span>
              </div>
              <p className="text-gray text-xs font-mono mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-indigo" />
        </motion.div>
      </motion.div>
    </section>
  );
}
