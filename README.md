03/16

learning about svelte/sveltekit. https://blog.logrocket.com/how-to-build-simple-svelte-js-app/ making a simple app
https://svelte.dev/docs leargning about svelte

changed npx degit sveltejs/template {project name }
to npm init vite and svelte/sveltekit option.

2. find neat landing / portfolio design

1. start coding.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Analyzing Sveltekit

+layout.svelte acts as app.tsx

```
<div class="app">
	<Header />

	<main>
		<slot /> // refers to page.svelte
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
```

svg animation perhaps..?

https://www.youtube.com/watch?v=CdSvHJdL7ME&ab_channel=CodingAttack-OnlineTutorials

how can i use scss preprocessor in sveltekit?

just yarn add -D sass!
you already have sveltePreprocessor and it's defined at svelte.config.js!