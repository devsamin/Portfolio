"use client";

import {
  GraduationCap,
  Target,
  Briefcase,
  Sparkles,
  FolderKanban,
} from "lucide-react";
import { aboutDetails } from "@/data/portfolio";

function DetailBlock({ icon: Icon, title, children }) {
  return (
    <section className="border-b border-white/[0.06] pb-6 last:border-0 last:pb-0">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple/20 to-accent/15 text-purple-soft">
          <Icon size={16} />
        </span>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
          {title}
        </h3>
      </div>
      {children}
    </section>
  );
}

export default function AboutExpanded() {
  return (
    <div className="space-y-6 pr-1">
      <DetailBlock icon={GraduationCap} title={aboutDetails.education.title}>
        {aboutDetails.education.items.map((item) => (
          <div
            key={item.school}
            className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
          >
            <p className="font-medium text-zinc-200">{item.degree}</p>
            <p className="mt-1 text-sm text-purple-soft">{item.school}</p>
            <p className="mt-1 text-xs text-muted">{item.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.detail}
            </p>
          </div>
        ))}
      </DetailBlock>

      <DetailBlock icon={Sparkles} title="Skills Summary">
        <ul className="grid gap-2 sm:grid-cols-2">
          {aboutDetails.coreSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-sm text-zinc-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </DetailBlock>

      <DetailBlock icon={Briefcase} title="Experience">
        <ul className="space-y-3">
          {aboutDetails.experience.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple to-accent" />
              {item}
            </li>
          ))}
        </ul>
      </DetailBlock>

      <DetailBlock icon={FolderKanban} title="Projects">
        <ul className="space-y-3">
          {aboutDetails.projects.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-blue-400" />
              {item}
            </li>
          ))}
        </ul>
      </DetailBlock>

      <DetailBlock icon={Target} title="Career Goals">
        <p className="text-sm leading-relaxed text-muted">
          {aboutDetails.goals}
        </p>
      </DetailBlock>
    </div>
  );
}
