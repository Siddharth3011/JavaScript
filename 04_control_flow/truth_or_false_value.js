// const userEmail = "sid@gmail.com"
// const userEmail = []
const userEmail = ""
if (userEmail) {
    console.log("Got user Email");
} else{
    // console.log("don't have user Email");
}

//Some Falsy Values:
//False , 0, -0, BigInt 0n, "", null, undefined, NAN      baki sab truthy values hai
    
//Some special truthy values are: 
// "0", 'false', " ", [], {}, function(){}

if (userEmail ===0){
    console.log("Array is Empty");
}

const emptyobj = {}
if (Object.keys(emptyobj).length===0) {
    // console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null ,undefined are used
// ye tb use kiye jate hain jb hame apne code mein  null ya undefined na bhejna ho to uski jegah ham koi other value likh dete hain
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// console.log(val1);

//Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

