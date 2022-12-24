const todo = [];

let input = prompt("Enter the command")

while (input !== "quit") {
    if (input === "new") {
        const task = prompt("Enter your task")
        todo.push(task.toUpperCase());
        console.log(`${task.toUpperCase()} is added to list.`)

    }

    else if (input === "list") {
        console.log("------------------")
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("------------------")
    }

    else if (input === "delete") {
        let deletes = prompt("Enter the prompt you'd like to delete")
        let copy = todo.indexOf(deletes);

        if (copy !== -1) {
            console.log(`${deletes}: does not exist.`)
        }

        else {
            todo.pop(copy);
            console.log(`${deletes} was removed from the list.`)
        }
    }
    input = prompt("Enter the command")
}

console.log("You quit the app.")
