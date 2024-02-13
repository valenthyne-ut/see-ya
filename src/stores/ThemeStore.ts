import { defineStore } from "pinia";
import { computed, ref } from "vue";

export enum THEMES {
	LIGHT = 0,
	DARK = 1
}

export const PREFERRED_THEME_LOCALSTORAGE_KEY_NAME = "preferred-theme";

export const useThemeStore = defineStore("theme", () => {
	const _theme = ref<THEMES>(THEMES.LIGHT);

	const curTheme = computed(() => { return _theme.value; });

	function setTheme(newTheme: THEMES) {
		_theme.value = newTheme;
		localStorage.setItem(PREFERRED_THEME_LOCALSTORAGE_KEY_NAME, newTheme.toString());
		document.documentElement.classList.toggle("dark", _theme.value == 1);
	}

	return { _theme, curTheme, setTheme };
});