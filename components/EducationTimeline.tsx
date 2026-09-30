import Reveal from "./Reveal";
import { education } from "@/data/education";

export default function EducationTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Ligne verticale : à gauche sur mobile, centrée sur desktop */}
      <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

      <div className="space-y-10">
        {education.map((item, i) => {
          const isRight = i % 2 === 0;

          return (
            <Reveal key={item.title} delay={i * 120}>
              <div
                className={`relative flex items-start gap-6 md:items-center ${
                  isRight ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Point sur la ligne */}
                <div className="absolute left-4 top-1 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-accent text-sm text-white shadow-lg md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                  {item.icon}
                </div>

                {/* Espace réservé de l'autre côté (desktop uniquement) */}
                <div className="hidden md:block md:w-1/2" />

                {/* Carte */}
                <div
                  className={`w-full pl-14 md:w-1/2 md:pl-0 ${
                    isRight
                      ? "md:pl-10 md:text-left"
                      : "md:pr-10 md:text-right"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
                    <span className="font-mono text-xs text-accent">
                      {item.date}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {item.institution}
                    </p>
                    {item.description && (
                      <p className="mt-2 text-sm text-muted">
                        {item.description}
                      </p>
                    )}
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