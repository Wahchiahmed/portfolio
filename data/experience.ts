export type ExperienceItem = {
  date: string;
  title: string;
  type: string; // Freelance, Stage, Stage PFE…
  company?: string;
  points: string[];
  tech: string[];
  icon: string;
};

export const experience: ExperienceItem[] = [
  {
    date: "Mars 2026 — Juin 2026",
    title: "Développeur Full-Stack",
    type: "Freelance",
    points: [
      "Conception d'une architecture sécurisée multi-rôles pour le contrôle d'accès et la personnalisation des tableaux de bord.",
      "Développement d'un workflow métier hiérarchique avec validation conditionnelle et traçabilité des demandes.",
      "Implémentation et structuration d'API REST avec Laravel.",
      "Intégration d'un assistant conversationnel intelligent via API Groq.",
      "Optimisation des requêtes MySQL réduisant le temps de réponse des endpoints critiques.",
    ],
    tech: ["React", "Laravel", "MySQL", "API Groq", "Jira"],
    icon: "🤖",
  },
  {
    date: "Janvier 2026 — Mars 2026",
    title: "Développeur Full-Stack",
    type: "Freelance",
    points: [
      "Développement d'une plateforme e-commerce connectant des designers à leurs clients finaux.",
      "Implémentation du backend (gestion produits, commandes, authentification).",
      "Interfaces dynamiques sous React avec intégration d'un éditeur graphique via Fabric.js.",
      "Mise en place du flux complet : catalogue, personnalisation produit, panier et validation des commandes.",
      "Participation aux tests et stabilisation avant mise en production.",
    ],
    tech: ["React", "Laravel", "MySQL", "Fabric.js", "Jira"],
    icon: "🛒",
  },
  {
    date: "Mars 2025 — Septembre 2025",
    title: "Développeur Full-Stack",
    type: "Freelance",
    points: [
      "Contribution à l'évolution d'une application web existante développée en Angular et Spring Boot.",
      "Développement de nouvelles fonctionnalités frontend (components, services, guards, Reactive Forms).",
      "Implémentation et optimisation d'API REST sécurisées.",
      "Correction d'anomalies critiques et refactoring de modules pour améliorer la maintenabilité.",
      "Collaboration avec l'équipe technique via Git (gestion de branches et merge requests).",
    ],
    tech: ["Angular", "Spring Boot", "Java", "TypeScript", "MySQL", "Git"],
    icon: "💻",
  },
  {
    date: "Juin 2024 — Septembre 2024",
    title: "Développeur Full-Stack",
    type: "Stage PFE",
    company: "Xgenbox",
    points: [
      "Développement d'une plateforme web de gestion et d'assistance de bateaux.",
      "Intégration de l'API Stripe pour le traitement sécurisé des paiements en ligne.",
      "Mise en place d'un système de notifications SMS via API Twilio.",
      "Conception de la logique métier et des opérations CRUD.",
    ],
    tech: ["Angular", "Spring Boot", "MySQL", "Stripe", "Twilio", "Jira"],
    icon: "⚓",
  },
  {
    date: "Janvier 2024 — Mai 2024",
    title: "Développeur Frontend Angular",
    type: "Stage",
    company: "Seit Consulting",
    points: [
      "Développement et optimisation d'interfaces utilisateurs dynamiques.",
      "Amélioration de l'ergonomie des écrans existants.",
      "Création d'une bibliothèque de tests unitaires pour éviter les régressions et améliorer la maintenabilité.",
    ],
    tech: ["Angular", "TypeScript", "HTML/SCSS", "Jasmine", "Karma", "Jira"],
    icon: "🎨",
  },
  {
    date: "Janvier 2023 — Juillet 2023",
    title: "Développeur ERP Odoo",
    type: "Freelance",
    points: [
      "Analyse des besoins clients et développement de modules personnalisés sous Odoo.",
      "Automatisation de processus métiers et mise en place de règles de sécurité (groupes, rôles, accès).",
      "Personnalisation des vues XML et adaptation des modèles Python.",
      "Déploiement et configuration sur environnement Linux avec gestion PostgreSQL.",
      "Support technique et formation des utilisateurs.",
    ],
    tech: ["Python", "XML", "PostgreSQL", "Ubuntu"],
    icon: "🧩",
  },
  {
    date: "Juillet 2022 — Septembre 2022",
    title: "Consultant ERP Odoo",
    type: "Stage",
    company: "Zeenovi",
    points: [
      "Déploiement et paramétrage d'un module Odoo pour l'intégration avec serveur Asterisk.",
      "Optimisation des vues XML et amélioration de l'interface utilisateur.",
      "Administration et maintenance de la base de données PostgreSQL.",
    ],
    tech: ["Python", "XML", "PostgreSQL", "Asterisk", "VOIP", "Ubuntu"],
    icon: "📞",
  },
];