const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this)
        
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this) //yahan pe ise run krayenge to ye empty dega but jb ise ham browser mein run krte hain to hame bahut sari value milti hai.

const promiseOne = new Promise() //new ek constructor function hai ye allow krta hai ki ham ek heen object se multiple instance bna sake.

function user(username, loginCount, isLoggedIn){
    this.username = username //this.username ye variable hai aur username ye jo value ham pass kr rahe hain.
    this.loginCount = loginCount // ham chahe to variable ka naam bhi change kr sakte hain.
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this //ye byDefault hota hai agr ham na bhi likhe to bhi ye value dega
}

// const userOne = user("Sid", 12, true)
// const userTwo = user("Ram", 3000, false)
// console.log(userOne);//yahan userTwo ki value print hogi. userTwo userOne ki values ko overide kr dega.

//isliye ham new keyword ka use krenge:

const userOne = new user("Sid", 12, true)
const userTwo = new user("Ram", 3000, false)
console.log(userOne);
//to use constructor:
console.log(userOne.constructor);
console.log(userTwo);


