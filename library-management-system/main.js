"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var person_1 = require("./person");
var library_1 = require("./library");
var library = new library_1.Library();
// Create books
var book1 = new book_1.Book("1984", "George Orwell", 1949, "123456");
var book2 = new book_1.Book("The Hobbit", "J.R.R. Tolkien", 1937, "654321");
// Create members
var student1 = new person_1.Student("std001", "Alice");
var staff1 = new person_1.Staff("stf001", "Bob");
// Add to library
library.addBook(book1);
library.addBook(book2);
library.addMember(student1);
library.addMember(staff1);
// Borrow & return
library.borrowBook("std001", "123456"); // Alice borrows 1984
library.borrowBook("stf001", "654321"); // Bob borrows The Hobbit
library.returnBook("std001", "123456"); // Alice returns 1984
library.listAvailableBooks();
library.listMembers();
