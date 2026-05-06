"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-brand-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center"
        >
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none mix-blend-overlay"></div>
            <Image
              src="/images/about-image.png"
              alt="Din Islam - MERN Stack Developer"
              fill
              className="object-cover relative z-10 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              About Me
            </h2>
            
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                I'm a MERN Stack Developer focused on building scalable, production-ready web applications. I design efficient RESTful APIs, develop responsive and interactive user interfaces, and optimize performance to deliver smooth and reliable user experiences.
              </p>
              
              <p>
                I follow clean architecture principles and modern development practices to write maintainable, high-quality code. I enjoy solving problems, improving performance, and building secure, user-focused applications.
              </p>

              <p>
                I'm a continuous learner, always exploring new tools and technologies within the MERN ecosystem to improve my skills and build better digital experiences.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-3 rounded-full bg-gradient-primary text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all mt-2"
              >
                <span>Download Resume</span>
                <Download size={18} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
