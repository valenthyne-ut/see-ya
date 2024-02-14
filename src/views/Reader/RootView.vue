<script setup lang="ts">
	import RootCard from "@/components/Basic/RootCard.vue";
	import ParsedMessageItemDisplay from "@/components/Views/Reader/ParsedMessageItemDisplay.vue";
	import { useReaderStore } from "@/stores/ReaderStore";

	const readerStore = useReaderStore();
</script>

<template>
	<RootCard>
		<h1 class="mt-2 text-3xl font-bold text-center">{{ readerStore.message!.title }}</h1>

		<ParsedMessageItemDisplay :items="readerStore.message!.items" />

		<nav class="flex mt-1">
			<RouterLink to="/" class="text-blue-600 underline" @click="readerStore.clearAll">&lt; back to homepage</RouterLink>
		</nav>
	</RootCard>
</template>