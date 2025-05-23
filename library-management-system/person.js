"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = exports.Student = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.borrowedBooks = [];
        this.id = id;
        this.name = name;
    }
    Person.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.returnBook();
            console.log("".concat(this.name, " returned \"").concat(book.title, "\"."));
        }
        else {
            console.log("".concat(this.name, " did not borrow \"").concat(book.title, "\"."));
        }
    };
    return Person;
}());
exports.Person = Person;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name) {
        var _this = _super.call(this, id, name) || this; // Inherit from Person
        _this.borrowLimit = 3;
        return _this;
    }
    Student.prototype.borrowBook = function (book) {
        if (this.borrowedBooks.length < this.borrowLimit && book.isAvailable) {
            book.borrow();
            this.borrowedBooks.push(book);
            console.log("".concat(this.name, " (Student) borrowed \"").concat(book.title, "\"."));
        }
        else {
            console.log("".concat(this.name, " can't borrow \"").concat(book.title, "\"."));
        }
    };
    return Student;
}(Person));
exports.Student = Student;
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.borrowLimit = 5;
        return _this;
    }
    Staff.prototype.borrowBook = function (book) {
        if (this.borrowedBooks.length < this.borrowLimit && book.isAvailable) {
            book.borrow();
            this.borrowedBooks.push(book);
            console.log("".concat(this.name, " (Staff) borrowed \"").concat(book.title, "\"."));
        }
        else {
            console.log("".concat(this.name, " can't borrow \"").concat(book.title, "\"."));
        }
    };
    return Staff;
}(Person));
exports.Staff = Staff;
