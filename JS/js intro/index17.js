function getAbbreviation(str) {
  let strArr = str.split(' ');

  for (let index = 0; index < strArr.length; index++) {
    strArr[index] = strArr[index].split('');
    if (strArr[index].length > 2) {
      strArr[index] = strArr[index].slice(0, 1);
    } else {
      strArr[index] = [];
    }
  }

  strArr = strArr.join('');
  strArr = strArr.toUpperCase();

  return strArr;
}

// examples
console.log(getAbbreviation('some company name')); // ===> SCN
console.log(getAbbreviation('Union of Soviet Socialist Republics')); // ===> USSR
console.log(getAbbreviation('runners club of Kyiv')); // ===> US

//////////////////////////////////////////////
/**
 * @param {string} str
 * @return {string}
 */
function camelCase(str) {
  let strArr = str.split(' ');
  let strFin = '';
  let test = [];
  let rez = [];

  for (let index = 0; index < 1; index++) {
    rez = strArr[index];
  }
  for (let index = 1; index < strArr.length; index++) {
    test = strArr[index];

    strFin = test[0].toUpperCase();

    strFin += strArr[index].slice(1);

    rez += strFin;
  }

  return rez;
}
// examples
console.log(camelCase('some function name')); // ===> someFunctionName
console.log(camelCase('get message')); // ===> getMessage
console.log(camelCase('render tasks list')); // ===> renderTasksList

///////////////////////////////

/**
 * @param {object} obj
 * @return {string[]}
 */
function getKeys(obj) {
  const keys = Object.keys(obj);
  return keys;
}
// put your code here

console.log(getKeys(product));
/**
 * @param {object} obj
 * @return {array}
 */
function getValues(obj) {
  const values = Object.values(obj);
  return values;
}
// put your code here

console.log(getValues(product));
// console.log(product);
// const productName = product.name;
// const storeAdress = product.storeAdress;
// console.log(storeAdress);
// console.log(productName);

// product.deliveryOptions = ['Укр Почта','Новая почта', 'Самовывоз'];
// console.log(product)
////////////////////////////////////////////////////

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

///////////////////////////////////

('use strict');

/**
 * @param {object[]} players
 * @return {object[]}
 */
function getGoalsStat(players) {
  let res = [];
  // let val = [];
  let test = {};

  for (let index = 0; index < players.length; index++) {
    let arr = players[index];
    let obj = {};

    // val = Object.values(arr);
    // for (let key in arr) {
    obj.name = arr['name'];
    obj.team = arr['team'];
    obj.goals = arr['goals'];
    // }
    res.push(obj);
  }

  //mas = Object.values(arr);
  return res;
  // res.unshift(obj);
}

// examples
const players = [
  {
    name: 'Jason Mount',
    birthdate: '19.12.1993',
    country: 'Deutschland',
    number: '21',
    team: 'Manchester United',
    position: 'MF',
    goals: 4,
  },
  {
    name: 'Jason Mount',
    birthdate: '01.01.2001',
    country: 'Deutschland',
    number: '16',
    team: 'Manchester United',
    position: 'MF',
    goals: 0,
  },
  {
    name: 'Finne Bard',
    birthdate: '13.02.1995',
    country: 'Norwegen',
    number: '26',
    position: 'FW',
    team: 'Fulham United',
    goals: 1,
  },
  {
    name: 'Gerhardt Yannick',
    birthdate: '13.03.1994',
    country: 'Deutschland',
    number: 31,
    position: 'MF',
    team: 'Liverpool',
    goals: 8,
  },
];

console.log(getGoalsStat(players));
// ===>
// [
//   { name: 'Jason Mount', team: 'Manchester United', goals: 4 },
//   { name: 'Jason Mount, team: 'Manchester United', goals: 0 },
//   { name: 'Finne Bard', team: 'Fulham United', goals: 1 },
//   { name: 'Gerhardt Yannick', team: 'Liverpool', goals: 8 },
// ];

//////////////////////////////////////////////////

('use strict');

/**
 * @param {object[]} users
 * @return {object}
 */
function usersCountByCity(users) {
  let obj = {};
  let arr = [];
  let x = 0;

  //let y = 0;
  // let y = 0;
  // let z = 0;

  // for (let index = 0; index < users.length; index++) {
  //   arr = users[index];

  for (let key in users) {
    if (key === 'city') {
      if (arr[key] === obj[`${arr[key]}`]) {
        //let test = key
        x++;
      }

      obj[`${arr[key]}`] = x;
    }
    // if (arr[key] === 'Lviv') {
    //   y++;
    //   obj.Lviv = y;
    // }
    // if (arr[key] === 'Odesa') {
    //   z++;
    //   obj.Odesa = z;
    // }
  }

  return obj;
}

//     }

//     obj.Lviv =
//     obj.Odessa =
//  }

// examples
const users = [
  {
    id: 888,
    name: 'Denis',
    age: 44,
    city: 'Kyiv',
  },
  {
    id: 333,
    name: 'Alex',
    age: 33,
    city: 'Lviv',
  },
  {
    id: 392,
    name: 'Nastya',
    age: 22,
    city: 'Kyiv',
  },
  {
    id: 123,
    name: 'Violetta',
    age: 15,
    city: 'Odesa',
  },
  {
    id: 640,
    name: 'Mykola',
    age: 31,
    city: 'Lviv',
  },
  { id: 888, name: 'Denis', age: 44, city: 'Toronto' },
];

console.log(usersCountByCity(users)); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }
