import {color,alien_color} from "../Exercise24/index"

console.log(`${color}`,"Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.\n• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.\n• If the alien’s color isn’t green, print a statement that the player just earned 10 points.\n• Write one version of this program that runs the if block and another that runs the else block.");


if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points.");
}

if (alien_color === 'red') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
  } else {
    console.log("Congratulations! You just earned 10 points.");
  }

  export {color,alien_color}