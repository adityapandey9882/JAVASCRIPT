// Primitive(call by value: change occure in copy part that means there is no changes occure in original copy).

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

// Javascript is dynamics typed language(Because there is no need to define the datatype)
const score = 100
const scoreValue = 100.3 //No speacial thing for if number int,float both are known as number.

const isLogged = false
const outsideTemp = null // value is not zero null means(null=empty)
let userEmail;  //value for the var declaration is automatically detect as undefined.

const id = Symbol('123')  //Symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNmber = 245476792318404n  //console.log typeof value of bigIn is undefined.



// Reference (Non Primitive : that means reference of memory directly allocated in non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]  //array
let myObj = {
    name: "Aditya", // In Object any datatype is possible example string, number,etc.
    age: 19,
}

const myFunction = function(){    //function
    console.log("Hellow world");
}

console.log(typeof anotherId);  //how to find datatype using  typeof

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++

// How memory work in javascript
// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "adityapandey.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aditya@gmail.com" // In object we can access using .(dot) from memory

console.log(userOne.email);
console.log(userTwo.email);
