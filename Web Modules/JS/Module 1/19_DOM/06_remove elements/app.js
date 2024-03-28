//replace elements

//create elements
const newHeading = document.createElement("h2");
console.log(newHeading);

//add id
newHeading.id = "task-title";
console.log(newHeading);

//add new text node
newHeading.appendChild(document.createTextNode("jhg"));
console.log(newHeading);

//get the old new Heading
const oldHeading = document.getElementById("task-title");

//parent
const cardAction = document.querySelector(".card-action");
console.log(cardAction);

//replace
// cardAction.replaceChild(newHeading, oldHeading);
console.log(newHeading);

// //remove elements
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// //remove list elements
// lis[0].remove();

// //remove child elements
// list.removeChild(lis[3]);

// //classes and attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;
val = link.className; //selects class name of the link variable contnet
val = link.classList; //list of classes in that item
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
// val = link;
console.log(val);

// //attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title","title");
val = link.hasAttribute("title");
link.removeAttribute("title");
// val = link;
console.log(val);
