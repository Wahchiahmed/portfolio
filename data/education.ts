export type EducationItem = {
  date: string;
  title: string;
  institution: string;
  description?: string;
  icon: string;
};

export const education: EducationItem[] = [
  {
    date: "2021",
    title: "Baccalauréat",
    institution: "Section Informatique",
    description: "Mention : Très Bien",
    icon: "🎓",
  },
  {
    date: "2021 — 2024",
    title: "Licence en Sciences de l'Informatique",
    institution: "Faculté des Sciences de Tunis",
    description: "Mention : Très Bien",
    icon: "📘",
  },
  {
    date: "2025 — Présent",
    title: "Cycle d'ingénieur en Génie Informatique",
    institution: "Tekup Université",
    icon: "🏛️",
  },
];