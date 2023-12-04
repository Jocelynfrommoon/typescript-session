function greet(name: string) {
    return `Hello, ${name}!`;
}

const greeting = greet("TypeScript");
console.log(greeting);

// Variable Declarations:
let myNumber: number = 10;
const myString: string = "Hello, TypeScript!";
let isActive: boolean = true;
// Trying to assign a different type will result in a compile-time error
// myNumber = "Oops!"; // Error: Type '"Oops!"' is not assignable to type 'number'


// Arrays:
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
// Attempting to add an incompatible type will show a compile-time error
// numbers.push("Four"); // Error: Argument of type '"Four"' is not assignable to parameter of type 'number'


// Tuples:
let person: [string, number] = ["John", 30];
// Assigning values of incorrect types will trigger an error
// person = [30, "John"]; // Error: Type 'number' is not assignable to type 'string'

// Enums:
enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let today: DaysOfWeek = DaysOfWeek.Wednesday;
console.log('today: ', today); // Outputs: 2 (index of Wednesday in the enum)


// Function Types:
// 1. Function Declaration:
function add(x: number, y: number): number {
    return x + y;
}
let result: number = add(3, 5);
//2. Function Types:
let myFunction: (x: number, y: number) => number;
myFunction = function (a: number, b: number): number {
    return a + b;
};
// Same as above add function, assigned using function type
let functionResult: number = myFunction(3, 5);

// Arrow Functions:
// 1. Arrow Function Syntax:
let multiply: (x: number, y: number) => number;
multiply = (a: number, b: number): number => {
    return a * b;
};
let multiplicationResult: number = multiply(3, 4);

// Optional Parameters:
// 1. Optional Parameter:
function greeting(name: string, message?: string): void {
    if (message) {
        console.log(`Hello, ${name}! ${message}`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greeting("Alice"); // Output: Hello, Alice!
greeting("Bob", "Have a nice day!"); // Output: Hello, Bob! Have a nice day!

// Default Parameters:
// 1. Default Parameter:
function greetDefault(name: string, message: string = "Welcome!"): void {
    console.log(`Hello, ${name}! ${message}`);
}
greetDefault("Charlie"); // Output: Hello, Charlie! Welcome!
greetDefault("David", "Goodbye!"); // Output: Hello, David! Goodbye!





