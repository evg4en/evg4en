const countCommision = function (amount, currency) {
  let test;
  if (currency === 'UAH') {
    if (amount < 1000) {
      test = (amount / 100) * 2;
    } else {
      test = (amount / 100) * 1;
    }
  } else {
    if (currency === 'USD') {
      if (amount < 5000) {
        test = (amount / 100) * 0.5;
      } else {
        test = (amount / 100) * 0.25;
      }
    } else {
      if (currency === 'EUR') {
        if (amount < 3000) {
          test = (amount / 100) * 0.75;
        } else {
          test = (amount / 100) * 0;
        }
      }
    }
  }
  return test;
};

console.log(countCommision(20000, 'USD')); // ===> 50
console.log(countCommision(500, 'UAH')); // ===> 10
console.log(countCommision(2000, 'UAH')); // ===> 20
console.log(countCommision(15000, 'USD'));
console.log(countCommision(25, 'UAH'));
