//better way to print stuffs
const serverName = "Aternos";
const userName = "Ace_13";
const emailId = "abhyanshuab05@gmail.com";
let timesCreated = 156;
let isLoggedin = true;

// console.log(`The server is currently running with the name ${serverName} 
// and the user ${userName} with the email Id ${emailId} is logged in -> ${isLoggedin}.
// This server has opened for ${timesCreated} times`);

let str = "The server is currently running with the name"
let arstr = str.split(' ');
// console.log(str);
// console.log(arstr);

console.log(Math.random()); // returns values betw 0 and 1
console.log((Math.random() * 10)); // you can do any kind of operations reg. this

let min = 10;
let max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // best formula for random values
// must remember this masterpiece**