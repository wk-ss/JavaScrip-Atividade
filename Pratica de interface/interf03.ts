interface ITask {
    title: string;
    completed?: string;
}
class Task {
    title: string;
    completed: string;

    constructor({ title, completed = "" }: ITask) {
        this.title = title;
        this.completed = completed;
    }
}
let task01 = new Task({ title: "aluno", completed: "de luta" });
let task02 = new Task({ title: "aluna" });

console.log(task01); // Task { title: 'aluno', completed: 'de luta' }
console.log(task02); // Task { title: 'aluna', completed: '' }