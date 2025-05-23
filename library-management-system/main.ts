import { Book } from './book';
import { Student, Staff } from './person';
import { Library } from './library';

const library = new Library();

// Create books
const book1 = new Book("1984", "George Orwell", 1949, "123456");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937, "654321");

// Create members
const student1 = new Student("std001", "Alice");
const staff1 = new Staff("stf001", "Bob");

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

