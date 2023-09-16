let color:string="\x1b[32m%s\x1b[0m";

console.log(`${color}`,"Seeing the World: Think of at least five places in the world you’d like to visit.");

console.log("I think some places in Pakistan Karachi,Lahore,Islamabad,Hunza Valley,Multan");

console.log(`${color}`, " Store the locations in a array. Make sure the array is not in alphabetical order");
 let placesOfPakistan:string[]=["Karachi","Lahore","Islamabad","Hunza Valley","Multan"];
 console.log(`${color}`,"Print your array in its original order.");
 console.log("Print Original Array is",placesOfPakistan);
 console.log(`${color}`,"Print your array in alphabetical order without modifying the actual list");
  let sortedList:string[]=placesOfPakistan.slice().sort();
  console.log("Alphabatically order list",sortedList);
  console.log(`${color}`," Show that your array is still in its original order by printing it.")
  console.log("Original Array is", placesOfPakistan);
  console.log(`${color}`,"Print your array in reverse alphabetical order without changing the order of the original list.")
  let reverseSortedList:string[]=[...sortedList].reverse();
  console.log("without changing the order of original list",reverseSortedList);
  console.log(`${color}`," Show that your array is still in its original order by printing it again.");
  console.log("Print Array is still its original order is",sortedList);
  console.log(`${color}`," Reverse the order of your list. Print the array to show that its order has changed.");
  let reverseOrder:string[]=placesOfPakistan.reverse();
  console.log(reverseOrder);
console.log(`${color}`,"Reverse the order of your list again. Print the list to show it’s back to its original order.")
let reverseAgain:string[]=placesOfPakistan.reverse();
console.log("Reverse the list again",reverseAgain);
console.log("Print the list back to its original order",placesOfPakistan);
console.log(`${color}`," Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.");
placesOfPakistan.sort();
console.log("Sorted in Alphabeticaly order",placesOfPakistan);
console.log(`${color}`," Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.");
placesOfPakistan.sort((a,b)=>b.localeCompare(a));
console.log(placesOfPakistan);

    

