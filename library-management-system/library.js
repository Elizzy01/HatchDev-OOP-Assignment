"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("\uD83D\uDCDA Added \"".concat(book.title, "\" to the library."));
    };
    Library.prototype.addMember = function (member) {
        this.members.push(member);
        console.log("\uD83D\uDC64 Added member: ".concat(member.name, " (ID: ").concat(member.id, ")"));
    };
    Library.prototype.findBookByIsbn = function (isbn) {
        return this.books.find(function (book) { return book.isbn === isbn; });
    };
    Library.prototype.findMemberById = function (id) {
        return this.members.find(function (member) { return member.id === id; });
    };
    Library.prototype.borrowBook = function (memberId, isbn) {
        var member = this.findMemberById(memberId);
        var book = this.findBookByIsbn(isbn);
        if (!member) {
            console.log("Member with ID ".concat(memberId, " not found."));
            return;
        }
        if (!book) {
            console.log("Book with ISBN ".concat(isbn, " not found."));
            return;
        }
        // Will use method from Student or Staff
    };
    Library.prototype.returnBook = function (memberId, isbn) {
        var member = this.findMemberById(memberId);
        var book = this.findBookByIsbn(isbn);
        if (!member) {
            console.log("Member with ID ".concat(memberId, " not found."));
            return;
        }
        if (!book) {
            console.log("Book with ISBN ".concat(isbn, " not found."));
            return;
        }
        member.returnBook(book);
    };
    Library.prototype.listAvailableBooks = function () {
        console.log("\n✅ Available Books:");
        this.books.forEach(function (book) {
            if (book.isAvailable) {
                console.log("- \"".concat(book.title, "\" by ").concat(book.author));
            }
        });
    };
    Library.prototype.listMembers = function () {
        console.log("\n👥 Library Members:");
        this.members.forEach(function (member) {
            console.log("- ".concat(member.name, " (ID: ").concat(member.id, ")"));
        });
    };
    return Library;
}());
exports.Library = Library;
