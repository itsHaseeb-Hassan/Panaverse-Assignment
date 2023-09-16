// Select two above program statement is
var color:string="\x1b[32m%s\x1b[0m";
// My name is this
let myName:string="Haseeb Hassan";
console.log("My Name is",myName);
// Current date is
let date:Date=new Date();
console.log("Current Date is",date);

console.log(`${color}`,"Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.");
// Convert name to lowercase using built in function
console.log("Name is Lower case:-",myName.toLowerCase());
// Convert name to uppercase using built in function
console.log("Name is Upper case:-",myName.toUpperCase());
// Convert name title case using for loop and array or string method
var myArray:string[]=myName.toLowerCase().split(' ');

for(let i=0;i<myArray.length;i++){
    myArray[i]=myArray[i].charAt(0).toUpperCase().concat(myArray[i].slice(1));
}
let titleCase:string=myArray.join(' ');
console.log("Name is TitleCase",titleCase);
// Name print
console.log("My Name is",myName);
// Current date is
console.log("Current Date is",date);
// Second Program Statement is
console.log(`${color}`,"Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”")
// Store the name in variable
var personName:string="Eric";
// Print the Statement with variable
console.log(`“Hello ${personName}, would you like to learn some Python today?”`);