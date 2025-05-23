// main.ts
import { TaskManager } from './taskManager';

const manager = new TaskManager();

manager.createTask("Finish Assignment", "Complete the OOP Task Manager");
manager.createTask("Read Notes", "Revise TypeScript concepts");

manager.listTasks();

manager.completeTask(1);
manager.updateTask(2, "Read OOP Notes", "Go over TypeScript classes again");

manager.listTasks();
