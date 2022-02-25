// function findDivCount(a, b, n) {
//   let result = 0;
//   for (let i = a; i <= b; i += 1) {
//     if ((n % i === 0 || n / i === 1) && i !== 1) {
//       result += 1;
//     }
//   }
//   return result;
// }
// console.log(findDivCount(1, 12, 12));

//put your code here
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
