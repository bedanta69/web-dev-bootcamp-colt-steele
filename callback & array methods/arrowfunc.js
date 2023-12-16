//arrow function 
//syntstically compact alternative to a regular function expression
const sum = (x, y) => {
    return x + y;
}
console.log(sum(1, 2));
//expected output 3

//implicit returns for arrow functions
const multiply = (x, y) => (
    x * y                                // we dont need to specify the return keyword when using the first bracke or no brackets at all for arrow functions
)

console.log(multiply(2, 4))
//expected output 8