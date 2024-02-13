<script setup lang="ts">
	import { GeneratorItem } from "@/classes/GeneratorItem";
	import ParsedItem from "./ParsedItem.vue";

	const props = defineProps({
		items: {
			type: Array<GeneratorItem>,
			required: true
		}
	});
</script>

<template>
	<div class="min-h-86 h-86 overflow-auto w-full">
		<ParsedItem v-for="item, index in props.items" :key="index" :type="item.type" :text="item.text"/>
	</div>
</template>