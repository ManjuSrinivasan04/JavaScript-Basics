function addNumber(a,b)
{
    console.log(a+b);
}
addNumber(5,5);

function SubNumber(a,b)
{
    return (a-b);
}
console.log(SubNumber(30,10));

//arrow function
const multiply=(a=1,b=1)=>console.log(a*b);
multiply(30,1);

const divide=(a=1,b=1)=>a/b;
console.log(divide(40,1));

const modulo=a=>a%5;
console.log(modulo(50));

