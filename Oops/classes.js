class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const obj = new User("Sid", "sid@gmail.com", 123)

console.log(obj.encryptPassword());
console.log(obj.changeUsername());

// what if there are no classes:

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const obj1 = new User("ram", "ram@gmail.com", 123)

console.log(obj1.encryptPassword());
console.log(obj1.changeUsername());


