"use client";

import { useState } from "react";
import type { Skill } from "@/data/skills";

export default function SkillLogo({
  skill,
  accent,
}: {
  skill: Skill;
  accent: string;
}) {
  const [failed, setFailed] = useState(false);
  const showFallback = !skill.logo || failed;

  return (
    <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white p-2 ring-1 ring-black/5">
        {showFallback ? (
          <span className="text-xs font-bold" style={{ color: accent }}>
            {skill.name.slice(0, 2).toUpperCase()}
          </span>
        ) : (
          <img
            src={skill.logo}
            alt={skill.name}
            className="h-full w-full object-contain"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <span className="text-xs leading-tight font-medium text-foreground">
        {skill.name}
      </span>
    </div>
  );
}