"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const sections = ["about","experience","projects","skills","contact"];

export default function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22,1,0.36,1] }}
      className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-screen w-[320px] xl:w-[360px] py-20 px-12 xl:px-16"
    >
      {/* Top — name + tagline */}
      <div>
        <motion.div
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:0.3 }}
        >
          <h1 className="font-display text-4xl xl:text-5xl font-bold text-slate-white leading-tight mb-2">
            Subramanya
          </h1>
          <h2 className="text-base font-medium text-slate-white mb-4">
            Frontend Developer
          </h2>
          <p className="text-sm text-slate leading-relaxed max-w-xs">
            I build fast, accessible, pixel-perfect digital experiences for the web and mobile.
          </p>
        </motion.div>

        {/* Nav */}
        <nav className="mt-14 flex flex-col gap-5">
          {sections.map((id, i) => (
            <motion.button
              key={id}
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              onClick={() => scrollTo(id)}
              className={`nav-link ${active === id ? "active" : ""}`}
            >
              <span className="line" />
              <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Bottom — socials */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }}
        transition={{ delay:0.9 }}
        className="flex items-center gap-5"
      >
        {[
          { href:"https://github.com/subramanya-a-shet", icon:<FaGithub className="text-xl"/>, label:"GitHub" },
          { href:"https://www.linkedin.com/in/subramanyaashet", icon:<FaLinkedin className="text-xl"/>, label:"LinkedIn" },
          { href:"https://www.instagram.com/subramanya_shet_", icon:<FaInstagram className="text-xl"/>, label:"Instagram" },
        ].map(s => (
          <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            whileHover={{ y:-3, color:"#64ffda" }}
            className="text-slate hover:text-green transition-colors duration-200"
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.aside>
  );
}
