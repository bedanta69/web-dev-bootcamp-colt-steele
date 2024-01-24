//Spread for function calls
//Expands an iterable(array,strings etc ) into a list of arguments
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(num));
//Expected output NaN

console.log(Math.max(...num))//converts the num array into an argument for the Math.max() funcn
//expected output 10;