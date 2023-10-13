//The break statement is used to break out of a loop
const prompt = require("prompt-sync")()
i = "Porsche"
while (true) {
    b = prompt("Enter Your Fav Car Brand:")
    if (i === b) {
        console.log("You are a walking W")
        break;
    } else {
        console.log("You Suck")
    }

}