const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor); //jb ham ye print krate hain to hame pta chlta hai ki isme kuch writable, enumerable, configurable name se chize hoti hai jo false rehti hain jiska matlad hota hai ki ham iss value ko change nhi kr sakte aur na inhe true kr sakte hain.

// yahan ham Pi ki value ko change krne ki kosis kr rahe hain but kyuki ye constant hai to change nhi hoga
// console.log(Math.PI); //Output = 3.14........
// Math.PI = 5
// console.log(Math.PI); //Output = 3.14........

// to kya ham apni koi Object bnakr uske values ko writable: false, enumerable: false, configurable: false set kr sakte hain, to han kr sakte hain

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    openChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name',{
    // writable: false, //writable ko false kr diye.
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') { // ye isliye lgaye taki koi function define ho to wo print na ho jaye jaise:     openChai: function(){console.log("chai nhi bni");} ye jo upr likha hai exact print ho jata.
        console.log(`${key} : ${value}`); //key value ko print kra rahe hain 
    }
}



