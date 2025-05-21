const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");    
})

//Api request mein jo likha hai use aise bhi likh sakte hain promise ka usr kr ke
new PromiseTwo(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "sid@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new promiseOne(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "sid", password: "123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))


const promiseFive = new promise(function(resolve, reject){
        setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        }
        else{
            reject('Error: JS went wrong')
        }
    }) 
})

async function consumepromiseFive() { // async ka use .then ki jegah isliye kiya gya hai kyuki ho sakta hai hmara code database se connect heen na ho. 
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive()

// async function getallUsers() {
//     try{
//         const response = await fetch('https://api.github.com/users/Siddharth3011')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E: ", error);
        
//     }
// }

// getallUsers()

//ise agr .then aur .catch ka use kr karna hoga to aise krenge:

fetch('https://api.github.com/users/Siddharth3011')
.then((response)=>{
    return response.json()
})
.then((date)=>{
    console.log(data);
})
.catch((error)=>console.log(error)); //yahan hame sochne ki jarurat nhi hai ki pehle try check krega fir catch hame pta hai ki pehle first wala then chalega for dusra wala 


```
Interview Question:
agr promise se apne request kri aur error aa gya 404 to wo kahan milega resolve mein ya reject mein 
Ans: wo hamesa response mein heen milega error tb hoga jb request wo kr heen na paya ho


task queue ko fetch se jyada priority denge agr uski value fetch se jyada hai to otherwise task quesue ka timeout aur fetch ka timeout equal ho to fetch ko jyada priority milegi aur agr fetch ki jyada hai to wo oviously fetch ko heen milegi
```