//destructuring arrays into distinct variables
const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [gold, silver, bronze, ...everyoneElse] = scores;
//saves 1 to gold , 2 to silver , 3 to bronze and so on
