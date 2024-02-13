<script setup lang="ts">
	import { useGeneratorStore } from "@/stores/GeneratorStore";
	import CreateLabelFieldButton from "./CreateLabelFieldButton.vue";
	import CreateTextFieldButton from "./CreateTextFieldButton.vue";
	import { MessageItemType } from "@/classes/MessageItem";
	
	const generatorStore = useGeneratorStore();
</script>

<template>
	<div class="flex gap-1">
		<CreateLabelFieldButton @click="generatorStore.addItem(MessageItemType.LABEL)"/>
		<CreateTextFieldButton @click="generatorStore.addItem(MessageItemType.TEXT_FIELD)"/>
	</div>
</template>