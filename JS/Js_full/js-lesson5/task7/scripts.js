function increaser(a, index) {
  if (a > index) {
    a += index;
  } else {
    return a;
  }
  return a;
}
console.log(increaser(5, 2));
