<script setup lang="ts">
	import { UploadStatus, useReaderStore } from "@/stores/ReaderStore";
	import CipherTextField from "./CipherTextField.vue";
	import PasswordField from "./PasswordField.vue";
	import CancelButton from "./CancelButton.vue";
	import FinishButton from "@/components/Views/Generator/RootView/ActionButtons/FinishButton.vue";
	import { AES, enc } from "crypto-js";

	const readerStore = useReaderStore();

	function readMessage() {
		if(!readerStore.curCipherText) { readerStore.setError("Message is required."); }
		else if(!readerStore.curPassword) { readerStore.setError("Password is required."); }
		else {
			try {
				console.log( AES.decrypt(readerStore.curCipherText!, readerStore.curPassword).toString(enc.Utf8) );
			} catch(err) {
				console.log(err);
			}
		}
	}
</script>

<template>
	<section class="mt-4 flex flex-col" v-if="readerStore.curUploadMode !== UploadStatus.UNSET">
		<CipherTextField />
		<PasswordField class="mt-1 "/>
		<div class="mt-4 flex items-center">
			<span class="text-red-500 text-justify basis-0 grow me-3">{{ readerStore.curError }}</span>	
			<CancelButton @click="readerStore.clearAll" class="ms-auto"/>
			<FinishButton @click="readMessage" class="ms-1"/>
		</div>
	</section>
</template>