import EducationTimeline from "./EducationTimeline";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-y border-border bg-card/40 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">{"// parcours"}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Mon{" "}
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
            parcours académique
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          De mon baccalauréat scientifique à mon cycle d’ingénieur actuel.
        </p>

        <div className="mt-16">
          <EducationTimeline />
        </div>
      </div>
    </section>
  );
}