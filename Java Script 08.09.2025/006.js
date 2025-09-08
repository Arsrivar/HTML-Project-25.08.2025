console.info('Primitives and Constants');

const num = 0;
//num = 1;
//num = '0'; // TypeError: Assignment to constant variable.
console.log(num);

const bool = false;
//bool = true;
console.log(bool);

let str="Hello";
str = "World";
console.log(str);   

const arr =[0,1,2,3,4];
console.log(arr);
arr[0]=5; // we can change the content of the array
arr[1]='yo';
arr =[true, false]; // TypeError: Assignment to constant variable.