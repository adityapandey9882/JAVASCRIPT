


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()            // ye function ka reference hai parenthesis tell is execute.

// function addTwoNumbers(number1, number2){     // function main jab definition banate hai number is here know as parameters.

//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){     // function main jab definition banate hai number is here know as parameters.

    // let result = number1 + number2
    // return result                 
    console.log("Hitesh");   // important note By default ek funtion ka ek rule hota hai return apne jab kar diya to function kaam nhi karega
    // lekin function result return hone se pehle console.log kare to ye chal jayega
    
    return number1 + number2                               // Another method to write the same code 
}
 

addTwoNumbers(5, 9)       //when we call function then the value is know as argument like 5,9 is argument know.


// Javasript mai It can also stored in variable 
const result = addTwoNumbers(3, 5)   // output is 8 but there is a problem lekin ye result hai ismai value kya hai check karte hai.

// console.log("Result", result);
function loginUserMessage(username){          // here if we pass username then undefined removed 
    if(username === undefined){
         console.log("Please enter a username");
         return     // if we want to stop execution of return part out of the curl bracket.
    }
    return `${username} just logged in`
}
//  in line number 40 (it run when situation is true if nothing pass output is undefined ex: "", undefined , all treates as false)
// we see in many placeses if(!username){}     != just opposite of any thing.

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())   // If no value is passed that give out undefined.
// console.log(loginUserMessage)    // if value is passed in username ="sam" then it not go to the execution part.

function calculateCartPrice(...num1){    // ... is know as spread and rest operator it use for different situation on use case
    return num1                          // ... here three dot is rest operator
}

console.log(calculateCartPrice(200, 400, 500, 5000))

 // let Object 
const user = {
    username: "hitesh",
    price: 199
}
 // how object is  use and pass in function
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
    // we can direct pass object
handleObject({
    username: "sam",
    price: 399
})

// Now we can pass array

const myNewArray = [200, 500, 400]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));

fuction 