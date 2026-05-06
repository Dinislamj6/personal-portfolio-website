"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080D1A] pt-16 pb-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tighter">
              <span className="text-blue-500">MERN</span>
              <span className="text-white ml-2 opacity-90">Stack Developer</span>
            </h3>
          </div>

          {/* Right: Back to top button (Moved here from bottom) */}
          <div className="flex justify-center md:justify-end">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 py-2.5 px-5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all shadow-xl"
            >
              <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-bold">Back to Home</span>
              <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <ArrowUp size={18} />
              </div>
            </motion.button>
          </div>

        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex justify-center text-slate-500 text-xs tracking-widest uppercase">
          <p>© 2026 Din Islam | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
