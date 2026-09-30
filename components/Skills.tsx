"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/skills";

function SkillBar({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
        <div
          className={`h-full rounded-full ${color} transition-[width] duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-xl">
                    {group.icon}
                  </span>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>

                <div className="mt-6 space-y-4">
                  {group.items.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={group.color}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}