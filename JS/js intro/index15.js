function getRevenue(sales) {
  let sumSales = 0;
  for (let index = 0; index < sales.length; index += 1) {
    sumSales += sales[index];
  }
  console.log(sumSales);
  return sumSales;
}

function checkRevenue(sales, plannedRevenue) {
  const res = getRevenue(sales) > plannedRevenue;
  console.log(res);
  return res;
}

// // // examples
getRevenue([25, 40, 10, 58]); // returns ==> 133
checkRevenue([25, 40, 10, 58], 100); // returns ==> true

function reverseArray(arr) {
  for (let index = arr.length - 1; index >= 0; index--) {
    const el = arr[index];
    console.log(el);
  }
}
reverseArray([11, 4, 8, 3]); // ==> [3, 8, 4, 11]
reverseArray([]); // ==> []
reverseArray([100, 50]); // ==> [50, 100]
