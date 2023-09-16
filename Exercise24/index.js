"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = exports.alien_color = void 0;
let color = "\x1b[32m%s\x1b[0m";
exports.color = color;
console.log(`${color}`, "Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'. \n• Writean if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.\n• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)");
const alien_color = 'green';
exports.alien_color = alien_color;
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
const second_alien_color = 'yellow';
if (second_alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
