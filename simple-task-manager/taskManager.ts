// taskManager.ts
import { Task } from './task';

export class TaskManager {
    private tasks: Task[] = [];
    private nextId = 1;

    createTask(title: string, description: string): void {
        const task = new Task(this.nextId++, title, description);
        this.tasks.push(task);
        console.log(`Task "${title}" created.`);
    }

    updateTask(id: number, title: string, description: string): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.update(title, description);
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    completeTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.markCompleted();
        } else {
            console.log(`Task with ID ${id} not found.`);
        }
    }

    listTasks(): void {
        this.tasks.forEach(task => {
            console.log(`[${task.isCompleted ? '✓' : ' '}] ${task.id}: ${task.title} - ${task.description}`);
        });
    }
}
