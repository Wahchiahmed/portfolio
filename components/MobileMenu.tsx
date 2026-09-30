"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Bouton burger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-card"
      >
        <span className="h-0.5 w-5 rounded-full bg-foreground" />
        <span className="h-0.5 w-5 rounded-full bg-foreground" />
        <span className="h-0.5 w-3.5 self-end mr-2.5 rounded-full bg-foreground" />
      </button>

      {/* Fond flouté cliquable */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panneau latéral — fond forcé en opaque via style inline */}
      <div
        style={{ backgroundColor: "var(--background)" }}
        className={`fixed top-0 right-0 z-[70] flex h-full w-[85%] max-w-xs flex-col border-l border-border shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* En-tête du panneau */}
        <div
          style={{ backgroundColor: "var(--background)" }}
          className="flex items-center justify-between border-b border-border px-6 py-5"
        >
          <span className="text-lg font-bold">
            Ahmed<span className="text-accent">.</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Liens */}
        <nav
          style={{ backgroundColor: "var(--background)" }}
          className="flex flex-1 flex-col justify-center gap-1 px-6"
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${i * 60 + 100}ms` : "0ms",
              }}
              className={`group flex items-center gap-4 rounded-xl px-3 py-4 transition-all duration-300 hover:bg-card ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <span className="text-xl font-medium text-foreground transition group-hover:text-accent">
                {l.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Pied du panneau */}
        <div
          style={{ backgroundColor: "var(--background)" }}
          className="flex gap-5 border-t border-border px-6 py-6 text-sm text-muted"
        >
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-accent">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-accent">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}