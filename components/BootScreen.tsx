"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const name = "SUBRAMANYA";
const tagline = "Frontend Developer · React.js · Next.js · React Native";

export default function BootScreen({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState<"name"|"line"|"cta"|"exit">("name");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 1400);
    const t2 = setTimeout(() => setPhase("cta"), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Enter" && phase === "cta") handleEnter(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [phase]);

  const handleEnter = () => {
    setPhase("exit");
    setTimeout(onEnter, 900);
  };

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="intro"
          exit={{ opacity: 0, scale: 1.04, filter: "blur(24px)" }}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue/5 blur-[120px] pointer-events-none" />

          {/* Corner marks */}
          {[["top-8 left-8","border-t border-l"],["top-8 right-8","border-t border-r"],["bottom-8 left-8","border-b border-l"],["bottom-8 right-8","border-b border-r"]].map(([pos,border],i) => (
            <motion.div key={i} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3+i*0.05 }}
              className={`absolute ${pos} w-6 h-6 ${border} border-white/10`} />
          ))}

          

          {/* Main name */}
          <div className="relative flex flex-col items-center gap-6 px-6">
            <div className="flex items-end gap-0 overflow-hidden">
              {name.split("").map((char, i) => (
                <motion.span key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22,1,0.36,1] }}
                  className="font-display text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Surname */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.22,1,0.36,1] }}
              className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-light tracking-tight"
            >
              A SHET
            </motion.div>

            {/* Divider line */}
            <AnimatePresence>
              {(phase === "line" || phase === "cta") && (
                <motion.div
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
                  transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
                  className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-blue to-transparent origin-center"
                />
              )}
            </AnimatePresence>

            {/* Tagline */}
            <AnimatePresence>
              {(phase === "line" || phase === "cta") && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-white/30 text-xs sm:text-sm tracking-[0.2em] uppercase text-center"
                >
                  {tagline}
                </motion.p>
              )}
            </AnimatePresence>

            {/* CTA */}
            <AnimatePresence>
              {phase === "cta" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col items-center gap-3 mt-4"
                >
                  <motion.button
                    onClick={handleEnter}
                    whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(37,99,235,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative px-10 py-4 bg-blue text-white font-display font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden shine"
                  >
                    <span className="relative z-10">Enter Portfolio</span>
                    <motion.div
                      className="absolute inset-0 bg-blue-light"
                      initial={{ x: "-100%" }} whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  <span className="text-white/20 text-xs tracking-widest">
                    or press <span className="text-white/40">ENTER</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom label */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-white/10 text-xs tracking-widest">
            <span>REACT.JS</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>NEXT.JS</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>REACT NATIVE</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
