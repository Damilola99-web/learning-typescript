export class Payment {
    //? the constructor function initializing the values above
    constructor(c, d, a) {
        this.recepient = c;
        this.details = d;
        this.amount = a;
    }
    //? format for return value
    format() {
        return `${this.recepient} is owed £${this.amount} for ${this.details}`;
    }
}
