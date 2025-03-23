// datatypes are two type: 
// 1) primitive:
// it is of 7 type: string, number, null, boolean, undefined, symbol, bigint

// symbol example:
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId)
// symbol jb use kr rahe honge tab same data rehne pr bhi do variable equal nhi honge
const bigNumber = 4155665218n // it is example of bigint

// javascript is dynamic type language means variable are defined on the basis of the value defined like a=5 means a is numbeer data type



// 2) reference type(non primitive type)
// type: array, object, function

const heros = ["saktiman", "ironman", "spiderman"];

let myobj = {
    name: "siddharth",
    age: 21
}

const myFunction = function(){
    // console.log("hello world");
}
// console.table([typeof id, typeof bigNumber, typeof arr, typeof myobj, typeof name, typeof age, typeof myFunction])

// mainly non-primtive ka jb typeof nikalte hain to wo objects heen aata hain, functions ka object function hota hai but function output mein dikhata hai

//*****************************************memory type*************************************** */
// In stack-> primitive type, In heap-> non primitive

let Name = "Siddharth Pandey"
let anotherName = Name
anotherName = "aman"
 console.log(Name)
 console.log(anotherName)

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo= userOne

 userTwo.email = "userTwo@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)
 
