<script setup lang="ts">
	import { UploadStatus, useReaderStore } from "@/stores/ReaderStore";
	import { onBeforeUnmount, onMounted, ref } from "vue";

	const inputRef = ref<HTMLInputElement | undefined>();
	const readerStore = useReaderStore();

	function readFromFile() {
		if(inputRef.value) {
			readerStore.setError("");
			readerStore.setUploadStatus(UploadStatus.UPLOADING);

			const fileList = inputRef.value.files;
			if(fileList && fileList[0]) {
				const textFile = fileList[0];
				const reader = new FileReader();

				reader.readAsText(textFile);
				reader.addEventListener("load", () => {
					readerStore.setCipherText(reader.result as string);
				});
			} else {
				readerStore.setError("Invalid file selected.");
			}
		}
	}

	onMounted(() => {
		if(inputRef.value) {
			inputRef.value.addEventListener("change", readFromFile);
		}
	});

	onBeforeUnmount(() => {
		if(inputRef.value) {
			inputRef.value.removeEventListener("change", readFromFile);
		}
	});
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
			<input id="fileUploadInput" type="file" ref="inputRef" class="hidden">
		</label>
		<label for="fileUploadButton" class="mt-2 text-sm">via file</label>
	</div>
</template>