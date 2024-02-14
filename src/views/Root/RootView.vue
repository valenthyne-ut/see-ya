<script setup lang="ts">
	import RootCard from "@/components/Basic/RootCard.vue";
	import UploadOptionsGroup from "@/components/Views/RootView/UploadOptionsGroup.vue";
	import UploadFieldsGroup from "./Fields/UploadFieldsGroup.vue";
</script>

<template>
	<RootCard>
		<h1 class="text-3xl font-bold">see-you</h1>
		<p class="mt-2 text-sm">An appreciation from Valenthyne.</p>

		<UploadOptionsGroup class="mt-4 w-4/6 self-center"/>

		<UploadFieldsGroup />

		<section class="text-justify">
			<h2 class="
			w-full
			mt-4 mb-2 pt-4
			text-xl font-bold
			border-t
			border-t-gray-600 dark:border-t-zinc-600
			">
				How to use
			</h2>
			<p>
				Hiya! You were sent here, probably by Valenthyne, with some sort of password and either
				a scary-looking block of text, or a file which ends in ".seeya".
			</p><br>
			<p>
				<ul class="list-disc ps-4">
					<li>If you've got the text, press the button to upload via text.</li>
					<li>If you've got the file, press the button to upload via file.</li>
					<li>If you've got both, pick and use whichever is more convenient for you.</li>
				</ul>
			</p><br>
			<p>
				After either of these steps (and if you did everything right), you will be prompted for a password. Input the
				password that was provided to you, and you'll be greeted with a surprise!
			</p>
		</section>

		<nav class="flex mt-1">
			<RouterLink to="/generator" class="ms-auto text-blue-600 underline">to generator &gt;</RouterLink>
		</nav>
	</RootCard>
</template>