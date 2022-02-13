function factorial(num) {
  let c = 1;
  for (let index = 1; index <= num; index += 1) {
    c = c * index;
  }
  console.log(c);
  return c;
}
factorial(3); // ===> 6
factorial(5); // ===> 120
factorial(0); // ===> 1

// function sumOfMillions() {
//   for (let index = 0; index <= 5; index++) {
//     let c;
//     c = index;
//     c += index;
//   }
//   console.log(c);
// }
// sumOfMillions();
