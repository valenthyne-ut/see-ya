<script setup lang="ts">
	import { MessageItemType } from "@/classes/MessageItem";
	import DOMPurify from "dompurify";
	import { parse } from "marked";
	import { computed, onMounted, ref } from "vue";

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

	const computedClass = computed(() => {
		let computedItemClass;
		switch(props.type) {
		case MessageItemType.LABEL:
			computedItemClass = "mt-2 text-center";
			break;
		case MessageItemType.TEXT_FIELD:
			computedItemClass = "mt-2 text-justify";
			break;
		}
		return computedItemClass;
	});

	const markdownText = ref<string>("");

	onMounted(async () => {
		markdownText.value = DOMPurify.sanitize(await parse(props.value));
	});
</script>

<template>
	<div :class="computedClass" v-html="markdownText"></div>
</template>