const User = {
    _email: 'Sid@gmail.com',
    _password: 'abc',

    get email(){ //yahan email likha hai to hai but ye kaam _email pr heen krega ise _ se matlab nhi hai kyuki get email ko ek property ki tarah access kr raha hai.
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const obj = Object.create(User) // jaise ham new keyword ka use krte hain waise heen ham Object.create ka use bhi krte hain.
console.log(obj.email);
