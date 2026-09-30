import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const stats = [
  { value: projects.length, label: "Projets réalisés" },
  {
    value: skillGroups.reduce((n, g) => n + g.items.length, 0),
    label: "Technologies",
  },
  { value: 2, suffix: "+", label: "Années de pratique" },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-y border-border bg-card/40 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">{"// à propos"}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Un peu{" "}
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
            plus sur moi
          </span>
        </h2>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="relative mx-auto max-w-xs">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl bg-linear-to-br from-blue-500/30 to-violet-500/30 blur-xl"
              />
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border bg-card">
                <Image src="/images/imgprofile.jpg" fill className="object-cover" alt="Photo d'Ahmed" />              </div>
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 shadow-lg">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-xs font-medium">Ouvert aux opportunités</span>
              </div>
            </div>
          </Reveal>

          {/* Texte + stats */}
          <div className="md:col-span-3">
            <Reveal delay={100} className="space-y-4 leading-relaxed text-muted">
              <p>
                Je suis étudiant et passionné par le développement logiciel.
                J’aime concevoir des applications de bout en bout : l’interface
                avec React, la logique métier et l’API avec Laravel, et la base
                de données avec MySQL.
              </p>
              <p>
                Au-delà du web, je développe aussi des applications desktop en
                Java, et je m’intéresse aux réseaux et aux systèmes Linux.
                C’est ce qui m’a amené à créer DocuMind, un assistant basé sur
                le RAG pour interroger de la documentation technique.
              </p>
              <p>
                Je cherche{" "}
                <strong className="text-foreground">
                  [un stage / une alternance / une première expérience]
                </strong>{" "}
                où je pourrai apprendre, contribuer à de vrais projets et
                progresser au sein d’une équipe.
              </p>

              <a
                href="/cv.pdf"
                download
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Télécharger mon CV ↓
              </a>
            </Reveal>

            {/* Statistiques animées */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={200 + i * 100}>
                  <p className="text-3xl font-bold text-accent sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix ?? ""} />
                  </p>
                  <p className="mt-1 text-xs text-muted">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}