function greet(name) {
    return "Hello, ".concat(name, "!");
}
var greeting = greet("TypeScript");
console.log(greeting);
// Variable Declarations:
var myNumber = 10;
var myString = "Hello, TypeScript!";
var isActive = true;
// Trying to assign a different type will result in a compile-time error
// myNumber = "Oops!"; // Error: Type '"Oops!"' is not assignable to type 'number'
// Arrays:
var numbers = [1, 2, 3];
var names = ["Alice", "Bob", "Charlie"];
// Attempting to add an incompatible type will show a compile-time error
// numbers.push("Four"); // Error: Argument of type '"Four"' is not assignable to parameter of type 'number'
// Tuples:
var person = ["John", 30];
// Assigning values of incorrect types will trigger an error
// person = [30, "John"]; // Error: Type 'number' is not assignable to type 'string'
// Enums:
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
var today = DaysOfWeek.Wednesday;
console.log('today: ', today); // Outputs: 2 (index of Wednesday in the enum)
