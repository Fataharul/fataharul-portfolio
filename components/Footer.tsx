"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Code2, href: personalInfo.codeforces, label: "Codeforces" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 overflow-hidden border-t border-white/5">
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Brand/Logo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary font-black text-2xl border-white/5 shadow-lg"
          >
            F
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                className="w-12 h-12 glass hover:bg-primary hover:text-white border-white/5 flex items-center justify-center transition-all duration-500 rounded-xl group"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                aria-label={social.label}
              >
                <social.icon
                  size={20}
                  className="text-muted-foreground group-hover:text-white transition-colors"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-20 h-px bg-white/5" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center space-y-4"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30 flex items-center justify-center gap-3">
              Handcrafted with
              <Heart size={12} className="text-primary fill-primary animate-pulse" />
              by {personalInfo.name}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/20">
              © {currentYear} • Next.js 14 • Framer Motion
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-white/5 transition-all">
              <span className="text-xl group-hover:-translate-y-1 transition-transform">↑</span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/30 group-hover:text-primary transition-colors">Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
