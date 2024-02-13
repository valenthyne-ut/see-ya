<script setup lang="ts">
	import { useGeneratorStore } from "@/stores/GeneratorStore";
	import ClearFieldsButton from "./ClearFieldsButton.vue";
	import FinishButton from "./FinishButton.vue";
	import router from "@/router";

	const generatorStore = useGeneratorStore();

	function attemptPackage() {
		if(generatorStore.packageMessage()) {
			router.push("/generator/result");
		}
	}
</script>

<template>
	<div class="flex items-center">
		<span class="text-red-500">{{ generatorStore.curError }}</span>		

		<ClearFieldsButton @click="generatorStore.clearAll()" class="ms-auto"/>
		<FinishButton @click="attemptPackage" class="ms-1"/>
	</div>
</template>