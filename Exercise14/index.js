"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = exports.newSet = void 0;
const index_1 = require("../Exercise13/index");
Object.defineProperty(exports, "color", { enumerable: true, get: function () { return index_1.color; } });
console.log(`${index_1.color}`, "Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.");
let newPerson = "umar";
console.log(`${index_1.color}`, "Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.");
console.log(index_1.dinnerNotMakeName);
console.log(`${index_1.color}`, "Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.");
for (let i = 0; i < index_1.guestList.length; i++) {
    // ammar not make the dinner
    if (index_1.dinnerNotMakeName) {
        index_1.guestList[index_1.indexNumber] = newPerson;
    }
}
let newSet = index_1.guestList;
exports.newSet = newSet;
console.log("updated Guest List", index_1.guestList);
console.log(`${index_1.color}`, "Print a second set of invitation messages, one for each person who is still in your list.");
for (let i = 0; i < newSet.length; i++) {
    if (newSet[i] === "umar") {
        console.log(`${newSet[i]}`, "Join us for delightful dinner under the star night sky");
    }
}
