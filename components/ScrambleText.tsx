"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function ScrambleText({ text, className = "", delay = 0, tag: Tag = "span" }: Props) {
  const [display, setDisplay] = useState(text);
  const { ref, inView } = useInView({ triggerOnce: true });
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    let frame = 0;
    const totalFrames = 20;
    const revealPerFrame = Math.ceil(text.length / totalFrames);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        const revealed = frame * revealPerFrame;
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < revealed) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplay(text);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, text, delay]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
