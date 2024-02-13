<script setup lang="ts">
	import { THEMES, useThemeStore } from "@/stores/ThemeStore";

	const themeStore = useThemeStore();

	function toggleTheme() {
		switch(themeStore.curTheme) {
		case THEMES.LIGHT:
			themeStore.setTheme(THEMES.DARK);
			break;
		case THEMES.DARK: default:
			themeStore.setTheme(THEMES.LIGHT);
			break;
		}
	}
</script>

<template>
	<button type="button" 
		@click="toggleTheme"
		class="w-14 h-14 p-2 rounded-full 
			transition-colors
			bg-zinc-800 text-white hover:bg-zinc-700 active:bg-zinc-800
			dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:active:bg-zinc-900">
		<span class="bi-sun-fill text-2xl" v-if="themeStore.curTheme === THEMES.LIGHT"></span>
		<span class="bi-moon-stars-fill text-2xl" v-else></span>
	</button>
</template>