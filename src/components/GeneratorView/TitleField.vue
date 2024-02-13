<script setup lang="ts">
	const model = defineModel<string>();
</script>

<template>
	<div class="w-full flex items-center">
		<label for="titleInput" class="bg-slate-400 dark:bg-gray-600 px-2 py-1 rounded">Title:</label>
		<input type="text" id="titleInput" placeholder="your title.." maxlength="16" v-model="model"
		class="ms-2 min-w-0 basis-0 grow outline-none bg-transparent">
		<span class="text-gray-400 text-sm">up to 16 characters</span>
	</div>
</template>