"use strict";
let color = "\x1b[32m%s\x1b[0m";
console.log(`${color}`, "Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.• Make a list of five or more usernames called current_users.\n• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.\n• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.\n• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.");
// List of usernames
const current_users = ["Alice", "Bob", "John", "Sarah", "Eva"];
// List of new usernames
const new_users = ["John", "Eric", "Mia", "Chris", "ALICE"];
for (let i = 0; i < new_users.length; i++) {
    // Convert to lowercase for comparison
    const lowercase_new_username = new_users[i].toLowerCase();
    // lowercase version of the new username is in the current usernames
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_username)) {
        console.log(`Sorry, the username "${new_users[i]}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username "${new_users[i]}" is available.`);
    }
}
