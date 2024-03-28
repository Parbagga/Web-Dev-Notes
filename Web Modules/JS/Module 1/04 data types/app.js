// id statements 
// Equal


const id = '100';

if(id == 100){
    console.log('correct')
}else{
    console.log('incorrect')
}


// not equal 


if(id !== 99){
    console.log('correct')
}else{
    console.log('incorrect')
}

// equal to and value type 

const id2 = '100';

if(id2 === 100){
    console.log('correct')
}else{
    console.log('incorrect')
}



// ==============

const id3 = '100';

if(id3){
    console.log(`the id is ${id3}`)
}else{
    console.log('no id defined')
}

// -----------------------

const color = 'grey';

if(color==="red"){
    console.log(`Color is red`)
}else if (color==="blue"){
    console.log('color is blue')
}
else{
    console.log('the color is not red and blue')
}


//logical operators

const name = 'raj';
const age = 5;

 if (age >=0 && age <10){
    console.log(`${name } is toddler`)
 } else if(age >= 13 && age <=19){
    console.log(`${name} is teenager`)
 }else{
    console.log(`${name} is an adult`)
 }


 // ternary operator

 console.log(id===100 ? 'correct': 'incorrect')



//   data  types 
// primitive data type:
//stored directly in the location the varibale access
//stored on a stack

// refrence data type:
// accessed by referace
//objects that are stored on a heap
// a pointer to a location in memory

// primitive: strings,number ,boolean,null,undefined,symbols ES6
// reference data types: Arrays,object literals, functions,dates

// JS is a dynamically type Language: 
//1> types a are associated with values not variable
//2>the  same variable can hold multiple types

//3 not needed to specify types 
//there are supersets of javascript and addons that allow static typing

// primitive

const name2 = "NICS";
console.log(typeof name2);


const age2 = 47;
console.log(typeof age);

const job =true;
console.log(typeof job);

const car = null;
console.log(typeof car);//types of object is a //BUG


let chk;
console.log(typeof chk);

const sym = Symbol();
console.log(typeof Sym)


// Reference types 

const hobbies = ['coding','movies']
console.log(typeof hobbies)

const address = {
    city:'kullu',
    state:"hp"
}
console.log(typeof address)

const today =  new Date();
console.log(today)
console.log(typeof today)