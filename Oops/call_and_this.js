function setUsername(username){
    //Complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    
    // setUsername(username) 
    //is tarah agr likh kr ham soche ki call ho jayega to aisa nhi hota hai call ke liye hame  =>  .call ka use krna padega aur kyuki upr wale function mein username ke aage this keyword likha hai jo ki usi function ko refer krega isliye hame this keyword bhi dena padega.

    //SO,
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("Sid", "sid@gmail.com", "1234")
console.log(chai);