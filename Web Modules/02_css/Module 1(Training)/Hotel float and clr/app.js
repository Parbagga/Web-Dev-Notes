let menu_btn = document.querySelector(".hamburger")
let menuBar = document.querySelector(".mobile-view")
let showcase = document.querySelector(".showcase")
let home = document.querySelectorAll(".home");
let aboutBtn = document.querySelector(".about");



function homebar(){
   showcase.classList.remove("not-active")
   aboutBtn.classList.add("not-active")
}

function about(){
   showcase.classList.add("not-active")
   aboutBtn.classList.remove("not-active")
}

menu_btn.addEventListener("click",function (){
   menu_btn.classList.toggle("is-active");
   menuBar.classList.toggle("is-active");
   
  
})


