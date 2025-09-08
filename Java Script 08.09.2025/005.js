let num = 5;
console.log(num);
console.info(typeof num); // number

num=false;
console.log(num);
console.info(typeof num); // boolean
num = '0';
console.log(num);
console.info(typeof num); // string

let bool=false;
console.info('typeof bool-->', typeof bool); // boolean
bool=0;
console.info('typeof bool-->', typeof bool); // number
let str="Hello";
console.log('typeof str-->', typeof str); // string


let arr = [5,'1',true,3];
console.log('typeof arr-->', typeof arr); // object
console.log(arr);

let obj ={ 
    name: 'Pikachu',    
    age: 8
}

console.log('typeof obj-->', typeof obj); // object
console.log('obj.age-->', obj.age); // 8
console.log('typeof obj.age-->', typeof obj.age); // number

console.log('obj.name-->', obj['name']); // Pikachu
console.log('typeof obj.name-->', typeof obj['name']); // string

console.log(obj.name, obj.age); // Pikachu 8
console.log(obj);