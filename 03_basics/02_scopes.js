// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

  // Problem occures in block scope
  // var c = 300
  //{} curly bracket is know as scope
  
  let a = 300
  if (true){
      let a = 10
      const b = 20
    //   console.log("INNER: ", a);
    }
    
    // console.log(a)
    // console.log(b)
    // console.log(c)
    
 //+++++++++ NESTED SCOPE +++++++++
function one(){
    const username = "aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()     // here two() is used for calling 

}

// one()

if (true){
    const username = "aditya"
    if (username === "aditya"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++ interesting +++++++++++++
addone(5)
console.log(addone(5))
function addone(num){   //syntax      // No error here is execute the code 
    return num + 1
}


addTwo(5)
const addTwo = function(num){    //syntax    // Here is error occure because function is hold in variable.
    return num + 2                    // Important concept hoisting
}
