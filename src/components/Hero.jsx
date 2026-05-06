"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const containerRef = useRef(null);

  const words = ["MERN Stack Developer", "Frontend Developer", "React / Next.js Developer"];

  // Typing animation
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullWord = words[i];
      if (isDeleting) {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(150);
      }
      if (!isDeleting && text === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // GSAP floating animation — targets .floating-icon which uses top/left positioning (no transform conflict)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".floating-icon",
        { y: 0 },
        {
          y: -18,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: { each: 0.3, from: "random" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Icons use top/left/right positioning (NO translate) so GSAP y animation has no conflict
  const techIcons = [
    { alt: "Next.js",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",        pos: "top-[5%] right-[5%]" },
    { alt: "Express",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",       pos: "top-[5%] left-[5%]" },
    { alt: "JavaScript",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", pos: "top-1/2 -translate-y-1/2 -left-5 md:-left-7" },
    { alt: "GitHub",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",         pos: "bottom-[5%] left-[5%]" },
    { alt: "React",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",           pos: "bottom-[5%] right-[5%]" },
    { alt: "MongoDB",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",       pos: "top-1/2 -translate-y-1/2 -right-5 md:-right-7" },
  ];

  return (
    <main
      ref={containerRef}
      className="relative pt-24 md:pt-32 pb-20 px-4 sm:px-6 overflow-hidden min-h-screen flex items-center bg-[#0B1120]"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            >
              Hi, I&apos;m <br />
              <span className="text-gradient">Din Islam 👋</span> <br />
              <span className="text-white text-lg sm:text-xl lg:text-3xl border-r-4 border-blue-500 pr-2 animate-pulse whitespace-nowrap inline-block mt-2 min-h-[2rem]">
                {text}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-slate-400 text-base lg:text-lg max-w-lg leading-relaxed pt-1 mx-auto lg:mx-0"
            >
              I build scalable full-stack applications using React, Next.js, Express, and MongoDB.
              I focus on clean code, high performance, and creating fast, user-friendly interfaces.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 rounded-full bg-gradient-primary font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 transition-all text-sm"
            >
              View Projects
            </button>
            <a
              href="#"
              className="px-7 py-3 rounded-full border-2 border-blue-500/50 font-bold text-white hover:bg-blue-500/10 hover:scale-105 active:scale-95 transition-all text-sm flex items-center justify-center"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image + Floating Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center mt-6 lg:mt-0"
        >
          {/* Circle */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-slate-800/50 backdrop-blur-sm border border-white/10">
            {/* Profile image */}
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative z-10 border-4 border-blue-500/20">
              <Image
                alt="Din Islam"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                src="/images/hero-image.png"
                width={500}
                height={500}
                priority
              />
            </div>

            {/* Glow effects */}
            <div className="absolute inset-0 rounded-full blur-[80px] bg-blue-600/20 -z-10 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full blur-[100px] bg-red-600/10 -z-20 animate-pulse delay-500"></div>

            {/* Floating tech icons — positioned with top/left/right so GSAP y animation works cleanly */}
            {techIcons.map((icon, index) => (
              <div
                key={index}
                className={`floating-icon absolute ${icon.pos} bg-slate-900/90 backdrop-blur-md p-1.5 sm:p-2 md:p-3 rounded-xl border border-white/10 tech-icon-glow shadow-2xl z-20`}
              >
                <img
                  alt={icon.alt}
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9"
                  src={icon.src}
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
