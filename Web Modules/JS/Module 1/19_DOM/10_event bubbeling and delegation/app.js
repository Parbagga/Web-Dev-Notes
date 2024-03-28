//event bubbling(bubbling of an event on an element through its parents upwards)
//event delegation(listener on parent and targeted on the children)

// document.querySelector(".card-title").addEventListener("click", function () {
//   //click on task title
//   console.log(`card-title`);
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   //click on task title
//   console.log(`card-content`);
// });

// document.querySelector(".card").addEventListener("click", function () {
//   //click on task title
//   console.log(`card`);
// });

// document.querySelector(".col").addEventListener("click", function () {
//   //click on task title
//   console.log(`col`);
// });

// //event delegation

const delItem = document.querySelector(".delete-item");

delItem.addEventListener("click", deleteItem);

// document.body.addEventListener("click", deleteItem);
// function deleteItem(e) {

//   if (e.target.className === "fa fa-remove") {
//     console.log("delete item");
//   }
// }

// document.body.addEventListener("click", deleteItem);
function deleteItem(e) {
  if (e.target.parentElement.className === "delete-item secondary-content") {
    console.log("delete item");
  }
}


let num = '100';
console.log(typeof num * 2);
