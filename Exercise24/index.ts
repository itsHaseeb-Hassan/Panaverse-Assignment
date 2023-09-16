let color:string="\x1b[32m%s\x1b[0m";
console.log(`${color}`,"Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'. \n• Writean if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.\n• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)");

const alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}

const second_alien_color: string = 'yellow'; 

if (second_alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}
export {alien_color,color}