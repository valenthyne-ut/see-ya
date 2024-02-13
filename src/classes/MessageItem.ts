export enum MessageItemType {
	LABEL = 0,
	TEXT_FIELD = 1
}

export class MessageItem {
	type: MessageItemType;
	value: string;

	constructor(type: MessageItemType, value?: string) {
		this.type = type;
		this.value = value || "";
	}
}