let test;
console.log(test); // Outputs: undefined

function testFunc() {
  // No return statement
}
console.log(testFunc()); // Outputs: undefined

let test2 = null;
console.log(test2); // Outputs: null

console.log(undefined == null); // Outputs: true
console.log(undefined === null); // Outputs: false
