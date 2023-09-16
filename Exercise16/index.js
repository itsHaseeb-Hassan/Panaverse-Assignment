"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = exports.newSet = void 0;
const index_1 = require("../Exercise15/index");
Object.defineProperty(exports, "color", { enumerable: true, get: function () { return index_1.color; } });
Object.defineProperty(exports, "newSet", { enumerable: true, get: function () { return index_1.newSet; } });
console.log(`${index_1.color}`, "Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.");
// found table not arrive at the time
let tableNotArrive = index_1.foundTable;
if (tableNotArrive) {
    console.log("you have space only two guest");
}
console.log(`${index_1.color}`, "Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.");
console.log("only two guest are invited for the dinner");
console.log(`${index_1.color}`, " Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.");
function popFunc(newSet) {
    while (newSet.length > 2) {
        newSet.pop();
    }
}
popFunc(index_1.newSet);
console.log(index_1.newSet);
console.log(`${index_1.color}`, "Print a message to each of the two people still on your list, letting them know they’re still invited.");
for (let i = 0; i < index_1.newSet.length; i++) {
    console.log(index_1.newSet[i], "you are still inviting for the dinner");
}
console.log(`${index_1.color}`, "Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.");
while (index_1.newSet.length > 0) {
    index_1.newSet.pop();
}
console.log("Print empty list for the dinner", index_1.newSet);
