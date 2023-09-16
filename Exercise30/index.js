"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../Exercise29/index");
console.log(`${index_1.color}`, "No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.\n• If the list is empty, print the message We need to find some users!\n• Remove all of the usernames from your array, and make sure the correct message is printed.");
if (index_1.usernames.length === 0) {
    console.log("We need to find some users");
}
else {
    for (let i = 0; i < index_1.usernames.length; i++) {
        if (index_1.usernames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report");
        }
        else {
            console.log(`Hello ${index_1.usernames[i]}, thank you for logging in again`);
        }
    }
}
let userName = index_1.usernames.splice(0, 5);
if (userName.length === 0) {
    console.log("We need to find some users");
}
