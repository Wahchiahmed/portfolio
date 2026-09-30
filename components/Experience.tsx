import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">{"// expérience"}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Mon{" "}
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
            expérience professionnelle
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Du consulting ERP Odoo au développement Full-Stack : freelance et
          stages.
        </p>

        <div className="mt-16">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}