const prompt = require('prompt-sync')();
maximum = parseInt(prompt("Enter the maximum number:"));
while (!maximum) {
    maximum = parseInt(prompt("enter a valid number"))
};

const targetnum = Math.floor(Math.random() * maximum) + 1;
let guess = (prompt("Enter your first guess:"));
let attempts = 1;

while (parseInt(guess) !== targetnum) {
    if (guess === 'q') break;
    attempts++

    if (guess > targetnum) {
        guess = prompt("Too high guess again:")

    } else {
        guess = prompt("Too Low guess again:")
    }

};

if (guess === 'q') {
    console.log("Ok you quit");

} else {
    console.log("You win and it took you", " ", attempts, " ", "guesses")
}