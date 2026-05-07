"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Qualification', href: '#qualification' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-slate-950/60 backdrop-blur-xl border-b border-white/5 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
            DI
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight hidden sm:block">
            <span className="text-blue-500">DIN</span>
            <span className="text-white"> ISLAM</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              onClick={() => setActiveLink(link.name)}
              className={`py-2 transition-all duration-300 relative group ${
                activeLink === link.name ? 'text-blue-500' : 'text-slate-300 hover:text-white'
              }`} 
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <a 
            href="/Din_Islam_Final_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-6 py-2.5 rounded-full bg-gradient-primary text-white text-xs font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/20 uppercase tracking-widest"
          >
            Resume
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-white hover:bg-white/5 rounded-xl transition-colors z-[110] relative"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[99] bg-[#0f172a]/98 backdrop-blur-2xl flex flex-col"
          >
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-2xl font-bold">
              {[...navLinks, { name: 'Resume', href: '/resume' }]
                .filter(link => ['About', 'Skills', 'Projects', 'Resume'].includes(link.name))
                .map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors" 
                  href={link.name === 'Resume' ? '/Din_Islam_Final_Resume.pdf' : link.href}
                  target={link.name === 'Resume' ? '_blank' : undefined}
                  rel={link.name === 'Resume' ? 'noopener noreferrer' : undefined}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
