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
  { value: 4, suffix: "+", label: "Années de pratique" },
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
                <Image
                  src="/images/imgprofile.jpg"
                  fill
                  className="object-cover "
                  alt="Photo d'Ahmed"
                />{" "}
              </div>
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 shadow-lg">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-xs font-medium">
                  Ouvert aux opportunités
                </span>
              </div>
            </div>
          </Reveal>

          {/* Texte + stats */}
          <div className="md:col-span-3">
            <Reveal
              delay={100}
              className="space-y-4 leading-relaxed text-muted"
            >
              <p>
                Je suis développeur ERP Odoo & Full-Stack et actuellement en
                cycle d’ingénieur en Génie Informatique. Mon parcours m’a permis
                de travailler sur des applications web, des solutions métier et
                des systèmes d’information, aussi bien sur le frontend que sur
                le backend.
              </p>

              <p>
                Je développe et personnalise des solutions Odoo avec Python, XML
                et PostgreSQL, tout en intervenant sur des applications
                Full-Stack avec React, Angular, Laravel et Spring Boot. Je
                travaille également avec MySQL, PostgreSQL, Git, Docker et
                Linux, et j’ai l’habitude d’intégrer des services externes via
                des APIs.
              </p>

              <p>
                Je m’intéresse également à l’intelligence artificielle et aux
                architectures basées sur les LLM. Parmi mes projets, j’ai
                notamment conçu un assistant technique basé sur une architecture
                RAG, permettant d’interroger une documentation spécialisée et de
                générer des réponses contextualisées.
              </p>

              <p>
                Aujourd’hui, je souhaite rejoindre une équipe technique au sein
                de laquelle je pourrai mettre mon expérience au service de
                projets concrets, contribuer au développement de solutions
                fiables et continuer à approfondir mes compétences en
                développement logiciel, ERP et technologies cloud.
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
