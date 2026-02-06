"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Brain, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: skills.programming,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: skills.webDevelopment,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "CS & Problem Solving",
    icon: Brain,
    skills: skills.csAndProblemSolving,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: skills.tools,
    color: "from-orange-500 to-red-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Expertise</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8 opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="relative p-8 glass-card rounded-3xl h-full flex flex-col items-start gap-6 border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                {/* Icon */}
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border-white/10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500">
                  <category.icon size={28} />
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 glass border-white/5 rounded-lg text-xs font-semibold text-muted-foreground/80 lowercase tracking-wide hover:text-white hover:border-white/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
