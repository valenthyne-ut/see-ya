<script setup lang="ts">
	import { useGeneratorStore } from "@/stores/GeneratorStore";
	import { ref, computed } from "vue";

	const generatorStore = useGeneratorStore();

	const passwordVisible = ref<boolean>(false);

	const computedInputType = computed(() => {
		return passwordVisible.value ? "text" : "password";
	});
	const computedIconClassname = computed(() => {
		return passwordVisible.value ? "bi-eye-fill" : "bi-eye-slash-fill";
	});

	function togglePasswordVisibility() {
		passwordVisible.value = !passwordVisible.value;
	}
</script>

<template>
	<div class="flex items-center">
		<label for="passwordField" class="
		px-2 py-1 rounded
		select-none
		text-white
		bg-slate-400 dark:bg-gray-600
		">Password:</label>
		<input :type="computedInputType" id="passwordField" placeholder="your message's password..." v-model="generatorStore.password" class="
		min-w-0 ms-2
		basis-0 grow
		outline-none bg-transparent
		" />
		<button type="button" @click="togglePasswordVisibility">
			<span :class="computedIconClassname" class="ms-2"></span>
		</button>
	</div>
</template>