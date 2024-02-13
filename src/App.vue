<script setup lang="ts">
	import { onMounted } from "vue";
	import ThemeToggler from "./components/ThemeToggler.vue";
	import { PREFERRED_THEME_LOCALSTORAGE_KEY_NAME, useThemeStore } from "./stores/ThemeStore";

	const themeStore = useThemeStore();

	onMounted(() => {
		const theme = localStorage.getItem(PREFERRED_THEME_LOCALSTORAGE_KEY_NAME);
		const themeInStorage = (theme !== null && !isNaN(Number.parseInt(theme)));

		if(themeInStorage) {
			themeStore.setTheme(Number.parseInt(theme));
		}
	});
</script>

<template>
	<RouterView 
	class="w-100 h-screen flex justify-center items-center
		transition-colors duration-500
		bg-slate-100
		dark:bg-zinc-700 dark:text-white" />
	<ThemeToggler class="z-10 absolute right-6 bottom-6" />
</template>