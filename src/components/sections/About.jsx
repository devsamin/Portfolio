"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AboutExpanded from "@/components/sections/AboutExpanded";
import { aboutIntro, personalInfo } from "@/data/portfolio";

const expandTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
};

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="ABOUT" title="Who I am" />

        <div className="grid gap-10 lg:grid-cols-[minmax(280px,360px)_1fr] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:mx-0 lg:max-w-none"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple/30 via-accent/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-purple/10">
              <Image
                src={aboutIntro.profileImage}
                alt={`${personalInfo.name} profile`}
                width={400}
                height={400}
                className="aspect-square w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-xl glass-strong px-4 py-2 text-sm font-medium text-white">
              {personalInfo.location}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex min-w-0 flex-col"
          >
            <p className="text-lg leading-relaxed text-zinc-300 md:text-xl">
              {aboutIntro.short}
            </p>
            <p className="mt-4 text-sm text-muted">
              {personalInfo.title} ( Python | Django | React | Next.Js )
            </p>

            <motion.button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-expanded={isExpanded}
              aria-controls="about-expanded-panel"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-purple via-accent to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple/20 transition-shadow duration-300 hover:shadow-glow-purple"
            >
              {isExpanded ? "Show Less" : "More About Me"}
              {isExpanded ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              )}
            </motion.button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id="about-expanded-panel"
                  key="about-expanded"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: 520 }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={expandTransition}
                  className="overflow-hidden"
                >
                  <div className="about-scroll mt-8 max-h-[min(420px,55vh)] overflow-y-auto rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm md:p-6 lg:max-h-[480px]">
                    <AboutExpanded />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
