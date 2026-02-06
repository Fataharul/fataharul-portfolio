"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    name: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "GitHub",
    value: "@Fataharul",
    href: personalInfo.github,
    icon: Github,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "LinkedIn",
    value: "md-fataharulislam",
    href: personalInfo.linkedin,
    icon: Linkedin,
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Codeforces",
    value: "@islam.fatahrul",
    href: personalInfo.codeforces,
    icon: Code2,
    color: "from-red-500 to-yellow-500",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Connect</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Let&apos;s Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground/80 font-light max-w-2xl mx-auto">
            Open for collaborations, new opportunities, or just a technical discussion.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target={contact.name === "Email" ? undefined : "_blank"}
                rel={contact.name === "Email" ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-full flex items-center gap-6 glass-card p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-primary/10 transition-all" />

                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <contact.icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                    {contact.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-white/60 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative glass rounded-3xl p-12 text-center border-white/5 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-50" />

            <h3 className="text-3xl font-black mb-6 text-white tracking-tight relative z-10">
              Ready to create something <span className="text-gradient-vibrant">impactful</span>?
            </h3>
            <p className="text-muted-foreground/80 font-medium mb-10 max-w-xl mx-auto relative z-10">
              I&apos;m always looking for ambitious projects and meaningful partnerships. Let&apos;s make it happen.
            </p>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-primary/30 relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Send Direct Message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
