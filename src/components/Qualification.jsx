"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaUserGraduate } from "react-icons/fa";
import { useState } from "react";

const qualifications = [
  {
    type: "Diploma in Engineering",
    subject: "Computer Science & Technology (CST)",
    session: "2023 - 2024 (Running)",
    institution: "Feni Computer Institute",
    status: "Currently Running",
    icon: FaUserGraduate,
    color: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/40",
    glow: "rgba(59, 130, 246, 0.5)"
  },
  {
    type: "SSC (Secondary School Certificate)",
    subject: "Science Group",
    session: "Passing Year: 2023 | GPA: 5.00",
    institution: "Darul Azhar Model Madrasah (Madrasah Board)",
    status: "Completed",
    icon: FaGraduationCap,
    color: "from-emerald-600 to-teal-600",
    shadow: "shadow-emerald-500/40",
    glow: "rgba(16, 185, 129, 0.5)"
  }
];

function QualificationCard({ q, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="h-full bg-slate-900/90 rounded-[2.5rem] p-10 border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500 flex flex-col items-start shadow-2xl relative overflow-hidden"
      >
        {/* Animated Glow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, ${q.glow}, transparent 70%)` }}
        ></div>

        {/* Status Badge with pulse */}
        <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest z-20 ${q.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-blue-500/10 text-blue-400 border border-blue-500/20 animate-pulse"}`}>
          {q.status}
        </div>

        {/* Icon Box with Float Animation */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${q.color} flex items-center justify-center mb-10 shadow-2xl ${q.shadow} group-hover:scale-110 transition-transform duration-500 relative z-10`}
          style={{ transform: "translateZ(50px)" }}
        >
           <q.icon className="w-10 h-10 text-white" />
        </motion.div>

        <div className="space-y-6 relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div>
            <motion.h4 
              className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-2"
            >
              {q.type}
            </motion.h4>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-300">
              {q.subject}
            </h3>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3 text-slate-300">
              <div className="w-6 h-[2px] bg-blue-500/50 rounded-full"></div>
              <span className="text-sm font-bold tracking-wide">{q.institution}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-slate-500 group-hover:text-slate-400 transition-colors">
              <FaBookOpen className="w-4 h-4 text-blue-500/70" />
              <span className="text-xs font-bold uppercase tracking-widest">{q.session}</span>
            </div>
          </div>
        </div>

        {/* Background number with depth */}
        <div 
          className="absolute -bottom-10 -right-10 text-[14rem] font-black text-white/[0.03] pointer-events-none group-hover:text-white/[0.07] transition-colors"
          style={{ transform: "translateZ(-20px)" }}
        >
          {index + 1}
        </div>
      </div>
    </motion.div>
  );
}

export default function Qualification() {
  return (
    <section id="qualification" className="py-24 md:py-40 px-4 sm:px-6 bg-[#0B1120] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 md:mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 mb-8 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            <span>Education Path</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Excellence</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A chronological journey of my formal education and technical specialization.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 perspective-1000">
          {qualifications.map((q, index) => (
            <QualificationCard key={index} q={q} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
