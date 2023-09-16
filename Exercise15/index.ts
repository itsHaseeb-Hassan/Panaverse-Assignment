import {newSet,color} from '../Exercise14/index'
console.log(`${color}`,"More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.")

console.log("Three More person i think which name is","Usman,Zeeshan,Mubashir");
let foundTable:boolean= true;
console.log(`${color}`,"• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.")

    if(foundTable){
        console.log("I found a bigger table for the dinner so you come with us star night dinner")
    }
    else{
        console.log("Bigger Table not Found");
    }
    
    console.log(`${color}`,"Add one new guest to the beginning of your array.")

    newSet.unshift("Usman");
    console.log("Add One Guest At the begining of list",newSet);

    console.log(`${color}`,"Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.")

    newSet.splice(Math.round(newSet.length/2),0,"Mubashir");

    newSet.push("Zeeshan");
    console.log("At the last of the program the updated list of person which invited the dinner of biger table ",newSet);

    export {color,newSet,foundTable}