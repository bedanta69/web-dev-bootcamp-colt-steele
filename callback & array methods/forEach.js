//accepts a callback function
//calls the function once per element in an array
const numbers = [1, 2, , 3, 4, 5, 6, 7, 8, 9, 10];
function print(element) {
    console.log(element);
};
numbers.forEach(print)

//but it is most commonly used like this
numbers.forEach(function (el) {
    console.log(el);
})