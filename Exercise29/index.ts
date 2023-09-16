let color:string="\x1b[32m%s\x1b[0m";

console.log(`${color}`,"Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:\n• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?\n• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.");

let usernames: string[] = ["admin", "Eric", "Alice", "John", "Sarah"];

for (let i=0;i<usernames.length;i++) {
  if (usernames[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}

export {color,usernames}