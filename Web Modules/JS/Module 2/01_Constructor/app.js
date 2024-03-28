

// const ashish = {
//     name: "Ashish", 
//     job: "Developer",
//     Age: 32
//     }

 // Person Constructor
// starts with capital letter

//  function Person(){
// // property of a constructor 
// this.name='Asish';
// }


// // instantiate a person object from it via new keyword
//  // variable name = new Person without {}

//  const ashish = new Person();
//  const raj = new Person();
// const pooja = new Person();  
// console.log(raj);
// console.log(ashish);
// console.log(pooja);

 // Person Constructor
// starts with capital letter
 function Person(name, age, dob) { 
       // property of a constructor
this.name=name;
this.age=age;
this.birthday = new Date(dob);
this.calcAge = function(){
      const diff = Date.now() - this.birthday.getTime(); 
      const ageDate= new Date(diff);
       return Math.abs(ageDate.getUTCFullYear()-1970);
}
 }
//  // console.log(this); this inside global scope gives window object 
//  // instantiate a person object from it via new keyword
//  // variable name = new Person without {}

 const ashish = new Person('ashish', 23,'9-10-1981');
 const raj= new Person('raj', 44, '2/4/2000');
 const pooja = new Person('pooja', 43, '4-6-2010');
//  console.log(raj.calcAge());
 console.log(ashish.name);
 console.log(pooja);
 console.log(raj);
