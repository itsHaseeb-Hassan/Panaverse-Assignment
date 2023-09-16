let color:string="\x1b[32m%s\x1b[0m";

console.log(`${color}`,"They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.");
type cats={
    color:string;
    price:number;
    eyesColor:string
}
class cat{
    color:string="";
    price:number=0;
    eyesColor:string="";

    constructor(color:string,price:number,eyesColor:string){
       this.color=color;
       this.price=price;
       this.eyesColor=eyesColor
    }
}

let obj1:cats=new cat("white",12000,"brown");
let obj2:cats=new cat("brown",10000,"yellow");
let obj3:cats=new cat("black",15000,"white");

let obj4=[{...obj1},{...obj2},{...obj3}];

console.log("creates objects containing these Items",obj4);

