"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

        <p className="text-white/20 text-xs text-center flex items-center gap-1.5">
          Made with <HiHeart className="text-accent text-sm" /> by{" "}
          <span className="text-white/40">Subramanya</span>
          <span className="text-white/10 mx-1">·</span>
          <span>2026</span>
        </p>

        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/subramanyaashet" target="_blank" rel="noreferrer"
            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/25 hover:text-white border border-white/5 hover:border-white/15 transition-all">
            <FaLinkedin />
          </a>
          <a href="https://github.com/subramanya-a-shet" target="_blank" rel="noreferrer"
            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/25 hover:text-white border border-white/5 hover:border-white/15 transition-all">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/subramanya_shet_" target="_blank" rel="noreferrer"
            className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/25 hover:text-white border border-white/5 hover:border-white/15 transition-all">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
