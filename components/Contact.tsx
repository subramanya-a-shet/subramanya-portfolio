"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const cls = (name: string) =>
    `w-full bg-bg-3 border rounded-xl px-4 py-3 text-white text-sm font-mono focus:outline-none transition-all duration-200 ${
      focused===name ? "border-indigo shadow-[0_0_0_2px_rgba(99,102,241,0.2)]" : "border-bg-4 hover:border-gray-2/30"
    }`;

  return (
    <section id="contact" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, type:"spring", stiffness:80 }} className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <motion.span
              animate={inView?{ rotate:[0,-20,20,-10,10,0], scale:[1,1.3,1] }:{}}
              transition={{ delay:0.3, duration:0.8 }}
              className="text-2xl"
            >👋</motion.span>
            <span className="font-mono text-xs text-indigo tracking-[0.2em] uppercase">Get In Touch</span>
          </div>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}>
            Let&apos;s Build Something
          </h2>
          <p className="text-gray text-sm sm:text-base max-w-md mx-auto">
            Have a project in mind? My inbox is always open. I&apos;ll try my best to get back to you! 😊
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Info */}
          <motion.div initial={{ opacity:0, x:-24 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ delay:0.2, duration:0.6, type:"spring", stiffness:80 }}
            className="lg:col-span-2 space-y-4">
            <div className="card rounded-2xl p-5" style={{ borderColor:"rgba(99,102,241,0.2)", background:"rgba(99,102,241,0.05)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 font-semibold text-sm">Available for opportunities</span>
              </div>
              <p className="text-gray text-sm leading-relaxed">Full-time roles, freelance projects, or just a chat about frontend tech. ☕</p>
            </div>

            <div className="card rounded-2xl p-5 space-y-4">
              {[
                { href:"https://www.linkedin.com/in/subramanyaashet", icon:<FaLinkedin/>, label:"LinkedIn", value:"subramanyaashet", color:"#3b82f6", emoji:"💼" },
                { href:"https://github.com/subramanya-a-shet", icon:<FaGithub/>, label:"GitHub", value:"subramanya-a-shet", color:"#a78bfa", emoji:"🐙" },
                { href:"https://www.instagram.com/subramanya_shet_", icon:<FaInstagram/>, label:"Instagram", value:"subramanya_shet_", color:"#ec4899", emoji:"📸" },
              ].map(item => (
                <motion.a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                  whileHover={{ x:4 }}
                  transition={{ type:"spring", stiffness:400, damping:15 }}
                  className="flex items-center gap-3 group">
                  <motion.span whileHover={{ rotate:[0,20,-20,0], scale:1.2 }} transition={{ duration:0.4 }}
                    className="text-xl">{item.emoji}</motion.span>
                  <div>
                    <p className="text-gray-2 text-xs">{item.label}</p>
                    <p className="text-gray group-hover:text-white text-sm font-mono transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity:0, x:24 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ delay:0.3, duration:0.6, type:"spring", stiffness:80 }}
            onSubmit={submit} className="lg:col-span-3 card rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-gray block mb-1.5">Name</label>
                <input type="text" required placeholder="your_name" className={cls("name")}
                  onFocus={()=>setFocused("name")} onBlur={()=>setFocused("")} />
              </div>
              <div>
                <label className="font-mono text-xs text-gray block mb-1.5">Email</label>
                <input type="email" required placeholder="your@email.com" className={cls("email")}
                  onFocus={()=>setFocused("email")} onBlur={()=>setFocused("")} />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs text-gray block mb-1.5">Message</label>
              <textarea required rows={5} placeholder="Tell me about your project... 🚀"
                className={`${cls("message")} resize-none`}
                onFocus={()=>setFocused("message")} onBlur={()=>setFocused("")} />
            </div>
            <motion.button type="submit"
              whileHover={{ scale:1.03, y:-2 }}
              whileTap={{ scale:0.97 }}
              transition={{ type:"spring", stiffness:400, damping:15 }}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all shine ${
                sent ? "text-emerald-400 border border-emerald-500/30 bg-emerald-500/10"
                     : "text-white bg-indigo hover:bg-indigo/90"
              }`}
              style={!sent ? { boxShadow:"0 0 30px rgba(99,102,241,0.3)" } : {}}>
              {sent ? "Message Sent! 🎉" : <><FiSend/> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
