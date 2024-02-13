import { AES } from "crypto-js";
import type { MessageItem } from "./MessageItem";

export class Message {
	title: string;
	items: Array<MessageItem>;

	constructor(title: string, items: Array<MessageItem>) {
		this.title = title;
		this.items = items;
	}

	package(password: string): string {
		const rawText = this.toString();
		return AES.encrypt(rawText, password).toString();
	}
	
	toString() {
		return JSON.stringify(this);
	}
}