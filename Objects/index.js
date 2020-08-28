const human={
    name:'John',
    age:12,
    hobbies:['MUSIC','SPORTS','MOVIES'],
    address:{
        street:'77 main street',
        city:'covai',
        state:'TN',
    }
}
console.log(human);
console.log(human.address);
console.log(human.age,human.hobbies[1]);

const {name,age,address:{city}}=human;
console.log(city);


human.email='manju@nextazy.com';
console.log(human);

//object and arrays

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
console.log(todos[1].text);
console.log(todos[2].isCompleted);

//converting to JSON

const todosJSON=JSON.stringify(todos);
console.log(todosJSON);
