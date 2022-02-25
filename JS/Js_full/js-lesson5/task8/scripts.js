function sum(from, to) {
  let c = 0;
  for (let index = from; index <= to; index += 1) {
    c = c + index;
  }

  return c;
}
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
    return true;
  } else {
    return false;
  }
}
compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
compareSums(-2, 6, 3, 7);
compareSums(-2, 8, 5, 7);
