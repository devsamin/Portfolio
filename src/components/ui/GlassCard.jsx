"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`glass rounded-2xl p-6 transition-shadow duration-300 ${hover ? "hover:border-white/[0.14] hover:shadow-lg hover:shadow-accent/5" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
