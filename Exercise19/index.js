"use strict";
let color = "\x1b[32m%s\x1b[0m";
console.log(`${color}`, "Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.");
let cites = ["Faisalabad", "Lahore", "Islamabad", "Peshawar", "Karachi"];
console.log("List of Cities:-");
for (let i = 0; i < cites.length; i++) {
    console.log(cites[i]);
}
