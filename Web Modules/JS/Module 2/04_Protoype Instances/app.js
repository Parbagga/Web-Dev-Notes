
 // person constructor

function Person (firstName, lastName){
     this.firstName = firstName;
 this.lastName = lastName;
}

//greeting
Person.prototype.greeting = function(){
    return `Helo there ${this.firstName} ${this.lastName}`;
}


 // instance of person
 const person1 = new Person ('Ashish', 'Singh');

console.log(person1.greeting());


// customer constructor
 function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;

 } 

 // inherit person prototype methods
Customer.prototype = Object.create(Person.prototype);

// make customer.prototype return customer,
Customer.prototype.constructor = Customer;

 // customer greeting
 Customer.prototype.greeting = function(){
 return ` Helo there ${this.firstName} ${this.lastName} welcome to our comapny`;
}

// customer instance
const customer1 = new Customer('Raj', 'sharma', '879987878', 'standard');


console.log(customer1);
console.log(customer1.greeting());
