//accessing an element out of a object literal

//First Method
const objectliteral = {
    firstname: "Bedanta",
    lastname: "Kashyap"
};
console.log(objectliteral["firstname"]);
//expected output:Bedanta
console.log(objectliteral["lastname"]);
//expected output:Kashyap

//second method
console.log(objectliteral.firstname);
//expected output: Bedanta
console.log(objectliteral.lastname);
//expected output: Kashyap
