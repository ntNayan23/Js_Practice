/*
const variable is use to set constant variable which can not be updated afterward
let varaible value can be change time to time 
let and var variable are same but  always prefer not to use var because of isse in block scope and functional scope

*/


const accountId = 144553
let accountEmail = "nayanthakre379@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// agar js k anadar aap variable declear kr k chod dete hai or usko phir koi value nh dete toh js usko undefiend bante hai 
let accountState;
// accountId = 5 // not allowed 

accountEmail = "hc@hc.com"
accountPassword = "5824"
accountCity = "nagpur"

console.log(accountId);
// console.table() multiple variable to print krne k liye use kr sakte hai , or sab variable square bracket [] k andar lekhne hoge,
// out me ek table k formate me ayega  
console.table([accountId,accountEmail,accountPassword, accountCity, accountState]) 
