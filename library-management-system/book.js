"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, publicationYear, isbn) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.isbn = isbn;
        this.isAvailable = true; // Default to available
    }
    Book.prototype.borrow = function () {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("You have borrowed \"".concat(this.title, "\" by ").concat(this.author, "."));
        }
        else {
            console.log("\"".concat(this.title, "\" is currently not available."));
        }
    };
    Book.prototype.returnBook = function () {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log("You have returned \"".concat(this.title, "\"."));
        }
        else {
            console.log("\"".concat(this.title, "\" was not borrowed."));
        }
    };
    return Book;
}());
exports.Book = Book;
// const book1 = new Book("1984", "George Orwell", 1949, "123456");
// book1.borrow();      // You have borrowed "1984" by George Orwell.
// book1.borrow();      // "1984" is currently not available.
// book1.returnBook();  // You have returned "1984".
// book1.returnBook();  // "1984" was not borrowed.
