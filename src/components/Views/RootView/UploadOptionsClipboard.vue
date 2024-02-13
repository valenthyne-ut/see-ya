<script setup lang="ts">
</script>

<template>
	<div class="flex flex-col items-center">
		<button type="button" id="clipboardUploadButton" class="
		w-16 h-16 rounded-lg 
		flex justify-center items-center
		cursor-pointer
		transition-colors
		text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800
		">
			<span class="bi-clipboard2-fill text-3xl"></span>
		</button>
		<label for="clipboardUploadButton" class="mt-2 text-sm">via clipboard</label>
	</div>
</template>