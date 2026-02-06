"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Target, TrendingUp } from "lucide-react";
import { about } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solver",
    description: "Strong foundation in algorithms and data structures through competitive programming",
  },
  {
    icon: Zap,
    title: "Full-Stack Developer",
    description: "Expertise in building scalable web applications with modern technologies",
  },
  {
    icon: Target,
    title: "Detail-Oriented",
    description: "Focus on code quality, performance optimization, and best practices",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learner",
    description: "Always exploring new technologies and improving technical skills",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">About Me</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            I build <span className="text-gradient-vibrant">intelligent</span> digital experiences.
          </h2>
          <p className="text-xl text-muted-foreground/80 font-light leading-relaxed">
            A Computer Science undergraduate with a deep focus on algorithmic efficiency and modern web architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-lg text-muted-foreground/90 leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-[1]"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-8 glass-card rounded-2xl group flex gap-6 items-start"
              >
                <div className="w-14 h-14 shrink-0 glass border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500">
                  <highlight.icon className="text-primary group-hover:text-white transition-colors duration-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
