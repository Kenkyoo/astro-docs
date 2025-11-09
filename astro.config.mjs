// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Start',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'guides/example' },
					],
				},
				{
					label: 'Characters',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Characters', slug: 'characters/example' },
					],
				},
				{
					label: 'Mechanics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Mechanics', slug: 'reference/example' },
					],
				},						
				{
					label: 'Multiplayer',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Multiplayer', slug: 'multiplayer/example' },
					],
				},
									
				{
					label: 'Toolset',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Toolset', slug: 'tools/example' },
					],
				},
									
				{
					label: 'Glossary',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Glossary', slug: 'glossary/example' },
					],
				},
			],
		}),
	],
});
