"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

const NAME_CHARS = ["S","u","b","r","a","m","a","n","y","a"];
const skills = ["React.js","Next.js","React Native","Expo","TypeScript","Redux","SEO","CI/CD","Tailwind"];
const stats = [
  { value: 3, suffix: "+", label: "Yrs" },
  { value: 20, suffix: "+", label: "Projects" },
  { value: null, suffix: "∞", label: "Curiosity" },
];
const socials = [
  { href: "https://www.linkedin.com/in/subramanyaashet", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://github.com/subramanya-a-shet", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.instagram.com/subramanya_shet_", icon: <FaInstagram />, label: "Instagram" },
];

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: mobileRef, inView: mobileInView } = useInView({ triggerOnce: true });
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 500], [0, 40]);
  const fadeOut = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* ── MOBILE (< lg) ── */}
      <div className="lg:hidden relative min-h-screen flex flex-col pt-20 pb-10 px-5 gap-6">

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full glass border border-white/6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-white/50 text-xs font-medium">Available for new projects</span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden">
          <div className="flex leading-none flex-wrap">
            {NAME_CHARS.map((char, i) => (
              <motion.span key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-bold text-white"
                style={{ fontSize: "clamp(2.8rem, 11vw, 4.5rem)", lineHeight: 1 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center gap-2">
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-base font-semibold"
            style={{
              background: "linear-gradient(90deg, #6366f1, #a78bfa, #60a5fa, #34d399, #6366f1)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Crafting digital experiences
          </motion.span>
          <span className="text-white/25 text-base">that matter</span>
        </motion.div>

        {/* Skill pills — horizontal scroll */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="overflow-hidden -mx-5">
          <div className="flex gap-2 px-5 overflow-x-auto pb-1 scrollbar-none">
            {skills.map((s, i) => (
              <motion.span key={s}
                initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.04 }}
                className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border border-accent/20 text-accent/80 bg-accent/5 whitespace-nowrap">
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex gap-3">
          <a href="#projects"
            className="flex-1 flex items-center justify-center gap-2 text-white font-bold text-sm py-4 rounded-2xl shine active:scale-95 transition-transform"
            style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}>
            View Work <HiArrowRight />
          </a>
          <a href="#contact"
            className="flex-1 flex items-center justify-center border border-white/15 text-white/80 font-semibold text-sm py-4 rounded-2xl active:scale-95 transition-all"
            style={{ background: "rgba(255,255,255,0.05)" }}>
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="flex items-center gap-3">
          {socials.map(s => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/30 hover:text-white border border-white/5 transition-all">
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Photo — below all text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />
          <div className="relative rounded-3xl overflow-hidden w-full"
            style={{ aspectRatio: "4/5", border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image src="/profile.png" alt="Subramanya" fill
              sizes="(max-width:640px) 80vw, 320px" className="object-cover object-top" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            {/* Accent edge */}
            <motion.div
              animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-1/4 w-0.5 rounded-full"
              style={{ height: "50%", background: "linear-gradient(to bottom, transparent, #6366f1, transparent)" }}
            />
            <div className="absolute bottom-0 inset-x-0 p-3">
              <div className="glass-dark rounded-xl p-3 border border-white/6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">Subramanya</p>
                    <p className="text-white/35 text-xs mt-0.5">Frontend Engineer · India</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-medium">Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div ref={mobileRef}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-8 pt-4 border-t border-white/5">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-display text-2xl font-bold text-white">
                {s.value !== null ? (mobileInView ? <CountUp end={s.value!} duration={2} /> : 0) : null}
                <span className="text-accent">{s.suffix}</span>
              </div>
              <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:flex relative min-h-screen items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px]"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px]"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: "linear-gradient(rgba(99,102,241,1) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,1) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-8 pt-24 pb-16">
          <div className="flex items-center gap-8">
            {/* Text */}
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full glass border border-white/6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-white/50 text-xs font-medium">Available for new projects</span>
              </motion.div>

              <div className="overflow-hidden mb-5">
                <div className="flex leading-none">
                  {NAME_CHARS.map((char, i) => (
                    <motion.span key={i}
                      initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6, color: "#818cf8", transition: { duration: 0.15 } }}
                      className="font-display font-bold text-white cursor-default select-none"
                      style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)", lineHeight: 1 }}>
                      {char}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
                className="flex items-center gap-3 mb-4">
                <motion.span
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="text-lg font-semibold"
                  style={{
                    background: "linear-gradient(90deg, #6366f1, #a78bfa, #60a5fa, #34d399, #6366f1)",
                    backgroundSize: "300% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  Crafting digital experiences
                </motion.span>
                <span className="text-white/20 text-lg">that matter</span>
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
                className="text-white/35 text-sm leading-relaxed max-w-sm mb-8">
                React · Next.js · React Native · Expo · SEO · CI/CD · Team Leadership
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
                className="flex items-center gap-3 mb-8">
                <a href="#projects"
                  className="group flex items-center gap-2 text-white font-semibold text-sm px-7 py-3.5 rounded-full shine"
                  style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}>
                  View Work
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <HiArrowRight />
                  </motion.span>
                </a>
                <a href="#contact"
                  className="flex items-center gap-2 glass border border-white/8 text-white/55 hover:text-white font-medium text-sm px-7 py-3.5 rounded-full transition-colors">
                  Let&apos;s Talk
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="flex items-center gap-3">
                {socials.map(s => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/30 hover:text-white border border-white/5 hover:border-white/15 transition-all">
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.93 }} animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0">
              <div className="relative">
                <motion.div
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-8 rounded-3xl pointer-events-none blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)" }}
                />
                <div className="relative w-[300px] xl:w-[340px] h-[380px] xl:h-[430px] rounded-3xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                  <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
                    <Image src="/profile.png" alt="Subramanya" fill sizes="340px" className="object-cover object-top" priority />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <div className="glass-dark rounded-2xl p-3.5 border border-white/6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold text-sm">Subramanya</p>
                          <p className="text-white/35 text-xs mt-0.5">Frontend Engineer · India</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-emerald-400 text-xs font-medium">Open</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div animate={{ y: [0,-10,0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-14 top-10 glass-dark rounded-2xl px-4 py-2.5 border border-white/8 shadow-xl">
                  <p className="text-white text-xs font-semibold">React.js</p>
                  <p className="text-white/30 text-xs">3+ years</p>
                </motion.div>
                <motion.div animate={{ y: [0,10,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-14 bottom-24 glass-dark rounded-2xl px-4 py-2.5 border border-white/8 shadow-xl">
                  <p className="text-white text-xs font-semibold">Next.js</p>
                  <p className="text-white/30 text-xs">SSR · SEO</p>
                </motion.div>
                <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-12 top-12 glass-dark rounded-2xl px-4 py-2.5 border border-white/8 shadow-xl">
                  <p className="text-white text-xs font-semibold">Expo</p>
                  <p className="text-white/30 text-xs">React Native</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div ref={ref}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-8 max-w-sm">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }} whileHover={{ scale: 1.05 }}>
                <div className="font-display text-3xl font-bold text-white">
                  {s.value !== null ? (inView ? <CountUp end={s.value!} duration={2.5} /> : 0) : null}
                  <span className="text-accent">{s.suffix}</span>
                </div>
                <p className="text-white/30 text-sm mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ opacity: fadeOut }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/12 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
