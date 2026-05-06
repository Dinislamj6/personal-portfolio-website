"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbBrandGithub, TbPlayerPlayFilled } from "react-icons/tb";
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
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
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
      "/images/project1-slide1.png", // Please replace these with your actual downloaded image paths
      "/images/project1-slide2.png", 
      "/images/project1-slide3.png"
    ],
    github: "https://github.com/Dinislamj6/b13-A8-repo",
    demo: "https://b13-a8-repo.vercel.app/"
  },
  {
    title: "Clinic Management Dashboard",
    category: "Web Application",
    description: "Clinic management dashboard built for clarity and efficiency. Prioritizes quick access to patient data, appointment stats, and admin tools via clear layout and visual hierarchy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    title: "Agri-Food Corporate Website",
    category: "Web Application",
    description: "Corporate website for an Algerian agri-food distributor, focused on trust-building through clear structure, strong visuals, and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop",
    github: "#",
    demo: "#"
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
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [activeFilter]); // Re-run animation if filter changes

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 bg-[#0B1120] relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-8 md:mb-10">
          My Projects
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-16">
          <button 
            onClick={() => setActiveFilter("Web Application")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === "Web Application" 
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]" 
              : "bg-transparent border border-purple-500/30 text-purple-400 hover:border-purple-500/60"
            }`}
          >
            Web Application
          </button>
          <button 
            onClick={() => setActiveFilter("Mobile application")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === "Mobile application" 
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.4)]" 
              : "bg-transparent border border-purple-500/30 text-purple-400 hover:border-purple-500/60"
            }`}
          >
            Mobile application
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.filter(p => p.category === activeFilter).map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col bg-[#13111C]/80 backdrop-blur-sm border border-white/10 rounded-3xl p-5 hover:border-purple-500/30 transition-colors duration-500"
            >
              <div className="relative h-48 md:h-56 w-full rounded-2xl overflow-hidden mb-6 border border-white/5">
                {Array.isArray(project.image) ? (
                  <ImageSlider images={project.image} />
                ) : (
                  <img 
                    src={project.image} 
                    alt="Project Preview"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center justify-between gap-3 mt-auto">
                <a 
                  href={project.github} 
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors text-sm font-medium"
                >
                  Repository
                  <TbBrandGithub size={18} />
                </a>
                <a 
                  href={project.demo} 
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all text-sm font-medium"
                >
                  Demo
                  <TbPlayerPlayFilled size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
