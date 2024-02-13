<script setup lang="ts">
	import BaseCard from "@/components/BaseCard.vue";
	import ParsedItemArea from "@/components/ResultView/ParsedItemArea.vue";
	import { useGeneratorStore } from "@/stores/GeneratorStore";

	const generatorStore = useGeneratorStore();
</script>

<template>
	<main>
		<BaseCard class="w-full h-full justify-center
		sm:w-7/12 sm:h-fit sm:justify-normal
		md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
		>
			<h1 class="text-sm font-bold text-gray-400">(see-you Preview)</h1>
			<h2 class="text-3xl font-bold">{{ generatorStore.curTitle }}</h2>

			<ParsedItemArea :items="generatorStore.curItems"/>

			<nav class="mt-2 w-full flex justify-between">
				<RouterLink to="/generator" class="text-blue-600 underline">&lt; back to generator</RouterLink>
			</nav>
		</BaseCard>
	</main>
</template>