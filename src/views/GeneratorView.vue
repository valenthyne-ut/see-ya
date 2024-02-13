<script setup lang="ts">
	import BaseCard from "@/components/BaseCard.vue";
	import AddLabelButton from "@/components/GeneratorView/AddLabelButton.vue";
	import AddTextButton from "@/components/GeneratorView/AddTextButton.vue";
	import TitleField from "@/components/GeneratorView/TitleField.vue";
	import ItemsPreviewArea from "@/components/GeneratorView/ItemsPreviewArea.vue";
	import { useGeneratorStore } from "@/stores/GeneratorStore";
	import ClearButton from "@/components/GeneratorView/ClearButton.vue";

	const generatorStore = useGeneratorStore();
</script>

<template>
	<main>
		<BaseCard class="w-full h-full justify-center
			sm:w-7/12 sm:h-fit sm:justify-normal
			md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
		>
			<h1 class="text-3xl font-bold">see-you Generator</h1>
			<span class="mt-2 text-sm">Make your own messages! Supports (some) markdown.</span>

			<TitleField v-model="generatorStore._title" class="mt-4"/>
			<div class="w-full mt-1 flex gap-1">
				<AddLabelButton @click="generatorStore.addItem(0)"/>
				<AddTextButton @click="generatorStore.addItem(1)"/>
				<ClearButton class="ms-auto" @click="generatorStore.clear()"/>
			</div>

			<ItemsPreviewArea />

			<nav class="mt-2 w-full flex justify-between">
				<RouterLink to="/" class="text-blue-600 underline">&lt; to home</RouterLink>
				<RouterLink to="/generator/preview" class="text-blue-600 underline">preview &gt;</RouterLink>
			</nav>
		</BaseCard>
	</main>
</template>