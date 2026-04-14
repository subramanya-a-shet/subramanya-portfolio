"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const sections = ["about","experience","projects","skills","contact"];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }), 80);
  };

  return (
    <>
      <motion.header
        initial={{ y:-60, opacity:0 }}
        animate={{ y:0, opacity:1 }}
        transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
        className={`lg:hidden fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy/90 backdrop-blur-xl border-b border-white/5 shadow-xl" : ""
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-lg"
                style={{ background: "conic-gradient(from 0deg, #64ffda, #0d9488, #0a0f1e, #64ffda)", padding: "1.5px" }}
              >
                <div className="w-full h-full rounded-lg" style={{ background: "#0a0f1e" }} />
              </motion.div>
              <div className="absolute inset-[1.5px] rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0d1526, #0a0f1e)" }}>
                <span className="font-display font-bold text-xs text-green select-none">S</span>
              </div>
            </div>
          </div>
          <button onClick={() => setOpen(!open)} className="p-2 -mr-2" aria-label="Menu">
            <div className="w-5 space-y-1.5">
              {[0,1,2].map(i => (
                <motion.span key={i}
                  animate={
                    i===0?(open?{rotate:45,y:8}:{rotate:0,y:0}):
                    i===1?(open?{opacity:0}:{opacity:1}):
                    (open?{rotate:-45,y:-8}:{rotate:0,y:0})
                  }
                  className="block h-0.5 bg-green rounded"
                />
              ))}
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-navy/80 backdrop-blur-sm lg:hidden" />
            <motion.div
              initial={{ x:"100%", opacity:0 }}
              animate={{ x:0, opacity:1 }}
              exit={{ x:"100%", opacity:0 }}
              transition={{ duration:0.3, ease:[0.22,1,0.36,1] }}
              className="fixed inset-y-0 right-0 z-50 w-72 bg-navy-2 border-l border-white/5 flex flex-col pt-20 px-8 gap-3 lg:hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-green" />
              {sections.map((id, i) => (
                <motion.button key={id}
                  initial={{opacity:0,x:20}} animate={{opacity:1,x:0}}
                  transition={{delay:i*0.06}}
                  onClick={() => go(id)}
                  className="text-left py-3 border-b border-white/5 font-mono text-sm text-slate hover:text-green transition-colors flex items-center gap-3"
                >
                  <span className="text-green text-xs">0{i+1}.</span>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </motion.button>
              ))}
              <div className="flex items-center gap-5 mt-6">
                {[
                  { href:"https://github.com/subramanya-a-shet", icon:<FaGithub/> },
                  { href:"https://www.linkedin.com/in/subramanyaashet", icon:<FaLinkedin/> },
                  { href:"https://www.instagram.com/subramanya_shet_", icon:<FaInstagram/> },
                ].map((s,i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                    className="text-slate hover:text-green transition-colors text-lg">{s.icon}</a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
