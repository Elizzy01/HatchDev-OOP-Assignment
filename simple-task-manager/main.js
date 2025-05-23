"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var taskManager_1 = require("./taskManager");
var manager = new taskManager_1.TaskManager();
manager.createTask("Finish Assignment", "Complete the OOP Task Manager");
manager.createTask("Read Notes", "Revise TypeScript concepts");
manager.listTasks();
manager.completeTask(1);
manager.updateTask(2, "Read OOP Notes", "Go over TypeScript classes again");
manager.listTasks();
