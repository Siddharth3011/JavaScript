//Immediately Invoked Function Expressions (IIFE)
// global variable se hone wale pollution se bachne ke liye iife ka use hota hai.

// function chai(){
//     console.log("DB Connected")
// }
// chai()

//Using IIFE:
//aab agr database ko immediatly invoke krna hai to last mein paranthesis:() lga denge. but fir wo error dene lagega to fir ham function ko bhi ek paranthesis mein rakh dete hai, tkai wo bhi ek block bn jaye
//Named IIFE:
(function chai(){
    console.log("DB Connected")
})(); //yahan apko semicolon explicitely lgana padta hai kyuki iife ko pta heen nhi hai ki use context rokna kahan hai aur tb ham 2 IIFE ek sath likh sakte hai.

//Unnamed IIFE:
((name) => {
    console.log(`Db Connected two ${name}`);
})("sid") //parameters aise pass krenge
