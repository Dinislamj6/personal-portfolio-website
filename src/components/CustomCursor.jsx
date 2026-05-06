"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [clicks, setClicks] = useState([]);
  const [trails, setTrails] = useState([]);
  const lastTrailTime = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add trail particles (throttled)
      const now = Date.now();
      if (now - lastTrailTime.current > 50) {
        setTrails((prev) => [
          ...prev.slice(-10), // Keep max 10 trails
          { id: now, x: e.clientX, y: e.clientY }
        ]);
        lastTrailTime.current = now;
      }
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === "button" ||
        e.target.tagName.toLowerCase() === "a" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (e) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 1000);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Clear trails automatically after mouse stops
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastTrailTime.current > 100) {
        setTrails((prev) => (prev.length > 0 ? prev.slice(1) : []));
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Click Ripple / Sparkle Effect */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed w-8 h-8 border-2 border-blue-400 rounded-full pointer-events-none z-[9999]"
            style={{ left: click.x - 16, top: click.y - 16 }}
          />
        ))}
      </AnimatePresence>

      {/* Trailing Glimmer Effect */}
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 0, opacity: 0, y: trail.y + 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-2 h-2 bg-blue-300 rounded-full pointer-events-none z-[9998] mix-blend-screen shadow-[0_0_10px_#60a5fa]"
            style={{ left: trail.x - 4, top: trail.y - 4 }}
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference shadow-[0_0_10px_white]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Hover Ring with Pulse */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(236, 72, 153, 0.15)" : "transparent",
          borderColor: isHovering ? "rgba(236, 72, 153, 0.8)" : "rgba(59, 130, 246, 0.8)",
          boxShadow: isHovering ? "0 0 20px rgba(236, 72, 153, 0.5)" : "0 0 20px rgba(59, 130, 246, 0.5)",
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
      />
    </>
  );
}
