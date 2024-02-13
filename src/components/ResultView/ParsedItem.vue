<script setup lang="ts">
	import { GeneratorItemType } from "@/classes/GeneratorItem";
	import { computed, onMounted, ref } from "vue";
	import DOMPurify from "dompurify";
	import { parse } from "marked";

	const props = defineProps({
		type: {
			type: Number,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	});

	const computedClass = computed(() => {
		let itemClass;	
		switch(props.type) {
		case GeneratorItemType.LABEL:
			itemClass = "mt-2 text-center";
			break;
		case GeneratorItemType.TEXT:
			itemClass = "mt-2 text-justify";
			break;
		}
		return itemClass;
	});

	const markdownText = ref<string>("");

	onMounted(async () => {
		markdownText.value = DOMPurify.sanitize(await parse(props.text));
	});
</script>

<template>
	<div :class="computedClass" v-html="markdownText"></div>
</template>