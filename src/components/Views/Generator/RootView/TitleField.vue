<script setup lang="ts">
	import { useGeneratorStore } from "@/stores/GeneratorStore";

	const generatorStore = useGeneratorStore();
</script>

<template>
	<div class="flex items-center">
		<label for="titleField" class="
		px-2 py-1 rounded
		select-none
		text-white
		bg-slate-400 dark:bg-gray-600
		">Title:</label>
		<input type="text" id="titleField" placeholder="your title..." maxlength="16" v-model="generatorStore.title" class="
		ms-2 min-w-0 
		basis-0 grow outline-none 
		bg-transparent
		">
		<span class="text-gray-400 text-sm">up to 16 characters</span>
	</div>
</template>