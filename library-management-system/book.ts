export class Book {
    title: string;
    author: string;
    publicationYear: number;
    isbn: string;
    isAvailable: boolean;


    constructor(title: string, author: string, publicationYear: number, isbn: string) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.isbn = isbn;
        this.isAvailable = true; // Default to available
    }

    borrow(): void {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You have borrowed "${this.title}" by ${this.author}.`);
        } else {
            console.log(`"${this.title}" is currently not available.`);
        }
    }

    returnBook(): void {
    if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`You have returned "${this.title}".`);
    } else {
        console.log(`"${this.title}" was not borrowed.`);
    }
}
}

// const book1 = new Book("1984", "George Orwell", 1949, "123456");

// book1.borrow();      // You have borrowed "1984" by George Orwell.
// book1.borrow();      // "1984" is currently not available.
// book1.returnBook();  // You have returned "1984".
// book1.returnBook();  // "1984" was not borrowed.


