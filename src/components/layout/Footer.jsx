"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const socialIcons = [
  { icon: Github, href: personalInfo.social.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
