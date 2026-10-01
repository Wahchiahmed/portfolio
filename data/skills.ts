const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE = "https://cdn.jsdelivr.net/npm/simple-icons@13/icons";

export type Skill = { name: string; logo?: string };

export type SkillGroup = {
  title: string;
  accent: string; // couleur hex utilisée pour le point et le fallback
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    accent: "#3b82f6",
    items: [
      { name: "React", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", logo: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", logo: `${DEVICON}/angular/angular-original.svg` },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-plain.svg` },
    ],
  },
  {
    title: "Backend",
    accent: "#10b981",
    items: [
      { name: "Laravel", logo: `${DEVICON}/laravel/laravel-plain.svg` },
      { name: "Spring Boot", logo: `${DEVICON}/spring/spring-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
      { name: "Java", logo: `${DEVICON}/java/java-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
    ],
  },
  {
    title: "Bases de données",
    accent: "#f59e0b",
    items: [
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "Oracle", logo: `${DEVICON}/oracle/oracle-original.svg` },
      { name: "SQL" },
      { name: "FAISS" },
    ],
  },
  {
    title: "IA & RAG",
    accent: "#8b5cf6",
    items: [
      { name: "LangChain", logo: `${SIMPLE}/langchain.svg` },
      { name: "HuggingFace", logo: `${SIMPLE}/huggingface.svg` },
      { name: "Groq" },
    ],
  },
  {
    title: "Systèmes & Réseaux",
    accent: "#06b6d4",
    items: [
      { name: "C", logo: `${DEVICON}/c/c-original.svg` },
      { name: "C++", logo: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: "Linux", logo: `${DEVICON}/linux/linux-original.svg` },
      { name: "Réseaux" },
    ],
  },
  {
    title: "Intégrations & Paiement",
    accent: "#ec4899",
    items: [
      { name: "Stripe", logo: `${SIMPLE}/stripe.svg` },
      { name: "Twilio", logo: `${SIMPLE}/twilio.svg` },
      { name: "SMTP" },
      { name: "EmailJS" },
    ],
  },
  {
    title: "Outils",
    accent: "#f43f5e",
    items: [
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub", logo: `${DEVICON}/github/github-original.svg` },
      { name: "VS Code", logo: `${DEVICON}/vscode/vscode-original.svg` },
      { name: "IntelliJ IDEA", logo: `${DEVICON}/intellij/intellij-original.svg` },
    ],
  },
];