// define UI vars
const form = document.querySelector("#task-form"); // form in Html
const taskList = document.querySelector(".collection"); //ul element is targetting 
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");// input of search box
const taskInput = document.querySelector("#task"); //input or add task boxx 

loadEventListeners(); //will load all event listeners on 1st loading of web page



function loadEventListeners() {
  document.addEventListener('DOMContentLoaded',getTasks());
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
}



// get Tasks

function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // cleate Li elements
  const li = document.createElement("li");

  // add a class
  li.className = "collection-item";

  // // create text node and append to li

  li.appendChild(document.createTextNode(task));

  // // create a new li element
  const link = document.createElement("a");

  // add class
  link.className = "delete-item secondary-content";

  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // append the link to li
  li.appendChild(link);

  // append li  to UL
  taskList.appendChild(li);


  })
  

}

// function to add Task  after clicking submit button
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }

  // cleate Li elements
  const li = document.createElement("li");

  // add a class
  li.className = "collection-item";

  // // create text node and append to li

  li.appendChild(document.createTextNode(taskInput.value));

  // // create a link variable also create a anchor tag and assign it to link 
  const link = document.createElement("a");

  // add materialize class to anchor tag 
  link.className = "delete-item secondary-content";

  // create icon inside >>a<<  element with html 
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // append  the link with anchor element  to created  list(li)
  li.appendChild(link);

  // append the creadted list element   to UL element
  taskList.appendChild(li);

  //store task in Local storage
  storeTaskInLocalStorge(taskInput.value)

  //clearing input value after clicking submit button
  taskInput.value = '';

  // prevent website from reloading after clicking Submit
  e.preventDefault();
}


// function to remove the  created list item on clicking the icon 
function removeTask(e) {

  // if the parent element of the targetted element contains the class "delete-item" 
  if (e.target.parentElement.classList.contains("delete-item")) {

    // will pop-up the confirmation to delete item
    if (confirm("Are You Sure?")) {

      // will remove the parent element of the remove icon  (even-bubbeling)
      e.target.parentElement.parentElement.remove();

      // will also  remove it from from Local Storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}


// clearing the inner Html from UL tag in HTML
function clearTasks() {
  taskList.innerHTML = '';
  localStorage.clear();

}



// filter the input values with matching the  added tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  // query selectores all returns node not like class or id selectors
  // which return html elements

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = " block"; //if matched it will show
    } else {
      task.style.display = " none"; //else hidden
    }
  });
}



// store task

function storeTaskInLocalStorge(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}



//remove from Local Storage

function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}