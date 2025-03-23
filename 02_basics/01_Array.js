// array kisi bhi tarah ka data le leta hai chahe wo boolean ho, intezer ho ya ek array heen kyu na ho
const myarr=[1,2,3,4,5,"sohan",true]
// in javascripts array-copy-operations create shallow copies. means jo bhi changes aap copy array mein krenge wo main original array mein bhi hoga
const arr = new Array(1,2,3,4)
// console.log(myarr[0])
// array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()
myarr.unshift(9)//index 0 pr 9 add ho jayega
myarr.shift() // shift uss 9 ko remove kr dega
// console.log(myarr);
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(5))

const newArr = myarr.join()
// console.log(myarr)
// console.log(newArr) //.join ki wejah se myarr array se string mein bdl gya hai

const myn1 = myarr.slice(1,3)

console.log(myn1)
console.log("B", myarr)

const myn2 = myarr.splice(1,3)
console.log("c", myarr);
console.log(myn2)

// splice manipulate the original array and it also took the last range like here from 1-3 it include 3 also.
// but slice doesn't manipulate the original array also it doesn't include last element.

