// // subclasses are synonym for class inheritance

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `helo ${this.firstName} ${this.lastName}`;
  }
  static getMembershipCostPerson() {
    return 500;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); //calls parent constructor;
    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return 1500;
  }
}

// //instance of constructor
// const ashish = new Customer("Ashish", "Singh", "767676", "Regular");

// console.log(ashish);
// console.log(ashish.greeting());
// console.log(Customer.getMembershipCostPerson());
// console.log(Person.getMembershipCostPerson());
// console.log(Customer.getMembershipCost());
// // console.log(Person.getMembershipCost());//XX



var object1 = new emp(1,"ABC");
object1.details();

var object2 = new emp(2,"DEF");
object2.details();


		
var emp = class{
  constructor(id,name){
    this.id = id;
    this.name = name;
  }
  details(){
    document.writeln(this.id + " " + this.name + "<br>");
  }
}




var object3 = new emp(3,"GHI");
object3.details();

var object4 = new emp(4,"JKL");
object4.details();

