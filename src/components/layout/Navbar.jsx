"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const initials = personalInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem]">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            {/* <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-blue-600 text-xs font-bold">
              {initials}
            </span> */}
            <span className="text-lg sm:hidden">𝑨. 𝑺𝒂𝒎𝒊𝒏</span>

            <span className="hidden sm:inline text-2xl">𝑨𝒃𝒅𝒖𝒍𝒍𝒂 𝑨𝒍 𝑺𝒂𝒎𝒊𝒏</span>
            {/* <span className="text-lg sm:text-2xl">𝑨𝒃𝒅𝒖𝒍𝒍𝒂 𝑨𝒍 𝑺𝒂𝒎𝒊𝒏</span> */}
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-zinc-200 md:inline-flex"
          >
            Hire Me
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-medium text-white"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex rounded-full bg-white px-8 py-3 text-base font-medium text-background"
                >
                  Hire Me
                </Link>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
