function getEvenOdd(num) {
  let result = '';
  if (num % 2 === 1) {
    result = 'odd';
  } else {
    result = 'even';
  }
  return result;
}
console.log(getEvenOdd(8));
