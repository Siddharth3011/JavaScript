var c = 300
a = 100
if(true){
    let a= 10
    const b = 20
    var c = 30
    // console.log(a); // it prints the inner value of a
    
}
// console.log(a); //it gives error because a is inside the scope.
// console.log(a); // but when you declare the value of a as a global variable it gives the output
// console.log(b); // it gives error because b is inside the scope.
// console.log(c); // it does not give error because var comes outside of the loop, also if we declare c as a global variable it neglects the global variable and gives the output which came at last


function one(){
    const username = "sid"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    // chote bache bado se icecream mang sakte hain pr bade log chote bacho se icecream nhi mang sakte achanhi lagega.
}
// one() 

if(true){
    const username = "sid"
    if (username == "sid"){
        const website = " youtube"
        console.log(username+ website);
    }
    // console.log(website); //ye error dega kyuki scope se bahar hai
    
}
// console.log(username); // same ye bhi error dega

//****************************interesting concept about declaring the functions**************************************** */

// normal declaration metod of a function:
console.log(addone(2)); //it does not give any error
function addone(num){
    return num+1
}

//another method:
// console.log(addtwo(4)); // it give an error because addtwo is declared on the next line.
const addtwo = function(num){
    return num+2
}

