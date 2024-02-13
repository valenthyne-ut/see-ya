<script setup lang="ts">
</script>

<template>
	<div class="flex flex-col items-center">
		<button type="button" id="fileDownloadButton" class="
		w-16 h-16 rounded-lg 
		flex justify-center items-center
		cursor-pointer
		transition-colors
		text-white bg-green-600 hover:bg-green-700 active:bg-green-800
		">
			<span class="bi-file-earmark-fill text-3xl"></span>
		</button>
		<label for="fileDownloadButton" class="mt-2 text-sm">to file</label>
	</div>
</template>