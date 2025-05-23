"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
// taskManager.ts
var task_1 = require("./task");
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.nextId = 1;
    }
    TaskManager.prototype.createTask = function (title, description) {
        var task = new task_1.Task(this.nextId++, title, description);
        this.tasks.push(task);
        console.log("Task \"".concat(title, "\" created."));
    };
    TaskManager.prototype.updateTask = function (id, title, description) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.update(title, description);
        }
        else {
            console.log("Task with ID ".concat(id, " not found."));
        }
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.markCompleted();
        }
        else {
            console.log("Task with ID ".concat(id, " not found."));
        }
    };
    TaskManager.prototype.listTasks = function () {
        this.tasks.forEach(function (task) {
            console.log("[".concat(task.isCompleted ? '✓' : ' ', "] ").concat(task.id, ": ").concat(task.title, " - ").concat(task.description));
        });
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
