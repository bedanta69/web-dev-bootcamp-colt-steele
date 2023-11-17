//returning functions
function makemysteryfunction() {
    const random = Math.random();
    if (random > 0.5) {
        return function () {
            console.log("I am a good function");
        }
    } else {
        return function () {
            alert("I am a bad function you have bben infected by a computer virus")
        }
    }
}
makemysteryfunction()
//here it returns either of the two functions depending on the Math.random factor