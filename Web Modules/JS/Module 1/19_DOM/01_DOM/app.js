//DOM
//attach the index.html provided By NICS institute with DOM Projects
//DOM - Document Object Model - is the structured representation of an HTML document | similar to a tree of nodes/elements created by the browser
//JavaScript can be used to manipulate ie. read/write to the DOM 
//Dom is the ibject oriented representation | each node has its own set of properties and 
//methods we can change and remove | browser gives us a window object and inside it we have document object | we have a root element and other tags under it. We have libraries like Jquery to manipulate DOM easily but its better to learb Vanilla JS as it is loaded with tools to do so 

//Document object has a lot of methods and properties attached to it 

let val;

val = document;//gives us entire document object
val = document.all;//gives out all tags in a collection (similar to array)
val = document.all[4];//try 0 1 2 3 4
val = document.all.length;//lenght property counts total elements in the DOM
val = document.head;//access individual element
val = document.body;//
val = document.doctype;//
val = document.domain;//
val = document.URL;//
val = document.characterSet;//
val = document.contentType;//
//forms
val = document.forms;//html collection of indexed forms (we have only 1 form here)
val = document.forms[0];//1st element in form of collection
val = document.forms[0].id;//1st ID in forms
val = document.forms[0].method;//1st method in forms
val = document.forms[0].action;//if action is present eg (action = 'index.php)

//links
val = document.links;//
val = document.links[0];//
val = document.links[0].id;//
val = document.links[0].className;//
val = document.links[0].classList[1];//


val = document.images;//[empty box for no images]
val = document.scripts//shows all scripts
val = document.scripts[0].getAttribute('src');

console.log(val);

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);//scripts in an array

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));//sotce attribute
});