<script setup lang="ts">
	import BaseCard from "@/components/BaseCard.vue";
	import MessageUpload from "@/components/RootView/MessageUpload.vue";
	import ClipboardUpload from "@/components/RootView/ClipboardUpload.vue";
</script>

<template>
	<main>
		<BaseCard class="w-8/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
			<h1 class="text-3xl font-bold">see-you</h1>
			<span class="mt-2 text-sm">An appreciation from Valenthyne.</span>

			<div class="mt-8 flex w-4/6 justify-between items-center">
				<MessageUpload />
				<span>or</span>
				<ClipboardUpload />
			</div>
		</BaseCard>
	</main>
</template>
