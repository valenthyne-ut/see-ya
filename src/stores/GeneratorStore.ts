import { GeneratorItem, GeneratorItemType } from "@/classes/GeneratorItem";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGeneratorStore = defineStore("generator", () => {
	const _items = ref<Array<GeneratorItem>>([]);
	const _title = ref<string>();

	const curItems = computed(() => {
		return _items.value;
	});

	function addItem(type: GeneratorItemType) {
		_items.value.push(new GeneratorItem(type));
	}

	function removeItem(index: number) {
		_items.value = _items.value.filter((_, i) => i !== index);
	}

	function clear() {
		_title.value = "";
		_items.value = [];
	}

	return { _items, _title, curItems, addItem, removeItem, clear };
});