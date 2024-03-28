const container = document.querySelector(".container");
const count = document.getElementById("count");
const total = document.querySelector("#total");
const moviePrice = document.querySelector("#movie");

let ticketPrice = +moviePrice.value;

function updateCount() {
  const selectSeat = document.querySelectorAll(
    ".row .seat:not(occupied).selected"
  );
  const seatCount = selectSeat.length;
  console.log(seatCount);

  count.textContent = seatCount;
  total.textContent = seatCount * ticketPrice;
}

//seat select event

container.addEventListener("click", function (e) {
  e.target.classList.contains("seat") &&
  !e.target.classList.contains("occupied")
    ? e.target.classList.toggle("selected")
    : false;

  updateCount();
});

// movie price select

moviePrice.addEventListener("change", function (e) {
  ticketPrice = +e.target.value;
  console.log(ticketPrice);

  updateCount();
});
