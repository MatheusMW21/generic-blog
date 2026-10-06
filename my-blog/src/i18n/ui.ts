export const ui = {
  pt: {
    nav_home: "home",
    nav_projetos: "projetos",
    theme_toggle_label: "Alternar tema",
    lang_toggle_label: "pt/en",
    whoami_cmd: "whoami",
    about_cmd: "cat sobre.md",
    skills_cmd: "cat stack.txt",
    skills_languages: "linguagens",
    skills_backend: "backend",
    skills_frontend: "frontend",
    skills_cloud: "cloud, db & devops",
    projects_cmd: "ls projetos/",
    experience_cmd_prefix: "ls experiencia/",
    cv_download_label: "currículo (PDF)",
    home_description: "Site pessoal e profissional de Matheus Pinheiro.",
    projects_description: "Projetos pessoais de Matheus Pinheiro.",
  },
  en: {
    nav_home: "home",
    nav_projetos: "projects",
    theme_toggle_label: "Toggle theme",
    lang_toggle_label: "pt/en",
    whoami_cmd: "whoami",
    about_cmd: "cat about.md",
    skills_cmd: "cat stack.txt",
    skills_languages: "linguagens",
    skills_backend: "backend",
    skills_frontend: "frontend",
    skills_cloud: "cloud, db & devops",
    projects_cmd: "ls projects/",
    experience_cmd_prefix: "ls experience/",
    cv_download_label: "resume (PDF)",
    home_description: "Personal and professional site of Matheus Pinheiro.",
    projects_description: "Personal projects by Matheus Pinheiro.",
  },
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)["pt"]) => ui[lang][key] ?? ui.pt[key];
}
