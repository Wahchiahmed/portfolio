import ProjectsGrid from "./ProjectsGrid";
import { projects } from "@/data/projects";
import GithubIcon from "./icons/GithubIcon";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate scroll-mt-16 overflow-hidden px-6 py-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-500/10" />
      </div>

      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">{"// projets"}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Ce que j’ai{" "}
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
            construit
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Une sélection de projets académiques et personnels, du web au desktop
          en passant par l’IA.
        </p>

        <ProjectsGrid projects={projects} />

        <div className="mt-12 text-center">
         <a
  href="https://github.com/ton-pseudo"
  target="_blank"
  rel="noreferrer"
  className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-border bg-card px-6 py-3 font-medium transition-colors duration-300 hover:border-transparent hover:text-white"
>
  <span className="absolute inset-0 -translate-x-full bg-neutral-900 transition-transform duration-300 ease-out group-hover/btn:translate-x-0 dark:bg-neutral-700" />
  <GithubIcon className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:-rotate-12" />
  <span className="relative">Voir plus sur GitHub</span>
</a>
        </div>
      </div>
    </section>
  );
}