function Person(fisrtname,lastname,dob)
{
    this.fisrtname=fisrtname;
    this.lastname=lastname;
    this.dob=new Date(dob);
    this.getBirthDay=function()
    {
        return this.dob.getFullYear();
    }
    this.getName=function()
    {
        return `${this.fisrtname} ${this.lastname}`;
    }
    Person.prototype.getName=function(){
        return `${this.fisrtname} ${this.lastname}`;
    }
}

const info=new Person('Manju','S','11-08-2020');
console.log(info);

const info1=new Person('Sita','K','02-04-2018');
console.log(info1.dob);

console.log(info.getBirthDay());
console.log(info.getName());

console.log(info1.getName());

class PerSon
{
    constructor(fisrtname,lastname,dob) 
    {
         this.fisrtname=fisrtname;
         this.lastname=lastname;
         this.dob=new Date(dob);
    }
    getBirthDay(){
        return this.dob.getFullYear();

    }
    getName()
    {
        return `${this.fisrtname} ${this.lastname}`;

    }
}


const info11=new PerSon('Manju','S','11-08-2020');
console.log(info11);

const info12=new PerSon('Sita','K','02-04-2018');
console.log(info12.dob);