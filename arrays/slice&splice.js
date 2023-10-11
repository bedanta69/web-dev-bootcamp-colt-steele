//slice is a method to slice up an array
let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = array1.slice(4)
console.log(array2)
//expected output[4,5,6,,7,8,9]

let array3 = array1.slice(1, 4);
console.log(array3);
//expected output [1,2,3]
let array4 = array1.slice(-3);
console.log(array4);
//expected output [7,8,9]


//splice is an array method to add or delete something from an array
let array5 = ['a', 'b', 'c', 'd', 'e', 'f'];
let array6 = array5.splice(1, 1); //(starting point, how many elements to delete)
console.log(array5);
//expected output[a,c,d,e,f]
let array7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array8 = array7.splice(10, 0, 11); //adds 11 in the 10th index
console.log(array7);
//expected output[0,1,2,3,4,5,6,7,8,9,11,10]