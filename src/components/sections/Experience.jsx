"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, FolderKanban } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { timeline } from "@/data/portfolio";

const typeConfig = {
  education: {
    icon: GraduationCap,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  experience: {
    icon: Briefcase,
    color: "text-accent-soft",
    bg: "bg-accent/10",
  },
  project: {
    icon: FolderKanban,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="EXPERIENCE"
          title="Education & journey"
          description="My academic foundation and hands-on experience building real-world applications."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent md:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const config = typeConfig[item.type] || typeConfig.experience;
              const Icon = config.icon;

              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6 md:gap-8"
                >
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${config.bg} ${config.color}`}
                  >
                    <Icon size={18} />
                  </div>

                  <div className="glass flex-1 rounded-2xl p-6 transition-colors hover:border-white/[0.12]">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-accent-soft">
                          {item.organization}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
