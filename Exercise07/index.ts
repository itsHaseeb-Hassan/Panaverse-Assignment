import chalk from 'chalk';
var color:string="\x1b[32m%s\x1b[0m";
console.log(`${color}`,"You should create four lines that look like this:console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.")
for(let i=0;i<4;i++){
function drawHorizontalLine(width: number, character: string): void {
    const line = character.repeat(width);
    console.log(chalk.blue(line));
}
    drawHorizontalLine(100, '-');
     console.log(`\t \n ${5+3} \n \t`);
     drawHorizontalLine(100, '-');
}