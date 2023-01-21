
import * as Interfaces from './../interfaces';

// class UniversityLibrarian implements Librarian {
//     constructor(
//         public department: string,
//         public name: string,
//         public email: string,
//     ) {

//     }

//     assistCustomer(custName: string, bookTitle: string): void {
//         console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
//     }
// }

// const favoriteLibrarian2: Librarian = new UniversityLibrarian('research', 'John Smith', 'bbb@bbb,com');
// const name2 = favoriteLibrarian2.assistCustomer('Helen', 'Star Wars');
// console.log(name2);

class UniversityLibrarian implements Interfaces.Librarian {

    department: string;
    name: string;
    email: string;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }
}


export { UniversityLibrarian };