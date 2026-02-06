"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, ExternalLink, Trophy } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function CompetitiveProgramming() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-24">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Problem Solving</span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Algorithmic <span className="text-gradient">Mastery</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8 opacity-50" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Codeforces Profile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-10 border-white/5 hover:border-accent/20 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-all" />

              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-accent border-white/10 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-500">
                  <Code2 size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-accent transition-colors">Codeforces</h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Active Rank</p>
                </div>
              </div>

              <p className="text-muted-foreground/80 font-medium leading-relaxed mb-8">
                Analyzing complex algorithmic problems and implementing optimized solutions with a focus on time and space complexity.
              </p>

              <motion.a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-black uppercase tracking-widest text-xs hover:shadow-[0_10px_30px_rgba(236,72,153,0.4)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>

            {/* Problem Solving Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-3xl p-10 border-white/5"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary border-white/10">
                  <Trophy size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Focus Areas</h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Techniques</p>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  "Data Structures & Algorithms",
                  "Dynamic Programming",
                  "Graph Theory",
                  "Greedy Algorithms",
                  "Binary Search & Trees",
                ].map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass border-white/5 rounded-2xl hover:bg-white/[0.03] transition-colors group cursor-default"
                  >
                    <div className="w-2 h-2 bg-primary group-hover:bg-accent rounded-full transition-colors" />
                    <span className="text-sm font-bold text-muted-foreground/80 group-hover:text-white transition-colors">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 p-3 glass border-white/5 rounded-2xl text-center max-w-sm mx-auto"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
              Actively competing in global contests
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
