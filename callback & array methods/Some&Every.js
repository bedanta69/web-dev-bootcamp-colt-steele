//every returns false even if one of the element unsatisfies the test function
//Some is similar to every ,but returns true if any of the array elements pass the test function
let testscores = [60, 75, 90, 99, 88];
console.log(testscores.every(score => score >= 75)) //expected output : false
console.log(testscores.some(score => score >= 75)) //expected output :true

