//global scope

var a = 1;
let b = 2;
const c = 3;

function test (){
var a = 4;
var b = 5;
const c = 6;
console.log('local scope : ',a,b,c)
}

test();
console.log('Global scope: ' , a,b,c);


if(true){
    var a = 4;
    let b = 5;
    const c = 6;
    comsole.log('block scope :',a,b,c);
}

console.log('GLobal scope; ',a,b,c);//var changes but let and const do not

for (var a = 0; a<10;a++){//try with var and let a
    comsole.log(`loop:${a}`);//template string
}
console.log('Global Scope:',a,b,c);

//let and const have block level scope
//var has function scope