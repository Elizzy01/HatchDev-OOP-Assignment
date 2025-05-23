// task.ts
export class Task {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;

    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }

    markCompleted(): void {
        this.isCompleted = true;
        console.log(`Task "${this.title}" marked as completed.`);
    }

    update(title: string, description: string): void {
        this.title = title;
        this.description = description;
        console.log(`Task updated to "${this.title}"`);
    }
}
// Example usage
// const task1 = new Task(1, "Learn TypeScript", "Complete the TypeScript tutorial");  
