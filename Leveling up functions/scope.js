//any variable defined under a function is scoped to that function itself
//that variable has no global significance 
function birdname() {
    let bird = "sparrow"
}
console.log(bird);
//expected output is an error because the variable bird is defined only to the function birdname
//this concept is known as scope of a function
//the variable bird has no global significance