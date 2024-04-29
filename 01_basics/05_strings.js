const name = "Aditya"
const repoCount = 50

//console.log(name + repoCount + "Value");  // concatenate  

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);  // string interpolation (In modern time this way is used)

// Another way to declare the string
const gameName = new String("Aditya-hc")

console.log(gameName[0]);  // keyvalue access pair 
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));   // to find the position of the character
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)  //returns a shallow copy of a portion of an array into a new array object selected from start to end
console.log(anotherString);

const newStringOne = "    aditya   "
console.log(newStringOne);
console.log(newStringOne.trim()); // (Trim) use to remove unwanted spaces between string.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))  // we can ask keyword also in url.

console.log(url.includes('sundar'))

// I want to convert String into array let see.

const gameName1 = new String('aditya-pandey-hc-com')

// console.log(gameName1.split('-'));  // For split a string we need sparator,limit.

// const variable = new String("hello");
// const var1 = new String("world")
// console.log(variable)
// console.log(variable.__proto__)
// console.log(variable.indexOf('h'))
// console.log(variable.charAt(4))
// console.log(variable.length)
// console.log(variable.charCodeAt(0))
// console.log(variable.concat(' ',var1))