// Declaration of object is in two way literals and constructor 
// singleton is made by constructor not by literals
// object creates( construnctors)


// object literals

// how to declare symbol 

const mySym = Symbol("key1")  // In interview  symbol declare in object and how to access it.

const JsUser = {
    name: "Aditya",    // In object we can define key and values but not in array.
    "full name": "Aditya Pandey",
    age : 18,
    [mySym]: "mykey1",
    location: "Kushinagar",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondey", "Saturday"]
}

// Access object
 
// console.log(JsUser.email)
// console.log(JsUser["email"])   // It is more efficient way to access.
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)  // but  datatype is typeof check output is string  not datatype is symbol.
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])

// change  the values 

JsUser.email = "aditya@chatgtp.com"
// Object.freeze(JsUser);    // To lock value 
JsUser.email = "aditya@microsoft.com"   // This command not propogate because JsUser is Freeze.
// console.log(JsUser);

// ++++++++++++++++++ Function ++++++++++++++

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());