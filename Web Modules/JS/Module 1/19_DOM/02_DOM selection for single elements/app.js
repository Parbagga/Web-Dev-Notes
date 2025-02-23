//document.getElementById()

console.log(document.getElementById('task-title'));

//get things form elements

console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById('task-title');

//change styling

taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";

// taskTitle.style.display = 'none';

//change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Tasks ";
taskTitle.innerHTML = '<span style = "color:red"> Task List </span>'; //insert text

//document.querySelector(); //selection by anything not just id -- single elements selector

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "blue";

// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "yellow";
// document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";
