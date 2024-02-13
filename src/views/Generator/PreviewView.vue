<script setup lang="ts">
	import RootCard from "@/components/Basic/RootCard.vue";
	import ParsedMessageItemDisplay from "@/components/Views/Reader/ParsedMessageItemDisplay.vue";
	import { useGeneratorStore } from "@/stores/GeneratorStore";

	const generatorStore = useGeneratorStore();
</script>

<template>
	<RootCard>
		<p class="text-sm text-center">(see-you Generator preview)</p>
		<h1 class="mt-2 text-3xl font-bold text-center">{{ generatorStore.curTitle }}</h1>

		<ParsedMessageItemDisplay :items="generatorStore.curItems"/>

		<nav class="flex mt-1">
			<RouterLink to="/generator" class="text-blue-600 underline">&lt; back to generator</RouterLink>
		</nav>
	</RootCard>
</template>