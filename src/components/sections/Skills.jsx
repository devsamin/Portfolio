"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/skills/SkillCard";
import { skillTabs, filterableSkills } from "@/data/portfolio";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? filterableSkills
      : filterableSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple/[0.03] via-transparent to-accent/[0.02]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="SKILLS"
          title="Technical expertise"
          description="Explore my toolkit across the full stack — filter by category to dive deeper."
        />

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 scrollbar-thin md:flex-wrap md:overflow-visible md:pb-0">
          {skillTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-muted hover:bg-white/[0.05] hover:text-zinc-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-tab-bg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple via-accent to-blue-500 shadow-glow-purple"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <p className="py-12 text-center text-muted">
            No skills in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
