<script setup lang="ts">
	import { RouterView } from "vue-router";
	import ColorThemeToggler from "./components/Basic/ColorThemeToggler.vue";
	import { PREFERRED_THEME_LOCALSTORAGE_KEY_NAME, useThemeStore } from "@/stores/ThemeStore";
	import { onMounted } from "vue";

	const themeStore = useThemeStore();

	onMounted(() => {
		const theme = localStorage.getItem(PREFERRED_THEME_LOCALSTORAGE_KEY_NAME);
		const themeInStorage = (theme !== null && !isNaN(Number.parseInt(theme)));

		if(themeInStorage) {
			themeStore.setTheme(Number.parseInt(theme));
		} else {
			const prefersColorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const preferredColorScheme = prefersColorSchemeQuery.matches ? 1 : 0;

			prefersColorSchemeQuery.addEventListener("change", event => {
				const newColorScheme = event.matches ? 1 : 0;
				themeStore.setTheme(newColorScheme);
			});

			themeStore.setTheme(preferredColorScheme);
		}
	});
</script>

<template>
	<div class="
	w-100 h-screen
	flex justify-center items-center
	transition-colors duration-500
	bg-slate: 100
	dark:bg-zinc-700 dark:text-white
	">
		<RouterView />
	</div>
	<ColorThemeToggler class="
	z-10 absolute
	right-2 bottom-2
	"/>
</template>