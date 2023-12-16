//the filter method
//Creates a new array with all elements that pass the test implemented by the provided function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let even = numbers.filter(n => {
    return n % 2 == 0;  //creates an array of even  element from the array of numbers
})
let odd = numbers.filter(n => {
    return n % 2 != 0; //creates an array of odd elements from the array of numbers
})
console.log(even)
console.log(odd)