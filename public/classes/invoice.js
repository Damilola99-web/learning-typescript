export class Invoice {
    //? the constructor function initializing the values above
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //? format for return value
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
