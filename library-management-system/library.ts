import { Book } from './book';
import { Person } from './person'; // Base class for Student and Staff

export class Library {
    private books: Book[] = [];
    private members: Person[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`📚 Added "${book.title}" to the library.`);
    }

    addMember(member: Person): void {
        this.members.push(member);
        console.log(`👤 Added member: ${member.name} (ID: ${member.id})`);
    }

    private findBookByIsbn(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }

    private findMemberById(id: string): Person | undefined {
        return this.members.find(member => member.id === id);
    }

    borrowBook(memberId: string, isbn: string): void {
        const member = this.findMemberById(memberId);
        const book = this.findBookByIsbn(isbn);

        if (!member) {
            console.log(`Member with ID ${memberId} not found.`);
            return;
        }

        if (!book) {
            console.log(`Book with ISBN ${isbn} not found.`);
            return;
        }

      // Will use method from Student or Staff
    }


    returnBook(memberId: string, isbn: string): void {
        const member = this.findMemberById(memberId);
        const book = this.findBookByIsbn(isbn);

        if (!member) {
            console.log(`Member with ID ${memberId} not found.`);
            return;
        }

        if (!book) {
            console.log(`Book with ISBN ${isbn} not found.`);
            return;
        }

        member.returnBook(book);
    }

    listAvailableBooks(): void {
        console.log("\n✅ Available Books:");
        this.books.forEach(book => {
            if (book.isAvailable) {
                console.log(`- "${book.title}" by ${book.author}`);
            }
        });
    }

    listMembers(): void {
        console.log("\n👥 Library Members:");
        this.members.forEach(member => {
            console.log(`- ${member.name} (ID: ${member.id})`);
        });
    }
}
