<script setup lang="ts">
	import { ref } from "vue";

	const model = defineModel<string>();

	const passwordVisible = ref<boolean>(false);

	function togglePasswordVisibility() {
		passwordVisible.value = !passwordVisible.value;
	}
</script>

<template>
	<div class="w-full flex items-center">
		<label for="passwordInput" class="bg-slate-400 dark:bg-gray-600 px-2 py-1 rounded">Password:</label>
		<input :type="passwordVisible ? 'text' : 'password'" id="passwordInput" placeholder="your password.." v-model="model"
		class="ms-2 min-w-0 basis-0 grow outline-none bg-transparent">
		<button type="button" @click="togglePasswordVisibility">
			<span :class="passwordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'"></span>
		</button>
	</div>
</template>