// "use client";

// import { ExternalLink, Github } from "lucide-react";
// import Link from "next/link";
// import SectionHeading from "@/components/ui/SectionHeading";
// import GlassCard from "@/components/ui/GlassCard";
// import Badge from "@/components/ui/Badge";
// import { projects } from "@/data/portfolio";

// export default function Projects() {
//   return (
//     <section id="projects" className="relative py-24 md:py-32">
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
//       <div className="relative mx-auto max-w-6xl px-6">
//         <SectionHeading
//           label="Projects"
//           title="Selected work"
//           description="A collection of full-stack applications and tools I've built — from REST APIs to modern React dashboards."
//         />

//         <div className="grid gap-6 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <GlassCard
//               key={project.id}
//               delay={index * 0.06}
//               className={`group flex flex-col ${project.featured ? "md:col-span-1" : ""}`}
//             >
//               <div className="mb-4 flex items-start justify-between gap-4">
//                 <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-soft">
//                   {project.title}
//                 </h3>
//                 {project.featured && (
//                   <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-soft">
//                     Featured
//                   </span>
//                 )}
//               </div>

//               <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
//                 {project.description}
//               </p>

//               <div className="mb-6 flex flex-wrap gap-2">
//                 {project.tech.map((tech) => (
//                   <Badge key={tech}>{tech}</Badge>
//                 ))}
//               </div>

//               <div className="flex items-center gap-4 border-t border-white/[0.06] pt-4">
//                 <Link
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
//                 >
//                   <ExternalLink size={16} />
//                   Live Demo
//                 </Link>
//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
//                 >
//                   <Github size={16} />
//                   Source
//                 </Link>
//               </div>
//             </GlassCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/portfolio";

function ProjectPreview({ project }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title} live demo`}
      className="relative -mx-6 -mt-6 mb-5 block aspect-[16/10] overflow-hidden rounded-t-2xl border-b border-white/[0.06] bg-zinc-900"
    >
      {failed ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#7C3AED]/30 via-[#6366F1]/20 to-[#3B82F6]/30">
          <span className="text-4xl font-bold text-white/80">
            {project.title.charAt(0)}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/projects/${project.id}.jpg`}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </Link>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isGithubNoticeOpen, setIsGithubNoticeOpen] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          label="PROJECTS"
          title="Selected work"
          description="A collection of full-stack applications and tools I've built — from REST APIs to modern React dashboards."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <GlassCard
              key={project.id}
              delay={index * 0.06}
              className="group flex flex-col"
            >
              <ProjectPreview project={project} />

              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-soft">
                  {project.title}
                </h3>

                {project.featured && (
                  <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-soft">
                    Featured
                  </span>
                )}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-white/[0.06] pt-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Link>

                {project.clientProject ? (
                  <button
                    type="button"
                    onClick={() => setIsGithubNoticeOpen(true)}
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <Github size={16} />
                    Source
                  </button>
                ) : (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
                  >
                    <Github size={16} />
                    Source
                  </Link>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#3B82F6] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_25px_rgba(99,102,241,0.35)] transition hover:scale-[1.03]"
            >
              {showAll ? "Show Less" : "Show More Projects"}

              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        )}
      </div>

      {isGithubNoticeOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-8 backdrop-blur-sm"
          role="presentation"
          onClick={() => setIsGithubNoticeOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="github-notice-title"
            className="w-full max-w-md rounded-2xl border border-white/[0.1] bg-zinc-950 p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="github-notice-title"
              className="text-lg font-semibold text-white"
            >
              GitHub Repository
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              This project was developed by me for a client while working with
              a company. The source code is maintained in the company&apos;s
              GitHub repository and is not part of my personal GitHub profile.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Thank you for understanding.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsGithubNoticeOpen(false)}
                className="rounded-full bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#3B82F6] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_25px_rgba(99,102,241,0.35)] transition hover:scale-[1.03]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
