//loacl and session storage:
//local storage will stay until yiou manually clear it out
//session storage stays until the browser is open

//set local storage item
// localStorage.setItem("name", "ashish"); //screenshot1 shows key = name and value = ashish
// localStorage.setItem("age", "30");

// //set session storage
// sessionStorage.setItem("name", "nics"); //screenshot2 shows key = name and value = nics
// //now restart the browser and check that session storage is not available but local storage is

// //remove from storage
// localStorage.removeItem("name");
// //now local storage will be removed

// //get from  storage

// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name);
// console.log(age);
// //run above code 17-20line after commenting the line number 13 of this file

// //to clear local storage u can also use
// localStorage.clear();
// console.log(name, age);
// //run above code 24-25line after commenting the line number 6 and 7 of this file other wise local storage will reset name and age

// //add task to local storage via form
// //submit event
// document.querySelector("form").addEventListener("submit", function (e) {
//   const task = document.getElementById("task").value; //task imput taken
//   localStorage.setItem("task", task); //name = task value = task variable
//   alert("task saved");
//   e.preventDefault(); //prevent default behaviour
// });

// //click on add task button //screenshot 3
// //if u add another task it will get replaced withh walk the dog so only one task can be added.To prevent this we create and array of tasks and store them as a string

document.querySelector("#task-form").addEventListener("submit", function(e) {
  const task = this.document.getElementById("task").value; //task input taken

  if (this.localStorage.getItem("tasks") === null) {
    //runs if there is nothing in the tasks
    tasks = []; //set tasks = empty array
  } else {
    //if something is on the tasks
    //set tasks = value in it
    tasks = JSON.parse(this.localStorage.getItem("tasks")); //this will be a string so we have t parse it into JSON
  }
  
  tasks.push(task); //add value of tasks to the var in the line no 40
  
  this.localStorage.setItem("tasks", JSON.stringify(tasks)); //to store value in a string array
  this.alert("task saved");
  e.preventDefault(); //stop default behaviour
});

//run code with multiple add task
const tasks = JSON.parse(localStorage.getItem("tasks"));


// tasks.forEach(function (task) {
//   //loop through the tasks
//   console.log(task);
// });
