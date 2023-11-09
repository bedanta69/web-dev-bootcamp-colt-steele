//Block is anything with a second bracket other than a function
//For example: a loop , a conditional etc

let radius = 8;
if (radius < 5) {
    let PI = 3.1415;
}
console.log(PI);
//expected output is an error because PI is scoped to the if conditional

if (radius < 5) {
    var ep = 1151; //if var is used istead of let the variable is scoped globally in case of blockss but not functions 

}
console.log(ep);
//expected output is 1151 because ep is scoped globally
