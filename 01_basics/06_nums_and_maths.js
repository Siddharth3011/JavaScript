//two diff types jis se data defined hota hai. ek to automatically hua rehta hai aur ek ham explicitly kar rahe hain.
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
//fixed precision ke l;iye use hota hai generally in ecommerce websites pr
// console.log(balance.toFixed(2));

const otherNumber = 123.856
// console.log(otherNumber.toPrecision(3))

const hundreded = 1000000
// console.log(hundreded.toLocaleString('en-IN'));

// **********************************************  Maths  ********************************************************

// console.log(Math)
// console.log(Math.abs(-4));  //changes negative number to positive number
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.min(4,3,6,5));
// console.log(Math.max(3,4,6,8));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min= 1;
const max= 6;

console.log(Math.floor((Math.random()*(max-min+1))+min));
