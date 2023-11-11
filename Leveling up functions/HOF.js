//Higher order function
//functions that operate on or with other functions
//they can accept a function as an argument
//return a function
function calltentimes(func) {
    for (i = 0; i < 10; i++) {
        func();
    }
}
function func2() {
    console.log("Hi")
}

calltentimes(func2);