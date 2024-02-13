export enum MessageItemType {
	LABEL = 0,
	TEXT = 1
}

export class MessageItem {
	readonly type: MessageItemType;
	text: string;

	constructor(type: MessageItemType, text?: string) {
		this.type = type;
		this.text = text || "";
	}
}