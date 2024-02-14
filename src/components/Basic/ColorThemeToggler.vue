<script setup lang="ts">
	import { THEME, useThemeStore } from "../../stores/ThemeStore";
	const themeStore = useThemeStore();

	function toggleTheme() {
		switch(themeStore.curTheme) {
		case THEME.LIGHT:
			themeStore.setTheme(THEME.DARK);
			break;
		case THEME.DARK: default:
			themeStore.setTheme(THEME.LIGHT);
			break;
		}
	}
</script>

<template>
	<button 
	type="button"
	@click="toggleTheme"
	class="
	p-2
	w-14 h-14 rounded-full
	transition-colors
	text-white
	bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-800
	dark:bg-gray-600 dark:hover:bg-gray-700 dark:active:bg-gray-800
	sm:dark:bg-zinc-800 sm:dark:hover:bg-zinc-900 sm:dark:active:bg-zinc-950
	">
		<span class="text-2xl" :class="themeStore.curTheme === THEME.LIGHT ? 'bi-sun-fill' : 'bi-moon-stars-fill'"></span>
	</button>
</template>