"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, FileCheck } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Milestones</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Journey & <span className="text-gradient">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8 opacity-50" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="relative group"
              >
                <div className="flex gap-8 items-start">
                  {/* Date/Year Column */}
                  <div className="hidden md:flex flex-col items-center pt-2">
                    <span className="text-sm font-black text-muted-foreground/50 tracking-widest uppercase group-hover:text-primary transition-colors">
                      {achievement.year}
                    </span>
                    <div className="w-px h-full bg-border/20 mt-4 group-hover:bg-primary/20 transition-colors" />
                  </div>

                  {/* Icon & Card */}
                  <div className="flex-1">
                    <div className="relative glass-card rounded-3xl p-8 border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.1)]">
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500">
                          <Award size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                            {achievement.title}
                          </h3>
                          <div className="md:hidden text-xs font-bold text-primary tracking-widest uppercase mt-1">
                            {achievement.year}
                          </div>
                        </div>
                        {achievement.hasCertificate && achievement.certificateUrl && (
                          <a
                            href={achievement.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center gap-2 px-3 py-1 glass rounded-lg text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                          >
                            <FileCheck size={14} className="text-primary" />
                            <span>View Certificate</span>
                          </a>
                        )}
                      </div>

                      <p className="text-muted-foreground/80 font-medium leading-relaxed mb-6">
                        {achievement.description}
                      </p>

                      {achievement.hasCertificate && achievement.certificateUrl && (
                        <a
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl hover:bg-primary/[0.05] hover:border-primary/30 transition-all duration-300 group/cert"
                        >
                          <p className="text-xs text-muted-foreground/50 italic font-medium group-hover/cert:text-primary transition-colors">
                            Click to view certification documentation
                          </p>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
