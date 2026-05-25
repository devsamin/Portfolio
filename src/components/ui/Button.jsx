"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  primary:
    "bg-white text-background hover:bg-zinc-200 shadow-lg shadow-white/10",
  secondary:
    "glass text-white hover:border-white/20 hover:bg-white/[0.06]",
  ghost: "text-muted hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  const motionProps = disabled
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
