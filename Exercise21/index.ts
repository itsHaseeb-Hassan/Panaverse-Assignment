let color:string="\x1b[32m%s\x1b[0m";
console.log(`${color}`,"Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.");

let myArray:number[]=[2,4,6,8,10,12,14,16,18];

console.log("Error index Array is ",myArray[15]);

console.log("Correct Index Array is",myArray[5]);