import { defineStore } from "pinia";
import { computed, ref } from "vue";

export enum THEME {
	LIGHT = 0,
	DARK = 1
}

export const PREFERRED_THEME_LOCALSTORAGE_KEY_NAME = "preferred-theme";

export const useThemeStore = defineStore("theme", () => {
	const theme = ref<THEME>(THEME.LIGHT);
	const curTheme = computed(() => { return theme.value; });
	function setTheme(newTheme: THEME) {
		theme.value = newTheme;
		localStorage.setItem(PREFERRED_THEME_LOCALSTORAGE_KEY_NAME, newTheme.toString());
		
		document.documentElement.classList.toggle("dark", theme.value == 1);
	}

	return { theme, curTheme, setTheme };
});