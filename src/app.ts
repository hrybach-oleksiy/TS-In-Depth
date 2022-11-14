showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

const getAllBooks = () => {
    const books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: mfalse },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
};