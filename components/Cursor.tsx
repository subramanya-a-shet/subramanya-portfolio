"use client";
import { useEffect, useState, useRef } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x:-200, y:-200 });
  const [ring, setRing] = useState({ x:-200, y:-200 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const posRef = useRef({ x:-200, y:-200 });
  const ringRef = useRef({ x:-200, y:-200 });

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const onMove = (e: MouseEvent) => {
      posRef.current = { x:e.clientX, y:e.clientY };
      setPos({ x:e.clientX, y:e.clientY });
      setVisible(true);
    };
    let raf: number;
    const animate = () => {
      ringRef.current.x += (posRef.current.x - ringRef.current.x) * 0.1;
      ringRef.current.y += (posRef.current.y - ringRef.current.y) * 0.1;
      setRing({ x:ringRef.current.x, y:ringRef.current.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    const onOver = (e: MouseEvent) => {
      setHovering(!!(e.target as HTMLElement).closest("a,button,[data-hover]"));
    };
    window.addEventListener("mousemove", onMove, { passive:true });
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;
  return (
    <>
      <div className="cur fixed pointer-events-none z-[99999] w-2 h-2 bg-green rounded-full"
        style={{ left:pos.x, top:pos.y, transform:`translate(-50%,-50%) scale(${hovering?0:1})`, transition:"transform 0.15s ease", boxShadow:"0 0 8px rgba(100,255,218,0.8)" }} />
      <div className={`cur fixed pointer-events-none z-[99998] rounded-full border transition-all duration-200 ${hovering?"w-12 h-12 border-green bg-green-t":"w-8 h-8 border-slate/30"}`}
        style={{ left:ring.x, top:ring.y, transform:"translate(-50%,-50%)" }} />
    </>
  );
}
