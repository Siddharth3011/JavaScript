// forin
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    
}

// can forin is used on an Array

const programming = ["js","rb","py","java", "cpp"]
for (const key in programming) {
    console.log(key); //it gives keys(index) of the value
    console.log(programming[key]); //it gives the value     
}