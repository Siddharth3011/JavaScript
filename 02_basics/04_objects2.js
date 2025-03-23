// const tinderUser = new Object() // ye ek singelton object hai
const tinderUser = {} // ye ek non-singelton object hai

// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sid"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sid@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Siddharth",
            lastname: "pandey"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1= {1:"a", 2: "b"}
const obj2= {3:"a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {    
            id: 1,
            email: "sid1@gmail.com"
    },
    {    
        id: 2,
        email: "sid2@gmail.com"
    },
    {    
        id: 3,
        email: "sid3@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //ye string type mein output deta hai jiski wejah se ham ispe bahut sare operations lga sakte hain.
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedIn')); //true- kyuki iss name ka ek property hai
console.log(tinderUser.hasOwnProperty('islogged')); //false

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh sir"
}
//course.CourseInstructor
const {courseInstructor: instructor} =  course
// console.log(courseInstructor);
console.log(instructor);

// api - JSON:
// {
// "name": "hitesh",
// "coursename": "js in hindi", 
// "price": "free"
// } 