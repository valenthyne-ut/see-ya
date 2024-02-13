<script setup lang="ts">
	import { useGeneratorStore } from "@/stores/GeneratorStore";
	import GeneratorItem from "./GeneratorItem.vue";

	const generatorStore = useGeneratorStore();

	function pad(index: number) {
		if(index + 1 < generatorStore.curItems.length) {
			return "mb-1";
		}
	}
</script>

<template>
	<div class="min-h-96 h-96 overflow-auto">
		<div v-for="item, index in generatorStore.curItems" :key="index" class="flex items-center" :class="pad(index)">
			<GeneratorItem :type="item.type" :value="item.value" v-model="item.value"/>
			<button type="button" @click="generatorStore.removeItem(index)" class="
			ms-2 me-3
			text-gray-500 hover:text-red-600 active:text-red-700
			">
				<span class="bi-trash3-fill"></span>
			</button>
		</div>
	</div>
</template>