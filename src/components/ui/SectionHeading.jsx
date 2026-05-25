"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      {label && (
        <span className="mb-3 inline-block text-sm font-medium tracking-wider text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}
