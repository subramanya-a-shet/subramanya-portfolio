"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const cls = (name: string) =>
    `w-full border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all duration-200 ${
      focused === name
        ? "border-accent/40 shadow-[0_0_20px_rgba(99,102,241,0.08)] bg-accent/5"
        : "border-white/6 hover:border-white/10 bg-white/3"
    }`;

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-5 h-px bg-accent" />
            <span className="text-accent-light text-xs tracking-[0.2em] uppercase font-medium">Contact</span>
            <span className="w-5 h-px bg-accent" />
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Let&apos;s Build Together</h2>
          <p className="text-white/30 text-sm sm:text-base max-w-md mx-auto">Have a project in mind? My inbox is always open.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-5 border border-accent/15 bg-accent/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 font-semibold text-sm">Available for opportunities</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed">Full-time roles, freelance projects, or just a chat about frontend tech.</p>
            </div>
            <div className="glass rounded-2xl p-5 border border-white/5 space-y-4">
              {[
                { href: "https://www.linkedin.com/in/subramanyaashet", icon: <FaLinkedin />, label: "LinkedIn", value: "subramanyaashet", color: "#3b82f6" },
                { href: "https://github.com/subramanya-a-shet", icon: <FaGithub />, label: "GitHub", value: "subramanya-a-shet", color: "#a78bfa" },
                { href: "https://www.instagram.com/subramanya_shet_", icon: <FaInstagram />, label: "Instagram", value: "subramanya_shet_", color: "#e1306c" },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel="noreferrer"
                  className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                    style={{ color: item.color, background: item.color + "15" }}>{item.icon}</div>
                  <div>
                    <p className="text-white/20 text-xs">{item.label}</p>
                    <p className="text-white/50 text-sm group-hover:text-white transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light flex-shrink-0">
                  <HiOutlineLocationMarker />
                </div>
                <div>
                  <p className="text-white/20 text-xs">Location</p>
                  <p className="text-white/50 text-sm">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={submit}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 border border-white/5 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-white/25 block mb-1.5">Name</label>
                <input type="text" required placeholder="Your name" className={cls("name")}
                  onFocus={() => setFocused("name")} onBlur={() => setFocused("")} />
              </div>
              <div>
                <label className="text-xs text-white/25 block mb-1.5">Email</label>
                <input type="email" required placeholder="your@email.com" className={cls("email")}
                  onFocus={() => setFocused("email")} onBlur={() => setFocused("")} />
              </div>
            </div>
            <div>
              <label className="text-xs text-white/25 block mb-1.5">Subject</label>
              <input type="text" placeholder="What's this about?" className={cls("subject")}
                onFocus={() => setFocused("subject")} onBlur={() => setFocused("")} />
            </div>
            <div>
              <label className="text-xs text-white/25 block mb-1.5">Message</label>
              <textarea required rows={5} placeholder="Tell me about your project..."
                className={`${cls("message")} resize-none`}
                onFocus={() => setFocused("message")} onBlur={() => setFocused("")} />
            </div>
            <motion.button type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all shine ${
                sent ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                     : "bg-accent text-white hover:bg-accent-light"
              }`}
            >
              {sent ? "Message Sent ✓" : <><FiSend /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
