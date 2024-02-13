<script setup lang="ts">
</script>

<template>
	<div class="flex flex-col items-center">
		<label role="button" tabindex="0"
		for="fileUploadInput" id="fileUploadButton"
		class="
		w-16 h-16 rounded-lg 
		flex justify-center items-center
		cursor-pointer
		transition-colors
		text-white bg-green-500 hover:bg-green-600 active:bg-green-700
		">
			<span class="bi-file-earmark-fill text-3xl"></span>
			<input id="fileUploadInput" type="file" class="hidden">
		</label>
		<label for="fileUploadButton" class="mt-2 text-sm">via file</label>
	</div>
</template>