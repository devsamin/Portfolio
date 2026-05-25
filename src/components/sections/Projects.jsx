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

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

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

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition-colors hover:text-white"
                >
                  <Github size={16} />
                  Source
                </Link>
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
    </section>
  );
}
