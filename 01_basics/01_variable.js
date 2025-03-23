const accountId = 144563
let accountEmail = "siddharth29@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"
let accountState;

// accountId = 2 // it can't be changed
accountEmail = "sid@123.gmail.com"
accountPassword = "45675"
accountCity = "Gzb"

/*
prefer not to use var:
because of the issues in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])