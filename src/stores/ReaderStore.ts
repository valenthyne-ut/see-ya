import { Message } from "@/classes/Message";
import { AES, enc } from "crypto-js";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export enum UploadStatus {
	UNSET = -1,
	UPLOADING = 0,
}

export const useReaderStore = defineStore("reader", () => {
	const uploadStatus = ref<UploadStatus>(UploadStatus.UNSET);
	const message = ref<Message | undefined>();
	const cipherText = ref<string | undefined>();
	const password = ref<string | undefined>();
	const error = ref<string | undefined>();

	const curUploadMode = computed(() => { return uploadStatus.value; });
	const curMessage = computed(() => { return message.value; });
	const curCipherText = computed(() => { return cipherText.value; });
	const curPassword = computed(() => { return password.value; });
	const curError = computed(() => { return error.value; });

	function setUploadStatus(newStatus: UploadStatus) {
		uploadStatus.value = newStatus;
	}

	function setCipherText(newCipherText: string) {
		cipherText.value = newCipherText;
	}

	function setPassword(newPassword: string) {
		password.value = newPassword;
	}

	function setError(newError: string) {
		error.value = newError;
	}

	function parseCipherText() {
		if(!cipherText.value) { throw "Message is required."; }
		if(!password.value) { throw "Password is required."; }

		const plainText = AES.decrypt(cipherText.value, password.value).toString(enc.Utf8);

		if(plainText.trim().length == 0 || !plainText.startsWith("{")) { 
			throw "Couldn't parse message. The message you supplied may be corrupt, or you input the wrong password."; 
		} else {
			const parsedMessage = Message.fromJSON(plainText);
			if(!parsedMessage) {
				throw "Couldn't parse message. The message you supplied may be corrupt, or you input the wrong password.";
			} else {
				message.value = parsedMessage;
			}
		}
	}

	function clearAll() {
		uploadStatus.value = UploadStatus.UNSET;
		cipherText.value = "";
		password.value = "";
		error.value = "";
	}

	return {
		uploadStatus,
		message,
		cipherText,
		password,
		error,

		curUploadMode,
		curMessage,
		curCipherText,
		curPassword,
		curError,

		setUploadStatus,
		setCipherText,
		setPassword,
		setError,
		clearAll,
		parseCipherText
	};
});