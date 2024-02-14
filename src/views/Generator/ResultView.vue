<script setup lang="ts">
	import RootCard from "@/components/Basic/RootCard.vue";
	import DownloadOptionsGroup from "@/components/Views/Generator/Result/DownloadOptionsGroup.vue";
</script>

<template>
	<RootCard>
		<h1 class="text-3xl font-bold">see-you Generator result</h1>
		<span class="mt-2 text-sm">Your finished secret message!</span>

		<DownloadOptionsGroup class="mt-4 w-4/6 self-center"/>

		<section class="mt-6 text-justify">
			<h2 class="text-xl font-bold text-center">Your message is ready!</h2><br>
			<ul class="list-disc ps-4">
				<li>If you want to share it through text, press the button to copy to your clipboard.</li>
				<li>If you want to share it as a file, press the button to save as a file.</li>
			</ul><br>
			<p>
				Remember, you'll have to share the link to this website, the password your message is encrypted with,
				and the message itself.
			</p>
		</section>

		<nav class="flex mt-1">
			<RouterLink to="/generator" class="text-blue-600 underline">&lt; to generator</RouterLink>
			<RouterLink to="/" class="ms-auto text-blue-600 underline">to main page &gt;</RouterLink>
		</nav>
	</RootCard>
</template>