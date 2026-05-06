import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm text-center md:text-left">
        <p>© 2025 Din Islam. All rights reserved.</p>
        <div className="flex space-x-6">
          <a className="hover:text-blue-400 transition-colors" href="#">LinkedIn</a>
          <a className="hover:text-blue-400 transition-colors" href="#">GitHub</a>
          <a className="hover:text-blue-400 transition-colors" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
