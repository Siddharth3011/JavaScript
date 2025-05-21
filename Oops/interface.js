class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`the username is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){ //ham dekh rahe hain ki username ka access mil raha hai ki nahi
        console.log(`A new course is added by ${this.username}`);
    }
}

const obj = new User("ram", "ram@gmail.com", 123)
obj.addCourse()
obj.logMe() //obj ke pass dono function addCourse ka aur logMe ka access hai.

const sid = new User("Sid")
sid.logMe() //sid ke pass sirf logMe function ka access hai.

console.log(obj instanceof User); //it gives true because obj is instanceof teacher and teacher is instanceof User.
