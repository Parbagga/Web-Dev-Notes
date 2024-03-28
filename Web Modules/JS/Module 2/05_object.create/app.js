//another way to create object with object.create and create prototype
//  inside parent object and different prototypes with different prototype
//  methods and properties


 const personPrototypes = {
    greeting: function(){
        return `helo ${this.designation} ${this. firstName} ${this.lastName}`;
    },
    getsAJob: function (newDesignation) {
        this. designation = newDesignation;
    }
}
const ashish = Object.create (personPrototypes);

ashish.firstName = 'Ashish';
ashish.lastName = 'Singh';
ashish.age = 34;
ashish.getsAJob('Er');

console.log(ashish);
console.log(ashish.greeting());

const raj = Object.create(personPrototypes,{ 
    designation: {value:''},
    firstName: {value: 'Raj'},
     lastName: {value: 'Sharma'}, 
     age: {value:30}
 });


 console.log(raj);
console.log(raj.greeting());
