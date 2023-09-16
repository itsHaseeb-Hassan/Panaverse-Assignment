"use strict";
let color = "\x1b[32m%s\x1b[0m";
console.log(`${color}`, "Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.");
let friendsName = ["Soban", "laher", "Ammar", "Hasnain", "Zahid"];
// using for loop print the friends name in the given list
for (let i = 0; i < friendsName.length; i++) {
    console.log(`No${[i + 1]} friend is:-`, friendsName[i]);
}
