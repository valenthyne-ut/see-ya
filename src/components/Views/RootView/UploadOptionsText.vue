<script setup lang="ts">
	import { UploadStatus, useReaderStore } from "@/stores/ReaderStore";

	const readerStore = useReaderStore();
</script>

<template>
	<div class="flex flex-col items-center">
		<button type="button" id="textUploadButton" @click="readerStore.setUploadStatus(UploadStatus.UPLOADING)" class="
		w-16 h-16 rounded-lg 
		flex justify-center items-center
		cursor-pointer
		transition-colors
		text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800
		">
			<span class="bi-justify text-3xl"></span>
		</button>
		<label for="textUploadButton" class="mt-2 text-sm">via text</label>
	</div>
</template>