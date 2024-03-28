//loops iteration 

for (var i = 0; i<10;i++){
    if(i===2){
        console.log('2 is my fav number ');
        continue;
    }
    else if(i === 5){
        console.log('stop the loop');
        break;
    }

    console.log('number' + i )
}

//while loop

 i = 0 ;

while(i < 0){
    console.log('number' + i);
    i++;
}


//do while loops//

let j = 0;

do{
    console.log( 'nunber' + j);
    j++;
}
while(j<10);

//loop through array//

const cars = ['ford', 'kia','honda','toyota','nissan']

for(let i = 0; i <cars.length; i++){
    console.log(cars[i]);
} 

// for each array loop // 

cars.forEach(function(car){
    document.write(car + "   ")

});

//for each array loop//
cars.forEach(function(car,index){//iterator and index
    console.log(`${index}:${car}`);//template string
});

//for each array loop//
cars.forEach(function(car,index,array){//iterator and index and array
    console.log(`${index}:${car}`);//template string
    console.log(array);
});


//map//
//array of object of users//

const users = [
    {id:1, name:'Krishna'},
    {id:2, name:'Shiva'},
    {id:3, name:'adi'},
    {id:4, name:'vishnu'}
]

const ids = users.map(function(user){
    return user.id; //return user.name;
});
console.log(ids);

//for in loops 

const member = {
    firstName : 'kanha',
    lastName: 'gopal',
    age:30
}

for(let x in member){
    console.log(`${x}: ${member[x]}`);
}