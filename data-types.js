// Primitive Data Types

// Number
let age = 25; // integer
let weight = 70.5; // floating-point
// String
let name = "John";
// Boolean
let isActive = true;
// Undefined
let x;
console.log(x); // undefined
// Null
let y = null;
// Symbol
const uniqueSymbol = Symbol("description");
// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

// Non-primitive (Reference) Data Types:

// Object
let person = {
  name: "John",
  age: 30,
};
// Array
let fruits = ["apple", "banana", "cherry"];
// Function
function greet() {
  console.log("Hello!");
}

// Typeof Operator
console.log(typeof "John"); // Outputs: string
console.log(typeof 30); // Outputs: number
console.log(typeof true); // Outputs: boolean
console.log(typeof {}); // Outputs: object
console.log(typeof null); // Outputs: object (this is considered a bug in JavaScript)
console.log(typeof Symbol()); // Outputs: symbol

// dynamically typed

let data = "Hello, World!";
data = 42; // This is valid
