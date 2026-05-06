import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 border-t border-white/5 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm text-center md:text-left">
        <p>© 2025 Din Islam. All rights reserved.</p>
        <div className="flex space-x-6">
          <a className="hover:text-blue-400 transition-colors" href="https://www.linkedin.com/in/dinislamdev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-blue-400 transition-colors" href="https://github.com/Dinislamj6" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-blue-400 transition-colors" href="mailto:dinislamj6@gmail.com">Mail</a>
        </div>
      </div>
    </footer>
  );
}
