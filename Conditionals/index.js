const x=20;
const y=10;

if(x>10 && y<x)
{
    console.log("hi");
}
if(x==10)
{
    console.log('Ten');
}
if(x===10)
{
    console.log('Ten');
}
else if(x>10)
{
    console.log('Greater than 10');
}
else{
    console.log('Invalid');
}

//ternary operator
const z=20;
const colour=x>10 ? 'red' : 'blue';
console.log(colour);

//switch
switch(colour)
{
    case 'red':
        console.log('Red color');
        break;
    case 'blue':
        console.log("Blue Colour");
        break;
}