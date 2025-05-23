"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
// task.ts
var Task = /** @class */ (function () {
    function Task(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }
    Task.prototype.markCompleted = function () {
        this.isCompleted = true;
        console.log("Task \"".concat(this.title, "\" marked as completed."));
    };
    Task.prototype.update = function (title, description) {
        this.title = title;
        this.description = description;
        console.log("Task updated to \"".concat(this.title, "\""));
    };
    return Task;
}());
exports.Task = Task;
// Example usage
// const task1 = new Task(1, "Learn TypeScript", "Complete the TypeScript tutorial");  
