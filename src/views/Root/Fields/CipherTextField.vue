<script setup lang="ts">
	import { useReaderStore } from "@/stores/ReaderStore";

	const readerStore = useReaderStore();
</script>

<template>
	<div class="flex items-center">
		<label for="titleField" class="
		px-2 py-1 rounded
		select-none
		text-white
		bg-blue-600
		">Message:</label>
		<input type="text" id="titleField" placeholder="your encrypted message..." v-model="readerStore.cipherText" class="
		ms-2 min-w-0 
		basis-0 grow outline-none 
		bg-transparent
		">
	</div>
</template>