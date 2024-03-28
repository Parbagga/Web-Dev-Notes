let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = list;
console.log(val);

val = listItem;

//get child notes

val = list.childNodes; //list has UL here li from UL will be collected and the text in the output
//reffers to the <br>

val = list.childNodes[0]; //gives out text nodes'
val = list.childNodes[0].nodeName; //gives out text nodes'
val = list.childNodes[0].nodeType; //gives out text nodes'
console.log(val);

//child nodes give all different kinds of nodes just elements

//1-elements
//2-attibutes
//3-text-nodes
//8-comment
//9-document itself
//10-doctype

//get Children elements

val = list.children;
val = list.children[1];

//children of children
list.children[3].children[0].id = "test-link";
console.log(val);
val = list.children[3].children;

val = list.firstChild; //gives first node weather ealement or node
val = list.firstElementChild; //gives first element
val = list.lastChild; //gives first node weather element or node
val = list.lastElementChild; //gives fiest element
val = list.childElementCount; //total list elements

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling; //gives out text node
val = listItem.nextElementSibling.nextElementSibling;

val = listItem.previousSibling; //give sout text node
//get previous sibling
val = listItem.previousElementSibling; //no previous sibling as it is a first item
console.log(val);

console.log(val);
