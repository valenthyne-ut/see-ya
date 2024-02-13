<script setup lang="ts">
</script>

<template>
	<div class="flex flex-col items-center">
		<label for="messageUpload" role="button" id="messageUploadButton" tabindex="0"
			class="w-16 h-16 rounded-lg flex justify-center items-center
			transition-colors cursor-pointer
			text-white bg-green-500 hover:bg-green-600 active:bg-green-700">
			<span class="bi-upload text-3xl"></span>
		</label>
		<input id="messageUpload" type="file" class="hidden" />
		<label for="messageUploadButton" class="mt-2 text-sm">the file.</label>
	</div>
</template>