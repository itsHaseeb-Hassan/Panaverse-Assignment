"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../Exercise25/index");
console.log(`${index_1.color}`, "Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.\n• If the alien is green, print a message that the player earned 5 points.\n• If the alien is yellow, print a message that the player earned 10 points.\n• If the alien is red, print a message that the player earned 15 points.\n• Write three versions of this program, making sure each message is printed for the appropriate color alien.");
if (index_1.alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (index_1.alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (index_1.alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
let second_alien_color = 'yellow';
if (second_alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (second_alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (second_alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
let third_alien_color = 'red';
if (third_alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (third_alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (third_alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}
