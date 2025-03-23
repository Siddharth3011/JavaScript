// singleton: jb object ko literals ki terah declare krenge to singleton nhi hoga agr constructor se bnega to singleton bnega
// object constructor: 
// Object.create

//object literals: 
const mySym = Symbol("Keys1")
const JsUser = {
    name: "Aman",
    "full name": "Aman Kumar",
    [mySym]: "myKey1",
    age: 20,
    location: "ghaziabad",
    email: "sid@gmail.com",
    isLoggedIn: false, 
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); //ye acha tarika hota hai object mein se kisi value ko print krane ke liye.
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //is tarike se mysym symbol value ko print krega.

JsUser.email = "sid@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sid@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

//javascript mein jb bhi values ko access krenge to max dot se heen krenge pr kabhi kabhi square se ya kuch special cases mein square brackets ka use krna pd jata hai.
