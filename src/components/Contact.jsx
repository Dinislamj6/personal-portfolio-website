"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const form = e.target;
    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => { object[key] = value });
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://formsubmit.co/ajax/dinislamj6@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      }).then(res => res.json());

      if (res.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: HiOutlineMail,
      label: "Email",
      value: "dinislamj6@gmail.com",
      link: "mailto:dinislamj6@gmail.com",
      color: "text-cyan-400"
    },
    {
      icon: HiOutlinePhone,
      label: "Phone / Whatsapp",
      value: "+880 1841 720514",
      link: "https://wa.me/8801841720514",
      color: "text-emerald-400"
    },
    {
      icon: HiOutlineLocationMarker,
      label: "Location",
      value: "Noakhali, Bangladesh",
      link: "#",
      color: "text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 bg-[#0B1120] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
            <h2 className="relative px-8 py-3 bg-[#0F172A] border border-cyan-500/30 rounded-xl text-white font-black text-xl md:text-2xl uppercase tracking-[0.3em] shadow-2xl">
              Contact Me
            </h2>
          </div>
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#0F172A]/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-3xl font-black text-cyan-400 mb-8">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1 block">Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Your name"
                    className="w-full bg-[#0B1120]/60 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder-slate-700" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1 block">Email</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full bg-[#0B1120]/60 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder-slate-700" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1 block">Subject</label>
                <input 
                  name="subject"
                  required
                  type="text" 
                  placeholder="What's this about?"
                  className="w-full bg-[#0B1120]/60 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder-slate-700" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1 block">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5" 
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full bg-[#0B1120]/60 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder-slate-700 resize-none" 
                ></textarea>
              </div>

              {status === "success" && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-bold text-center animate-pulse">
                  Message sent successfully!
                </div>
              )}

              <button 
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-cyan-600 hover:bg-cyan-500 py-5 rounded-2xl font-black text-white uppercase tracking-widest text-sm shadow-xl shadow-cyan-600/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Right: Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Let's Connect */}
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white">Let's Connect</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Would love to discuss your next project. Whether it's a collaboration, consultation, or just a friendly chat about tech, I'm here to help!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a 
                    key={i} 
                    href={info.link}
                    className="flex items-center space-x-5 p-6 bg-[#0F172A]/40 border border-white/5 rounded-3xl group hover:border-cyan-500/30 transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0B1120]/80 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      <info.icon className={info.color} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                      <p className="text-slate-200 font-bold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Catch Me Socials */}
            <div className="space-y-6 pt-4 border-t border-white/5">
              <h4 className="text-xl font-black text-white">Catch Me</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/dinislamdev", color: "hover:text-blue-400" },
                  { icon: FaGithub, href: "https://github.com/Dinislamj6", color: "hover:text-white" },
                  { icon: FaDiscord, href: "https://discord.com/users/dinislam0107", color: "hover:text-indigo-400" },
                  { icon: FaWhatsapp, href: "https://wa.me/8801841720514", color: "hover:text-green-400" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-2xl bg-[#0F172A]/80 border border-white/5 flex items-center justify-center text-2xl text-slate-500 ${social.color} hover:border-cyan-500/30 transition-all hover:-translate-y-2`}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
