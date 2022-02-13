const countCommision = function (amount, currency) {
  let test;
  if ((currency = 'USD' === amount < 5000)) {
    test = (amount / 100) * 0.5;
  } else {
    test = (amount / 100) * 0.25;
  }
  return test;
};

console.log(countCommision(20000, 'UAH'));
