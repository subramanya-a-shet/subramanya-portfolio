"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DoorEntry from "./DoorEntry";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import Cursor from "./Cursor";
import ScrollToTop from "./ScrollToTop";

export default function PortfolioApp() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!entered && <DoorEntry key="door" onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {entered && (
          <motion.div key="app"
            initial={{ opacity:0 }} animate={{ opacity:1 }}
            transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
            className="bg-bg min-h-screen">
            <Cursor />
            <ScrollToTop />
            <Navbar />
            <div className="max-w-5xl mx-auto">
              <Hero />
            </div>
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <footer className="py-8 border-t border-white/5 text-center">
              <p className="font-mono text-xs text-gray-2">
                Made with <motion.span animate={{ scale:[1,1.3,1] }} transition={{ duration:1, repeat:Infinity }}>❤️</motion.span> by{" "}
                <span className="text-indigo">Subramanya</span> · 2026
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
