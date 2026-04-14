"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DoorEntry({ onEnter }: { onEnter: () => void }) {
  const [phase, setPhase] = useState<"idle"|"opening"|"done">("idle");

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.key==="Enter"||e.code==="Space") && phase==="idle") { e.preventDefault(); open(); }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [phase]);

  const open = () => {
    if (phase!=="idle") return;
    setPhase("opening");
    setTimeout(() => { setPhase("done"); setTimeout(onEnter, 400); }, 1500);
  };

  return (
    <AnimatePresence>
      {phase!=="done" && (
        <motion.div key="door"
          exit={{ opacity:0, scale:1.04, filter:"blur(20px)" }}
          transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
        >
          {/* Ambient */}
          <motion.div
            animate={{ opacity:[0.2,0.5,0.2], scale:[1,1.1,1] }}
            transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background:"radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)" }}
          />

          {/* Floating particles */}
          {[...Array(10)].map((_,i) => (
            <motion.div key={i}
              className="absolute w-1 h-1 rounded-full bg-green/30 pointer-events-none"
              style={{ left:`${10+i*8}%`, top:`${15+((i*37)%70)}%` }}
              animate={{ y:[-8,8,-8], opacity:[0.2,0.6,0.2] }}
              transition={{ duration:3+i*0.4, repeat:Infinity, ease:"easeInOut", delay:i*0.2 }}
            />
          ))}

          {/* Corner marks */}
          {["top-8 left-8 border-t border-l","top-8 right-8 border-t border-r","bottom-8 left-8 border-b border-l","bottom-8 right-8 border-b border-r"].map((cls,i) => (
            <motion.div key={i}
              initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}}
              transition={{delay:0.2+i*0.07}}
              className={`absolute ${cls} w-5 h-5 border-green/20`}
            />
          ))}

          {/* Logo top-left */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}}
            className="absolute top-7 left-8">
            <div className="relative w-9 h-9">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-xl"
                style={{ background: "conic-gradient(from 0deg, #64ffda, #0d9488, #0a0f1e, #64ffda)", padding: "1.5px" }}
              >
                <div className="w-full h-full rounded-xl" style={{ background: "#0a0f1e" }} />
              </motion.div>
              <div className="absolute inset-[1.5px] rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0d1526, #0a0f1e)" }}>
                <span className="font-display font-bold text-sm text-green select-none">S</span>
              </div>
            </div>
          </motion.div>

          {/* Label */}
          <motion.p initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} transition={{delay:0.4}}
            className="absolute top-8 left-1/2 -translate-x-1/2 font-mono text-xs text-slate/30 tracking-[0.3em] uppercase whitespace-nowrap">
            Portfolio · 2026
          </motion.p>

          {/* Door */}
          <div className="relative flex flex-col items-center gap-8 px-6">
            <div className="door-scene relative" style={{width:"min(200px,55vw)",height:"min(320px,48vh)"}}>
              <div className="absolute -inset-3 rounded-sm pointer-events-none"
                style={{boxShadow:"0 0 0 1px rgba(100,255,218,0.06),0 60px 120px rgba(0,0,0,0.9)"}} />

              <motion.div
                animate={{opacity:[0.3,0.7,0.3]}} transition={{duration:3,repeat:Infinity}}
                className="absolute inset-0 pointer-events-none rounded-sm"
                style={{boxShadow:"inset 1px 0 0 rgba(100,255,218,0.1),inset -1px 0 0 rgba(100,255,218,0.05)"}}
              />

              <motion.div
                className="absolute inset-0 rounded-sm door-panel"
                animate={phase==="opening"?{rotateY:-80,transition:{duration:1.4,ease:[0.22,1,0.36,1]}}:{}}
                style={{background:"linear-gradient(160deg,#0d1526 0%,#0a0f1e 100%)",border:"1px solid rgba(100,255,218,0.12)"}}
              >
                <div className="absolute inset-4 border border-green/5 rounded-sm" />
                <div className="absolute top-6 left-6 right-6 rounded-sm border border-green/5" style={{height:"38%"}} />
                <div className="absolute bottom-6 left-6 right-6 rounded-sm border border-green/5" style={{height:"38%"}} />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5">
                  <motion.div
                    animate={{boxShadow:["0 0 6px rgba(100,255,218,0.3)","0 0 16px rgba(100,255,218,0.7)","0 0 6px rgba(100,255,218,0.3)"]}}
                    transition={{duration:2.5,repeat:Infinity}}
                    className="w-3 h-3 rounded-full border border-green/50"
                    style={{background:"radial-gradient(circle at 35% 35%,#64ffda,#0d9488)"}}
                  />
                  <div className="w-0.5 h-5 rounded-full" style={{background:"linear-gradient(to bottom,rgba(100,255,218,0.3),transparent)"}} />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-[22%] w-2.5 h-2.5 rounded-full bg-navy border border-green/20"
                  style={{boxShadow:"0 0 8px rgba(100,255,218,0.4)"}} />
              </motion.div>

              <AnimatePresence>
                {phase==="opening" && (
                  <motion.div initial={{opacity:0}} animate={{opacity:[0,0.7,0.4]}} exit={{opacity:0}}
                    transition={{duration:1.4}} className="absolute inset-0 pointer-events-none rounded-sm"
                    style={{background:"radial-gradient(ellipse at 10% 50%,rgba(100,255,218,0.4) 0%,transparent 60%)"}}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.9}}
              className="text-center">
              <motion.button onClick={open} disabled={phase!=="idle"}
                whileHover={{scale:1.05,boxShadow:"0 0 30px rgba(100,255,218,0.3)"}}
                whileTap={{scale:0.97}}
                className="border border-green text-green font-mono text-sm px-8 py-4 rounded hover:bg-green-t transition-all shine glow-pulse"
              >
                <AnimatePresence mode="wait">
                  {phase==="idle" ? (
                    <motion.span key="open" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
                      className="flex items-center gap-2.5">
                      Open the door
                      <motion.span animate={{x:[0,5,0]}} transition={{duration:1.2,repeat:Infinity}}>→</motion.span>
                    </motion.span>
                  ) : (
                    <motion.span key="entering" initial={{opacity:0}} animate={{opacity:1}}
                      className="flex items-center gap-2.5">
                      <motion.span animate={{rotate:360}} transition={{duration:0.8,repeat:Infinity,ease:"linear"}}
                        className="inline-block w-4 h-4 border-2 border-green/30 border-t-green rounded-full" />
                      entering...
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              <motion.p animate={{opacity:[0.2,0.5,0.2]}} transition={{duration:2.5,repeat:Infinity}}
                className="font-mono text-xs text-slate/30 mt-3 tracking-widest">
                ENTER · SPACE · CLICK
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
