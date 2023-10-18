
let input = prompt("What would you like to do?");
let todo = ["Play basketball", "Skate"];

while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("***************")
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`)

        }
        console.log("***************");

    } else if (input === "new") {
        let newtodo = prompt("Ok what is the new todo?");
        todo.push(newtodo);
        console.log(`${newtodo} added to the list!`)


    } else if (input === "delete") {

        const index = parseInt(prompt("Ok enter the index of the task you want to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown Index:")
        }
    }
    input == prompt("What would you like to do?");

};
console.log("Ok you quit the app!") 