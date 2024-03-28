//>>>>>>>>>>>Declare Variables<<<<<<<<<<<<<<

let addButton = document.querySelector(".btn-add");
let delButton = document.querySelector(".btn-remove");

let dice2 = document.querySelector("#div-container2");

let dots = document.querySelectorAll(".box");

//>>>>>>>>Event Listener<<<<<<<<<<<<<<<<

addButton.addEventListener("click", () => {
  reset();
  roller();
});

delButton.addEventListener("click", () => {
  reset();
});

///functions <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function roller() {
  const random = Math.floor(Math.random() * 6 + 1);
  console.log(random);
  for (i = 0; i < random; i++) {
    dots[i].classList.add("square");
    dots[i].textContent = random;
  }
}

function reset() {
  for (i = 0; i < dots.length; i++) {
    if ((dots[i].classList = "square")) {
      dots[i].classList.remove("square");
      dots[i].textContent = "";
    }
  }
}

create();

function create() {
  for (i = 0; i <= 6; i++) {
    let dot2 = document.createElement("div");
    dot2.classList.add("square");
    dice2.appendChild(dot2);
  }
}

function del(){
  
}


