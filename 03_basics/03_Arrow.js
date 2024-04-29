// this keyword always refers to an object(current constext)
const user = {
    username: "aditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"  // here context changed
// user.welcomeMessage()

console.log(this);