<script setup lang="ts">
</script>

<template>
	<div class="flex flex-col items-center">
		<button type="button" id="clipboardUploadButton"
			class="w-16 h-16 rounded-lg flex justify-center items-center
			transition-colors cursor-pointer
			text-white bg-green-600 hover:bg-green-700 active:bg-green-800">
			<span class="bi-file-earmark-fill text-3xl"></span>
		</button>
		<label for="clipboardUploadButton" class="mt-2 text-sm">download as file.</label>
	</div>
</template>