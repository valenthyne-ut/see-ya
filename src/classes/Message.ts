import type { MessageItem } from "./MessageItem";
import { AES } from "crypto-js";

export class Message {
	title: string;
	items: Array<MessageItem>;

	constructor(title: string, items: Array<MessageItem>) {
		this.title = title;
		this.items = items;
	}

	package(password?: string): string {
		if(password) {
			const rawText = this.toString();
			const cipherText = AES.encrypt(rawText, password).toString();
			return cipherText;
		} else {
			return this.toString();
		}
	}

	toString() {
		return JSON.stringify(this);
	}
}