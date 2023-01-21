import { Category } from './enums';

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void; // function type, option 1
    // markDamaged?(reason: string): void; // function type, option 2
    markDamaged?: DamageLogger; // function type, option 3

}

interface DamageLogger {
    (data: string): void;
}

// Extending Interfaces
interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string, bookTitle: string): void;
}

interface TOptions {
    duration?: number;
    speed?: number;
}


export { Book, DamageLogger as Logger, Person, Author, Librarian, TOptions };