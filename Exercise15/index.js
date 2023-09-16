"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foundTable = exports.newSet = exports.color = void 0;
const index_1 = require("../Exercise14/index");
Object.defineProperty(exports, "newSet", { enumerable: true, get: function () { return index_1.newSet; } });
Object.defineProperty(exports, "color", { enumerable: true, get: function () { return index_1.color; } });
console.log(`${index_1.color}`, "More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.");
console.log("Three More person i think which name is", "Usman,Zeeshan,Mubashir");
let foundTable = true;
exports.foundTable = foundTable;
console.log(`${index_1.color}`, "• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.");
if (foundTable) {
    console.log("I found a bigger table for the dinner so you come with us star night dinner");
}
else {
    console.log("Bigger Table not Found");
}
console.log(`${index_1.color}`, "Add one new guest to the beginning of your array.");
index_1.newSet.unshift("Usman");
console.log("Add One Guest At the begining of list", index_1.newSet);
console.log(`${index_1.color}`, "Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.");
index_1.newSet.splice(Math.round(index_1.newSet.length / 2), 0, "Mubashir");
index_1.newSet.push("Zeeshan");
console.log("At the last of the program the updated list of person which invited the dinner of biger table ", index_1.newSet);
