// 1. A basic arrow function with two parameters:

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2)); // Outputs: 3

// 2. If the function body contains only one statement, you can omit the brackets ({}) and the return keyword:
const add2 = (a, b) => a + b;

console.log(add2(1, 2)); // Outputs: 3

// 3. If there is only one parameter, you can also omit the parentheses:

const square = (x) => x * x;

console.log(square(5)); // Outputs: 25

// 4. Arrow function without parameters should be written with a pair of parentheses:

const greet = () => "Hello, world!";

console.log(greet()); // Outputs: 'Hello, world!'

// 5. Arrow functions can also be used as callbacks:

const numbers = [1, 2, 3, 4];
const squared = numbers.map((x) => x * x);

console.log(squared); // Outputs: [1, 4, 9, 16]
