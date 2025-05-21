// for of
// for (const element of object) { // yahan object ka matlab ye nhi hai ki ye sirf object pr heen lagega
    
// }

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
     
}

const greetings= "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);   
    
}

//Maps  
const map = new Map()
map.set('IN',"India")
map.set('USA','United States Of America')
map.set('Fr','France')
map.set('IN',"India")
// console.log(map); //it contains unique value so 2 IN=>India doesn't came.

for (const [key,value] of map) {
    console.log(key, '=', value)
    
}

// can forof is used on objects
const myObject = {
    'game1': "pubg",
    'game2': "freefire"
}
for (const [key,value] of myObject) {
    // console.log(key, '=', value) //objects are not itterable like this
}