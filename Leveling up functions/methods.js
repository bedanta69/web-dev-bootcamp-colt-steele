//Defining methods
//method is simply a function that has been placed as a property on an object
//every method is a function but not every method is a function

//for example:
const mymath = {
    square: function (num) {
        return num * num
    },
    cube: function (num) {
        return num ** 3
    }
};

console.log(mymath.square(2));
//expected output 4
console.log(mymath.cube(2));
//expected output 8