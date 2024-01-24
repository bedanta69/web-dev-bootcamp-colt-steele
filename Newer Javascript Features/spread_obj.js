//spread with object literals 
//copies object from one object into another object literal
const feline = { legs: 4, family: 'Felidae' };
const canine = { isfurry: true, family: 'Caninae' };

let catdogs = { ...feline, ...canine }
console.log(catdogs);