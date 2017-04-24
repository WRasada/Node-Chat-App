const moment = require('moment');

// let date = new Date();
// console.log(date.getMonth());

let date = moment();

console.log(date.format('MMM Do, YYYY'));

let time = moment();

console.log(time.format('h:mm a'))
