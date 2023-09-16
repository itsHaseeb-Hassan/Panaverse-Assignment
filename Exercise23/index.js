"use strict";
let color = "\x1b[32m%s\x1b[0m";
console.log(`${color}`, "More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:\n• Tests for equality and inequality with strings \n• Tests using the lower case function \n• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to \n• Tests using and and or operators \n • Test whether an item is in a array \n • Test whether an item is not in a array");
// Equality test with strings
const string1 = "haseeb";
const string2 = "ali";
const equalityTest = string1 === string2;
console.log("Equality Test with string", equalityTest);
// Inequality test with strings
const string3 = "pumpkin";
const string4 = "capsicum";
const inequlityTest = string3 !== string4;
console.log("Inequality Test with string", inequlityTest);
// Lowercase function test
const text = "HelloWorld";
const lowerText = text.toLowerCase();
const lowerCaseTest = lowerText === "helloworld";
console.log("LowerCase test function", lowerCaseTest);
// Numerical tests
const num1 = 15;
const num2 = 25;
// Equality test
const result4 = num1 === num2;
console.log("Numerical Equality Test", result4);
// Inequality test
const result5 = num1 !== num2;
console.log("Numerical Inequality Test", result5);
// Greater than test
const result6 = num1 > num2;
console.log("Numerical Greater Than Test", result6);
// Less than test
const result7 = num1 < num2;
console.log("Numerical Less Than Test", result7);
// Greater than or equal to test
const result8 = num1 >= num2;
console.log("Numerical Greater Than equal to Test", result8);
// Less than or equal to test
const result9 = num1 <= num2;
console.log("Numerical Less Than equal to Test", result9);
// "and" operator test
const isSunny = true;
const isWarm = true;
const result10 = isSunny && isWarm;
console.log("And Operator Test", result10);
// "or" operator test
const isRaining = false;
const isCold = true;
const result11 = isRaining || isCold;
console.log("OR Operator Test", result11);
// In array test
const fruits = ["apple", "banana", "cherry", "date"];
const fruitToCheck = "banana";
const result12 = fruits.includes(fruitToCheck);
console.log("Array test to check item is available", result12);
// Not in array test
const vegetables = ["carrot", "broccoli", "spinach"];
const vegetableToCheck = "tomato";
const result13 = !vegetables.includes(vegetableToCheck);
console.log("Array test to check item is not available", result13);
