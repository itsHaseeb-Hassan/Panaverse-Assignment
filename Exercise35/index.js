"use strict";
let color = "\x1b[32m%s\x1b[0m";
console.log(`${color}`, "T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.");
function make_shirt(size, message) {
    console.log(`You have ordered a ${size}-sized T-shirt with the following message: "${message}".`);
}
make_shirt("Large", "I Love TypeScript!");
