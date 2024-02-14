import { AES } from "crypto-js";
import type { MessageItem } from "./MessageItem";

export interface MessageLike {
	title?: string;
	items?: Array<MessageItem>;
}

export class Message {
	title: string;
	items: Array<MessageItem>;

	static fromJSON(rawJSON: string): Message | false {
		try {
			const json = JSON.parse(rawJSON) as MessageLike;
			if(json.title && json.items) {
				return new Message(json.title, json.items);
			} else {
				return false;
			}
		} catch(err) {
			return false;
		}
	}

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