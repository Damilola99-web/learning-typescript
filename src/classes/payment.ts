import { HasFormatter } from "../interfaces/HasFormatter.js";
export class Payment implements HasFormatter {
	//? values users will pass in
	readonly recepient: string;
	private details: string;
	public amount: number;

	//? the constructor function initializing the values above
	constructor(c: string, d: string, a: number) {
		this.recepient = c;
		this.details = d;
		this.amount = a;
	}

	//? format for return value
	format() {
		return `${this.recepient} is owed £${this.amount} for ${this.details}`;
	}
}
