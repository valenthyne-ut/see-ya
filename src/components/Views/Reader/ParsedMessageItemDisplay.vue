<script setup lang="ts">
	import { MessageItem } from "@/classes/MessageItem";
	import ParsedMessageItem from "@/components/Views/Reader/ParsedMessageItem.vue";

	const props = defineProps({
		items: {
			type: Array<MessageItem>,
			required: true
		}
	});
</script>

<template>
	<div class="min-h-86 h-86 overflow-auto">
		<ParsedMessageItem v-for="item, index in props.items" :key="index" :type="item.type" :value="item.value"/>
	</div>
</template>