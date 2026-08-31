const user = {
    username: "sid",
    price: 400,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "rohan"
// user.welcomeMessage()

// console.log(this); //ye vscode pr run krne pr to {} <== empty value dega but agar browser pr console mein jakr check krenge to windows output ayega

//broswer ke andr global object window object hota hai.

// function chai(){
//     let username = "hitesh"
//     // console.log(this); is se bahut sari values milengi 
//     console.log(this.username); // ye undefined dega kyuki ham this ka use object mein kr sakte hai aise functions mein aakr nhi kr sakte.
// }
// chai()


// *****************arrow function: **********************************
const chai = () => {
    let username = "sid"
    // console.log(this); 
    console.log(this.username);
}
// chai()  
//normal function mein this easily run kr jata hai kyuki normal function mein this iss baat pr depend krta hai ki function ko kaha call kiya gya hai jbki arroe function ka apna koi this nhi hota wo parrent scope se value inherit krta hai iss liye nhi chlta

// const addtwo = (num1,num2) => {
//     return num1 + num2 //explicit return
// }
// console.log(addtwo(3,4));

                        //OR
// const addtwo = (num1,num2) => num1 + num2 //implicit return: where we don't have to write return keyword
//OR
const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(2,2));
//If anybody want to print object then:
const object = () => ({username: "sid"})
console.log(object());


