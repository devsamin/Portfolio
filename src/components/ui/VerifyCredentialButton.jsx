"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function VerifyCredentialButton({ href, label = "Verify Credential" }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-5">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title="Open certificate in new tab"
        aria-label={`${label}. Opens in new tab`}
        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-purple/40 hover:bg-gradient-to-r hover:from-purple/10 hover:to-accent/10 hover:text-white hover:shadow-md hover:shadow-purple/10"
      >
        <span>{label}</span>
        <ExternalLink
          size={15}
          className="text-muted transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-accent-soft"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}
