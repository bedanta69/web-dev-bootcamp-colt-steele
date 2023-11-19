//try and catch statements in javascript
//try and catch statement are used to stop our code from crashing where there might be an error
try {
    hello.touppercase()
} catch {
    console.log("ERROR");
}
function capitalname(name) {
    try {
        console.log(name.toUpperCase())
    } catch {
        console.log("please enter a string");
    }
};
capitalname("bedanta")
//expected output: BEDANTA
capitalname(123)
//expected output: please enter a string