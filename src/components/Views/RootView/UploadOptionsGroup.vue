<script setup lang="ts">
	import UploadOptionsClipboard from "./UploadOptionsClipboard.vue";
	import UploadOptionsFile from "./UploadOptionsFile.vue";
</script>

<template>
	<div class="flex justify-between items-center">
		<UploadOptionsClipboard />
		<span>or..</span>
		<UploadOptionsFile />
	</div>
</template>