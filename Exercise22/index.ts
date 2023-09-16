let color:string="\x1b[32m%s\x1b[0m";
console.log(`${color}`,"Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:\nlet car = 'subaru';\n console.log(Is car == 'subaru'? I predict True.) \n console.log(car == 'subaru') \n• Look closely at your results, and make sure you understand why each line evaluates to True or False.\n• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.");

let numberOfMyNotes:number=50;
let numberOfYourNotes:number=65;
console.log("Is number Of MyNotes equal to your number of Notes? I predict False.");

console.log(numberOfMyNotes === numberOfYourNotes);

console.log("Is number of MyNotes is greater than number of Your Notes? I predict False");
console.log(numberOfMyNotes>numberOfYourNotes);

console.log("Is number of MyNotes is less than the your number of Notes? I predict True");
console.log(numberOfMyNotes<numberOfYourNotes);

console.log("Is number of MyNotes is not equal To the Your number of Notes? I predict True");
console.log(numberOfMyNotes !== numberOfYourNotes);

console.log("Is number of Your Notes is greater than MyNotes? I predict True");
console.log(numberOfYourNotes>numberOfMyNotes );

console.log("Is number of Your Notes is less than MyNotes? I predict False");
console.log(numberOfYourNotes<numberOfMyNotes );


let isWeekend:boolean=true;
let isWeekDay:boolean=false;

// Using Logical  Operator

console.log("Is weekend AND isWeekDay? I predict False");
console.log(isWeekend && isWeekDay);
console.log("Is weekend OR isWeekDay? I predict true");
console.log(isWeekend || isWeekDay);
console.log("Is weekDay NOT? I predict True");
console.log(!isWeekDay);
console.log("Is weekend NOT? I predict False");
console.log(!isWeekend);

