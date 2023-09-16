"use strict";
let color = "\x1b[32m%s\x1b[0m";
// Program statement 
console.log(`${color}`, "Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”");
let favoriteTransportation = ["BMW", "Mercedes-Benz", "Honda", "Toyota", "Audi"];
for (let i = 0; i < favoriteTransportation.length; i++) {
    console.log(`“I would like to buy a ${favoriteTransportation[i]} car.”`);
}
