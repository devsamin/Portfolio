"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  GraduationCap,
  Briefcase,
  Github,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import VerifyCredentialButton from "@/components/ui/VerifyCredentialButton";
import { achievements } from "@/data/portfolio";

const achievementIcons = {
  code: Code2,
  rocket: Rocket,
  graduation: GraduationCap,
  briefcase: Briefcase,
  github: Github,
  star: Star,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="ACHIEVEMENTS"
          title="Milestones & wins"
          description="Highlights from my learning journey, projects, and professional growth — with credentials you can verify."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = achievementIcons[item.icon] || Star;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple/30 to-accent/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-70" />
                <div className="relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-white/[0.14] group-hover:shadow-lg group-hover:shadow-accent/5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-accent/15 text-purple-soft transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>
                    {item.badge && (
                      <span className="rounded-full border border-purple/30 bg-purple/10 px-2.5 py-0.5 text-xs font-medium text-purple-soft">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-white transition-colors group-hover:text-accent-soft">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>

                  {item.credentialUrl && (
                    <VerifyCredentialButton href={item.credentialUrl} />
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
