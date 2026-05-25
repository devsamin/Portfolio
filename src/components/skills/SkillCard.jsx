"use client";

import { motion } from "framer-motion";
import { getSkillIcon } from "@/components/skills/skillIcons";

export default function SkillCard({ skill }) {
  const Icon = getSkillIcon(skill.icon);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple/50 via-accent/40 to-purple-soft/50 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-purple/40 group-hover:shadow-card-glow">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-accent/20 text-purple-soft transition-transform duration-300 group-hover:scale-110">
          <Icon size={24} />
        </div>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
          <p className="mt-1 text-xs text-muted">{skill.categoryLabel}</p>
        </div>
      </div>
    </motion.div>
  );
}
