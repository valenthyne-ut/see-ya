import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { MessageItem, MessageItemType } from "@/classes/MessageItem";
import { Message } from "@/classes/Message";

export const useGeneratorStore = defineStore("generator", () => {
	const title = ref<string | undefined>();
	const password = ref<string | undefined>();
	const items = ref<Array<MessageItem>>([]);	
	const packagedMessage = ref<string | undefined>();
	const error = ref<string | undefined>();

	const curTitle = computed(() => { return title.value; });
	const curPassword = computed(() => { return password.value; });
	const curItems = computed(() => { return items.value; });
	const curMessage = computed(() => { return packagedMessage.value; });
	const curError = computed(() => { return error.value; });

	function addItem(type: MessageItemType) {
		items.value.push(new MessageItem(type));
	}

	function removeItem(index: number) {
		items.value = items.value.filter((_, i) => i !== index);
	}

	function clearAll() {
		title.value = "";
		password.value = "";
		items.value = [];
		packagedMessage.value = "";
		error.value = "";
	}

	function packageMessage(): boolean {
		error.value = "";

		if(!title.value) { error.value = "No title set."; return false; }
		if(!password.value) { error.value = "No password set."; return false; }
		if(items.value.length <= 0) { error.value = "Message must have at least one field."; return false; }

		packagedMessage.value = new Message(title.value, items.value).package(password.value);
		return true;
	}

	function setError(newText: string) {
		error.value = newText;
	}

	return { 
		title,
		password,
		items,
		packagedMessage,
		error,

		curTitle,
		curPassword,
		curItems,
		curMessage,
		curError,

		addItem,
		removeItem,
		clearAll,
		setError,

		packageMessage
	};
});