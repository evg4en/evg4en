const user = {
  id: 1001,
  name: 'oleg',
  age: 100,
};

const res = {};

function copyObj(obj) {
  const res = {};
  for (const key in obj) {
    res[key] = obj[key];
  }
  return res;
}

const copyedObj = copyObj(user);
copyedObj.testField = 'test';
console.log(copyedObj);
console.log(user);
