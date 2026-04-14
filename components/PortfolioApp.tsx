"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DoorEntry from "./DoorEntry";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Cursor from "./Cursor";
import ScrollToTop from "./ScrollToTop";

export default function PortfolioApp() {
  const [entered, setEntered] = useState(false);

  // Space key support
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.code === "Space" && !entered) {
        e.preventDefault();
        setEntered(true);
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [entered]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!entered && (
          <DoorEntry key="door" onEnter={() => setEntered(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {entered && (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-bg min-h-screen"
          >
            <Cursor />
            <ScrollToTop />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
