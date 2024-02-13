<script setup lang="ts">
	import BaseCard from "@/components/BaseCard.vue";
	import DownloadClipboard from "@/components/GeneratorView/DownloadClipboard.vue";
	import DownloadFile from "@/components/GeneratorView/DownloadFile.vue";
	import { useGeneratorStore } from "@/stores/GeneratorStore";

	const generatorStore = useGeneratorStore();

	function download() {
		const blob = new Blob([generatorStore._packagedMessage], { type: "text/plain" });
		
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download = generatorStore.curTitle + ".seeya";

		link.click();
		URL.revokeObjectURL(link.href);
	}

	async function copyToClipboard() {
		await navigator.clipboard.writeText(generatorStore._packagedMessage);
	}
</script>

<template>
	<main>
		<BaseCard class="w-full h-full justify-center
			sm:w-7/12 sm:h-fit sm:justify-normal
			md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12"
		>
			<h1 class="text-3xl font-bold">see-you Generator result</h1>
			<span class="mt-2 text-sm">Your finished message!</span>

			<span class="mt-4 text-justify">
				<p>Your message is ready!</p><br>

				<ul class="list-disc ps-4">
					<li>Press the button labelled "the file" to download it as a file.</li>
					<li>Press the button labelled "the text" to put it in your clipboard.</li>
				</ul><br>

				<p>Remember, you'll have to share the link to this website, the password your message uses, and the message itself.</p>
			</span>

			<div class="mt-4 flex w-4/6 justify-between items-center">
				<DownloadClipboard @click="copyToClipboard"/>
				<span>or</span>
				<DownloadFile @click="download" />
			</div>

			<nav class="mt-2 w-full flex justify-between">
				<RouterLink to="/generator" class="text-blue-600 underline">&lt; to generator</RouterLink>
				<RouterLink to="/generator/preview" class="text-blue-600 underline">preview &gt;</RouterLink>
			</nav>
		</BaseCard>
	</main>
</template>