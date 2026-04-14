"use client";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({ children, className = "", href, onClick, strength = 0.35 }: Props) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const props = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `magnetic ${className}`,
    style: { transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" },
  };

  if (href) {
    return <a href={href} {...props}>{children}</a>;
  }
  return <button onClick={onClick} {...props}>{children}</button>;
}
