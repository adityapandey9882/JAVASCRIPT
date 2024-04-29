const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accouuntCity = "Jaipur"
let accountState;
// accountId =2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "212121"
accouuntCity = "Bangaluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and fuctional scope
*/

console.table([accountId, accountEmail, accountPassword, accouuntCity, accountState])
