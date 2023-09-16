var color:string="\x1b[32m%s\x1b[0m";

console.log(`${color}`,"Program Statement is:-Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.");

var personName:string="zeEshan aLi";

var lowerCase:string=personName.toLowerCase();
var upperCase:string=personName.toUpperCase();

console.log("Person Name is Lowercase is:",lowerCase);
console.log("Person Name is Uppercase is:",upperCase);

var myArray:string[]=personName.toLowerCase().split(' ');
for(let i=0;i<myArray.length;i++){
       myArray[i]=myArray[i].charAt(0).toUpperCase().concat(myArray[i].slice(1)); 
    }
    let TitleCase:string=myArray.join(' ');
    console.log("Person Name is Titlecase is:",TitleCase);



    

