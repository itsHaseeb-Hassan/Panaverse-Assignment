import {guestList,dinnerNotMakeName,indexNumber,color} from '../Exercise13/index'
console.log(`${color}`,"Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.");

let newPerson:string="umar"

console.log(`${color}`,"Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.") 
   console.log(dinnerNotMakeName);
console.log(`${color}`,"Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.") 
for(let i=0;i<guestList.length;i++){
   // ammar not make the dinner
    if(dinnerNotMakeName){
       guestList[indexNumber]=newPerson;
    }
}
let newSet:string[]=guestList;

console.log("updated Guest List",guestList)

console.log(`${color}`,"Print a second set of invitation messages, one for each person who is still in your list.")
for(let i=0;i<newSet.length;i++){
   if(newSet[i]==="umar"){
   console.log(`${newSet[i]}`,"Join us for delightful dinner under the star night sky");
   }
}
export {newSet,color}

