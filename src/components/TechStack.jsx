"use client";

import { motion } from "framer-motion";
import { 
  TbBrandHtml5, 
  TbBrandCss3,
  TbBrandJavascript, 
  TbBrandReact, 
  TbBrandNextjs,
  TbBrandMongodb,
  TbBrandTailwind,
  TbPalette,
  TbComponents,
  TbShieldLock,
  TbBrandGithub,
  TbBrandNodejs
} from "react-icons/tb";
import { SiExpress } from "react-icons/si";

const stacks = [
  { name: "HTML", icon: TbBrandHtml5 },
  { name: "CSS", icon: TbBrandCss3 },
  { name: "JavaScript", icon: TbBrandJavascript },
  { name: "React", icon: TbBrandReact },
  { name: "Next.js", icon: TbBrandNextjs },
  { name: "Node.js", icon: TbBrandNodejs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Tailwind CSS", icon: TbBrandTailwind },
  { name: "Daisy UI", icon: TbPalette },
  { name: "Hero UI", icon: TbComponents },
  { name: "Better Auth", icon: TbShieldLock },
  { name: "GitHub", icon: TbBrandGithub },
];

export default function TechStack() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 px-0 bg-[#0B1120] relative overflow-hidden w-full">
      <div className="w-full">
        <div className="mb-8 text-center px-4">
          <h4 className="text-slate-400 text-sm font-bold tracking-[0.2em] uppercase mb-2">
            My Tech Stack
          </h4>
        </div>
        <div className="relative w-full flex items-center">
          {/* Gradient Edges to make it look smooth */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Container */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-4 md:gap-6 w-max"
          >
            {[...stacks, ...stacks, ...stacks].map((stack, index) => {
              const Icon = stack.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-44 bg-transparent border border-white/10 hover:border-orange-500/50 rounded-2xl transition-all duration-300 group shrink-0"
                >
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-300 stroke-[1.5]" />
                  <span className="text-slate-300 text-sm md:text-base font-medium">
                    {stack.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
