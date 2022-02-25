// function getPrimes(num) {
//   for (let i = 2; i <= num; i += 1) {
//     for (let j = 2; j <= i; j += 1) {
//       if (i % j === 0) {
//         console.log(i);
//       }
//     }
//   }
// }
// console.log(getPrimes(15));

function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    
}
console.log(getPrimes(15));


function findDivCount(a, b, n) {
  let result = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      result += 1;
    }
  }
  return result;
}
console.log(findDivCount(1, 12, 3));
