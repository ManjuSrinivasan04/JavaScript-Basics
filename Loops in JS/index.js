//for
for(let i=0;i<=10;i++)
{
    console.log(i);
    console.log(`Number: ${i}`);
}
//while
let i=0;
while(i<=10)
{
    console.log(`While Loop NUmber: ${i}`);
    i++;
}


const todos = [
    
    {
        id:1,
        text : 'Moving to bus',
        isCompleted : true
    },
    {
        id:2,
        text :'Moving to car',
        isCompleted:true
    },
    {
        id:3,
        text:'Meeting',
        isCompleted:false
    }
];
console.log(todos);

for(let i=0;i<todos.length;i++)
{
    console.log(todos[i].text);
}

for(let todo of todos)
{
    console.log(todo.id);
}

todos.forEach(function(todo)
{
    console.log(todo.text);
});

const todoText=todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoComplete=todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
});
console.log(todoComplete);


