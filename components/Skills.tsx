import Reveal from "./Reveal";
import SkillLogo from "./SkillLogo";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-accent">{"// compétences"}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Ma boîte à{" "}
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
            outils
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Les technologies que j’utilise pour concevoir, développer et
          déployer mes projets.
        </p>

        <div className="mt-12 space-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 80}>
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: group.accent }}
                />
                <h3 className="font-semibold">{group.title}</h3>
              </div>

              <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-3">
                {group.items.map((skill) => (
                  <SkillLogo
                    key={skill.name}
                    skill={skill}
                    accent={group.accent}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}