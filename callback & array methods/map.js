//The map method
//creates a new array with the result of calling a callback on every element in the array
const num = [1, 2, 3, 4, 5, 6, 7, 8];
const doubles = num.map(function (el) {
    return el * 2
})
console.log(doubles);
//expected output:[2,4,6,8,10,12,14,16]