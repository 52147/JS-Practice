console.log(name); // Output: undefined
var name = "John";
console.log(name); // Output: "John"


console.log(name2); // Throws ReferenceError: name is not defined
let name2 = "John";
console.log(name2); // Output: "John"


console.log(name3); // Throws ReferenceError: name is not defined
const name3 = "John";
console.log(name3); // Output: "John"
