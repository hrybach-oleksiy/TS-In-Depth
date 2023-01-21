/* eslint-disable no-underscore-dangle */

abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    #id: number;

    private _publisher: string;

    static department: string = 'Fantasy';

    constructor(
        public title: string,
        protected year: number,
        id: number,
    ) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${ReferenceItem.department}`);
        console.log(Object.getPrototypeOf(this).constructor.department);
        // same meaning
    }

    abstract printCitation(): void;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    getId(): number {
        return this.#id;
    }
}

export { ReferenceItem };