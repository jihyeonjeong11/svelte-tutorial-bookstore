import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server:{
		port:3173,
		strictPort:false,
		},
		preview:{
		port:4173,
		strictPort:false,
		},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
