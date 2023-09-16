"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alien_color = exports.color = void 0;
const index_1 = require("../Exercise24/index");
Object.defineProperty(exports, "color", { enumerable: true, get: function () { return index_1.color; } });
Object.defineProperty(exports, "alien_color", { enumerable: true, get: function () { return index_1.alien_color; } });
console.log(`${index_1.color}`, "Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.\n• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.\n• If the alien’s color isn’t green, print a statement that the player just earned 10 points.\n• Write one version of this program that runs the if block and another that runs the else block.");
if (index_1.alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
if (index_1.alien_color === 'red') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
