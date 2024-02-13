<script setup lang="ts">
	import { MessageItemType } from "@/classes/MessageItem";
	import { computed, ref } from "vue";

	function randomId(length: number): string {
		const randomArray = new Uint8Array(length / 2);
		crypto.getRandomValues(randomArray);

		const parsedArray = Array.from(randomArray);
		return parsedArray.map(item => item.toString(16).padStart(2, "0")).join("");
	}

	const props = defineProps({
		type: {
			type: Number,
			required: true
		}
	});
	
	const id = ref<string>(randomId(16));
	const computedId = computed(() => {
		let result;
		switch(props.type) {
		case MessageItemType.LABEL:
			result = "label-" + id.value;
			break;
		case MessageItemType.TEXT:
			result = "text-" + id.value;
			break;
		}
		return result;
	});

	const model = defineModel<string>();
</script>

<template>
	<span v-if="props.type === MessageItemType.LABEL" class="w-full flex items-center">
		<label :for="computedId" class="bg-slate-400 dark:bg-gray-600 px-2 py-1 rounded">
			Label:
		</label>
		<input type="text" :id="computedId" placeholder="your label.." v-model="model" class="ms-2 outline-none bg-transparent">
	</span>

	<span v-if="props.type === MessageItemType.TEXT" class="w-full flex flex-col">
		<label :for="computedId" class="bg-slate-400 dark:bg-gray-600 px-2 text-center rounded">
			Text:
		</label>
		<textarea :id="computedId" v-model="model" class="mt-1 p-2 h-20 bg-gray-300 dark:bg-gray-600 rounded resize-none outline-none"></textarea>
	</span>
</template>