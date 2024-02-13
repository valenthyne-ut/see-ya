<script setup lang="ts">
	import BaseCard from "@/components/BaseCard.vue";
	import AddLabelButton from "@/components/GeneratorView/AddLabelButton.vue";
	import AddTextButton from "@/components/GeneratorView/AddTextButton.vue";
	import TitleField from "@/components/GeneratorView/TitleField.vue";
	import ItemsPreviewArea from "@/components/GeneratorView/ItemsPreviewArea.vue";
	import { ref } from "vue";

	const title = ref<string>("");
</script>

<template>
	<main>
		<BaseCard class="w-full h-full justify-center
			sm:w-7/12 sm:h-fit sm:justify-normal
			md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
		>
			<h1 class="text-3xl font-bold">see-you Generator</h1>
			<span class="mt-2 text-sm">Make your own messages!</span>

			<TitleField v-model="title" class="mt-4"/>
			<div class="w-full mt-1 flex gap-1">
				<AddLabelButton />
				<AddTextButton />
			</div>

			<ItemsPreviewArea />

			<RouterLink to="/" class="mt-2 w-full flex justify-start text-blue-600 underline">&lt; to home</RouterLink>
		</BaseCard>
	</main>
</template>