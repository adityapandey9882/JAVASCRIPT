// // arrays

// const myArr = [0,1,2,3,4,5]     //JavaScript arrays are resizable and can contain a mix of different data types
// console.log(myArr[3]);
// console.log(typeof myArr);    // important note typeof myArr is object.

// const myHeors = ["shaktiman", "naagraj"]
// console.log(myHeors[0])

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);

// // Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()   // removes the last element from an array and returns that value to the caller.
// console.log(myArr)

const myArr1 = [3,7,5,6,3,9]
// myArr1.unshift(9)   //allows you to add one or more elements to the beginning of an array.
console.log(myArr1.unshift(12))
console.log(myArr1)
// console.log(myArr1);

// console.log(myArr.includes(9));  // we ask value is present in array or not output in boolean.
// console.log(myArr1.includes(5));

// console.log(myArr1.indexOf(5));
// console.log(myArr.indexOf(9));  // if element is not present than output is -1

// const newArr = myArr.join()  // creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string
// console.log(myArr);
// console.log(newArr);  // value is same but here type is changed let check it on next line
// console.log(typeof newArr);

// slice, splice
 // interview related questions

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)    //important note slice returns a piece of the array but it doesn't affect the original array.

// console.log(myn1);      // Here lastrange is not included 
// console.log("B", myArr);

// const myn2 = myArr.splice(2, 4)   //important note splice changes the original array by removing, replacing, or adding values and returns the affected values
// console.log(myn2);   // Here lastrange is included 
// console.log("C", myArr);   // In splice array slice portion is removed and arrry become changed.


