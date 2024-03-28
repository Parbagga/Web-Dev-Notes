//Mouse events

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//click
// clearBtn.addEventListener('click',runEvent);

// //double click
// clearBtn.addEventListener("dbclick", runEvent);

// //mouse down
// clearBtn.addEventListener("mousedown", runEvent);

// //mouse up
// clearBtn.addEventListener("mouseup", runEvent);

// //mouse enter
// clearBtn.addEventListener("mouseenter", runEvent);

// //mouse leave
// clearBtn.addEventListener("mouseleave", runEvent);

// //mouseover and mouseout also work with child elements where as mouseleave and mouseeneter work with main event

// //mouse over
// card.addEventListener("mouseover", runEvent);

// //mouse out
// card.addEventListener("mouseout", runEvent);

// //mouse move
card.addEventListener("mousemove", runEvent);

//event handler
//e is the ebent object

function runEvent(e) {
  console.log(`Event TYPE: ${e.type}`); //template strings

  heading.textContent = `MouseX : ${e.offsetX} MouseY:${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
  e.preventDefault()
}
