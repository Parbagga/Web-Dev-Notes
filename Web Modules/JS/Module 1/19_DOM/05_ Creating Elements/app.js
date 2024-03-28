//creating elements

const li = document.createElement('li'); //created a li element in li variable

// //add class
li.className = 'collection-item';//added a class to li var

// // //add //ID
li.id = 'new-item';///added a id to li variable
console.log(li)


// // //set attribute 
li.setAttribute('title', 'New');//
//  console.log(li);

// // //create text node and appendxx
li.appendChild(document.createTextNode('hxxxello world'));
// console.log(li)

// // //create new link element
const link = document.createElement('a');
console.log(link)

// // //add classes 
link.className = 'delete-Item secondary-content';//added a class to link variable
link.innerHTML = '<i class="fa fa-remove"></i>';

// // //append link to li 
li.appendChild(link);

// // //append li as a child to ul 
document.querySelector('ul.collection').appendChild(li);


