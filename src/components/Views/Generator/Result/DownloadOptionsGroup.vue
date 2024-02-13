<script setup lang="ts">
	import DownloadOptionsClipboard from "./DownloadOptionsClipboard.vue";
	import DownloadOptionsFile from "./DownloadOptionsFile.vue";
</script>

<template>
	<div class="flex justify-between items-center">
		<DownloadOptionsClipboard/>
		<span>or..</span>
		<DownloadOptionsFile/>
	</div>
</template>