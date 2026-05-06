"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Let's <span className="text-gradient">Collaborate</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-blue-500" />, label: "Email", value: "contact@dinislam.dev" },
                { icon: <Phone className="text-red-500" />, label: "Phone", value: "+880 1234 567890" },
                { icon: <MapPin className="text-emerald-500" />, label: "Location", value: "Dhaka, Bangladesh" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-colors">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-200 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-dark p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-gradient-primary py-4 rounded-xl font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group">
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
