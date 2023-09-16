"use strict";
let color = "\x1b[32m%s\x1b[0m";
console.log(`${color}`, "They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.");
class cat {
    constructor(color, price, eyesColor) {
        this.color = "";
        this.price = 0;
        this.eyesColor = "";
        this.color = color;
        this.price = price;
        this.eyesColor = eyesColor;
    }
}
let obj1 = new cat("white", 12000, "brown");
let obj2 = new cat("brown", 10000, "yellow");
let obj3 = new cat("black", 15000, "white");
let obj4 = [Object.assign({}, obj1), Object.assign({}, obj2), Object.assign({}, obj3)];
console.log(obj4);
