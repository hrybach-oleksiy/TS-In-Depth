showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ===================================== //
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

type Books = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}[];

const getAllBooks = (): Books => {
    const books: Books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
};

const logFirstAvailable = (books: Books): void => {
    console.log(`Number of books ${books.length}`);
    const firstAvailableBook = books.find(book => book.available === true)?.title;
    // destructurisation
    // const firstAvailableBook = books.find(({ available }) => available === true).title;
    console.log(`First available book is ${firstAvailableBook}`);
};

logFirstAvailable(getAllBooks());

const getBookTitlesByCategory = (bookCategory: Category): Array<string> => {
    const books = getAllBooks();

    const title = books.filter(book => book.category === bookCategory)
        .map(book => book.title);

    return title;
};

console.log(getBookTitlesByCategory(Category.JavaScript));