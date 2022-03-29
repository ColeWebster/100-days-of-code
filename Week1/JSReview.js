// --- Variables
let name = 'Mosh';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen
// Variables are case sensitive
let firstNameExample = "Cole";
console.log(firstNameExample);

// Declare multiple variables
let firstName = "Cole"; 
let lastName = "Webster";

// --- Constants
const interestRate = 0.3;
console.log(interestRate);
// Value of a variable can change
// Error because you cant change the value of a constant

// --- Primitive/Value Types
// String, Number, Boolean, undefined and null

let dog = "Corgi"; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean literal ( true or false )
let Dog; // undefined
let cat = null; // null

// --- Dynamic Typing
// typeof (variable) in the console

// --- Objects
// Refernce Type = Object, Array and Function

// Onject Literal
let person = {
    name: 'Cole',
    age: 35
};
console.log(person)

// Dot notation
person.name = "Matthew";
console.log(person.name)

// Bracket notation
person['name'] = 'Matt';
console.log(person.name)

// --- Array

// Array Literal
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[0]);

// --- Functions
// Performs a task
function greet(nameType, lastNameType) {
    //Body of the function to add logic
    console.log('Hello ' + nameType + ' ' + lastNameType);
}

greet('Cole', 'Webster');

// --- Type of Functions

// Calculates a value
function square(number) {
    return number * number;
}

console.log(square(2));