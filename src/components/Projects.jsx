"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbBrandGithub, TbPlayerPlayFilled, TbBrandNextjs, TbBrandTailwind, TbBrandJavascript, TbBrandReact, TbBrandCss3, TbShieldCheck, TbLayout } from "react-icons/tb";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Slides every 3 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          fill
          className={`absolute inset-0 object-cover transition-all duration-1000 group-hover:scale-105 ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
    </div>
  );
};

const projects = [
  {
    title: "Online Learning Platform",
    category: "Web Application",
    description: "A comprehensive and interactive online learning platform built with Next.js and Daisy UI. It features a responsive layout crafted with HTML/CSS and utilizes Better Auth for seamless and secure user authentication. Designed to provide an intuitive learning experience.",
    image: [
      "/images/project1-slide1.png",
      "/images/project1-slide2.png", 
      "/images/project1-slide3.png"
    ],
    tech: [TbBrandNextjs, TbBrandTailwind, TbBrandJavascript, TbLayout, TbShieldCheck],
    github: "https://github.com/Dinislamj6/b13-A8-repo",
    demo: "https://b13-a8-repo.vercel.app/"
  },
  {
    title: "Keen Keeper",
    category: "Web Application",
    description: "An advanced Relationship Management System (RMS) designed to nurture personal and professional connections. It features intelligent interaction tracking, relationship goal setting, and insightful friendship analytics with a sleek, minimalist dashboard.",
    image: [
      "/images/project2-slide1.png",
      "/images/project2-slide2.png",
      "/images/project2-slide3.png"
    ],
    tech: [TbBrandNextjs, TbBrandTailwind, TbBrandJavascript, TbLayout],
    github: "https://github.com/Dinislamj6/b13-A7-repo",
    demo: "https://keen-keeper.vercel.app/"
  },
  {
    title: "AppNest",
    category: "Web Application",
    description: "A highly optimized digital marketplace platform that bridges the gap between web users and mobile applications. Built with a focus on visual conversion and seamless navigation, it provides a curated 'Play Store' experience directly in the browser.",
    image: [
      "/images/project3-slide1.png",
      "/images/project3-slide2.png",
      "/images/project3-slide3.png"
    ],
    tech: [TbBrandReact, TbBrandJavascript, TbBrandTailwind, TbBrandCss3, TbLayout],
    github: "https://github.com/Dinislamj6/apps-play-store",
    demo: "https://apps-play-store.vercel.app/"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Web Application");
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 bg-[#0B1120] relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-8 md:mb-10">
          My Projects
        </h2>

        {/* Filters - Simplified as requested */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-16">
          <button 
            className="px-8 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          >
            Web Applications
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col bg-[#13111C] border border-white/10 rounded-3xl p-5 hover:border-purple-500/30 transition-colors duration-500"
            >
              <div className="relative h-48 md:h-56 w-full rounded-2xl overflow-hidden mb-6 border border-white/5">
                {Array.isArray(project.image) ? (
                  <ImageSlider images={project.image} />
                ) : (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.tech?.map((Icon, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ y: -5, color: '#A855F7' }}
                    className="text-slate-500 hover:text-purple-400 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors text-sm font-medium"
                >
                  Repository
                  <TbBrandGithub size={18} />
                </a>
                <a 
                  href={project.demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all text-sm font-medium"
                >
                  Demo
                  <TbPlayerPlayFilled size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="flex justify-center mt-16 md:mt-24">
          <motion.a 
            href="https://github.com/Dinislamj6?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group shadow-2xl"
          >
            <span>More Projects</span>
            <TbBrandGithub size={22} className="group-hover:rotate-12 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
