// // assign an array to a variable
// // let作用域比var更大，且let不能重复声明变量，更安全
 let myStringArray = ['hello', 'world', 'my', 'name', 'is', 'Patrick', 'world'];
// let myNumArray = [1, 2, 3, 4, 5];

// //We can have mixed type arrays in JS and we can also have functions as elements!
// let mixedArray = [
//   1,
//   'Hello',
//   undefined,
//   true,
//   (message) => { // parameter and return value?
//     return message;
//   }
// ];

// // Calling the function in the array
// console.log(mixedArray[4]('Hello world!'));

// // for each element in the array, print out its value
// myStringArray.forEach((value) => {
//   console.log(value);
// });
// let arrays = [];
// myStringArray.forEach((value, index) => {
//   let array = [value, index];
//   arrays.push(array);
// })
// console.log(arrays);

// let myCharArray = ['a', 'b', 'c', 'd'];
// let arrays = [];

// myCharArray.forEach((value, index) => {
//   let array = [value, index];
//   arrays.push(array);
// });

// console.log(arrays);  // 输出: [['a', 0], ['b', 1], ['c', 2], ['d', 3]]
// console.log([[2,2,2], [3,3,3]]);



// // for each element, return the opterated value
// let myNumArraySquared = myNumArray.map((x) => {
//   return x * x;
// });

// console.log(myNumArray);
// console.log(myNumArraySquared);

// // 
// let oddNumbers = myNumArray.filter((num) => {
//   return num % 2 === 1;
// });


// let intersection = [1, 2];
// let key1 = [1, 2, 3];
// let distinct = key1.filter((key) => !intersection.includes(key));
// console.log(distinct);

// console.log(oddNumbers);

// let worldArray = myStringArray.filter((element) => {
//   return element === 'world';
// });

// console.log(worldArray);

// let findPatrick = myStringArray.find((element) => {
//   return element === 'world';
// });

// console.log(findPatrick);

// // let findWorld = myStringArray.find((element, index) => {
// //   console.log(index);
// //   return element === 'world';
// // });

// // console.log(findWorld);

// // // console.log(myNumArray);
// myNumArray.push(6);
// console.log(myNumArray);
// myNumArray.push('Patrick');
// console.log(myNumArray);
// let popped = myNumArray.pop();
// console.log(popped);
// console.log(myNumArray);

// // // console.log(myNumArray.join('&&'));
