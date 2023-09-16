"use strict";
let color = "\x1b[32m%s\x1b[0m";
console.log(`${color}`, "Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.\n• Make a array of your three favorite fruits and call it favorite_fruits.\n• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!");
const favorite_fruits = ["banana", "strawberry", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples");
}
else {
    console.log("You don't like apples as much");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis");
}
else {
    console.log("Kiwi is not one of your favorite fruits");
}
