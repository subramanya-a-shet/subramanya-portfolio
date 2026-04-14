"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props { onEnter: () => void; }

export default function DoorEntry({ onEnter }: Props) {
  const [phase, setPhase] = useState<"idle" | "opening" | "done">("idle");

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.key === "Enter" || e.code === "Space") && phase === "idle") {
        e.preventDefault();
        handleOpen();
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [phase]);

  const handleOpen = () => {
    if (phase !== "idle") return;
    setPhase("opening");
    setTimeout(() => { setPhase("done"); setTimeout(onEnter, 400); }, 1600);
  };

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="door"
          exit={{ opacity: 0, scale: 1.08, filter: "blur(30px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, #0d0d1a 0%, #060608 60%)" }}
        >
          {/* Deep background glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)" }}
          />

          {/* Floor reflection */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(99,102,241,0.04), transparent)" }} />

          {/* Floating orbs */}
          {[
            { x: "15%", y: "20%", size: 3, delay: 0 },
            { x: "80%", y: "15%", size: 2, delay: 0.5 },
            { x: "10%", y: "70%", size: 4, delay: 1 },
            { x: "85%", y: "65%", size: 2, delay: 1.5 },
            { x: "50%", y: "10%", size: 3, delay: 0.8 },
            { x: "25%", y: "85%", size: 2, delay: 0.3 },
            { x: "70%", y: "80%", size: 3, delay: 1.2 },
            { x: "90%", y: "40%", size: 2, delay: 0.7 },
          ].map((orb, i) => (
            <motion.div key={i}
              className="absolute rounded-full pointer-events-none"
              style={{ left: orb.x, top: orb.y, width: orb.size * 2, height: orb.size * 2, background: "rgba(99,102,241,0.5)" }}
              animate={{ y: [-8, 8, -8], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            />
          ))}

          {/* Corner marks */}
          {[
            "top-8 left-8 border-t border-l",
            "top-8 right-8 border-t border-r",
            "bottom-8 left-8 border-b border-l",
            "bottom-8 right-8 border-b border-r",
          ].map((cls, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.07 }}
              className={`absolute ${cls} w-6 h-6 border-white/8`}
            />
          ))}

          {/* Logo — top left */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="absolute top-7 left-8"
          >
            <div className="relative w-9 h-9">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-xl"
                style={{ background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)", padding: "1.5px" }}
              >
                <div className="w-full h-full rounded-xl" style={{ background: "#060608" }} />
              </motion.div>
              <div className="absolute inset-[1.5px] rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0d0d1a, #060608)" }}>
                <span className="font-display font-bold text-sm text-white select-none">S</span>
              </div>
            </div>
          </motion.div>

          {/* Portfolio label — top center */}
          <motion.p
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-9 left-1/2 -translate-x-1/2 text-white/15 text-xs tracking-[0.4em] uppercase font-medium whitespace-nowrap"
          >
            Portfolio · 2026
          </motion.p>

          {/* Main content */}
          <div className="relative flex flex-col items-center gap-8 sm:gap-10 px-6">

            {/* Door */}
            <div className="door-scene relative" style={{ width: "min(220px,58vw)", height: "min(340px,50vh)" }}>

              {/* Outer frame shadow */}
              <div className="absolute -inset-3 rounded-sm pointer-events-none"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 60px 120px rgba(0,0,0,0.95), 0 0 80px rgba(99,102,241,0.08)" }} />

              {/* Light leak edges */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none rounded-sm"
                style={{
                  boxShadow: "inset 1px 0 0 rgba(99,102,241,0.15), inset -1px 0 0 rgba(99,102,241,0.08), inset 0 1px 0 rgba(99,102,241,0.12), inset 0 -1px 0 rgba(99,102,241,0.06)",
                }}
              />

              {/* Door panel */}
              <motion.div
                className="absolute inset-0 rounded-sm door-panel"
                animate={phase === "opening" ? {
                  rotateY: -80,
                  transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
                } : {}}
                style={{
                  background: "linear-gradient(170deg, #13132a 0%, #0c0c1e 40%, #080816 100%)",
                  border: "1px solid rgba(99,102,241,0.15)",
                }}
              >
                {/* Inset panels */}
                <div className="absolute top-5 left-5 right-5 bottom-5 border border-white/4 rounded-sm" />

                {/* Upper panel */}
                <div className="absolute top-8 left-8 right-8 rounded-sm border border-white/3"
                  style={{ height: "38%", background: "rgba(99,102,241,0.02)" }} />

                {/* Lower panel */}
                <div className="absolute bottom-8 left-8 right-8 rounded-sm border border-white/3"
                  style={{ height: "38%", background: "rgba(99,102,241,0.02)" }} />

                {/* Knob */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                  <motion.div
                    animate={{ boxShadow: ["0 0 8px rgba(99,102,241,0.4)", "0 0 20px rgba(99,102,241,0.8)", "0 0 8px rgba(99,102,241,0.4)"] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="w-3.5 h-3.5 rounded-full border border-indigo-400/50"
                    style={{ background: "radial-gradient(circle at 35% 35%, #a5b4fc, #6366f1)" }}
                  />
                  <div className="w-0.5 h-6 rounded-full"
                    style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.4), transparent)" }} />
                </div>

                {/* Peephole */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-3 h-3 rounded-full bg-black border border-indigo-400/25"
                  style={{ boxShadow: "0 0 10px rgba(99,102,241,0.5), inset 0 0 4px rgba(99,102,241,0.3)" }} />

                {/* Door number */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/8 text-xs font-medium tracking-widest">
                  01
                </div>
              </motion.div>

              {/* Light burst when opening */}
              <AnimatePresence>
                {phase === "opening" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 pointer-events-none rounded-sm"
                    style={{ background: "radial-gradient(ellipse at 10% 50%, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0.15) 35%, transparent 65%)" }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-center"
            >
              <motion.button
                onClick={handleOpen}
                disabled={phase !== "idle"}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="relative group px-10 py-4 rounded-full text-sm font-semibold text-white overflow-hidden shine glow-pulse"
                style={{ background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)" }}
              >
                <AnimatePresence mode="wait">
                  {phase === "idle" ? (
                    <motion.span key="open" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex items-center gap-2.5">
                      Open the door
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>→</motion.span>
                    </motion.span>
                  ) : (
                    <motion.span key="entering" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="flex items-center gap-2.5">
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                      entering...
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.p
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="text-white/20 text-xs mt-3 tracking-[0.25em] uppercase"
              >
                Enter · Space · Click
              </motion.p>
            </motion.div>
          </div>


        </motion.div>
      )}
    </AnimatePresence>
  );
}
