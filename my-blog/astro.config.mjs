// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://matheuspinheiro.dev',
	integrations: [sitemap()],
	i18n: {
		locales: ['pt', 'en'],
		defaultLocale: 'pt',
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
