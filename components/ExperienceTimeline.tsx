import Reveal from "./Reveal";
import { experience } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Ligne verticale : à gauche sur mobile, centrée sur desktop */}
      <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

      <div className="space-y-10">
        {experience.map((item, i) => {
          const isRight = i % 2 === 0;

          return (
            <Reveal key={`${item.date}-${item.title}`} delay={i * 120}>
              <div
                className={`relative flex items-start gap-6 ${
                  isRight ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Point sur la ligne */}
                <div className="absolute left-4 top-1 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-accent text-sm text-white shadow-lg md:left-1/2">
                  {item.icon}
                </div>

                {/* Espace réservé de l'autre côté (desktop uniquement) */}
                <div className="hidden md:block md:w-1/2" />

                {/* Carte */}
                <div
                  className={`w-full pl-14 md:w-1/2 md:pl-0 ${
                    isRight ? "md:pl-10" : "md:pr-10"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
                    <span className="font-mono text-xs text-accent">
                      {item.date}
                    </span>

                    <h3 className="mt-1 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                      {item.company && (
                        <span className="font-medium text-foreground">
                          {item.company}
                        </span>
                      )}
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs">
                        {item.type}
                      </span>
                    </p>

                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-muted marker:text-accent">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}