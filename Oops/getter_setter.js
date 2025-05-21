class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this.password}Sid` // original password hmara abc hai but hamne use get kr change kr diya abcSid mein to user ko pta heen nhi chalega ki internally kya ho raha hai.
    }

    set password(value){
        this._password = value //yahan hmne _ ka use kr nya variable heen bna kyuki constructor mein same this.password likha hoga aur yahan pr bhi to dono mein race lg jayega ki kon value ko set krega.
    }
}

const obj = new User("Sid@gmail.com", "abc")
console.log(obj.email);
