"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-zinc-300"
          >
            <Sparkles size={14} className="text-accent-soft" />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium text-zinc-300 sm:text-xl md:text-2xl"
          >
            {personalInfo.title}
            <span className="text-muted"> ({personalInfo.subtitle})</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-20">
            <motion.a
              href="#about"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-2 text-muted transition-colors hover:text-white"
              aria-label="Scroll to about"
            >
              <span className="text-xs tracking-wider uppercase">Scroll</span>
              <ArrowDown size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px glow-line" />
    </section>
  );
}
