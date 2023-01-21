/* eslint-disable no-redeclare */

import { Book, TOptions } from './interfaces';
import { Category } from './enums';
import { BookProperties, BookOrUndefined } from './types';
import RefBook from './classes/encyclopedia';

const getAllBooks = (): readonly Book[] => {
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
};

const logFirstAvailable = (books: readonly Book[] = getAllBooks()): void => {
    console.log(`Number of books ${books.length}`);
    const firstAvailableBook = books.find(book => book.available === true)?.title;
    // destructurisation
    // const firstAvailableBook = books.find(({ available }) => available === true).title;
    console.log(`First available book is ${firstAvailableBook}`);
};

// logFirstAvailable(getAllBooks());
// logFirstAvailable();

const getBookTitlesByCategory = (bookCategory: Category = Category.JavaScript): Array<string> => {
    const books = getAllBooks();

    const title = books.filter(book => book.category === bookCategory)
        .map(book => book.title);

    return title;
};


// console.log(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookTitlesByCategory());

const logBookTitles = (titles: string[]): void => {
    for (const title of titles) {
        console.log(title);
    }
};

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

const getBookAuthorByIndex = (index: number): [title: string, author: string] => {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
};

// console.log(getBookAuthorByIndex(1));

const calcTotalPages = () => {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const avaragePages = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    console.log(avaragePages);
};

// calcTotalPages();

export function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`;
}

// Rest Parameters
export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer name: ${age}`);
    }

    if (city) {
        console.log(`Customer name: ${city}`);
    }
}

// createCustomer('Alex');
// createCustomer('Alex', 29);
// createCustomer('Alex', 29, 'Kyiv');

// function getBookByID(id: number): Book {
//     const books = getAllBooks();
//     return books.find(book => book.id === id);
// }

// using interface in arguments
export function getBookByID(id: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

// console.log(getBookByID(1));

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    // console.log('Customer name: ' + customer);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

// Function Overloaded
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg)
                .map(book => book.title);

        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg)
                .map(book => book.title);
        }

    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available)
                .map(book => book.title);
        }
    }
}

// console.log(getTitles(2, true));
// console.log(getTitles(3, false));
// console.log(getTitles(false));
// console.log(getTitles('Lea Verou'));



// Assertion functions
export function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(book: any): string {
    assertStringValue(book);
    // return book.split('').reverse().join('');
    return [...book].reverse().join('');
}

// console.log(bookTitleTransform('good'));
// console.log(bookTitleTransform(123));


// Interfaces
export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, property: BookProperties): any {
    const value = book[property];

    return typeof value === 'function' ? value.name : value;
}

// console.log(getProperty(mySecondBook, 'title'));
// console.log(getProperty(mySecondBook, 'markDamaged'));
// console.log(getProperty(mySecondBook, 'isbn'));

export function setDefaultConfig(options: TOptions) {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export { getAllBooks, logFirstAvailable, getBookTitlesByCategory, logBookTitles, getBookAuthorByIndex, calcTotalPages };