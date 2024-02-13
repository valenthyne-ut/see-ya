export enum GeneratorItemType {
	LABEL = 0,
	TEXT = 1
}

export class GeneratorItem {
	readonly type: GeneratorItemType;
	text: string;

	constructor(type: GeneratorItemType, text?: string) {
		this.type = type;
		this.text = text || "";
	}
}