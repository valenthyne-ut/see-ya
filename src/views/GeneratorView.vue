<script setup lang="ts">
	import BaseCard from "@/components/BaseCard.vue";
	import AddLabelButton from "@/components/GeneratorView/AddLabelButton.vue";
	import AddTextButton from "@/components/GeneratorView/AddTextButton.vue";
	import TitleField from "@/components/GeneratorView/TitleField.vue";
	import ItemsPreviewArea from "@/components/GeneratorView/ItemsPreviewArea.vue";
	import { useGeneratorStore } from "@/stores/GeneratorStore";
	import ClearButton from "@/components/GeneratorView/ClearButton.vue";
	import PasswordField from "@/components/GeneratorView/PasswordField.vue";
	import { ref } from "vue";
	import FinishButton from "@/components/GeneratorView/FinishButton.vue";
	import router from "@/router";

	const generatorStore = useGeneratorStore();

	const errorText = ref<string>("");

	async function finishCard() {
		errorText.value = "";
		try {
			generatorStore.packageMessage();
			router.push("/generator/result");
		} catch(error) {
			errorText.value = error as string;
		}
	}
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
			<PasswordField v-model="generatorStore._password" class="mt-1" />
			<div class="w-full mt-1 flex gap-1">
				<AddLabelButton @click="generatorStore.addItem(0)"/>
				<AddTextButton @click="generatorStore.addItem(1)"/>
			</div>

			<ItemsPreviewArea />

			<div class="w-full mt-2 flex justify-between items-center">
				<span class="text-red-500">{{ errorText }}</span>
				<ClearButton class="ms-auto" @click="generatorStore.clear(); errorText = ''"/>
				<FinishButton class="ms-1" @click="finishCard"/>
			</div>

			<nav class="mt-2 w-full flex justify-between">
				<RouterLink to="/" class="text-blue-600 underline">&lt; to home</RouterLink>
				<RouterLink to="/generator/preview" class="text-blue-600 underline">preview &gt;</RouterLink>
			</nav>
		</BaseCard>
	</main>
</template>