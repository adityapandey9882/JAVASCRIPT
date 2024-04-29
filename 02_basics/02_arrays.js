// +++++++++++++++++++++ push +++++++++++++++++++++++++++
// push occures  on existin arrry  
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);   // problem is that here It takes array as  arry inside (It take any type of data entry in array)
// console.log(marvel_heros[3][1]);

// we can also use concat: The concat() method of String values concatenates the string arguments to this string and returns a new string  
 
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// another method is spread used most because here is nolimitation and we can add new element.

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_arry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_arry.flat(Infinity)   // flat returns a new arry with all sub-arry elements concatenated into it recursively up to the specified depth.
console.log(real_another_array)

// Data scrapping 

console.log(Array.isArray("hitesh"))    // asking is it string
console.log(Array.from("hitesh"))    // converting to array
console.log(Array.from({name: "hitesh"}))  // interesting case if unable to make array than it give empty sqr bracket for interviews.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

