//keyboard inputs

const form = document.querySelector('form');
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = '';
// form.addEventListener('submit',runEvent);

//keydown
// taskInput.addEventListener('keydown',runEvent);

// //keydoup
// taskInput.addEventListener('keyup',runEvent);

// //keypress
// taskInput.addEventListener('keypress',runEvent);

// //focus
// taskInput.addEventListener('focus',runEvent);//click inside of an event

// //blur
// taskInput.addEventListener('blur',runEvent);//click outside of an event

// //cut
// taskInput.addEventListener('cut',runEvent);//ctrl + x

// //paste

// //input
taskInput.addEventListener('input',runEvent);//any input event

// //change
// taskInput.addEventListener('change',runEvent);//diable materialize/0.100.2/css/materialize.min.css from index file and thne change select tag

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);

  heading.innerText = e.target.value;


  //get input value
  // console.log(taskInput.value);
  e.preventDefault(); //prevents the action location in the form to get activated
}











