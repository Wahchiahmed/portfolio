export type Project = {
  slug: string;
  title: string;
  category: "Web" | "Desktop" | "IA" | "Systèmes" | "Mobile";
  icon: string; 
  description: string;
  tech: string[];
  image?: string; 
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
    github: "https://github.com/Wahchiahmed/DocuMind",
  },
  {
    slug: "equipmanager",
    title: "EquipManager",
    category: "Web",
    icon: "📦",
    description:
      "Plateforme de gestion de stock avec tableaux de bord par rôle (admin, responsable stock, chef de département, employé), commandes fournisseurs, alertes de stock et suivi FIFO par lots avec traçabilité.",
    tech: ["Laravel", "React", "TypeScript", "MySQL"],
    github: "https://github.com/Wahchiahmed/EquipManager",
  },
  {
    slug: "impression-chic",
    title: "Impression Chic",
    category: "Web",
    icon: "🖨️",
    description:
      "Marketplace pour une société d’impression : catalogue par catégories, panier, prix en dinar tunisien et demande de devis en plusieurs étapes avec envoi d’emails automatiques (client + équipe).",
    tech: ["React 19", "Vite", "TanStack Router", "shadcn/ui", "EmailJS"],
  },
  {
    slug: "restaurant-manager",
    title: "RestaurantManager",
    category: "Desktop",
    icon: "🍽️",
    description:
      "Application de gestion de restaurant développée en JavaFX, avec base de données MySQL et génération de documents PDF.",
    tech: ["Java", "JavaFX", "MySQL", "iText", "Maven"],
    github: "https://github.com/Wahchiahmed/RestaurantManager",
  },
  {
    slug: "gesture-control",
    title: "GestureControl",
    category: "Systèmes",
    icon: "✋",
    description:
      "Application en C++ pour la reconnaissance de gestes des doigts et du visage en temps réel, permettant de contrôler des actions à partir des mouvements capturés par la caméra.",
    tech: ["C++", "CMake", "Vision par ordinateur"],
    github: "https://github.com/Wahchiahmed/GestureControl",
  },
  {
    slug: "gestion-cabinet-medicale",
    title: "Gestion Cabinet Médicale",
    category: "Desktop",
    icon: "🏥",
    description:
      "Application de gestion d’un cabinet médical développée en C, avec interface graphique : gestion des patients, des médecins et des rendez-vous.",
    tech: ["C", "Interface graphique"],
    github: "https://github.com/Wahchiahmed/gestion-cabinet-medicale",
  },
  {
    slug: "guide-touristique",
    title: "Guide Touristique",
    category: "Desktop",
    icon: "🧭",
    description:
      "Application Java avec interface graphique présentant les meilleures adresses en Tunisie : restaurants, hôtels et lieux à visiter.",
    tech: ["Java", "JavaFX"],
    github: "https://github.com/Wahchiahmed/guide-touristique",
  },
  {
    slug: "gestion-etudiant",
    title: "Gestion Étudiant",
    category: "Desktop",
    icon: "🎓",
    description:
      "Application Java pour la gestion de l’assiduité et des notes des étudiants, avec interface graphique, envoi d’emails via SMTP et génération de graphiques statistiques.",
    tech: ["Java", "SMTP", "Graphiques"],
    github: "https://github.com/Wahchiahmed/gestion_detudiant",
  },
    {
    slug: "aquaassist",
    title: "AquaAssist",
    category: "Web",
    icon: "⚓",
    description:
      "Plateforme de mise en relation entre propriétaires de bateaux et prestataires de services nautiques, développée dans le cadre de mon PFE en entreprise. Gestion CRUD complète, notifications par email (SMTP) et SMS (Twilio), et paiements sécurisés via Stripe. Projet réalisé pour une entreprise — le code source n'est que partiellement public pour des raisons de confidentialité.",
    tech: ["Angular", "Spring Boot", "Stripe", "Twilio", "SMTP"],
  },
  {
    slug: "mam-academy",
    title: "MAM Academy",
    category: "Web",
    icon: "🎓",
    description:
      "Site vitrine pour une académie de formation en ligne : présentation des formations, grille tarifaire, témoignages d'élèves et page d'inscription.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Wahchiahmed/MamAcademy",
    demo: "https://wahchiahmed.github.io/MAM-academy/",
  },
];