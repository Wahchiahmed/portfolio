import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#education", label: "Éducation" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#contact", label: "Contact" },
  
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold">
          Ahmed<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted transition hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}