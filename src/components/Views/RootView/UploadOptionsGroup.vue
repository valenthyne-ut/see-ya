<script setup lang="ts">
	import UploadOptionsText from "./UploadOptionsText.vue";
	import UploadOptionsFile from "./UploadOptionsFile.vue";
</script>

<template>
	<div class="flex justify-between items-center">
		<UploadOptionsText />
		<span>or..</span>
		<UploadOptionsFile />
	</div>
</template>