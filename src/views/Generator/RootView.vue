<script setup lang="ts">
	import RootCard from "@/components/Basic/RootCard.vue";
	import PasswordField from "@/components/Views/Generator/RootView/PasswordField.vue";
	import TitleField from "@/components/Views/Generator/RootView/TitleField.vue";
	import FieldButtonGroup from "@/components/Views/Generator/RootView/FieldButtons/FieldButtonGroup.vue";
	import GeneratorFields from "@/components/Views/Generator/RootView/Fields/GeneratorFields.vue";
	import ActionButtonGroup from "@/components/Views/Generator/RootView/ActionButtons/ActionButtonGroup.vue";
</script>

<template>
	<RootCard>
		<h1 class="text-3xl font-bold">see-you Generator</h1>
		<p class="mt-2 mb-2 text-sm">Make your own secret messages. Supports (some) markdown.</p>

		<TitleField />
		<PasswordField class="mt-1"/>

		<FieldButtonGroup class="mt-1"/>
		<GeneratorFields class="my-2 py-2 border-t border-b border-gray-600 dark:border-zinc-700"/>
		<ActionButtonGroup class="mt-1"/>

		<nav class="flex mt-1">
			<RouterLink to="/" class="text-blue-600 underline">&lt; to main page</RouterLink>
			<RouterLink to="/generator/preview" class="ms-auto text-blue-600 underline">to preview &gt;</RouterLink>
		</nav>
	</RootCard>
</template>