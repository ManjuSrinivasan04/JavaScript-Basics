//Arrays
const num=new Array(1,2,3,4,5);//constructing an array
console.log(num);

const fruits=['apples','oranges','mangoes'];
console.log(fruits);

//multiple datatypes
const count=['apples','jackfruits',100,200,null];
console.log(count);
console.log(count[2]);
count[5]=10;
count.push('Kiwi');//end
count.unshift('Pineeapple');//begining
count.pop();//delete last element
console.log(Array.isArray(count));//check array
console.log(count);

console.log(Array.isArray('apples'));
console.log(count.indexOf('apples'));
console.log(count);