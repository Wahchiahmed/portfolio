export type Project = {
  slug: string;
  title: string;
  category: "Web" | "Desktop" | "IA";
  icon: string; // emoji affiché tant que tu n’as pas de capture d’écran
  description: string;
  tech: string[];
  image?: string; // ex: "/images/documind.png" (fichier dans public/images/)
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "documind",
    title: "DocuMind",
    category: "IA",
    icon: "🧠",
    description:
      "Assistant conversationnel spécialisé dans la documentation Linux et réseaux. Il répond aux questions à partir de documents indexés, avec mémoire de conversation et ajout incrémental de nouveaux documents.",
    tech: ["Python", "LangChain", "FAISS", "HuggingFace", "Groq (LLaMA)"],
    github: "https://github.com/ton-pseudo/documind",
  },
  {
    slug: "equipmanager",
    title: "EquipManager",
    category: "Web",
    icon: "📦",
    description:
      "Plateforme de gestion de stock avec tableaux de bord par rôle (admin, responsable stock, chef de département, employé), commandes fournisseurs, alertes de stock et suivi FIFO par lots avec traçabilité.",
    tech: ["Laravel", "React", "TypeScript", "MySQL"],
    github: "https://github.com/ton-pseudo/equipmanager",
  },
  {
    slug: "impression-chic",
    title: "Impression Chic",
    category: "Web",
    icon: "🖨️",
    description:
      "Marketplace pour une société d’impression : catalogue par catégories, panier, prix en dinar tunisien et demande de devis en plusieurs étapes avec envoi d’emails automatiques (client + équipe).",
    tech: ["React 19", "Vite", "TanStack Router", "shadcn/ui", "EmailJS"],
    github: "https://github.com/ton-pseudo/impression-chic",
  },
  {
    slug: "restaurant-manager",
    title: "RestaurantManager",
    category: "Desktop",
    icon: "🍽️",
    description:
      "Application de gestion de restaurant développée en JavaFX, avec base de données MySQL et génération de documents PDF.",
    tech: ["Java", "JavaFX", "MySQL", "iText", "Maven"],
    github: "https://github.com/ton-pseudo/restaurant-manager",
  },
];