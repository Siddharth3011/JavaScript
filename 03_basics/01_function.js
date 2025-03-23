// function addtwonumbers(number1,number2){ // here the number1, number2 is said as parameters
//     console.log(number1+number2);
    
// }
// addtwonumbers //this is representation.
// addtwonumbers(3,4) //this is function call, and the numbers in it(3,4) is arguments

function addtwonumbers(number1, number2){
    // let result = number1 + number2
    // return result
    //or
    return number1+number2
}
const result = addtwonumbers(4,5) 
// console.log("Result: ",result);
// result or return dono alag alag chize hain agar ham result ko run kra kr output nikalenge bina return krraye to output undefined ayega

function loginUserMessage(username){ // agr default value deni ho to username = "rohit" kr de sakte hain
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage("sid"))
// console.log(loginUserMessage());


function calculateCartPrices(Val1, Val2, ...num1){
    return num1
}
console.log(calculateCartPrices(200,300,400,500)); // yahan val1, val2 ek ek value le gye aur baki ke numbers num1 ne ek array mein bnakr de diye.

const user = {
    username: "sid", 
    prices: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)

// you can also run this code without declaring the object partially. like this:
handleObject({
    username: "rohit", 
    prices: 399
})

const array = [100,200,300]
function returnSecondValue(getarray){
    return getarray[1] // yahan mind mein ye aata hai ki isko "return array[1]" iss tarah kyu na diclare kr de but ye kisi bhi array ke liye run kr jaye iss liye aisa nhi likhte hai. jo parameter returnSecondValue ke andr mil raha hota hai wahi likhte hain.
}
console.log((returnSecondValue(array)));
 