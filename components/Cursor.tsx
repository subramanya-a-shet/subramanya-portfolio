"use client";
import { useEffect, useRef, useState } from "react";

interface Trail { id: number; x: number; y: number; opacity: number; }

export default function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [ring, setRing] = useState({ x: -200, y: -200 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const posRef = useRef({ x: -200, y: -200 });
  const ringRef = useRef({ x: -200, y: -200 });
  const trailId = useRef(0);
  const lastTrail = useRef({ x: -200, y: -200 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      // Add trail dot every 12px of movement
      const dx = e.clientX - lastTrail.current.x;
      const dy = e.clientY - lastTrail.current.y;
      if (Math.sqrt(dx * dx + dy * dy) > 12) {
        lastTrail.current = { x: e.clientX, y: e.clientY };
        const id = trailId.current++;
        setTrails(prev => [...prev.slice(-12), { id, x: e.clientX, y: e.clientY, opacity: 1 }]);
        setTimeout(() => {
          setTrails(prev => prev.filter(t => t.id !== id));
        }, 600);
      }
    };

    let raf: number;
    const animate = () => {
      ringRef.current.x += (posRef.current.x - ringRef.current.x) * 0.1;
      ringRef.current.y += (posRef.current.y - ringRef.current.y) * 0.1;
      setRing({ x: ringRef.current.x, y: ringRef.current.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as HTMLElement).closest("a,button,[data-hover]"));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Trail dots */}
      {trails.map((t, i) => (
        <div
          key={t.id}
          className="cursor-trail"
          style={{
            left: t.x,
            top: t.y,
            opacity: (i / trails.length) * 0.5,
            width: `${4 + (i / trails.length) * 4}px`,
            height: `${4 + (i / trails.length) * 4}px`,
            background: `rgba(99,102,241,${0.3 + (i / trails.length) * 0.5})`,
            transition: "opacity 0.6s ease",
          }}
        />
      ))}

      {/* Dot */}
      <div
        className="custom-cursor fixed pointer-events-none z-[99999] rounded-full bg-accent"
        style={{
          left: pos.x,
          top: pos.y,
          width: clicking ? "6px" : "8px",
          height: clicking ? "6px" : "8px",
          transform: `translate(-50%,-50%) scale(${hovering ? 0 : 1})`,
          transition: "transform 0.15s ease, width 0.1s, height 0.1s",
          boxShadow: "0 0 10px rgba(99,102,241,0.8)",
        }}
      />

      {/* Ring */}
      <div
        className="custom-cursor fixed pointer-events-none z-[99998] rounded-full border transition-all duration-200"
        style={{
          left: ring.x,
          top: ring.y,
          width: hovering ? "52px" : clicking ? "28px" : "36px",
          height: hovering ? "52px" : clicking ? "28px" : "36px",
          transform: "translate(-50%,-50%)",
          borderColor: hovering ? "rgba(99,102,241,0.8)" : "rgba(255,255,255,0.2)",
          background: hovering ? "rgba(99,102,241,0.05)" : "transparent",
          boxShadow: hovering ? "0 0 20px rgba(99,102,241,0.2)" : "none",
        }}
      />
    </>
  );
}
