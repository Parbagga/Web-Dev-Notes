const firstName = "Ashish";
const lastName = "Singh";
const age = 23;
const Str = "Hello World! my name is Ashish";
const tag= "Web development, garaphic design,programming";

let val;

//Concatenation
val = firstName + ' ' + lastName;

//append

val = 'rohit'
val+= 'sood';

val = 'Hello my name is'+ firstName+' and i am '+ age;

val = firstName.concat('',lastName);

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];//2

//indexof()

val = firstName.indexOf('h');  //position of h 
val = firstName.lastIndexOf('h');//position of h in reverse

//chartAt()

val = firstName.charAt('2'); //ch

//get last char

val = firstName.charAt(firstName.length -1 );


//substring

val = firstName.substring(1,4);

//slice

val = firstName.slice(0,3);
val = firstName.slice(-3);//last 3

//split
val = Str.split(' ')
val = tag.split(',')//split by ,


//replace 

val = Str.replace ('Ashish', 'NICS');

//includes

val = Str.includes("Hello"); //checks if element is present in a string or not
console.log(val)


console.log(val);

