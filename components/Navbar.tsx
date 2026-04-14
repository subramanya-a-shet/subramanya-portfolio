"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const links = [
  { label:"About", href:"#about" },
  { label:"Work", href:"#projects" },
  { label:"Experience", href:"#experience" },
  { label:"Contact", href:"#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const w = useTransform(scrollYProgress, [0,1], ["0%","100%"]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior:"smooth" }), 80);
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 h-[2px] z-[60] bg-indigo"
        style={{ width:w }} />

      <motion.nav
        initial={{ y:-70, opacity:0 }}
        animate={{ y:0, opacity:1 }}
        transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-bg/90 backdrop-blur-2xl border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          {/* Logo — wiggles on hover */}
          <motion.button
            onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
            whileHover={{ rotate:[0,-8,8,-4,4,0], transition:{ duration:0.5 } }}
            whileTap={{ scale:0.9 }}
            className="relative w-9 h-9"
          >
            <motion.div animate={{ rotate:360 }} transition={{ duration:10, repeat:Infinity, ease:"linear" }}
              className="absolute inset-0 rounded-xl"
              style={{ background:"conic-gradient(from 0deg,#6366f1,#8b5cf6,#0f0f0f,#6366f1)", padding:"1.5px" }}>
              <div className="w-full h-full rounded-xl bg-bg" />
            </motion.div>
            <div className="absolute inset-[1.5px] rounded-xl flex items-center justify-center bg-bg-2">
              <span className="font-display font-bold text-sm text-white select-none">S</span>
            </div>
          </motion.button>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l,i) => (
              <li key={l.href}>
                <motion.button onClick={() => go(l.href)}
                  initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }}
                  transition={{ delay:0.1*i+0.3 }}
                  whileHover={{ y:-2 }}
                  className="text-sm text-gray hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
                  {l.label}
                </motion.button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a href="#contact"
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.8 }}
              whileHover={{ scale:1.05, y:-1 }} whileTap={{ scale:0.95 }}
              className="hidden md:block text-sm font-semibold text-white bg-indigo px-5 py-2.5 rounded-xl hover:bg-indigo/90 transition-colors shine">
              Hire Me
            </motion.a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 -mr-2">
              <div className="w-5 space-y-1.5">
                {[0,1,2].map(i => (
                  <motion.span key={i}
                    animate={i===0?(open?{rotate:45,y:8}:{rotate:0,y:0}):i===1?(open?{opacity:0}:{opacity:1}):(open?{rotate:-45,y:-8}:{rotate:0,y:0})}
                    className="block h-0.5 bg-indigo rounded" />
                ))}
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              onClick={() => setOpen(false)} className="fixed inset-0 z-30 bg-bg/80 backdrop-blur-sm md:hidden" />
            <motion.div
              initial={{ x:"100%", opacity:0 }} animate={{ x:0, opacity:1 }} exit={{ x:"100%", opacity:0 }}
              transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
              className="fixed inset-y-0 right-0 z-40 w-64 bg-bg-2 border-l border-white/5 flex flex-col pt-20 px-8 gap-2 md:hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-indigo" />
              {links.map((l,i) => (
                <motion.button key={l.href}
                  initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:i*0.06}}
                  onClick={() => go(l.href)}
                  className="text-left py-3 border-b border-white/5 text-sm text-gray hover:text-white transition-colors">
                  {l.label}
                </motion.button>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-4 text-sm font-semibold text-white bg-indigo px-5 py-3 rounded-xl text-center">
                Hire Me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
