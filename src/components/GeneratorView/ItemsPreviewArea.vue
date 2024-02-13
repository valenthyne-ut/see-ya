<script setup lang="ts">
	import { useGeneratorStore } from "@/stores/GeneratorStore";
	import GeneratorItem from "./GeneratorItem.vue";

	const generatorStore = useGeneratorStore();

	function addPadding(index: number) {
		if(index +1 != generatorStore.curItems.length) {
			return "mb-1";
		}
	}
</script>

<template>
	<div class="mt-4 min-h-64 h-64 overflow-auto w-full">
		<div v-for="item, index in generatorStore.curItems" :key="index" 
		class="w-full flex items-center" :class="addPadding(index)">
			<GeneratorItem :type="item.type" v-model="item.text"/>
			<button type="button" @click="generatorStore.removeItem(index)" 
				class="ms-2 transition-colors text-gray-500 hover:text-red-600 active:text-red-700 me-3">
				<span class="bi-trash3-fill"></span>
			</button>
		</div>
	</div>
</template>