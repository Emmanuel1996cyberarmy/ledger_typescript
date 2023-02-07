import { HasFormatter } from "../Interfaces/hasFormatter";

export class invoice implements HasFormatter {
    client: string;
    private details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}