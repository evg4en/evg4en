// function reverseArray(arr) {
//   let el = [1, 2, 3, 4, 5];
//   for (let index = 0; index > arr.length; index += 1) {
//     el = arr[index];
//   }
//   console.log([el]);
// }

// // examples
// reverseArray(); // ==> [3, 8, 4, 11]
// // reverseArray([]); // ==> []
// // reverseArray([100, 50]); // ==> [50, 100]

// const students = [
//   'Andrey',
//   'Denis',
//   'Alex',
//   'Nastya',
//   'Ninja',
//   'Skywoker',
//   'Joda',
//   'Leo',
// ];
// function reverseArray(arr) {
//   let copyArr = arr.slice();
//   let num;
//   for (let index = arr.length - 1; index >= 0; index--) {
//     num = copyArr[index];
//     copyArr.unshift(num);

//     return copyArr;
//   }
// }
// console.log(reverseArray([11, 4, 8, 3])); // ==> [3, 8, 4, 11]

// function reverseArray(arr) {
//   let copyArr = arr.slice();

//   copyArr.reverse();

//   return copyArr;
// }
// console.log(reverseArray([-3, 5, 1, 9])); // ==> [3, 8, 4, 11]
// console.log(reverseArray([])); // ==> []
// console.log(reverseArray([100, 50])); // ==> [50, 100]

// const getSubArray = (arr, numberOfElements) => {
//   copyArr = [];
//   for (index = 0; index < numberOfElements; index++) {
//     copyArr.push(arr[index]);
//   }
//   return copyArr;
// };

// // examples
// console.log(getSubArray([11, 4, 8, 3], 2)); // ==> [11, 4]
// console.log(getSubArray([1, 2, 3, 4, 5], 3)); // ==> [1, 2, 3]
// console.log(getSubArray(['some string', 'hello', 'I am happy'], 1)); // ==> ['some string']
'use strict';

// function cloneArr(arr) {
//   let clonArr = [];
//   for (let index = 0; index < arr.length; index++) {
//     clonArr.push(arr[index]);
//   }
//   return clonArr;
// }

// // examples
// console.log(cloneArr([11, 4, 8, 3])); // returns ==> [11, 4, 8, 3]
// console.log(cloneArr([])); // returns ==> []
// console.log(cloneArr([0])); // returns ==> [0]
