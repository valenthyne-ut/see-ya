import { MessageItem, MessageItemType } from "@/classes/MessageItem";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGeneratorStore = defineStore("generator", () => {
	const _items = ref<Array<MessageItem>>([]);
	const _title = ref<string>();

	const curItems = computed(() => {
		return _items.value;
	});

	const curTitle = computed(() => {
		return _title.value;
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
	}

	return { _items, _title, curItems, curTitle, addItem, removeItem, clear };
});