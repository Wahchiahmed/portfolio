export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Ahmed. Tous droits réservés.</p>
        <div className="flex gap-5">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="transition hover:text-accent">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition hover:text-accent">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}