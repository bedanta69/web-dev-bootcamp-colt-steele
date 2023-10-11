//nesting arrays and object literals 
//both an array can be stored inside of an object literal and vice versa

//object literal inside of an array
let users = [
    {
        name: 'Alice',
        height: 183,
        eyecolor: 'hazel'
    },
    {
        name: 'Bob',
        height: 172,
        eyecolor: 'blue'
    }
];



// array inside of an object literal
let games = {
    outdoor: ["football", "basketball", "rugby"],
    indoor: ["chess", "carrom", "ludo"]
};