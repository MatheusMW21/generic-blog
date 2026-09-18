export const ui = {
	pt: {
		nav_home: 'home',
		nav_projetos: 'projetos',
		nav_artigos: 'artigos',
		theme_toggle_label: 'Alternar tema',
		lang_toggle_label: 'pt/en',
		whoami_cmd: 'whoami',
		about_cmd: 'cat sobre.md',
		projects_cmd: 'ls projetos/',
		experience_cmd_prefix: 'ls experiencia/',
		home_description: 'Site pessoal e profissional de Matheus Pinheiro.',
		projects_description: 'Projetos pessoais de Matheus Pinheiro.',
	},
	en: {
		nav_home: 'home',
		nav_projetos: 'projects',
		nav_artigos: 'articles',
		theme_toggle_label: 'Toggle theme',
		lang_toggle_label: 'pt/en',
		whoami_cmd: 'whoami',
		about_cmd: 'cat about.md',
		projects_cmd: 'ls projects/',
		experience_cmd_prefix: 'ls experience/',
		home_description: 'Personal and professional site of Matheus Pinheiro.',
		projects_description: 'Personal projects by Matheus Pinheiro.',
	},
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
	return (key: keyof (typeof ui)['pt']) => ui[lang][key] ?? ui.pt[key];
}
