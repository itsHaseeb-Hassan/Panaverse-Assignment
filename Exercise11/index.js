"use strict";
let color = "\x1b[32m%s\x1b[0m";
// Program statement
console.log(`${color}`, "Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.");
let friendsName = ["Soban", "laher", "Ammar", "Hasnain", "Zahid"];
// using for loop print the friends name with message in the given list
for (let i = 0; i < friendsName.length; i++) {
    console.log(`${friendsName[i]} is my good friend`);
}
