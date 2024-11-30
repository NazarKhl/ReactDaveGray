class Task {
    constructor(public title: string, public duration: number) {}

    async perform(): Promise<void> {
        console.log(`Performing: ${this.title}`);
        return new Promise((resolve) => setTimeout(resolve, this.duration * 1000));
    }
}

class TaskManager {
    private tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    calculateTotalTime(): number {
        return this.tasks.reduce((total, task) => total + task.duration, 0);
    }

    printTasks(): void {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.title} - ${task.duration} minutes`);
        });
    }

    async performTasks(): Promise<void> {
        for (const task of this.tasks) {
            await task.perform();
        }
    }
}

const main = async () => {
    console.log("Welcome to the Task Calculator!");

    const manager = new TaskManager();
    manager.addTask(new Task("Write TypeScript code", 1)); 
    manager.addTask(new Task("Debug application", 2)); 
    manager.addTask(new Task("Push code to GitHub", 1)); 

    console.log("\nTasks:");
    manager.printTasks();

    console.log("\nTotal time required:", manager.calculateTotalTime(), "minutes");

    console.log("\nPerforming tasks...");
    await manager.performTasks();
    console.log("All tasks completed!");
};

main();
