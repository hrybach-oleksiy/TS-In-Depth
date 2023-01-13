/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ===================================== //
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

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

// Function, Function Type. Lesson 3

function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`;
}

const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;// Function Type
let idGenerator: typeof createCustomerID; // Function Type
idGenerator = (name: string, id: number) => `${name} ${id}`; // Function
idGenerator = createCustomerID;
// console.log(idGenerator('Alex', 29));

// Rest Parameters
function createCustomer(name: string, age?: number, city?: string): void {
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

function getBookByID(id: number): Book {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

// console.log(getBookByID(1));

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    // console.log('Customer name: ' + customer);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

const myBook = сheckoutBooks('Ann', 1, 2, 4);
// const myBook = сheckoutBooks('Ann', ...[1, 2, 4]);// if argument is array
// console.log(myBook);


// Function Overloaded
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
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
const checkedOutBooks = getTitles(false);


// Assertion functions
function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(book: any): string {
    assertStringValue(book);
    // return book.split('').reverse().join('');
    return [...book].reverse().join('');
}

// console.log(bookTitleTransform('good'));
// console.log(bookTitleTransform(123));
