export class Task{
    name: string;
    description: string;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }
}

export const Tasks = [
    new Task("Task 1", "Description 1"),
    new Task("Task 2", "Description 2"),
    new Task("Task 3", "Description 3")
]