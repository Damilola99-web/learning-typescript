import { HasFormatter } from "../interfaces/HasFormatter.js";
export class Invoice implements HasFormatter {
	//? values users will pass in
	readonly client: string;
	private details: string;
	public amount: number;

	//? the constructor function initializing the values above
	constructor(c: string, d: string, a: number) {
		this.client = c;
		this.details = d;
		this.amount = a;
	}

	//? format for return value
	format() {
		return `${this.client} owes £${this.amount} for ${this.details}`;
	}
}
