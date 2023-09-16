let color:string="\x1b[32m%s\x1b[0m";
console.log(`${color}`,"More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:\n• Tests for equality and inequality with strings \n• Tests using the lower case function \n• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to \n• Tests using and and or operators \n • Test whether an item is in a array \n • Test whether an item is not in a array");

// Equality test with strings
const string1: string = "haseeb";
const string2: string = "ali";
const equalityTest: boolean = string1 === string2;  

console.log("Equality Test with string",equalityTest);

// Inequality test with strings
const string3: string = "pumpkin";
const string4: string = "capsicum";
const inequlityTest: boolean = string3 !== string4;
console.log("Inequality Test with string",inequlityTest) 

// Lowercase function test
const text: string = "HelloWorld";
const lowerText: string = text.toLowerCase();
const lowerCaseTest: boolean = lowerText === "helloworld"; 

console.log("LowerCase test function",lowerCaseTest);

// Numerical tests
const num1: number = 15;
const num2: number = 25;

// Equality test
const result4: boolean = num1 === num2; 
console.log("Numerical Equality Test",result4);

// Inequality test
const result5: boolean = num1 !== num2; 
console.log("Numerical Inequality Test",result5);
// Greater than test
const result6: boolean = num1 > num2;  
console.log("Numerical Greater Than Test",result6);
// Less than test
const result7: boolean = num1 < num2;  
console.log("Numerical Less Than Test",result7);
// Greater than or equal to test
const result8: boolean = num1 >= num2;  
console.log("Numerical Greater Than equal to Test",result8);
// Less than or equal to test
const result9: boolean = num1 <= num2; 
console.log("Numerical Less Than equal to Test",result9);

// "and" operator test
const isSunny: boolean = true;
const isWarm: boolean = true;
const result10: boolean = isSunny && isWarm; 
console.log("And Operator Test",result10);

// "or" operator test
const isRaining: boolean = false;
const isCold: boolean = true;
const result11: boolean = isRaining || isCold; 
console.log("OR Operator Test",result11);

// In array test
const fruits: string[] = ["apple", "banana", "cherry", "date"];
const fruitToCheck: string = "banana";
const result12: boolean = fruits.includes(fruitToCheck);  
console.log("Array test to check item is available",result12);
// Not in array test
const vegetables: string[] = ["carrot", "broccoli", "spinach"];
const vegetableToCheck: string = "tomato";
const result13: boolean = !vegetables.includes(vegetableToCheck); 
console.log("Array test to check item is not available",result13);