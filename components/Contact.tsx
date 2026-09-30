"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-center font-mono text-sm text-accent">
            {"// contact"}
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold sm:text-4xl">
            Discutons de{" "}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
              votre projet
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-muted">
            Une question, une opportunité de stage ou juste envie d’échanger ?
            N’hésitez pas à m’écrire.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-accent"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-accent"
                  placeholder="vous@exemple.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-accent"
                placeholder="Parlez-moi de votre projet..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:opacity-60"
            >
              {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-emerald-500">
                Message envoyé ! Je vous répondrai rapidement.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-500">
                Une erreur est survenue. Réessayez ou écrivez-moi directement.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}