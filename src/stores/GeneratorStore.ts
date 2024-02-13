import { Message } from "@/classes/Message";
import { MessageItem, MessageItemType } from "@/classes/MessageItem";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGeneratorStore = defineStore("generator", () => {
	const _items = ref<Array<MessageItem>>([]);
	const _title = ref<string>("");
	const _password = ref<string>("");
	const _packagedMessage = ref<string>("");

	const curItems = computed(() => {
		return _items.value;
	});

	const curTitle = computed(() => {
		return _title.value;
	});

	const curPassword = computed(() => {
		return _password.value;
	});

	const curPackagedMessage = computed(() => {
		return _packagedMessage.value;
	});

	function addItem(type: MessageItemType) {
		_items.value.push(new MessageItem(type));
	}

	function removeItem(index: number) {
		_items.value = _items.value.filter((_, i) => i !== index);
	}

	function clear() {
		_title.value = "";
		_items.value = [];
		_password.value = "";
	}

	function packageMessage(): boolean {
		if(!_title.value) { throw "No title set."; }
		if(!_password.value) { throw "No password set."; }
		if(_items.value.length == 0) { throw "Message must have atleast one field."; }

		_packagedMessage.value = new Message(_title.value, _items.value).package(_password.value);

		return true;
	}

	return { _items, _title, _password, _packagedMessage, curItems, curTitle, curPassword, curPackagedMessage, addItem, removeItem, clear, packageMessage };
});