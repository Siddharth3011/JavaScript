//for

for (let i = 0; i <10 ; i++) {
    const element = i;
    if (i==5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
    
}
// console.log(element); //not accessible

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop is ${i}`);
        for (let j = 1; j <=10; j++) {
            // console.log(`Inner loop is ${j} and outer loop is: ${i}`);
            // console.log(`${i}*${j} = ${i*j}`);
            
        }
}
let myArray = ["flash", "batsman","superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// ***************************************** break and continue statements ********************************************

for (let index = 1; index <=20; index++) {
    if (index==5) {
        break
    }
    // console.log(index);
}
for (let index = 1; index <=20; index++) {
    if (index==5) {
        continue
    }
    console.log(index);
}