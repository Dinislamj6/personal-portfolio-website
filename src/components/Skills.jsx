"use client";

import { motion } from "framer-motion";
import { 
  TbBrandHtml5, 
  TbBrandJavascript, 
  TbBrandReact, 
  TbBrandTailwind,
  TbDatabase
} from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa"; // Using FontAwesome for Node.js icon as it perfectly matches the hexagon shape in the image

const skills = [
  { 
    name: "Tailwind CSS", 
    icon: TbBrandTailwind,
    description: "Creating responsive, modern, and clean layouts quickly using utility-first styling."
  },
  { 
    name: "JavaScript", 
    icon: TbBrandJavascript,
    description: "Writing efficient, modern, and optimized code for both frontend and backend logic."
  },
  { 
    name: "React", 
    icon: TbBrandReact,
    description: "Building fast, interactive, and component-based UIs with clean state management."
  },
  { 
    name: "Node.js", 
    icon: FaNodeJs,
    description: "Developing scalable backend logic and high-performance server-side applications."
  },
  { 
    name: "MongoDB", 
    icon: TbDatabase,
    description: "Managing NoSQL databases with flexible schemas for high-performance data storage."
  },
  { 
    name: "HTML", 
    icon: TbBrandHtml5,
    description: "Creating clean, well-structured page layouts with semantic markup for better accessibility and SEO"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 bg-[#0B1120] relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            I work with modern tools and technologies to build fast, scalable and efficient web applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F172A]/50 backdrop-blur-sm rounded-xl p-[1px] group relative overflow-hidden"
              >
                {/* Subtle gradient border effect using a pseudo-element behind the card content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-pink-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Inner Card Content */}
                <div className="bg-[#0B1120] rounded-xl p-8 flex flex-col items-center text-center relative z-10 h-full border border-white/5 hover:border-blue-500/30 transition-colors duration-500">
                  <Icon className="w-16 h-16 text-blue-500 mb-6 stroke-[1.5]" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {skill.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
