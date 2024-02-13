<script setup lang="ts">
	import { MessageItem } from "@/classes/MessageItem";
	import ParsedItem from "./ParsedItem.vue";

	const props = defineProps({
		items: {
			type: Array<MessageItem>,
			required: true
		}
	});
</script>

<template>
	<div class="min-h-86 h-86 overflow-auto w-full">
		<ParsedItem v-for="item, index in props.items" :key="index" :type="item.type" :text="item.text"/>
	</div>
</template>