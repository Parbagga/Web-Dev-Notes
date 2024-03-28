
// Arrow Functions
const greeting = function(){ 
    console.log('Hello');
}
greeting();

//arrow function
const greeting1 = ( )=>{
console.log('Hello');
}

//single line syntax
const greeting3 = () => console.log('helo')
greeting3();

//single line syntax with return
const greeting4 = () => 'helo';
console.log(greeting4());

//object literals: gives undefined because it looks at () as function body and not as object
//So we wrap it around ()

const greeting5 = () => ({msg: 'helo'})
console.log(greeting5());

//parameters: single parameters dont need ()
const greeting6 = name => console.log( `helo ${name}`);
greeting6('Ashish');

const greeting7 = (firstName, lastName) => console.log(`Helo ${firstName} ${lastName}`) 
greeting7('Ashish', 'Singh')

const students = ['Raj', 'Pankaj', 'Udhav'];
const nameLengths = students.map((name)=>{
    return name;
});

//sntax change
const nameLengths1 = students. map (name => name)
console.log(nameLengths1);