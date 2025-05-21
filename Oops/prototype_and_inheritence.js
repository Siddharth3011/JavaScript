// let myName = "Siddharth     "
// let mychannel = "Ram    "

// console.log(myName.trueLength); //yahan ham try kr rahe hain ki jo spaces hai use print na kraye trueLenghth ka use kr.
// iska answer hame niche mila hai

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`); // function bna kr value ko print kraya jaa raha hai
    }
}

Object.prototype.sid = function(){ // object mein ek nya property add kr rahe hain prototype keyword ka use kr jo ki object, array, string, function sab mein access ho sakta hai
    console.log(`Sid is present in all objects`); 
}

Array.prototype.hiSid = function(){ // array mein property add kr rahe hai jo ki sirf array mein access ho sakta hai.
    console.log("Sid is in the array");
}

// heroPower.sid()
// myHeros.sid()
// myHeros.hiSid()
// heroPower.hiSid()

// ex to understand
// Object ke 3 child hai:
//function
//array
//string

// agr mai koi property object mein add krunga to wo uske sare bache mein access ho sakta hai but agr main koi property kisi Child mein add krun to wo sirf uss Child mein heen access ho sakta hai.




// *************************************Inheritence*******************************************************************

// hamne 3 class bnaya aur dekha ki kaise ham ek ko dusre mein inherit kr sakte hai
const user = {
    name: "ram",
    email: "ram@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignement",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user //ham __prot__ ka use kr ek class ko dusre mein inherit krte the

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //but aab setPrototypeof ka use krte hain

let anotherUsername = "SidandRam     "

String.prototype.trueLength = function(){
        console.log(`${this}`);
        console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"WOW".trueLength()
"iceandtea".trueLength()