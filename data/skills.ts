export type Skill = { name: string; level: number };

export type SkillGroup = {
  title: string;
  icon: string;
  color: string; // classe Tailwind pour la barre
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "bg-blue-500",
    items: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Angular", level: 70 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "bg-emerald-500",
    items: [
      { name: "Laravel", level: 80 },
      { name: "Spring Boot", level: 70 },
      { name: "PHP", level: 75 },
      { name: "Java", level: 75 },
      { name: "Python", level: 65 },
    ],
  },
   {
    title: "Bases de données",
    icon: "🗄️",
    color: "bg-amber-500",
    items: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 65 },
      { name: "Oracle", level: 55 },
      { name: "SQL", level: 75 },
      { name: "FAISS (vectoriel)", level: 60 },
    ],
  },
  {
    title: "IA & RAG",
    icon: "🧠",
    color: "bg-violet-500",
    items: [
      { name: "LangChain", level: 65 },
      { name: "HuggingFace", level: 60 },
      { name: "Groq (LLaMA)", level: 60 },
    ],
  },
  {
    title: "Systèmes & Réseaux",
    icon: "🌐",
    color: "bg-cyan-500",
    items: [
      { name: "C", level: 70 },
      { name: "C++", level: 65 },
      { name: "Linux", level: 70 },
      { name: "Réseaux", level: 65 },
    ],
  },
  {
    title: "Intégrations & Paiement",
    icon: "🔌",
    color: "bg-pink-500",
    items: [
      { name: "Stripe", level: 60 },
      { name: "Twilio (SMS)", level: 60 },
      { name: "SMTP", level: 70 },
      { name: "EmailJS", level: 75 },
    ],
  },
  {
    title: "Outils",
    icon: "🛠️",
    color: "bg-rose-500",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "IntelliJ IDEA", level: 70 },
    ],
  },
];