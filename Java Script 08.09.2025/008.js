let limit = 5;

for (let i = 0; i < limit; i++) {
    console.log(i);
}

//------------------------------------------------------------------

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= limit);

//------------------------------------------------------------------

console.info('while loop');


let k = 1;

while (k <= limit) {
    console.log(k);
    k++;
}

//------------------------------------------------------------------

const arr = [99, 98, 88, 3, 4];
console.log('arr.length:', arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(i , arr[i]);
}

//------------------------------------------------------------------

console.info('for...of loop');
for (const a of arr) {
    console.log(a, arr[a]);
}

//------------------------------------------------------------------

console.info('Skipping steps in loops');
for (let i = 0; i < 10; i++) {
    if (i%2===0) {
        continue;
    }
    console.log(i, 'not skipped');
}

console.info('for objects in loop');
for(const bruno in obj){
    console.log(bruno, obj[bruno]);
}

const obj = {
    name: 'Bruno',
    age: 30,
}

