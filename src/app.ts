
import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UL, ReferenceItem, RefBook, Shelf } from './classes';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import { createCustomerID, getTitles, сheckoutBooks, printRefBook, getAllBooks, purge, getObjectProperty, createCustomer } from './functions';
import { Library } from './classes/library';
// import type { Library } from './classes/library';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ===================================== //

// Function, Function Type. Lesson 3

const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;// Function Type
let idGenerator: typeof createCustomerID; // Function Type
idGenerator = (name: string, id: number) => `${name} ${id}`; // Function
idGenerator = createCustomerID;
// console.log(idGenerator('Alex', 29));



const myBook = сheckoutBooks('Ann', 1, 2, 4);
// const myBook = сheckoutBooks('Ann', ...[1, 2, 4]);// if argument is array
// console.log(myBook);

const checkedOutBooks = getTitles(false);


const mySecondBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    // markDamaged(reason) {
    //     console.log(`Damaged: ${reason}`);
    // }, // two options of declaration
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

// printBook(mySecondBook);
// mySecondBook.markDamaged('missing back cover');

// Interfaces + Function Types


const logDamages: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamages('missing back cover');



const favoriteAuthor: Author = {
    numBooksPublished: 10,
    name: 'John Smith',
    email: 'aaa@bbb.com',
};

const favoriteLibrarian: Librarian = {
    department: 'fantasy',
    assistCustomer(custName, bookTitle) {
        console.log(`${custName} took ${bookTitle}`);
    },
    name: 'Barbara Strasisand',
    email: 'aaa@ccc.com',
};


// optional Chaining
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// keyof

// Classes

// const ref = new ReferenceItem('Learn Javascript', 2022, 45);
// ref.printItem();
// ref.publisher = 'Ababagalamaga';
// console.log(ref.publisher);
// console.log(ref);
// console.log(ref.getId());

// const favoriteLibrarian2: Librarian = new UniversityLibrarian('research', 'John Smith', 'bbb@bbb,com');
// const name2 = favoriteLibrarian2.assistCustomer('Helen', 'Star Wars');
// console.log(name2);

// const refBook: RefBook = new RefBook('Learn Ts', 2021, 22, 2);
// refBook.printItem();

// const refBook: RefBook = new RefBook('Learn Ts', 2021, 22, 2);
// refBook.printCitation();


// const favoriteLibrarian2: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian2.name = 'Helen';
// favoriteLibrarian2.assistCustomer('Alex', 'Star Wars');



const personBook: PersonBook = {
    name: 'John',
    author: 'Cheis',
    available: true,
    category: Category.TypeScript,
    email: 'aaa@ccc.com',
    id: 456,
    title: 'Learn Ts',
};


const refBook: RefBook = new RefBook('Learn Ts', 2021, 22, 2);
printRefBook(refBook);

const favoriteLibrarian2: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian2);


// Dynamic Import
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(obj => {
//             const reader = new obj.Reader();
//             reader.name = 'Helen';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         })
//         .catch(err => console.log(err));
// }

// const flag = true;

// if (flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Helen';
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// }


// Type Export-Import
// let library: Library;// if import as Type
// const library = new Library();// if import as Class

let library: Library = {
    id: 1,
    address: '',
    name: 'Helen'
};

// console.log(library);


// Generics
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result = purge<number>([1, 2, 3, 4, 5, 6]);
// const result2 = purge(inventory);
// console.log(result);
// console.log(result2);

// const bookShelf: Shelf<Book> = new Shelf<Book>();
const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf);
const firstBookTitle = bookShelf.getFirst().title;
// console.log(firstBookTitle);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf);
const firstMagazine = magazineShelf.getFirst();
// console.log(firstMagazine);

// console.log(magazineShelf.printTitles());
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));


// Utilities
const bookRequiredFields: BookRequiredFields = {
    author: 'Helen',
    available: true,
    category: Category.TypeScript,
    id: 2,
    markDamaged: null,
    pages: 350,
    title: 'Learn Typescript'
};

const updatedBook: UpdatedBook = {
    id: 5,
    pages: 420
};

let params: Parameters<СreateCustomerFunctionType>;
params = ['Helen', 38, 'London'];
// createCustomer(...params);