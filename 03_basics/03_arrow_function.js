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

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,4));

                        //OR
// const addtwo = (num1,num2) => num1 + num2
//OR
const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(2,2));
//If anybody want to print object then:
const object = () => ({username: "sid"})
console.log(object());


