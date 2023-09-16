import {color,newSet,foundTable} from '../Exercise15/index'

console.log(`${color}`,"Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.")

// found table not arrive at the time

let tableNotArrive:boolean=foundTable;
 if(tableNotArrive){
    console.log("you have space only two guest")
 }

 console.log(`${color}`,"Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.")
console.log("only two guest are invited for the dinner");

console.log(`${color}`," Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.");

function popFunc(newSet:string[]){
    while(newSet.length>2){
         newSet.pop();
    }
}
popFunc(newSet);
console.log(newSet);

console.log(`${color}`,"Print a message to each of the two people still on your list, letting them know they’re still invited.")

for(let i=0;i<newSet.length;i++){
    console.log(newSet[i],"you are still inviting for the dinner");
}

console.log(`${color}`,"Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.")

while(newSet.length>0){
    newSet.pop();
}
console.log("Print empty list for the dinner",newSet);

export {newSet,color}