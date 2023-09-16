var color:string="\x1b[32m%s\x1b[0m";
console.log(`${color}`,"Program Statement is:-Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, \t and \n, at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.")

var personName:string="\t \n  Krishnamurti Indian \t \n";

console.log("Person Name with WhiteSpaces",personName);

console.log("Person Name without WhiteSpaces",personName.trim());