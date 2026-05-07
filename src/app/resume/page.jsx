"use client";

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe, FaDownload, FaArrowLeft } from 'react-icons/fa';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0">
      {/* Control Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <button 
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-blue-600 font-bold transition-all"
        >
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </button>
        
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
        >
          <FaDownload className="text-sm" />
          <span>Save as PDF</span>
        </button>
      </div>

      {/* Resume Document */}
      <div className="max-w-[850px] mx-auto bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] print:shadow-none min-h-[1100px]">
        <div className="p-12 sm:p-16">
          {/* Header */}
          <header className="border-b-[3px] border-blue-600 pb-8 mb-10">
            <h1 className="text-5xl font-black text-slate-900 mb-3 tracking-tighter">DIN ISLAM</h1>
            <p className="text-2xl text-blue-600 font-bold mb-6">Frontend & MERN Stack Developer</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-[15px] text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <FaPhone className="text-blue-600 text-sm" />
                </div>
                <span className="font-medium">+8801841720514</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <FaEnvelope className="text-blue-600 text-sm" />
                </div>
                <span className="font-medium">dinislamj6@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-600 text-sm" />
                </div>
                <span className="font-medium">Maijdee, Noakhali, Bangladesh</span>
              </div>
              <div className="flex items-center gap-5 pt-2">
                <a href="https://github.com/Dinislamj6" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors font-bold text-slate-800">
                  <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/dinislamdev" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors font-bold text-slate-800">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </header>

          {/* Body Section */}
          <div className="space-y-10">
            {/* Objective */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-[0.2em] text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-[3px] bg-blue-600"></span>
                Career Objective
              </h3>
              <p className="text-slate-700 leading-relaxed text-lg pl-11">
                Motivated Frontend Developer specializing in building responsive, high-performance web applications using
                React.js and Next.js. Expert at implementing secure authentication systems and modern UIs. Currently
                expanding expertise into MERN stack development to build scalable full-stack solutions.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-[0.2em] text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-[3px] bg-blue-600"></span>
                Technical Skills
              </h3>
              <div className="pl-11 space-y-4">
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-black text-slate-900">Frontend:</span>
                  <span className="text-slate-700">HTML5, CSS3, JavaScript (ES6+), React.js, Next.js (App Router), Tailwind CSS, Daisy UI</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-black text-slate-900">Backend:</span>
                  <span className="text-slate-700">Better Auth, REST APIs, Node.js & Express.js (Learning)</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-black text-slate-900">Tools:</span>
                  <span className="text-slate-700">Git, GitHub, VS Code, Vercel, Netlify, SEO Optimization</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <span className="font-black text-slate-900">Soft Skills:</span>
                  <span className="text-slate-700">Problem Solving, Quick Learning, Clean Coding, Responsive Design</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-[0.2em] text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-[3px] bg-blue-600"></span>
                Key Projects
              </h3>
              
              <div className="pl-11 space-y-8">
                {/* Project 01 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-black text-slate-900">01. Online Learning Platform</h4>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Next.js | Better Auth</span>
                  </div>
                  <p className="text-slate-700 mb-3 text-[15px]">Architected a full-stack educational portal with secure multi-role access. Implemented dynamic routing and private course protection.</p>
                  <div className="flex gap-4 text-xs font-black text-slate-500 uppercase tracking-widest">
                    <a href="#" className="hover:text-blue-600 underline">Live Demo</a>
                    <a href="#" className="hover:text-blue-600 underline">Source Code</a>
                  </div>
                </div>

                {/* Project 02 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-black text-slate-900">02. Apps Play Store</h4>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">React.js | Tailwind</span>
                  </div>
                  <p className="text-slate-700 mb-3 text-[15px]">Developed a dynamic web application showcasing mobile applications with real-time UI updates and data mapping.</p>
                  <div className="flex gap-4 text-xs font-black text-slate-500 uppercase tracking-widest">
                    <a href="#" className="hover:text-blue-600 underline">Live Demo</a>
                    <a href="#" className="hover:text-blue-600 underline">Source Code</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-[0.2em] text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-[3px] bg-blue-600"></span>
                Education
              </h3>
              <div className="pl-11 space-y-6">
                <div className="relative pl-6 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                  <div className="flex justify-between font-black text-slate-900 mb-1">
                    <span>Diploma in Computer Science & Technology</span>
                    <span>2023 – 2024</span>
                  </div>
                  <p className="text-slate-600 font-bold">Feni Computer Institute, Feni</p>
                </div>
                <div className="relative pl-6 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                  <div className="flex justify-between font-black text-slate-900 mb-1">
                    <span>Secondary School Certificate (SSC) - Science</span>
                    <span>2023</span>
                  </div>
                  <p className="text-slate-600 font-bold">Madrasa Board (GPA: 5.00 / 5.00)</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer for Digital View */}
      <footer className="max-w-4xl mx-auto mt-12 text-center text-slate-400 text-sm font-medium pb-10 print:hidden">
        Generated by Din Islam Portfolio System &bull; {new Date().toLocaleDateString()}
      </footer>
    </div>
  );
}
