// function printArray(arr) {
//   for (let index = 0; index < arr.length; index += 1) {
//     const el = arr[index];
//     console.log(el);
//   }
// }
// printArray(['andrey', 'ivan', 3, 2]);
function sendEmail(userName) {
  console.log('Gromcode party invitation was sent to ' + userName + '!');
}

function sendEmailList(userNames) {
  for (let index = 0; index < userNames.length; index += 1) {
    sendEmail(userNames[index]);
  }
}

sendEmailList(['vasya', 'igor', 'sveta', 'dart veider', 'santa claus', 'egor']);
