import { ReferenceItem } from './reference-item';

export default class Encyclopedia extends ReferenceItem {

    constructor(
        title: string,
        year: number,
        id: number,
        public edition: number
    ) {
        super(title, year, id);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition}(${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }
}