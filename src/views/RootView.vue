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

			<h2 class="text-xl font-bold w-full mt-6 mb-2 pt-4
				flex justify-center border-t 
				border-t-gray-600 dark:border-t-zinc-600">How to use</h2>

			<span class="text-justify">
				<p>
					Hiya! You were sent here, probably by Valenthyne, with either a scary-looking <strong>block of text</strong>,
					or <strong>a file</strong> which ends in [[FORMAT]].
				</p><br>
				<ul class="list-disc ps-4">
					<li>If you got the file, press the button labelled "the file";</li>
					<li>If you got the block of text, copy it to your clipboard, and press the button labelled "the text".</li>
					<li>If you got both, pick and use whichever is more convenient for you.</li>
				</ul>
			</span>
		</BaseCard>
	</main>
</template>
