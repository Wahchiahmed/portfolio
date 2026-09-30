"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const categories = [
    "Tous",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];
  const [active, setActive] = useState("Tous");

  const visible =
    active === "Tous"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
              active === c
                ? "border-transparent bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "border-border bg-card text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={i * 100} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}