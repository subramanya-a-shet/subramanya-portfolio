"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, rgba(99,102,241,0.8), rgba(129,140,248,0.4), rgba(99,102,241,0.8))",
              padding: "2px",
            }}
          >
            <div className="w-full h-full rounded-full"
              style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }} />
          </motion.div>
          <HiArrowUp className="relative z-10 text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
