import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import type { Config } from '@sveltejs/kit';

const mdsvexConfig = {
	extensions: ['.md', '.mdx']
};

const config: Config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$modules: 'src/modules',
			$config: 'src/config',
			$content: 'src/content',
			$services: 'src/services',
			$styles: 'src/styles',
			$tokens: 'src/styles/tokens'
		}
	},

	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)]
};

export default config;
