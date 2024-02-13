<script setup lang="ts">
	import { useGeneratorStore } from "@/stores/GeneratorStore";

	const generatorStore = useGeneratorStore();
	
	async function saveToClipboard() {
		await navigator.clipboard.writeText(generatorStore.curMessage!);
	}
</script>

<template>
	<div class="flex flex-col items-center">
		<button type="button" id="clipboardDownloadButton" @click="saveToClipboard" class="
		w-16 h-16 rounded-lg 
		flex justify-center items-center
		cursor-pointer
		transition-colors
		text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800
		">
			<span class="bi-clipboard2-fill text-3xl"></span>
		</button>
		<label for="clipboardDownloadButton" class="mt-2 text-sm">to clipboard</label>
	</div>
</template>