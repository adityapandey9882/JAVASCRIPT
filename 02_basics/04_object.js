// object singleton
 
// const tinderUser = new Object()    // ye singleton object hai   
const tinderUser = {}                 // aur ye singleton object nhi hai 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aditya",
            lastname: "pandey"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

// COMBINE OBJECTS 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {6: "a", 7: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}   // most efficiently used  in object combination more than one.
// console.log(obj3);

// ek jo syntax sabse jayada use karenge wo. The value comes form database. 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   // all keys  is accessable of object. Note point is that datatype is array.  
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course = {
    coursename: "js in hindi",
    price: "999", 
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor:Instructor} = course
const {courseInstructor} = course       // destructure in place or courseInstructor we can use Instructor

console.log(courseInstructor);  // output of both line is courseInstrunctor is long so it can be sort by Instructor which is shown new cosole on 75 
console.log(Instructor);

