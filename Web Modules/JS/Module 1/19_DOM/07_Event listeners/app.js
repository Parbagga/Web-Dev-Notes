//event listeners

//href should be linked or 
// document.querySelector('.clear-tasks').addEventListener('click',function(){
//     console.log('hello');
// })

// document.querySelector('.clear-tasks').addEventListener('click',function(event){
//     console.log("helo");
//     event.preventDefault();//does not let the button to redirect
// });


// document.querySelector('.clear-tasks').addEventListener('click',onclick);

// function onclick(e){
//     console.log('clicked');
//     let val;
//     val = e;
//     console.log(val);
//     e.preventDefault()
// }

// var btn =document.querySelector('.clear-tasks')

// btn.addEventListener('click',onclick);

// function onclick(e){
//     console.log('clicked');
//     let val;
//     val = e;
//     console.log(val);
//     e.preventDefault()
// }

document.querySelector('.clear-tasks').addEventListener('click',onclick);

function onclick(e){
    console.log('clicked')
    let val;
    val = e;
    
    //event target element
    val = e.target;
    val = e.target.id;//if id is available
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'hello';
    
    //eventtype
    val = e.type;//its is a click event
    
    //time stamp
    val = e.timeStamp;
    
    //oordinates of events relative to the window
    val = e.clientY;
    val = e.clientX;
    
    //oordinates of events relative to its own position
    val = e.offsetY;
    val = e.offsetX;
    console.log(val)
    e.preventDefault()
}

