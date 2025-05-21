// prop => property 
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const sid = new User("sid")
console.log(sid.createId()); //it gives error because we use static keyword before createId. so it does not allow to change the value.


class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const hello = new teacher("ram", "ram@gmail.com")
console.log(hello.createId()); //it also gives error because we use static keyword before createId. so it does not allow to change the value.

