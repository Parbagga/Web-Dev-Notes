//A java Script object literal is a name-value pairs wrapped in curly braces

const person = {
    firstName:'Ashish',
    lastName: 'Singh',
    Age: 30,
    email:'nicseducation@gmail.com',
    hobbies: ['coding','reading'],
    address:{
        city:'kullu',
        state:'HP',
    },
    getBirthYear:function(){
        return 1998;//return 2020 - this.age;
    }
}

let val;
val = person;

val=person.firstName;//get specific value
console.log(val);
val=person['firstName'];//another method to do the same

val=person.Age;
val=person.hobbies;
val=person.hobbies[1];
val=person.address.state;
val=person.address['city'];
val=person.getBirthYear;


const people = 
[
    {name:'yash', age:30},
   {name:'Mahesh', age:22},
    {name:'tarun', age:25},
];

for(let i= 0;i<people.length;i++){
    console.log(people[i]);
}


 
