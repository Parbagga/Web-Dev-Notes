// Each object in javascript has a prototype and prototype itself is an object 2//all objects inherit their methods and properties from their prototype
// Object.prototype

// Person.prototype
// prototype Chain

function Person(firstName, lastName, dob){
    
    // property of a constructor 
    this.firstName=firstName;
    this.lastName=lastName;
     this.birthday = new Date(dob); 

// this.calcAge = function(){
// const diff= Date.now() - this.birthday.getTime();
// const ageDate = new Date(diff);
// return Math.abs(ageDate.getUTCFullYear()-1970)
// }
}


const ashish = new Person('Ashish', 'Singh', '6-12-1989');
// const ravi = new Person('Ravi', 'Sharma', 'March 20 1990') ;
console.log(ashish);


//there is a prototype attched to it 
//prototype can not be accessed through a for loop
//The browser gives us a pseudo property proto
//it represents person.prototype anythig put inside person.prototype will show in here
 //another prototype inside person.prototype_proto represents Object.prototype its the top of the chain and has its own properties
 // in the person constructor there a re three properties name lastname and dob
 // calcAge is same for every person instance so it should be put inside of a prototype and not directly
//  into the object os that it does not get flooded with functions

 Person.prototype.calculateAge = function(){
 const diff = Date.now()- this. birthday.getTime();
 const ageDate = new Date(diff);
return Math. abs (ageDate.getUTCFullYear()-1970);

}


//  // get full name
 Person.prototype.getFullName = function(){
    return `${this. firstName} ${this. lastName}`;

}


// // Gets a job
Person.prototype.getsAJob= function(designation){
 this. designation = designation;
 return `${designation} ${this.firstName} ${this.lastName}`;
}

// // it will work normally as before 
console.log(ashish. calculateAge()); 
console.log(ashish. getFullName());
console.log(ashish.getsAJob('Er.'));

//  //// Object.prototype hasOwnProperty:

 console.log(ashish.hasOwnProperty('firstName'));
 console.log(ashish.hasOwnProperty( 'get FullName'));
