// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  // important for interview

// let myCreatedDate = new Date(2024, 0, 9 )   // month start in javascript from 0
// let myCreatedDate = new Date(2024, 0, 9 , 14 , 3 , 45)  
// let myCreatedDate = new Date("2024-01-14")  
let myCreatedDate = new Date("08-02-2023")  
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp =  Date.now()
// console.log(myTimeStamp);   // millisecond value from 01/01/1970
// console.log(myCreatedDate.getTime());   // because date is object than .getTime()

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);  // confusion because as we now month start from 0 
console.log(newDate.getDay());
console.log(newDate.toLocaleTimeString());
console.log(newDate.toLocaleDateString());


