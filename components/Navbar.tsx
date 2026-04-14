"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Logo from "./Logo";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 h-[2px] z-[60] bg-accent"
        style={{ width: progress }} />

      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled ? "bg-bg/80 backdrop-blur-2xl border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <li key={l.href}>
                <button onClick={() => go(l.href)}
                  className="px-4 py-2 text-sm text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <motion.a href="#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:block bg-accent text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-accent-light transition-all shine"
          >
            Hire Me
          </motion.a>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2" aria-label="Menu">
            <div className="w-5 space-y-1.5">
              {[0, 1, 2].map(i => (
                <motion.span key={i}
                  animate={
                    i === 0 ? (open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }) :
                    i === 1 ? (open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }) :
                    (open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 })
                  }
                  className="block h-0.5 bg-white/60 rounded"
                />
              ))}
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-30 bg-black/80 backdrop-blur-sm md:hidden" />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-40 w-72 bg-bg-2 border-l border-white/5 flex flex-col pt-20 px-8 gap-2 md:hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
              {links.map((l, i) => (
                <motion.button key={l.href}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => go(l.href)}
                  className="text-left text-lg font-semibold text-white/50 hover:text-white transition-colors py-3 border-b border-white/5"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.a href="#contact" onClick={() => setOpen(false)}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="mt-6 bg-accent text-white font-semibold text-sm px-5 py-3.5 rounded-full text-center"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
