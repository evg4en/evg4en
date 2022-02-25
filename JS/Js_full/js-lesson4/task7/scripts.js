// const n = 1000;
// let sum = 0;
// for (let i = 0; i <= n; i += 1) {
//   if (i % 2 >= 1) {
//     console.log('Found');
//   }
//   sum += i;
//   if (sum * 5 > 5000) {
//     console.log('Bigger');
//   } else {
//     console.log('Smaller or equal');
//   }
// }

const n = 1000;
let sum = 0;
for (let i = 0; i <= n; i += 1) {
  if (i % 2 >= 1) {
    console.log('Found');
  }
  sum += i;
}
if (sum * 5 > 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
