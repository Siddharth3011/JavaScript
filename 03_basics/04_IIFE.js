//Immediately Invoked Function Expressions (IIFE)
// global variable se hone wale pollution se bachne ke liye iife ka use hota hai.

// function chai(){
//     console.log("DB Connected")
// }
// chai()

//Using IIFE:

//Named IIFE:
(function chai(){
    console.log("DB Connected")
})(); //yahan apko semicolon explicitely lgana padta hai taki 2 IIFE ek sath likh sake.
//Unnamed IIFE:
((name) => {
    console.log(`Db Connected two ${name}`);
})("sid") //parameters aise pass krenge