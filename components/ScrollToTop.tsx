"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity:0, scale:0.5, y:20 }}
          animate={{ opacity:1, scale:1, y:0 }}
          exit={{ opacity:0, scale:0.5, y:20 }}
          transition={{ duration:0.3 }}
          onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
          whileHover={{ scale:1.1, boxShadow:"0 0 20px rgba(100,255,218,0.4)" }}
          whileTap={{ scale:0.95 }}
          className="fixed bottom-8 right-8 z-40 w-11 h-11 border border-green text-green rounded flex items-center justify-center hover:bg-green-t transition-colors"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
