const name = "Siddharth"
const repoCount = 5
// console.log(name+repocount+"value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// string can also be declared as:

const gameName = new String('sid_heart_pandey') // isko console mein run krenge to bahut sare methods aa jayenge unn sab ko ache se padh lena chahiye
// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    sid    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://google.com/googlearegood"
console.log(url.replace('are','is'))

console.log(url.includes('bad'))

console.log(gameName.split('_'));

//string ko console mein jakr ache se padh lena chahiye imp hai.