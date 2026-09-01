const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumbers.map((num)=>{return num+10})
// console.log(newNums);

const newNums = myNumbers
                        .map((num)=>num*10) //yeh hai chaining of methods kehte hai isme pehla wala method dusre wale ko value return krta hai aur tb dusra wala usme chnaged krta hai.
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)

//ek baat dhyan rakhna ki map new modifies value ko return krta hai jbki filter boolean return krta hai, map data ko transform krta hai jbki filter select krta hai.
console.log(newNums);
