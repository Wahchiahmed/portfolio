const stack = ["React", "Next.js", "Laravel", "MySQL", "Java", "Linux"];

const profile = [
  ["role", "Full-Stack Developer"],
  ["stack", "React · Laravel · Java"],
  ["location", "Tunisie"],
  ["status", "Ouvert aux opportunités"],
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Fond décoratif */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/25 blur-3xl dark:bg-blue-500/15" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-500/15" />
      </div>

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2">
        {/* Colonne texte */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Ouvert aux opportunités
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Salut, je suis{" "}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              Ahmed
            </span>
          </h1>

          <h2 className="mt-3 text-xl font-medium text-muted sm:text-2xl">
            Développeur ERP Odoo & Full-Stack{" "}
          </h2>

          <p className="mt-6 max-w-lg text-muted">
            Je conçois des applications web avec React et Laravel, des
            applications desktop en Java, et je m’intéresse aux réseaux et aux
            systèmes.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-card px-6 py-3 font-medium transition hover:border-accent"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-6 flex gap-5 text-sm text-muted">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Carte style éditeur de code */}
        <div className="animate-fade-up [animation-delay:200ms]">
          <div className="rounded-2xl border border-border bg-card shadow-xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-muted">
                ahmed.ts
              </span>
            </div>
            <div className="space-y-1 p-6 font-mono text-sm">
              <p>
                <span className="text-violet-600 dark:text-violet-400">
                  const
                </span>{" "}
                ahmed = {"{"}
              </p>
              {profile.map(([key, value]) => (
                <p key={key} className="pl-4">
                  <span className="text-blue-600 dark:text-blue-400">
                    {key}
                  </span>
                  :{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &quot;{value}&quot;
                  </span>
                  ,
                </p>
              ))}
              <p>{"}"};</p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <a
        href="#about"
        aria-label="Défiler vers le bas"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted"
      >
        ↓
      </a>
    </section>
  );
}
