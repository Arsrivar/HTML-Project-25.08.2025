let num = 0;
num='0';
num=false;
console.info(typeof num); // boolean
let num2=false;
console.log('num==false ::', num==num2); // true
console.log('num===false ::', num===num2); // false
console.log(num === false); 
console.log(num === true);

console.log(num);
console.log(num != true); // true
console.log(num !== true); // true

num = 0;
console.info(typeof num); // number
console.log('num==0 ::', num==0); // true
console.log('num===0 ::', num===0); // true
console.log('num != 0 ::', num != 0); // false
console.log('num !== 0 ::', num !== 0); // false

let str ='hello';
console.log('str == "hello" ::', str == "hello"); // true
const str2 ='Hello';
console.log('str == "Hello" ::', str == str2); // false

let username = 'Bruno';
let CONDITION1 = username === 'Bruno';
let CONDITION2 = username === 'Alice';

if(CONDITION1){
    console.log('CONDITION1 is true');
}else if(CONDITION2){
    console.log('CONDITION2 is true');
}else{
    console.log('none is true');
}