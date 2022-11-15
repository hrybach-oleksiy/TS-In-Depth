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

const logFirstAvailable = (books: readonly Book[]): void => {
    console.log(`Number of books ${books.length}`);
    const firstAvailableBook = books.find(book => book.available === true)?.title;
    // destructurisation
    // const firstAvailableBook = books.find(({ available }) => available === true).title;
    console.log(`First available book is ${firstAvailableBook}`);
};

// logFirstAvailable(getAllBooks());

const getBookTitlesByCategory = (bookCategory: Category): Array<string> => {
    const books = getAllBooks();

    const title = books.filter(book => book.category === bookCategory)
        .map(book => book.title);

    return title;
};

// console.log(getBookTitlesByCategory(Category.JavaScript));

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

calcTotalPages();