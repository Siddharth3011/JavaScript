const myNums = [1,2,3]
const myTotal = myNums.reduce(function(accumulator, currentvalue){
    // console.log(`acc = ${accumulator} and currvalue = ${currentvalue}`);
    return accumulator + currentvalue
}, 0) //yahan initialvalue 0 diya hua hai to pehli baar accumulator ki value 0 hogi aur currentvalue 1(array se) uske baad acc ki value 0+1 = 1 hoga fir 1+2=3 usi tarah krte krte acc = 6(1+2+3=6)
// console.log(myTotal);

//OR: in short mein ye likh sakte hain
const Total = myNums.reduce((acc, curr)=>acc+curr,0)
// console.log(Total);

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "python course",
        price: 999
    },    
    {
        itemname: "data science course",
        price: 5999
    },
    {
        itemname: "java course",
        price: 1999
    },
]
const pricetopay = shoppingCart.reduce((acc, item)=> acc + item.price,0)
console.log(pricetopay);
