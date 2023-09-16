let color:string="\x1b[32m%s\x1b[0m";

// Program statement

console.log(`${color}`,"Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.")
// Guest list
var guestList:string[]=["Soban","Ammar","Hassam"];
// index of Ammar is given list
let indexNumber:number=guestList.indexOf("Ammar");
// to invite guest list dinner to print message
for(let i=0;i<guestList.length;i++){
    console.log(`${guestList[i]} Join us for a delightful dinner under the starry night sky.`);
}

var dinnerNotMakeName:string="Ammar";
console.log("Name of the person which not make dinner",dinnerNotMakeName);

export {dinnerNotMakeName,guestList,indexNumber,color};