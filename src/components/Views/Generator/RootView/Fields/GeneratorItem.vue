<script setup lang="ts">
	import { MessageItemType } from "@/classes/MessageItem";
	import { ref } from "vue";

	const model = defineModel<string | undefined>();

	const id = ref<string>("item-" + randomId());

	const props = defineProps({
		type: {
			type: Number,
			required: true
		},
		value: {
			type: String,
			required: true
		}
	});

	function randomId(): string {
		const randomArray = crypto.getRandomValues(new Uint8Array(16));
		return Array.from(randomArray).map(value => value.toString(16).padStart(2, "0")).join("");
	}
</script>

<template>
	<span v-if="props.type === MessageItemType.LABEL" class="w-full flex items-center">
		<label :for="id" class="
		px-2 py-1 rounded
		select-none
		bg-slate-400 dark:bg-gray-600
		">Label:</label>
		<input type="text" :id="id" placeholder="your label..." v-model="model" class="
		ms-2 outline-none bg-transparent
		"/>
	</span>

	<span v-if="$props.type === MessageItemType.TEXT_FIELD" class="w-full flex flex-col items-center">
		<label :for="id" class="
		w-full
		px-2 py-1 rounded
		text-center
		bg-slate-400 dark:bg-gray-600
		">Text field:</label>
		<textarea :id="id" v-model="model" class="
		w-full
		h-20 mt-1 p-2 rounded
		resize-none outline-none select-none
		dark:bg-gray-600
		"></textarea>
	</span>
</template>