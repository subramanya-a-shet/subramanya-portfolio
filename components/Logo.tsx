"use client";
import { motion } from "framer-motion";

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center"
      aria-label="Home"
    >
      <div className="relative w-9 h-9">
        {/* Outer glow ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-xl"
          style={{
            background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
            padding: "1.5px",
          }}
        >
          <div className="w-full h-full rounded-xl bg-bg" />
        </motion.div>

        {/* Inner content */}
        <div className="absolute inset-[1.5px] rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #0d0d1a, #060608)" }}>
          <span className="font-display font-bold text-sm text-white leading-none select-none">
            S
          </span>
        </div>
      </div>
    </motion.button>
  );
}
