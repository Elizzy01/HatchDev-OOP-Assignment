import { Book } from './book';

export class Person {
    id: string;
    name: string;
    borrowedBooks: Book[] = [];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    returnBook(book: Book): void {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.returnBook();
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} did not borrow "${book.title}".`);
        }
    }
}
export class Student extends Person {
    borrowLimit = 3;

    constructor(id: string, name: string) {
        super(id, name); // Inherit from Person
    }

    borrowBook(book: Book): void {
        if (this.borrowedBooks.length < this.borrowLimit && book.isAvailable) {
            book.borrow();
            this.borrowedBooks.push(book);
            console.log(`${this.name} (Student) borrowed "${book.title}".`);
        } else {
            console.log(`${this.name} can't borrow "${book.title}".`);
        }
    }
}

export class Staff extends Person {
    borrowLimit = 5;

    constructor(id: string, name: string) {
        super(id, name);
    }

    borrowBook(book: Book): void {
        if (this.borrowedBooks.length < this.borrowLimit && book.isAvailable) {
            book.borrow();
            this.borrowedBooks.push(book);
            console.log(`${this.name} (Staff) borrowed "${book.title}".`);
        } else {
            console.log(`${this.name} can't borrow "${book.title}".`);
        }
    }
}



