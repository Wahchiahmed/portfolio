import Image from "next/image";
import type { Project } from "@/data/projects";
import GithubIcon from "./icons/GithubIcon";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";

const gradients: Record<string, string> = {
  Web: "from-blue-500 to-cyan-400",
  Desktop: "from-emerald-500 to-teal-400",
  IA: "from-violet-500 to-fuchsia-500",
};

export default function ProjectCard({ project }: { project: Project }) {
  const gradient = gradients[project.category] ?? "from-slate-500 to-slate-400";
  const hasLinks = project.github || project.demo;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Visuel */}
      <div
        className={`relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br ${gradient}`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]"
        />

        {project.image ? (
          <Image
            src={project.image}
            alt={`Capture d’écran de ${project.title}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="relative text-6xl drop-shadow-lg transition duration-300 group-hover:scale-110 group-hover:-rotate-6">
            {project.icon}
          </span>
        )}

        <span className="absolute top-4 left-4 rounded-full bg-black/30 px-3 py-1 font-mono text-xs text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
            >
              {t}
            </li>
          ))}
        </ul>

        {hasLinks && (
  <div className="mt-6 flex gap-3 border-t border-border pt-4">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`Voir le code de ${project.title} sur GitHub`}
        className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-transparent hover:text-white"
      >
        <span className="absolute inset-0 -translate-x-full bg-neutral-900 transition-transform duration-300 ease-out group-hover/btn:translate-x-0 dark:bg-neutral-700" />
        <GithubIcon className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:-rotate-12" />
        <span className="relative">Code</span>
      </a>
    )}
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        aria-label={`Voir la démo de ${project.title}`}
        className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-transparent hover:text-white"
      >
        <span className="absolute inset-0 -translate-x-full bg-blue-600 transition-transform duration-300 ease-out group-hover/btn:translate-x-0" />
        <ExternalLinkIcon className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        <span className="relative">Démo</span>
      </a>
    )}
  </div>
)}
      </div>
    </article>
  );
}